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
export default function ViewPromptButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: { "View Prompt": {}, ViewPromptButton: {} },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        "View Prompt": {},
        ViewPromptButton: {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.10000000149011612)",
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
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="6px"
      padding="10px 15px 10px 15px"
      backgroundColor="rgba(18,178,140,1)"
      display="flex"
      {...getOverrideProps(overrides, "ViewPromptButton")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="28.125px"
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
        children="View Prompt"
        {...getOverrideProps(overrides, "View Prompt")}
      ></Text>
    </Flex>
  );
}
