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
export default function SortbyTopSellerbutton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: { "Top Seller": {}, "Line 6": {}, SortbyTopSellerbutton: {} },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        "Top Seller": { color: "rgba(0,0,0,1)" },
        "Line 6": {},
        SortbyTopSellerbutton: {},
      },
    },
    {
      variantValues: { property1: "active" },
      overrides: {
        "Top Seller": { color: "rgba(0,0,0,1)" },
        "Line 6": {
          paths: [
            {
              d: "M2.5 -5C1.11929 -5 0 -3.88071 0 -2.5C0 -1.11929 1.11929 0 2.5 0L2.5 -5ZM87.5 0C88.8807 0 90 -1.11929 90 -2.5C90 -3.88071 88.8807 -5 87.5 -5L87.5 0ZM2.5 0L87.5 0L87.5 -5L2.5 -5L2.5 0Z",
              stroke: "rgba(255,215,0,1)",
              fillRule: "nonzero",
              strokeWidth: 5,
            },
          ],
        },
        SortbyTopSellerbutton: {},
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
      {...getOverrideProps(overrides, "SortbyTopSellerbutton")}
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
        children="Top Seller"
        {...getOverrideProps(overrides, "Top Seller")}
      ></Text>
      <Icon
        width="unset"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 90, height: 1 }}
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
