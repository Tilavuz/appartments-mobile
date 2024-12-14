import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { storageUtils } from "../../utils/storage-utils";
import { IAuth } from "../../interface/auth-interface";
import { authService } from "../../service/auth-service";

export default function LoginScreen() {
  const [phone, setPhone] = useState<string | null>(null);
  const [checkPhone, setCheckPhone] = useState(false);
  const [otp, setOtp] = useState<string>("");

  useEffect(() => {
    const checkOtp = async () => {
      if (phone && otp) {
        const data = await authService.checkOtp({ phone, otp });
        await storageUtils.setItem({ key: "auth", value: data });
      }
    };
    if (otp && phone && otp.length === 6) {
      checkOtp();
    }
  }, [otp]);

  const login = async () => {
    try {
      if (phone) {
        await authService.login({ phone });
        setCheckPhone(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {checkPhone ? (
        <View style={styles.container}>
          <View style={styles.otpHeader}>
            <Text style={styles.otpHeaderTitle}>Kodni tasdiqlang!</Text>
            <Text>
              Sizga sms orqali 6 xonali kod yubordik uni tasdiqlash uchun bizga
              yuboring!
            </Text>
          </View>
          <View style={styles.otpContainer}>
            <TextInput
              maxLength={6}
              keyboardType="numeric"
              autoFocus={true}
              style={[styles.otpInput]}
              onChangeText={(value) => setOtp(value)}
            />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.inputsWrapper}>
              <TextInput
                editable={false}
                value="+998"
                style={[styles.firstInput]}
              />
              <TextInput
                maxLength={9}
                keyboardType="numeric"
                autoFocus={true}
                style={[styles.secondInput]}
                placeholder="901234567"
                onChangeText={(value) => setPhone(value)}
              />
            </View>
            <Button onPress={login} title="Kirish" />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  text: {
    color: "#000",
  },
  formContainer: {
    width: "100%",
    gap: 6,
  },
  inputsWrapper: {
    flexDirection: "row",
    backgroundColor: "#dcdcdc",
    borderRadius: 10,
  },
  firstInput: {
    width: 50,
    paddingLeft: 12,
  },
  secondInput: {
    flex: 1,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    paddingLeft: 10,
  },
  otpContainer: {
    justifyContent: "center",
    width: "100%",
  },
  otpHeader: {
    width: "100%",
    marginBottom: 10,
  },
  otpHeaderTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
});
