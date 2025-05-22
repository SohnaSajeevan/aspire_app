<template>
  <div>
    <div class="d-flex align-items-center mb-3">
      <button
        class="btn btn-tab me-2 ps-0"
        :class="{ active: activeTab === 'my-cards' }"
        @click="activeTab = 'my-cards'"
      >
        My debit cards
      </button>
      <button
        class="btn btn-tab"
        :class="{ active: activeTab === 'company-cards' }"
        @click="activeTab = 'company-cards'"
      >
        All company cards
      </button>
    </div>
    <div v-if="activeTab === 'my-cards'">
      <DebitCards 
        v-for="card in userCards" 
        :key="card.id"
        :card-holder="card.cardHolder"
        :card-number="card.maskedCardNumber"
        :expiry-date="card.expiryDate"
        :is-frozen="card.isFrozen"
        :card-name="card.cardName"
      />
    </div>
    <div v-else-if="activeTab === 'company-cards'">
      <div>All company cards content here</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DebitCards from "./debitCard.vue";
import { mockCards } from "../../mock/cards";

const activeTab = ref("my-cards");
const userCards = ref(mockCards);
</script>
