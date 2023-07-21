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
export default function BusinessSmallNavi(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { topNavigation: "Default" },
      overrides: { Business: {}, BusinessSmallNavi: {} },
    },
    {
      variantValues: { topNavigation: "active" },
      overrides: {
        Business: {},
        BusinessSmallNavi: {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.20000000298023224)",
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
      padding="6px 10px 6px 10px"
      display="flex"
      {...getOverrideProps(overrides, "BusinessSmallNavi")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="21.09375px"
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
        children="Business"
        {...getOverrideProps(overrides, "Business")}
      ></Text>
    </Flex>
  );
}
