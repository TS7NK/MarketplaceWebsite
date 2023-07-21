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
export default function BusinessSmall(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: {
        Vector: {},
        "ic:round-business-center": {},
        Business: {},
        BusinessSmall: {},
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
      {...getOverrideProps(overrides, "BusinessSmall")}
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
        {...getOverrideProps(overrides, "ic:round-business-center")}
      >
        <Icon
          width="13.33px"
          height="12px"
          viewBox={{ minX: 0, minY: 0, width: 13.3333740234375, height: 12 }}
          paths={[
            {
              d: "M7.33333 8.66667L6 8.66667C5.63333 8.66667 5.33333 8.36667 5.33333 8L0.673333 8L0.673333 10.6667C0.673333 11.4 1.27333 12 2.00667 12L11.3333 12C12.0667 12 12.6667 11.4 12.6667 10.6667L12.6667 8L8 8C8 8.36667 7.7 8.66667 7.33333 8.66667ZM12 2.66667L9.33333 2.66667C9.33333 1.19333 8.14 0 6.66667 0C5.19333 0 4 1.19333 4 2.66667L1.33333 2.66667C0.6 2.66667 0 3.26667 0 4L0 6C0 6.74 0.593333 7.33333 1.33333 7.33333L5.33333 7.33333L5.33333 6.66667C5.33333 6.3 5.63333 6 6 6L7.33333 6C7.7 6 8 6.3 8 6.66667L8 7.33333L12 7.33333C12.7333 7.33333 13.3333 6.73333 13.3333 6L13.3333 4C13.3333 3.26667 12.7333 2.66667 12 2.66667ZM5.33333 2.66667C5.33333 1.93333 5.93333 1.33333 6.66667 1.33333C7.4 1.33333 8 1.93333 8 2.66667L5.32667 2.66667L5.33333 2.66667Z",
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
        children="Business"
        {...getOverrideProps(overrides, "Business")}
      ></Text>
    </Flex>
  );
}
