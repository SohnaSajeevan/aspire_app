import type { CardState, Card } from "./types";

const mutations = {
  SET_CARDS(state: CardState, cards: Card[]) {
    state.cards = cards;
  },

  SET_LOADING(state: CardState, loading: boolean) {
    state.loading = loading;
  },

  SET_ERROR(state: CardState, error: string | null) {
    state.error = error;
  },

  UPDATE_CARD(state: CardState, updatedCard: Card) {
    const index = state.cards.findIndex((card) => card.id === updatedCard.id);

    if (index !== -1) {
      state.cards.splice(index, 1, updatedCard);
    }
  },

  ADD_CARD(state: CardState, card: Card) {
    state.cards.push(card);
  },

  REMOVE_CARD(state: CardState, id: string) {
    state.cards = state.cards.filter((card) => card.id !== id);
  },
};

export default mutations;
