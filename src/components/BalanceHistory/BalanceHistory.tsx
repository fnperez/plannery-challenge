import {FlatList, View} from "react-native";
import Text, {TextType} from "../Text/Text";
import Colors, {Color} from "../../constants/Colors";
import {ActionType, BalanceItem} from "../../Providers/BalanceProvider/types";
import {useBalance} from "../../Providers/BalanceProvider/BalanceProvider";

const COLORS = {
  [ActionType.income]: Color.green,
  [ActionType.expense]: Color.red
}


const Item = ({ item }: { item: BalanceItem }) => (
  <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
    <View style={{gap: 4}}>
      <Text weight='bold' >{item.title}</Text>
      <Text type={TextType.label} color={Color.gray}>{item.date}</Text>
    </View>
    <Text color={COLORS[item.type ?? ActionType.income]}>
      {item.type === ActionType.income ? '+' : '-'}
      {item.amount.toFixed(2)}
    </Text>
  </View>
)

const BalanceHistory = () => {
  const { items } = useBalance()

  return (
    <View style={{ flex: 1, borderWidth: 1, borderColor: Colors[Color.gray], padding: 12, borderRadius: 8, gap: 8}}>
      <Text>Transaction History</Text>

      <FlatList<BalanceItem>
        data={items}
        ListEmptyComponent={(
          <View style={{alignItems: 'center'}}>
            <Text type={TextType.label} color={Color.gray}>No transactions tracked.</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
        renderItem={Item}
      />
    </View>
  )
}

export default BalanceHistory