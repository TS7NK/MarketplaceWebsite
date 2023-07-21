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
export default function CartTopNaviButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        "5": {},
        Cart: {},
        "Ellipse 107": {},
        "number notification": {},
        CartTopNaviButton: {},
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        "5": {},
        Cart: {},
        "Ellipse 107": {},
        "number notification": {},
        CartTopNaviButton: { backgroundColor: "rgba(255,241,167,1)" },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="6px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="6px"
      padding="6px 20px 6px 20px"
      display="flex"
      {...getOverrideProps(overrides, "CartTopNaviButton")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="20px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
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
        children="Cart"
        {...getOverrideProps(overrides, "Cart")}
      ></Text>
      <Flex
        padding="0px 0px 0px 0px"
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "number notification")}
      >
        <Icon
          width="20px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          paths={[
            {
              d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
              fill: "rgba(205,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Ellipse 107")}
        ></Icon>
        <Text
          fontFamily="Roboto"
          fontSize="12px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="14.0625px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="20px"
          height="13px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="3.5px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="5"
          {...getOverrideProps(overrides, "5")}
        ></Text>
      </Flex>
    </Flex>
  );
}
