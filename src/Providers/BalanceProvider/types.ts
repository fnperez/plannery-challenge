export enum ActionType {
  income= 'income',
  expense= 'expense'
}

export type BalanceItem = {
  title: string,
  date: string,
  amount: number,
  type: ActionType
}