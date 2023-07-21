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
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function DropdownButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        "Print List": {},
        "Frame 150": {},
        "Line 74": {},
        DropdownButton: {},
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        "Print List": {},
        "Frame 150": {},
        "Line 74": {},
        DropdownButton: { backgroundColor: "rgba(217,217,217,0.5)" },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="1px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "DropdownButton")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="120px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 15px 10px 15px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 150")}
      >
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
          children="Print List"
          {...getOverrideProps(overrides, "Print List")}
        ></Text>
      </Flex>
      <Icon
        width="unset"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 120, height: 1 }}
        paths={[
          {
            d: "M0 0L120 0L120 -1L0 -1L0 0Z",
            stroke: "rgba(217,217,217,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "Line 74")}
      ></Icon>
    </Flex>
  );
}
