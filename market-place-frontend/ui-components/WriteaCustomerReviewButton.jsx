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
export default function WriteaCustomerReviewButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { primaryActionButton: "Default" },
      overrides: {
        "Write a Customer Review": {},
        WriteaCustomerReviewButton: {},
      },
    },
    {
      variantValues: { primaryActionButton: "Hover" },
      overrides: {
        "Write a Customer Review": {},
        WriteaCustomerReviewButton: {
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
      padding="6px 15px 6px 15px"
      backgroundColor="rgba(255,215,0,1)"
      display="flex"
      {...getOverrideProps(overrides, "WriteaCustomerReviewButton")}
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
        children="Write a Customer Review"
        {...getOverrideProps(overrides, "Write a Customer Review")}
      ></Text>
    </Flex>
  );
}
