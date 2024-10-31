import { PressableProps, StyleSheet, TouchableHighlight} from "react-native";
import Colors, {Color} from "../../constants/Colors";
import Text from "../Text/Text";

type Props = {
  title: string;
} & PressableProps

const Button = (props: Props) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: Colors[Color.black],
      alignItems: 'center',
      padding: 14,
      borderRadius: 14
    }
  })

  return (
    <TouchableHighlight {...props} style={[styles.button, props.style]}>
      <Text color={Color.white}>{props.title}</Text>
    </TouchableHighlight>
  )
}

export default Button