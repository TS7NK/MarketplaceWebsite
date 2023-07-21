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
export default function SortbyRandombutton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: { Random: {}, "Line 6": {}, SortbyRandombutton: {} },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Random: { color: "rgba(0,0,0,1)" },
        "Line 6": {},
        SortbyRandombutton: {},
      },
    },
    {
      variantValues: { property1: "active" },
      overrides: {
        Random: { color: "rgba(0,0,0,1)" },
        "Line 6": {
          paths: [
            {
              d: "M2.5 -5C1.11929 -5 0 -3.88071 0 -2.5C0 -1.11929 1.11929 0 2.5 0L2.5 -5ZM72.5 0C73.8807 0 75 -1.11929 75 -2.5C75 -3.88071 73.8807 -5 72.5 -5L72.5 0ZM2.5 0L72.5 0L72.5 -5L2.5 -5L2.5 0Z",
              stroke: "rgba(255,215,0,1)",
              fillRule: "nonzero",
              strokeWidth: 5,
            },
          ],
        },
        SortbyRandombutton: {},
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
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "SortbyRandombutton")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="20px"
        fontWeight="500"
        color="rgba(141,143,155,1)"
        lineHeight="23.4375px"
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
        children="Random"
        {...getOverrideProps(overrides, "Random")}
      ></Text>
      <Icon
        width="unset"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 75, height: 1 }}
        paths={[]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "Line 6")}
      ></Icon>
    </Flex>
  );
}
