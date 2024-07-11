import React, { useCallback, useState } from "react";
import { Button } from "react-native";
import type { FormKeys } from "../../constants";
import translate from "../../i18n";
import type { IPromoter } from "../../types/form";
import Form from "../form";
import Input from "../input";

interface IPromoterFormProps {
  initialValues: IPromoter;
}

export default function PromoterForm({ initialValues }: IPromoterFormProps) {
  const [formData, setFormData] = useState<IPromoter>(initialValues);

  const handleChange = (name: FormKeys, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(() => {
    console.log("Form data:", formData);
    // navigation.navigate('FormValidationScreen', {
    //   name: formData.name,
    //   password: formData.password,
    //   confirmPassword: formData.confirmPassword,
    //   age: formData.age,
    //   store: formData.store,
    //   retail: formData.retail,
    // });
  }, [formData]);

  return (
    <Form>
      <Input
        label={translate("labelName")}
        text={formData.name}
        keyboardType="default"
        onChangeText={(value: string) => handleChange("name", value)}
      />
      <Input
        label={translate("labelAge")}
        keyboardType="numeric"
        text={formData.age}
        onChangeText={(value: string) => handleChange("age", value)}
      />
      <Input
        label={translate("labelStore")}
        text={formData.store}
        keyboardType="numeric"
        onChangeText={(value: string) => handleChange("store", value)}
      />
      <Input
        label={translate("labelRetail")}
        text={formData.retail}
        keyboardType="numeric"
        onChangeText={(value: string) => handleChange("retail", value)}
      />
      <Input
        label={translate("labelPassword")}
        secureTextEntry
        autoComplete="off"
        keyboardType="default"
        text={formData.password}
        onChangeText={(value: string) => handleChange("password", value)}
      />
      <Input
        label={translate("labelConfirmPassword")}
        secureTextEntry
        autoComplete="off"
        keyboardType="default"
        text={formData.confirmPassword}
        onChangeText={(value: string) => handleChange("confirmPassword", value)}
      />
      <Button onPress={handleSubmit} title={translate("buttonSubmit")} />
    </Form>
  );
}
