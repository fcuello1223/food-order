import React from "react";
import { View, Text } from "react-native";
import { Redirect } from "expo-router";

export default function _Layout() {
  const isAuth = false;

  if (!isAuth) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <View>
      <Text>_Layout</Text>
    </View>
  );
}
