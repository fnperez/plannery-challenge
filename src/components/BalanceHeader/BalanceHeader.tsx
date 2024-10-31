import Text, {TextType} from "../Text/Text";
import {Color} from "../../constants/Colors";
import {View} from "react-native";
import {useBalance} from "../../Providers/BalanceProvider/BalanceProvider";

const BalanceHeader = () => {
  const {balance} = useBalance()

  return (
    <View style={{ alignItems:'center' }}>
      <Text type={TextType.title}>Current Balance</Text>
      <Text type={TextType.titleXl} color={balance >= 0 ? Color.green : Color.red}>${balance.toFixed(2)}</Text>
    </View>
  )
}

export default BalanceHeader