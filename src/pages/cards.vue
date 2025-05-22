<template>
  <div class="page-wrapper">
    <!-- Loading state -->
    <div
      v-if="isLoading"
      class="d-flex justify-content-center align-items-center h-100"
    >
      <div class="spinner-border text-primary">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>

    <!-- Success state -->
    <template v-else>
      <div class="balance-section">
        <div class="balance-label">Available balance</div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="balance-amount d-flex align-items-center">
            <span class="badge badge-icon">{{ currentCard?.currency }}</span>
            <span class="balance-amount">{{
              formatCurrency(currentCard?.availableBalance || 0)
            }}</span>
          </div>
          <button class="btn btn-add-card d-flex align-items-center" @click="openAddCardModal">
            <img src="../assets/box.svg" alt="plus-circle" class="me-2" /> 
            <span>New card</span>
          </button>
        </div>
      </div>

      <div class="card-tabs">
        <ul class="nav nav-tabs border-0">
          <li class="nav-item">
            <a
              class="nav-link active border-start-0 border-end-0 border-top-0 px-0 me-3"
              href="#"
              >My debit cards</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link border-start-0 border-end-0 border-top-0 px-0 ms-3"
              href="#"
              >All company cards</a
            >
          </li>
        </ul>
      </div>

      <div
        v-if="cards.length > 0 && currentCard"
        class="card-details-container"
      >
        <div class="card-and-details">
          <!-- Card number -->
          <div
            class="show-card-number d-flex align-items-center justify-content-end col-6"
          >
            <img src="../assets/eye.svg" alt="eye" />
            <span>Show card number</span>
          </div>

          <!-- Card details and actions -->
          <div class="d-flex justify-content-between">
            <div class="col-6 card-list">
              <!-- Card details -->
              <DebitCard
                :cardHolder="currentCard.cardHolder"
                :cardNumber="currentCard.maskedCardNumber"
                :expiryDate="currentCard.expiryDate"
                :isFrozen="currentCard.isFrozen"
                :cardName="currentCard.cardName"
                class="mb-4"
                @click="handleCardClick"
              />

              <!-- Card Navigation -->
              <div class="card-navigation">
                <div class="card-indicators">
                  <span
                    v-for="(card, index) in cards"
                    :key="card.id"
                    class="card-indicator"
                    :class="{ active: index === currentCardIndex }"
                    @click="setCurrentCardIndex(index)"
                  ></span>
                </div>
              </div>

              <!-- Card actions -->
              <div class="card-actions-wrapper">
                <div class="card-action-item" @click="handleFreezeToggle">
                  <div class="action-icon freeze">
                    <img src="../assets/freeze-card.svg" alt="freeze-card" />
                  </div>
                  <div class="action-text">
                    {{ currentCard.isFrozen ? "Unfreeze card" : "Freeze card" }}
                  </div>
                </div>
                <div class="card-action-item">
                  <div class="action-icon freeze">
                    <img src="../assets/spend-limit.svg" alt="spend-limit" />
                  </div>
                  <div class="action-text">Set spend limit</div>
                </div>
                <div class="card-action-item">
                  <div class="action-icon freeze">
                    <img src="../assets/gpay.svg" alt="gpay" />
                  </div>
                  <div class="action-text">Add to Google Pay</div>
                </div>
                <div class="card-action-item">
                  <div class="action-icon freeze">
                    <img src="../assets/replace-card.svg" alt="replace-card" />
                  </div>
                  <div class="action-text">Replace card</div>
                </div>
                <div class="card-action-item">
                  <div class="action-icon freeze">
                    <img src="../assets/cancel-card.svg" alt="cancel-card" />
                  </div>
                  <div class="action-text">Cancel card</div>
                </div>
              </div>
            </div>

            <div class="w-100">
              <div class="accordion mb-4" id="card-details">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingCardDetails">
                    <button
                      class="accordion-button collapsed d-flex align-items-center justify-content-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseCardDetails"
                      aria-expanded="false"
                      aria-controls="collapseCardDetails"
                    >
                      <div class="d-flex align-items-center title-section">
                        <img
                          src="../assets/card-detail-icon.svg"
                          alt="card-detail-icon"
                        />
                        <span>Card details</span>
                      </div>
                      <img src="../assets/arrow-down.svg" alt="arrow-down" class="arrow-icon" />
                    </button>
                  </h2>
                  <div
                    id="collapseCardDetails"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingCardDetails"
                    data-bs-parent="#card-details"
                  >
                    <div class="accordion-body">card details</div>
                  </div>
                </div>
              </div>
              <div class="accordion" id="transaction-history">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTransactions">
                    <button
                      class="accordion-button d-flex align-items-center justify-content-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTransactions"
                      aria-expanded="true"
                      aria-controls="collapseTransactions"
                    >
                      <div class="d-flex align-items-center title-section">
                        <img
                          src="../assets/transation-arrow.svg"
                          alt="transation-arrow"
                        />
                        <span>Recent transactions</span>
                      </div>
                      <img src="../assets/arrow-down.svg" alt="arrow-down" class="arrow-icon" />
                    </button>
                  </h2>
                  <div
                    id="collapseTransactions"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingTransactions"
                    data-bs-parent="#transaction-history"
                  >
                    <div class="accordion-body p-0">
                      <TransactionDetails />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <AddCardModal v-if="showAddCardModal" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, watch, ref } from "vue";
import { useStore } from "vuex";
import DebitCard from "../components/card-details/debitCard.vue";
import TransactionDetails from "../components/card-details/TransactionDetails.vue";
import AddCardModal from "../components/card-details/AddCardModal.vue";

export default defineComponent({
  name: "Cards",

  components: {
    DebitCard,
    TransactionDetails,
    AddCardModal,
  },

  setup() {
    const store = useStore();
    const currentCardIndex = ref(0);

    // Load data on mount
    onMounted(async () => {
      await store.dispatch("cards/fetchCards");

      // Set the current card index to 0 (first card)
      if (store.getters["cards/allCards"].length > 0) {
        currentCardIndex.value = 0;
      }
    });

    // Computed properties from store
    const cards = computed(() => store.getters["cards/allCards"]);
    const isLoading = computed(() => store.getters["cards/isLoading"]);
    const error = computed(() => store.getters["cards/error"]);
    const showAddCardModal = computed(
      () => store.getters["ui/showAddCardModal"]
    );

    // Get the current card based on the index
    const currentCard = computed(() => {
      if (cards.value.length === 0) {
        return null;
      }
      return cards.value[currentCardIndex.value];
    });

    // Watch for changes in the current card index and update transactions
    watch(currentCard, async (newCard) => {
      if (newCard) {
        await store.dispatch(
          "transactions/fetchTransactionsByCardId",
          newCard.id
        );
        store.dispatch("ui/setCurrentCardId", newCard.id);
      }
    });

    // Add a watcher for the store's card index
    watch(
      () => store.getters["ui/getCurrentCardIndex"],
      (newIndex) => {
        if (newIndex !== undefined) {
          currentCardIndex.value = newIndex;
        }
      }
    );

    const formatCurrency = (amount: number): string => {
      return new Intl.NumberFormat("en-US").format(amount);
    };

    const handleFreezeToggle = async () => {
      if (!currentCard.value) return;

      try {
        if (currentCard.value.isFrozen) {
          await store.dispatch("cards/unfreezeCard", currentCard.value.id);
        } else {
          await store.dispatch("cards/freezeCard", currentCard.value.id);
        }
      } catch (err) {
        console.error("Error toggling freeze state:", err);
      }
    };

    const openAddCardModal = () => {
      store.dispatch("ui/toggleAddCardModal", true);
    };

    const setCurrentCardIndex = (index: number) => {
      currentCardIndex.value = index;
      store.dispatch("ui/setCurrentCardIndex", index);
    };

    const handleCardClick = () => {
      // Move to the next card, or back to the first card if at the end
      const nextIndex = (currentCardIndex.value + 1) % cards.value.length;
      setCurrentCardIndex(nextIndex);
    };

    return {
      cards,
      currentCard,
      isLoading,
      error,
      formatCurrency,
      handleFreezeToggle,
      openAddCardModal,
      currentCardIndex,
      setCurrentCardIndex,
      handleCardClick,
      showAddCardModal,
    };
  },
});
</script>