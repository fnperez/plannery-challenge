import {Text as RNText, TextProps, TextStyle} from "react-native";
import {useMemo} from "react";
import Colors, {Color} from "../../constants/Colors";

export enum TextType {
  titleXl = 'titleXl',
  title = 'title',
  body = 'body',
  label = 'label'
}

export type Props = {
  type?: TextType,
  color?: Color,
  weight?: TextStyle['fontWeight']
} & TextProps

export const TYPE_HASH: Record<TextType, TextStyle> = {
  [TextType.titleXl]: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  [TextType.title]: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  [TextType.body]: {
    fontSize: 16,
    fontWeight: 'normal'
  },
  [TextType.label]: {
    fontSize: 14,
    fontWeight: 'thin'
  }
}

const Text = (props: Props) => {
  const typeStyles = useMemo(
    () => TYPE_HASH[props.type ?? TextType.body],
    [props.type]
  )

  const customStyles: TextStyle = {
    color: Colors[props.color ?? Color.black],
    fontWeight: props.weight ?? typeStyles.fontWeight
  }

  return (
    <RNText {...props} style={[typeStyles, customStyles, props.style]} />
  )
}

export default Text
