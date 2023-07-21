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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function BusinessBig(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: {
        Vector: {},
        "ic:round-business-center": {},
        Business: {},
        BusinessBig: {},
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
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(0,131,252,1)"
      borderRadius="7px"
      padding="3px 6px 3px 6px"
      backgroundColor="rgba(0,131,252,1)"
      display="flex"
      {...getOverrideProps(overrides, "BusinessBig")}
      {...rest}
    >
      <View
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ic:round-business-center")}
      >
        <Icon
          width="16.67px"
          height="15px"
          viewBox={{ minX: 0, minY: 0, width: 16.6666259765625, height: 15 }}
          paths={[
            {
              d: "M9.16667 10.8333L7.5 10.8333C7.04167 10.8333 6.66667 10.4583 6.66667 10L0.841667 10L0.841667 13.3333C0.841667 14.25 1.59167 15 2.50833 15L14.1667 15C15.0833 15 15.8333 14.25 15.8333 13.3333L15.8333 10L10 10C10 10.4583 9.625 10.8333 9.16667 10.8333ZM15 3.33333L11.6667 3.33333C11.6667 1.49167 10.175 0 8.33333 0C6.49167 0 5 1.49167 5 3.33333L1.66667 3.33333C0.75 3.33333 0 4.08333 0 5L0 7.5C0 8.425 0.741667 9.16667 1.66667 9.16667L6.66667 9.16667L6.66667 8.33333C6.66667 7.875 7.04167 7.5 7.5 7.5L9.16667 7.5C9.625 7.5 10 7.875 10 8.33333L10 9.16667L15 9.16667C15.9167 9.16667 16.6667 8.41667 16.6667 7.5L16.6667 5C16.6667 4.08333 15.9167 3.33333 15 3.33333ZM6.66667 3.33333C6.66667 2.41667 7.41667 1.66667 8.33333 1.66667C9.25 1.66667 10 2.41667 10 3.33333L6.65833 3.33333L6.66667 3.33333Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="8.33%"
          right="8.33%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
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
        children="Business"
        {...getOverrideProps(overrides, "Business")}
      ></Text>
    </Flex>
  );
}
