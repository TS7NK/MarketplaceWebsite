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
import Star from "./Star";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Ratingfilter1stars(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        star3847179: {},
        star3847180: {},
        star3847181: {},
        star3847182: {},
        star3847183: {},
        "5 stars": {},
        "& Up": {},
        Ratingfilter1stars: {},
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        star3847179: {},
        star3847180: {},
        star3847181: {},
        star3847182: {},
        star3847183: {},
        "5 stars": {},
        "& Up": {},
        Ratingfilter1stars: { backgroundColor: "rgba(255,241,167,1)" },
      },
    },
    {
      variantValues: { property1: "active" },
      overrides: {
        star3847179: {},
        star3847180: {},
        star3847181: {},
        star3847182: {},
        star3847183: {},
        "5 stars": {},
        "& Up": { color: "rgba(255,255,255,1)" },
        Ratingfilter1stars: { backgroundColor: "rgba(0,0,0,1)" },
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
      borderRadius="6px"
      padding="3px 6px 3px 6px"
      display="flex"
      {...getOverrideProps(overrides, "Ratingfilter1stars")}
      {...rest}
    >
      <Flex
        gap="3px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "5 stars")}
      >
        <Star
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          property1="fill"
          {...getOverrideProps(overrides, "star3847179")}
        ></Star>
        <Star
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          property1="empty"
          {...getOverrideProps(overrides, "star3847180")}
        ></Star>
        <Star
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          property1="empty"
          {...getOverrideProps(overrides, "star3847181")}
        ></Star>
        <Star
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          property1="empty"
          {...getOverrideProps(overrides, "star3847182")}
        ></Star>
        <Star
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          property1="empty"
          {...getOverrideProps(overrides, "star3847183")}
        ></Star>
      </Flex>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
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
        children="& Up"
        {...getOverrideProps(overrides, "& Up")}
      ></Text>
    </Flex>
  );
}
