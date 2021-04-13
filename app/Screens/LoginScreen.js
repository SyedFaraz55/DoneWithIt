import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import AppButton from "../Components/AppButton";
import AppTextInput from "../Components/AppTextInput";
import Screen from "../Components/Screen";
import { Formik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email:Yup.string().required().email().label('Email'),
    password:Yup.string().required().min(4).label("Password")
})
export default function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit,errors,setFieldTouched,touched }) => (
          <>
            <AppTextInput
              icon="email"
              onChangeText={handleChange("email")}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyBoardType="email-address"
              onBlur={()=> setFieldTouched("email") }
           
            />
           {touched.email &&  <Text style={{color:'red'}}>{errors.email}</Text>}
            <AppTextInput
              autoCapitalize="none"
              onChangeText={handleChange("password")}
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              secureTextEntry
              onBlur={()=> setFieldTouched("password") }
              
            />
            {touched.password && <Text style={{color:'red'}}>{errors.password}</Text>}
             <AppButton
        title="Register"
        color="primary"
        onPress={handleSubmit}
      />
          </>
        )}
      </Formik>

     
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
