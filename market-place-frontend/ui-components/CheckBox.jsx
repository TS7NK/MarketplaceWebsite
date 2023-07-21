/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function CheckBox(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { toggle: "False", state: "Default", label: "True" },
      overrides: {
        "Rectangle 1": {},
        "Interface, Essential/Done, Check": {},
        "CheckBox/Variant14": {},
        Label: {},
        CheckBox: {},
      },
    },
    {
      variantValues: { toggle: "False", state: "Hover", label: "True" },
      overrides: {
        "Rectangle 1": {},
        "Interface, Essential/Done, Check": {},
        "CheckBox/Variant14": {},
        Label: {},
        CheckBox: {},
      },
    },
    {
      variantValues: { toggle: "True", state: "Default", label: "True" },
      overrides: {
        "Rectangle 1": {
          border: "1px SOLID rgba(29,201,160,1)",
          backgroundColor: "rgba(29,201,160,1)",
        },
        "Interface, Essential/Done, Check": {},
        "CheckBox/Variant14": {},
        Label: {},
        CheckBox: {},
      },
    },
    {
      variantValues: { toggle: "True", state: "Hover", label: "True" },
      overrides: {
        "Rectangle 1": {
          border: "1px SOLID rgba(18,178,140,1)",
          backgroundColor: "rgba(18,178,140,1)",
        },
        "Interface, Essential/Done, Check": {},
        "CheckBox/Variant14": {},
        Label: {},
        CheckBox: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "CheckBox")}
      {...rest}
    >
      <View
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "CheckBox/Variant14")}
      >
        <View
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(217,217,217,1)"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
        <View
          width="14px"
          height="14px"
          {...getOverrideProps(overrides, "Interface, Essential/Done, Check")}
        ></View>
      </View>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        textTransform="capitalize"
        lineHeight="18.75px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Checkbox"
        {...getOverrideProps(overrides, "Label")}
      ></Text>
    </Flex>
  );
}
