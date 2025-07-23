import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const submitHandler = async () => {
    if (!form.email || !form.password) {
      return Alert.alert("Error", "Please Enter a Valid E-Mail and Password!");
    }

    setIsSubmitting(true);

    try {
      //Call Appwrite Sign In Function
      Alert.alert("Success", "You Have Succesfully Signed In!");
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter Your E-Mail"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label="E-Mail Address"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter Your Password"
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        label="Password"
        secureTextEntry={true}
      />
      <CustomButton title="Sign In" />
      <View className="flex flex-row justify-center gap-2 mt-5">
        <Text className="base-regular text-gray-100">
          Don't Have an Account?
        </Text>
        <Link href="/sign-up" className="base-bold text-primary">Sign Up</Link>
      </View>
    </View>
  );
};

export default SignIn;
