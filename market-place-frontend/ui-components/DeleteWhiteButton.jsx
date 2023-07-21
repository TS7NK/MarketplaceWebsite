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
export default function DeleteWhiteButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        Delete: {},
        "Secondary White Button": {},
        DeleteWhiteButton: {},
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Delete: {},
        "Secondary White Button": {},
        DeleteWhiteButton: {
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
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="6px"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "DeleteWhiteButton")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="row"
        width="79px"
        height="31px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(217,217,217,1)"
        borderRadius="6px"
        padding="9px 14px 9px 14px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Secondary White Button")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="500"
          color="rgba(207,21,21,1)"
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
          children="Delete"
          {...getOverrideProps(overrides, "Delete")}
        ></Text>
      </Flex>
    </Flex>
  );
}
