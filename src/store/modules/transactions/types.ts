export interface Transaction {
  id: string;
  cardId: string;
  merchant: string;
  date: string;
  amount: number;
  type: "charge" | "refund";
  category: string;
  description: string;
}

export interface TransactionState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}
