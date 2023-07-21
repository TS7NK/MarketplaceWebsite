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
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Createaccountlong(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: {
        property1: "Default",
        size: "Default",
        isDisabled: "false",
        variation: "primary",
      },
      overrides: { "Create Account": {}, Createaccountlong: {} },
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
      width="350px"
      height="46px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="10px"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,215,0,1)"
      display="flex"
      {...getOverrideProps(overrides, "Createaccountlong")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
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
        children="Create Account"
        {...getOverrideProps(overrides, "Create Account")}
      ></Text>
    </Flex>
  );
}
