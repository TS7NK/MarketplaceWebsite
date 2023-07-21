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
import { View } from "@aws-amplify/ui-react";
export default function ToggleSwitch(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Active" },
      overrides: {
        "Rectangle 143714563": {},
        "Rectangle 243714564": {},
        "Group 1": {},
        "Rectangle 143714566": { backgroundColor: "rgba(255,215,0,1)" },
        "Rectangle 243714567": {},
        "Group 2": { display: "block" },
        ToggleSwitch: {},
      },
    },
    {
      variantValues: { property1: "Default" },
      overrides: {
        "Rectangle 143714563": {},
        "Rectangle 243714564": {},
        "Group 1": {},
        "Rectangle 143714566": {},
        "Rectangle 243714567": {},
        "Group 2": {},
        ToggleSwitch: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="50px"
      height="23.72px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ToggleSwitch")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="50px"
        height="23.72px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Group 1")}
      >
        <View
          width="50px"
          height="23.72px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="40px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(196,196,196,1)"
          {...getOverrideProps(overrides, "Rectangle 143714563")}
        ></View>
        <View
          width="18.24px"
          height="18.38px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="11.25%"
          bottom="11.25%"
          left="5.29%"
          right="58.24%"
          boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
          borderRadius="40px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 243714564")}
        ></View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="50px"
        height="23.72px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <View
          width="50px"
          height="23.72px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="40px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,255,194,1)"
          {...getOverrideProps(overrides, "Rectangle 143714566")}
        ></View>
        <View
          width="18.24px"
          height="18.38px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="11.25%"
          bottom="11.25%"
          left="57.06%"
          right="6.47%"
          boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
          borderRadius="40px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 243714567")}
        ></View>
      </View>
    </View>
  );
}
