import type { CardState } from "./types";

const getters = {
  allCards: (state: CardState) => {
    return state.cards;
  },

  activeCard: (state: CardState) => {
    return state.cards.find((card) => card.isActive) || null;
  },

  isLoading: (state: CardState) => state.loading,

  error: (state: CardState) => state.error,
};

export default getters;
