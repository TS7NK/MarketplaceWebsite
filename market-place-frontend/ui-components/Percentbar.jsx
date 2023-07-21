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
export default function Percentbar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "80%" },
      overrides: { "Rectangle 13": {}, "Rectangle 12": {}, Percentbar: {} },
    },
    {
      variantValues: { property1: "10%" },
      overrides: {
        "Rectangle 13": {},
        "Rectangle 12": { width: "17px", left: "calc(50% - 8.5px - 56.5px)" },
        Percentbar: {},
      },
    },
    {
      variantValues: { property1: "8%" },
      overrides: {
        "Rectangle 13": {},
        "Rectangle 12": { width: "12px", left: "calc(50% - 6px - 59px)" },
        Percentbar: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="130px"
      height="16px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Percentbar")}
      {...rest}
    >
      <View
        width="132px"
        height="18px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-6.25%"
        bottom="-6.25%"
        left="-0.77%"
        right="-0.77%"
        border="1px SOLID rgba(141,143,155,1)"
        borderRadius="7px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 13")}
      ></View>
      <View
        width="101px"
        height="16px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="calc(50% - 50.5px - 14.5px)"
        borderRadius="6px 0px 0px 6px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,215,0,1)"
        {...getOverrideProps(overrides, "Rectangle 12")}
      ></View>
    </View>
  );
}
