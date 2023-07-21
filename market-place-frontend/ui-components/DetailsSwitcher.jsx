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
export default function DetailsSwitcher(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { switcherButton: "Default" },
      overrides: { Details: {}, DetailsSwitcher: {} },
    },
    {
      variantValues: { switcherButton: "hover" },
      overrides: { Details: { color: "rgba(0,0,0,1)" }, DetailsSwitcher: {} },
    },
    {
      variantValues: { switcherButton: "active" },
      overrides: {
        Details: { color: "rgba(0,0,0,1)" },
        DetailsSwitcher: { backgroundColor: "rgba(255,215,0,1)" },
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
      borderRadius="30px"
      padding="10px 20px 10px 20px"
      backgroundColor="rgba(255,241,167,1)"
      display="flex"
      {...getOverrideProps(overrides, "DetailsSwitcher")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="500"
        color="rgba(141,143,155,1)"
        lineHeight="28.125px"
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
        children="Details"
        {...getOverrideProps(overrides, "Details")}
      ></Text>
    </Flex>
  );
}
