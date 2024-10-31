import {createContext, FC, PropsWithChildren, useContext} from "react";
import useBalanceProvider from "./useBalanceProvider";
import {BalanceItem} from "./types";

const BalanceContext = createContext<{
  items: BalanceItem[],
  balance: number,
  addItem: (item: BalanceItem) => void,
  recalculate: () => void,
}>({
  items: [],
  balance: 0,
  addItem: (item: BalanceItem) => null,
  recalculate: () => null
})

const BalanceProvider = ({ children }: PropsWithChildren) => {
  const presenter = useBalanceProvider()

  return (
    <BalanceContext.Provider value={{
      items: presenter.history,
      balance: presenter.balance,
      addItem: presenter.addItem,
      recalculate: presenter.recalculateBalance
    }}>
      {children}
    </BalanceContext.Provider>
  )
}

export const useBalance = () => useContext(BalanceContext)

export default BalanceProvider