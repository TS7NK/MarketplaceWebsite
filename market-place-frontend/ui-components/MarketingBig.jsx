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
export default function MarketingBig(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: {
        Vector: {},
        "gridicons:speaker": {},
        Marketing: {},
        MarketingBig: {},
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
      {...getOverrideProps(overrides, "MarketingBig")}
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
        {...getOverrideProps(overrides, "gridicons:speaker")}
      >
        <Icon
          width="16.67px"
          height="14.17px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.6666259765625,
            height: 14.166748046875,
          }}
          paths={[
            {
              d: "M14.1667 4.16667L14.1667 9.16667C15.5833 9.16667 16.6667 8.08333 16.6667 6.66667C16.6667 5.25 15.5833 4.16667 14.1667 4.16667ZM7.5 3.33333L1.66667 3.33333C0.75 3.33333 0 4.08333 0 5L0 8.33333C0 9.25 0.75 10 1.66667 10L2.5 10L2.5 12.5C2.5 13.4167 3.25 14.1667 4.16667 14.1667L5.83333 14.1667L5.83333 10L7.5 10L10.8333 13.3333L12.5 13.3333L12.5 0L10.8333 0L7.5 3.33333Z",
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
        children="Marketing"
        {...getOverrideProps(overrides, "Marketing")}
      ></Text>
    </Flex>
  );
}
