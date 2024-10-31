import {TextInput as RNTextInput, TextInputProps, View} from "react-native";
import Text, {TextType} from "../../Text/Text";
import {useFormContext, Controller} from "react-hook-form";
import {Color} from "../../../constants/Colors";
import React from "react";

type Props = {
  name: string;
  label?: string;
} & TextInputProps;

const TextInput = ({name, label, ...props}: Props, ref: React.LegacyRef<RNTextInput> | undefined) => {
  const {control} = useFormContext();

  return (
    <View style={{gap: 4}}>
      <Text weight='bold'>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value }, fieldState: {error} }) => (
          <>
            <RNTextInput
              ref={ref}
              style={{ borderWidth: 1, padding: 12, borderRadius: 8 }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              {...props}
            />
            {!!error && (
              <Text type={TextType.label} color={Color.red}>
                {error.message}
              </Text>
            )}
          </>

        )}
      />

    </View>
  );
}

const RefInput = React.forwardRef(TextInput);

export default RefInput;
