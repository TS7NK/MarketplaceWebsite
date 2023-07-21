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
export default function MySellingsButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        Vector: {},
        "ic:round-publish": {},
        Text: {},
        "Frame 245": {},
        MySellingsButton: {},
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Vector: {},
        "ic:round-publish": {},
        Text: {},
        "Frame 245": {},
        MySellingsButton: { backgroundColor: "rgba(236,236,236,1)" },
      },
    },
    {
      variantValues: { property1: "active" },
      overrides: {
        Vector: {},
        "ic:round-publish": {},
        Text: {},
        "Frame 245": {},
        MySellingsButton: {
          border: "1px SOLID rgba(255,215,0,1)",
          backgroundColor: "rgba(255,215,0,1)",
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
      gap="8px"
      direction="row"
      width="unset"
      height="40px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(217,217,217,1)"
      boxShadow="0px 1px 2px rgba(0.7764706015586853, 0.8941176533699036, 0.9647058844566345, 0.05000000074505806)"
      borderRadius="999px"
      padding="9px 15px 9px 15px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "MySellingsButton")}
      {...rest}
    >
      <Flex
        gap="6px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 245")}
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
          {...getOverrideProps(overrides, "ic:round-publish")}
        >
          <Icon
            width="11.67px"
            height="13.33px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 11.66668701171875,
              height: 13.3330078125,
            }}
            paths={[
              {
                d: "M0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667L10.8333 1.66667C11.2917 1.66667 11.6667 1.29167 11.6667 0.833333C11.6667 0.375 11.2917 0 10.8333 0L0.833333 0C0.375 0 0 0.375 0 0.833333ZM2.00833 8.33333L3.33333 8.33333L3.33333 12.5C3.33333 12.9583 3.70833 13.3333 4.16667 13.3333L7.5 13.3333C7.95833 13.3333 8.33333 12.9583 8.33333 12.5L8.33333 8.33333L9.65833 8.33333C10.4 8.33333 10.775 7.43333 10.25 6.90833L6.425 3.08333C6.34791 3.00608 6.25633 2.94479 6.15552 2.90297C6.05471 2.86115 5.94664 2.83963 5.8375 2.83963C5.72836 2.83963 5.62029 2.86115 5.51948 2.90297C5.41867 2.94479 5.3271 3.00608 5.25 3.08333L1.425 6.90833C0.9 7.43333 1.26667 8.33333 2.00833 8.33333Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="16.67%"
            bottom="16.67%"
            left="20.83%"
            right="20.83%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16px"
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
          children="Selling"
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </Flex>
    </Flex>
  );
}
