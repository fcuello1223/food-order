import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import cn from "clsx";

import { CustomButtonProps } from "@/type";

const CustomButton = ({
  onPress,
  title = "Click Here",
  style,
  textStyle,
  leftIcon,
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity className={cn("custom-btn", style)} onPress={onPress}>
      {leftIcon}
      <View className="flex-center flex-row">
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text className={cn("text-white-100 paragraph-semibold", textStyle)}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
