import {ActionType, BalanceItem} from "./types";
import {useCallback, useState} from "react";
import dayjs from "dayjs";

const useBalanceProvider = () => {
  const [history, setHistory] = useState<BalanceItem[]>([])
  const [balance, setBalance] = useState(0)

  const addItem = useCallback((item: BalanceItem) => {
    setHistory(history => {
      history.push(item)

      return history.sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());
    })

    recalculateBalance()
  }, [history])

  const recalculateBalance = useCallback(() => {
    const sumAmount = history.reduce((amount, item) => {
      return amount + (item.type === ActionType.expense ? -item.amount : item.amount)
    }, 0)

    setBalance(sumAmount);
  }, [])

  return {
    addItem,
    history,
    balance,
    recalculateBalance
  }
}

export default useBalanceProvider