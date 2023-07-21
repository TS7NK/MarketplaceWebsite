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
import Percentbar from "./Percentbar";
export default function ReviewRatingButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { reviewRatingButton: "Default" },
      overrides: {
        "5 star": {},
        "percent bar": {},
        "80%": {},
        ReviewRatingButton: {},
      },
    },
    {
      variantValues: { reviewRatingButton: "hover" },
      overrides: {
        "5 star": { textDecoration: "underline" },
        "percent bar": {},
        "80%": { textDecoration: "underline" },
        ReviewRatingButton: {},
      },
    },
    {
      variantValues: { reviewRatingButton: "active" },
      overrides: {
        "5 star": { color: "rgba(255,138,0,1)", textDecoration: "underline" },
        "percent bar": {},
        "80%": { color: "rgba(255,138,0,1)", textDecoration: "underline" },
        ReviewRatingButton: {},
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
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "ReviewRatingButton")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(76,76,76,1)"
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
        children="5 star"
        {...getOverrideProps(overrides, "5 star")}
      ></Text>
      <Percentbar
        width="130px"
        height="16px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        property1="80%"
        {...getOverrideProps(overrides, "percent bar")}
      ></Percentbar>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(76,76,76,1)"
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
        children="80%"
        {...getOverrideProps(overrides, "80%")}
      ></Text>
    </Flex>
  );
}
