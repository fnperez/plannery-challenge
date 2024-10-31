import {useCallback, useMemo, useState} from "react";
import {ActionType} from "../../../Providers/BalanceProvider/types";
import {useBalance} from "../../../Providers/BalanceProvider/BalanceProvider";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import yupExtra from "../../../utils/yupExtra";

const actions = [
  {
    id:  ActionType.income.toString(),
    label: 'Income',
  },
  {
    id: ActionType.expense.toString(),
    label: 'Expense',
  }
]

const schema = yup.object({
  description: yup.string().min(3).required().label('Description'),
  amount: yup.number().positive().required().label('Amount'),
  date: yupExtra.date().required(),
  type: yup.string().oneOf([ActionType.expense, ActionType.income]).required(),
})

type Payload = yup.InferType<typeof schema>

const useBalanceForm = () => {
  const form = useForm({
    defaultValues: {
      type: ActionType.income,
    },
    resolver: yupResolver(schema)
  })

  const selectedAction = form.watch('type')

  const onActionChange = useCallback((type: string) => {
    form.setValue('type', type as ActionType)
  }, [])

  const {addItem} = useBalance()

  const onAddPress = useCallback((payload: Payload) => {
    addItem({
      date: payload.date,
      amount: payload.amount,
      type: payload.type,
      title: payload.description
    })

    form.reset()
  }, [])

  return {
    form,
    actions,
    onActionChange,
    selectedAction,
    onAddPress: form.handleSubmit(onAddPress),
  }
}

export default useBalanceForm