export interface Card {
  id: string;
  cardHolder: string;
  cardNumber: string;
  maskedCardNumber: string;
  expiryDate: string;
  cvv: string;
  isActive: boolean;
  isFrozen: boolean;
  spendLimit: number | null;
  availableBalance: number;
  currency: string;
  cardName: string;
}

export interface CardState {
  cards: Card[];
  loading: boolean;
  error: string | null;
}
