<template>
  <div class="debit-card" :class="{ frozen: isFrozen }">

    <div class="card-logo d-flex justify-content-end">
      <img src="../../assets/aspire-logo.svg" alt="aspire-logo" />
    </div>

    <div class="card-holder-name">{{ cardHolder }}</div>

    <div class="card-number d-flex align-items-center">
      <div class="d-flex align-items-center number-container">
        <div v-for="n in 4" :key="n" class="dot"></div>
      </div>
      <div class="d-flex align-items-center number-container">
        <div v-for="n in 4" :key="n" class="dot"></div>
      </div>
      <div class="d-flex align-items-center number-container">
        <div v-for="n in 4" :key="n" class="dot"></div>
      </div>
      <div>{{ cardNumber }}</div>
    </div>

    <div class="card-details">
      <div class="d-flex align-items-center">
        <div class="expiry">
          <div class="label">Thru: {{ expiryDate }}</div>
        </div>
        <div class="cvv d-flex align-items-center">
          <div class="label me-2">CVV:</div>
          <div class="cvv-number">
            <span class="me-1">*</span>
            <span class="me-1">*</span>
            <span class="me-1">*</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card-network d-flex justify-content-end">
      <img :src="`/assets/${cardName}.svg`" alt="visa" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DebitCard",

  props: {
    cardHolder: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    expiryDate: {
      type: String,
      required: true,
    },
    isFrozen: {
      type: Boolean,
      default: false,
    },
    cardName: {
      type: String,
      required: true,
    },
  },
});
</script>
