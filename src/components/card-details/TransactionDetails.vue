<template>
  <div class="transaction-list">
    <!-- Loading state -->
    <div v-if="isLoading" class="transaction-loading">
      <div class="spinner-border spinner-border-sm text-primary">
        <span class="visually-hidden">Loading...</span>
      </div>
      <span class="ms-2">Loading transactions...</span>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>

    <!-- Empty state -->
    <div v-else-if="transactions.length === 0" class="transaction-empty">
      <i class="bi bi-credit-card text-muted"></i>
      <p>No transactions found</p>
    </div>

    <!-- Transactions list -->
    <div v-else>
      <div class="transaction-items-container">
        <div
          v-for="transaction in transactions"
          :key="transaction.id"
          class="transaction-item d-flex justify-content-between"
        >
          <div class="d-flex align-items-start gap-3">
            <div
            class="transaction-icon"
            :class="getCategoryClass(transaction.category)"
          >
            <img
              :src="`src/assets/${getCategoryIcon(transaction.category)}.svg`"
              alt="category icon"
            />
          </div>
          <div class="transaction-details">
            <div class="merchant mb-1">{{ transaction.merchant }}</div>
            <div class="date">{{ transaction.date }}</div>
            <div class="transaction-description d-flex align-items-center gap-2">
              <div class="transaction-description-icon">
                <img src="../../assets/finance.svg" alt="credit-card" />
              </div>
              <span class="transaction-description-text">{{ transaction.description }}</span>
            </div>
          </div>
          </div>
          <div
            class="transaction-amount d-flex align-items-center"
            :class="{
              positive: transaction.amount > 0,
              negative: transaction.amount < 0,
            }"
          >
            {{ transaction.amount > 0 ? "+" : "-" }} {{ getCurrencySymbol() }}
            {{ Math.abs(transaction.amount) }}
            <img src="../../assets/arrow-right.svg" alt="arrow-right" class="arrow-right" />
          </div>
        </div>
      </div>
      <div class="view-all-transactions d-flex align-items-center justify-content-center">
        View all card transactions
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "TransactionDetails",

  setup() {
    const store = useStore();

    const transactions = computed(
      () => store.getters["transactions/allTransactions"]
    );
    const isLoading = computed(() => store.getters["transactions/isLoading"]);
    const error = computed(() => store.getters["transactions/error"]);
    const activeCard = computed(() => store.getters["cards/activeCard"]);

    const getCategoryIcon = (category: string): string => {
      const icons: Record<string, string> = {
        shopping: "bag",
        travel: "airplane",
        food: "cup-hot",
        entertainment: "film",
        marketing: "megaphone",
        utilities: "lightning",
        transport: "car-front",
      };

      return icons[category] || "credit-card";
    };

    const getCategoryClass = (category: string): string => {
      return `category-${category}`;
    };

    const getCurrencySymbol = (): string => {
      return activeCard.value?.currency || "S$";
    };

    return {
      transactions,
      isLoading,
      error,
      activeCard,
      getCategoryIcon,
      getCategoryClass,
      getCurrencySymbol,
    };
  },
});
</script>
