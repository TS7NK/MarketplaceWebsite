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
export default function ManageCartButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { manageCart: "Default" },
      overrides: { "Manage Cart (3)": {}, ManageCartButton: {} },
    },
    {
      variantValues: { manageCart: "hover" },
      overrides: {
        "Manage Cart (3)": { color: "rgba(255,255,255,1)" },
        ManageCartButton: {},
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
      padding="10px 10px 10px 10px"
      display="flex"
      {...getOverrideProps(overrides, "ManageCartButton")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="20px"
        fontWeight="500"
        color="rgba(217,217,217,1)"
        lineHeight="23.4375px"
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
        children="Manage Cart (3)"
        {...getOverrideProps(overrides, "Manage Cart (3)")}
      ></Text>
    </Flex>
  );
}
