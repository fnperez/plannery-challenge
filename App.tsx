import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Text, {TextType} from "./src/components/Text/Text";
import Colors, {Color} from "./src/constants/Colors";
import BalanceForm from "./src/components/Form/BalanceForm/BalanceForm";
import BalanceProvider from "./src/Providers/BalanceProvider/BalanceProvider";
import BalanceHeader from "./src/components/BalanceHeader/BalanceHeader";
import BalanceHistory from "./src/components/BalanceHistory/BalanceHistory";

export default function App() {
  return (
    <BalanceProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: styles.container.backgroundColor}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text type={TextType.title}>Income/Expense Tracker</Text>
            <Text type={TextType.label} color={Color.gray}>Keep track of your finances with ease.</Text>
          </View>

          <BalanceHeader />

          <BalanceForm />

          <BalanceHistory />

          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </BalanceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors[Color.white],
    padding: 16,
    gap: 24
  },
  header: {
    gap: 8
  },
});
