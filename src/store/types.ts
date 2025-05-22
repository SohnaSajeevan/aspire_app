import type { CardState } from "./modules/cards/types";
// import { TransactionState } from './modules/transactions/types';
// import { UIState } from './modules/ui/types';

export interface RootState {
  cards: CardState;
  // transactions: TransactionState;
  // ui: UIState;
}