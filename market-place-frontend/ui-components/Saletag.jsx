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
export default function Saletag(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { saleTag: "big" },
      overrides: { "-50%": {}, Saletag: {} },
    },
    {
      variantValues: { saleTag: "small" },
      overrides: {
        "-50%": { fontSize: "10px", lineHeight: "11.71875px" },
        Saletag: {},
      },
    },
    {
      variantValues: { saleTag: "tiny" },
      overrides: {
        "-50%": { fontSize: "9px", lineHeight: "10.546875px" },
        Saletag: {},
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
      borderRadius="3px"
      padding="3px 3px 3px 3px"
      backgroundColor="rgba(0,131,252,1)"
      display="flex"
      {...getOverrideProps(overrides, "Saletag")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="14px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="16.40625px"
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
        children="-50%"
        {...getOverrideProps(overrides, "-50%")}
      ></Text>
    </Flex>
  );
}
