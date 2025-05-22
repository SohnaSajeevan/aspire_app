import type { UIState } from "./types";

const mutations = {
  SET_CURRENT_CARD_ID(state: UIState, cardId: string | null) {
    state.currentCardId = cardId;
  },

  SET_CURRENT_CARD_INDEX(state: UIState, index: number) {
    state.currentCardIndex = index;
  },

  SET_ADD_CARD_MODAL(state: UIState, show: boolean) {
    state.showAddCardModal = show;
  },
};

export default mutations;
