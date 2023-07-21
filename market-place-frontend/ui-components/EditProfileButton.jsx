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
export default function EditProfileButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: { Next: {}, "Next Button": {}, EditProfileButton: {} },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Next: {},
        "Next Button": {},
        EditProfileButton: {
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
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="6px"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "EditProfileButton")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="6px"
        padding="10px 15px 10px 15px"
        backgroundColor="rgba(0,0,0,1)"
        display="flex"
        {...getOverrideProps(overrides, "Next Button")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="500"
          color="rgba(255,215,0,1)"
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
          children="Edit Profile"
          {...getOverrideProps(overrides, "Next")}
        ></Text>
      </Flex>
    </Flex>
  );
}
