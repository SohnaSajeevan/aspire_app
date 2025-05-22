import type { UIState } from "./types";

type ActionContext = {
  commit: (type: string, payload?: any) => void;
  state: UIState;
};

const actions = {
  setCurrentCardId({ commit }: ActionContext, cardId: string | null) {
    commit("SET_CURRENT_CARD_ID", cardId);
  },

  setCurrentCardIndex({ commit }: ActionContext, index: number) {
    commit("SET_CURRENT_CARD_INDEX", index);
  },

  toggleAddCardModal({ commit, state }: ActionContext, show?: boolean) {
    const newValue = show !== undefined ? show : !state.showAddCardModal;
    commit('SET_ADD_CARD_MODAL', newValue);
  },
};

export default actions;
