<template>
  <div>
    <div class="modal fade show" style="display: block">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Card</h5>
            <button
              type="button"
              class="btn-close"
              @click="closeModal"
            ></button>
          </div>

          <div class="modal-body">
            <div class="mb-3">
              <label for="cardHolderName" class="form-label"
                >Cardholder Name</label
              >
              <input
                type="text"
                class="form-control"
                id="cardHolderName"
                v-model="cardHolderName"
                placeholder="Enter cardholder name"
              />
              <div class="form-text">
                The name that will appear on the card.
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="createCard"
              :disabled="isLoading || !cardHolderName"
            >
              Create Card
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "AddCardModal",
  setup() {
    const store = useStore();
    const cardHolderName = ref<string>("");

    const isLoading = computed(() => store.getters["cards/isLoading"]);
    const error = computed(() => store.getters["cards/error"]);

    const closeModal = () => {
      store.dispatch("ui/toggleAddCardModal", false);
    };

    const createCard = async () => {
      if (!cardHolderName.value) return;

      try {
        await store.dispatch("cards/addCard", {
          cardHolder: cardHolderName.value,
        });
        closeModal();
      } catch (err) {
        console.error("Error creating card:", err);
      }
    };

    return {
      closeModal,
      cardHolderName,
      createCard,
      isLoading,
      error,
    };
  },
});
</script>
