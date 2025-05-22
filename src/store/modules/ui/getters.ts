import type { UIState } from "./types";

const getters = {
  showAddCardModal: (state: UIState) => state.showAddCardModal,

  currentCardId: (state: UIState) => state.currentCardId,

  currentCardIndex: (state: UIState) => state.currentCardIndex,
};

export default getters;
