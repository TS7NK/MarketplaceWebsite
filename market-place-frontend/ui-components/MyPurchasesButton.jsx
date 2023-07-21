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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function MyPurchasesButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        Vector: {},
        "bxs:purchase-tag": {},
        Text: {},
        "Frame 247": {},
        MyPurchasesButton: {},
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Vector: {},
        "bxs:purchase-tag": {},
        Text: {},
        "Frame 247": {},
        MyPurchasesButton: { backgroundColor: "rgba(217,217,217,0.5)" },
      },
    },
    {
      variantValues: { property1: "active" },
      overrides: {
        Vector: {},
        "bxs:purchase-tag": {},
        Text: {},
        "Frame 247": {},
        MyPurchasesButton: {
          border: "1px SOLID rgba(255,215,0,1)",
          backgroundColor: "rgba(255,215,0,1)",
        },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="8px"
      direction="row"
      width="unset"
      height="40px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(217,217,217,1)"
      boxShadow="0px 1px 2px rgba(0.7764706015586853, 0.8941176533699036, 0.9647058844566345, 0.05000000074505806)"
      borderRadius="999px"
      padding="9px 15px 9px 15px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "MyPurchasesButton")}
      {...rest}
    >
      <Flex
        gap="6px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 247")}
      >
        <View
          width="16px"
          height="16px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "bxs:purchase-tag")}
        >
          <Icon
            width="12.78px"
            height="12.78px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 12.78106689453125,
              height: 12.78125,
            }}
            paths={[
              {
                d: "M7.05733 0.390667C6.80734 0.140601 6.46826 7.55165e-05 6.11467 0L1.33333 0C0.979711 2.96059e-16 0.640573 0.140476 0.390524 0.390524C0.140476 0.640573 2.96059e-16 0.979711 0 1.33333L0 6.11467C7.55165e-05 6.46826 0.140601 6.80734 0.390667 7.05733L5.724 12.3907C5.97404 12.6406 6.31311 12.781 6.66667 12.781C7.02022 12.781 7.3593 12.6406 7.60933 12.3907L12.3907 7.60933C12.6406 7.3593 12.781 7.02022 12.781 6.66667C12.781 6.31311 12.6406 5.97404 12.3907 5.724L7.05733 0.390667ZM3.33333 4.66667C2.97962 4.66658 2.64043 4.52598 2.39039 4.27581C2.14034 4.02564 1.99991 3.68638 2 3.33267C2.00009 2.97896 2.14068 2.63977 2.39086 2.38972C2.64103 2.13967 2.98029 1.99925 3.334 1.99933C3.68771 1.99942 4.0269 2.14002 4.27695 2.39019C4.527 2.64036 4.66742 2.97962 4.66733 3.33333C4.66725 3.68704 4.52665 4.02623 4.27648 4.27628C4.0263 4.52633 3.68704 4.66676 3.33333 4.66667Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.33%"
            bottom="11.79%"
            left="8.33%"
            right="11.79%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16px"
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
          children="Purchases"
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </Flex>
    </Flex>
  );
}
