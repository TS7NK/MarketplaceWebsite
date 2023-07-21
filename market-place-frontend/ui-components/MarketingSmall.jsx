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
export default function MarketingSmall(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: {
        Vector: {},
        "gridicons:speaker": {},
        Marketing: {},
        MarketingSmall: {},
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
      border="1px SOLID rgba(255,138,0,1)"
      borderRadius="7px"
      padding="3px 6px 3px 6px"
      backgroundColor="rgba(255,138,0,1)"
      display="flex"
      {...getOverrideProps(overrides, "MarketingSmall")}
      {...rest}
    >
      <View
        width="16px"
        height="16px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "gridicons:speaker")}
      >
        <Icon
          width="13.33px"
          height="11.33px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 13.3333740234375,
            height: 11.333251953125,
          }}
          paths={[
            {
              d: "M11.3333 3.33333L11.3333 7.33333C12.4667 7.33333 13.3333 6.46667 13.3333 5.33333C13.3333 4.2 12.4667 3.33333 11.3333 3.33333ZM6 2.66667L1.33333 2.66667C0.6 2.66667 0 3.26667 0 4L0 6.66667C0 7.4 0.6 8 1.33333 8L2 8L2 10C2 10.7333 2.6 11.3333 3.33333 11.3333L4.66667 11.3333L4.66667 8L6 8L8.66667 10.6667L10 10.6667L10 0L8.66667 0L6 2.66667Z",
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
          bottom="16.67%"
          left="8.33%"
          right="8.33%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="14.0625px"
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
        children="Marketing"
        {...getOverrideProps(overrides, "Marketing")}
      ></Text>
    </Flex>
  );
}
