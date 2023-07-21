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
export default function Tagsbutton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { tag: "Default" },
      overrides: { "UX design": {}, Tagsbutton: {} },
    },
    {
      variantValues: { tag: "hover" },
      overrides: { "UX design": { color: "rgba(0,0,0,1)" }, Tagsbutton: {} },
    },
    {
      variantValues: { tag: "active" },
      overrides: {
        "UX design": { fontWeight: "500", color: "rgba(255,255,255,1)" },
        Tagsbutton: { backgroundColor: "rgba(255,215,0,1)" },
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
      borderRadius="6px"
      padding="6px 15px 6px 15px"
      backgroundColor="rgba(255,241,167,1)"
      display="flex"
      {...getOverrideProps(overrides, "Tagsbutton")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(141,143,155,1)"
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
        children="UX design"
        {...getOverrideProps(overrides, "UX design")}
      ></Text>
    </Flex>
  );
}
