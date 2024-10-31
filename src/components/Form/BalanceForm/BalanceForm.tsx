import useBalanceForm from "./useBalanceForm";
import { View} from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';
import TextInput from "../Input/TextInput";
import Button from "../../Button/Button";
import {FormProvider} from "react-hook-form";


const BalanceForm = () => {
  const presenter = useBalanceForm()

  return (
    <View style={{gap: 14}}>
      <FormProvider {...presenter.form}>
        <RadioGroup
          radioButtons={presenter.actions}
          onPress={presenter.onActionChange}
          selectedId={presenter.selectedAction}
          layout='row'
        />

        <View style={{ gap: 14 }}>
          <TextInput name='description' label='Description' placeholder='Enter description' />
          <TextInput name='amount' label='Amount' placeholder='Enter amount' keyboardType="numeric" />
          <TextInput name='date' label='Date' placeholder='mm-dd-yyyy'/>

          <Button title='+ Add Transaction' onPress={presenter.onAddPress} />
        </View>
      </FormProvider>


    </View>
  )
}

export default BalanceForm