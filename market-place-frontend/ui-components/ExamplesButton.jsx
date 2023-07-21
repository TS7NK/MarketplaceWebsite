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
export default function ExamplesButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: { "Example 1": {}, ExamplesButton: {} },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        "Example 1": { color: "rgba(255,255,255,1)" },
        ExamplesButton: { backgroundColor: "rgba(0,131,252,1)" },
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
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(0,131,252,1)"
      borderRadius="6px"
      padding="9px 9px 9px 9px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "ExamplesButton")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="500"
        color="rgba(0,131,252,1)"
        lineHeight="18.75px"
        textAlign="center"
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
        children="Example 1"
        {...getOverrideProps(overrides, "Example 1")}
      ></Text>
    </Flex>
  );
}
