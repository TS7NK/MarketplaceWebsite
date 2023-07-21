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
import DetailsSwitcher from "./DetailsSwitcher";
import { Flex, Icon } from "@aws-amplify/ui-react";
import ExampleSwitcher from "./ExampleSwitcher";
export default function DetailsvsExamples(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Details selected" },
      overrides: {
        "Details Switcher": {},
        "Line 9": {},
        "Example Switcher": {},
        DetailsvsExamples: {},
      },
    },
    {
      variantValues: { property1: "Examples selected" },
      overrides: {
        "Details Switcher": {
          switcherButton: "Default",
          backgroundColor: "rgba(255,241,167,1)",
        },
        "Line 9": {},
        "Example Switcher": { switcherButton: "active" },
        DetailsvsExamples: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="20px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="2px SOLID rgba(217,217,217,1)"
      borderRadius="30px"
      padding="8px 18px 8px 18px"
      display="flex"
      {...getOverrideProps(overrides, "DetailsvsExamples")}
      {...rest}
    >
      <DetailsSwitcher
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        borderRadius="30px"
        padding="10px 20px 10px 20px"
        switcherButton="active"
        {...getOverrideProps(overrides, "Details Switcher")}
      ></DetailsSwitcher>
      <Icon
        width="20px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1, height: 20 }}
        paths={[
          {
            d: "M0 0L20 0L20 -2L0 -2L0 0Z",
            stroke: "rgba(217,217,217,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Line 9")}
      ></Icon>
      <ExampleSwitcher
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        borderRadius="30px"
        padding="10px 20px 10px 20px"
        backgroundColor="rgba(255,241,167,1)"
        switcherButton="Default"
        {...getOverrideProps(overrides, "Example Switcher")}
      ></ExampleSwitcher>
    </Flex>
  );
}
