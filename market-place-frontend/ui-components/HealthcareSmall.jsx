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
export default function HealthcareSmall(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: {
        Vector: {},
        "healthicons:health": {},
        Healthcare: {},
        HealthcareSmall: {},
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
      border="1px SOLID rgba(3,166,0,1)"
      borderRadius="7px"
      padding="3px 6px 3px 6px"
      backgroundColor="rgba(3,166,0,1)"
      display="flex"
      {...getOverrideProps(overrides, "HealthcareSmall")}
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
        {...getOverrideProps(overrides, "healthicons:health")}
      >
        <Icon
          width="11.99px"
          height="12.33px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 11.99365234375,
            height: 12.33349609375,
          }}
          paths={[
            {
              d: "M5.21737 0.266987C5.50573 0.092336 5.83641 0 6.17354 0C6.51066 -2.96059e-16 6.84135 0.092336 7.1297 0.266987L7.8087 0.68232C8.76137 1.26465 9.84637 1.39432 10.9364 1.52499C11.2887 1.56732 11.6414 1.60932 11.9904 1.66699C11.9904 1.66699 11.998 2.27832 11.99 2.55565L11.9204 4.93932C11.8604 6.98365 10.9514 8.92199 9.39204 10.3307C8.65637 10.995 7.89537 11.5953 7.02104 12.094C6.76338 12.2398 6.47447 12.3215 6.17863 12.3324C5.8828 12.3432 5.58868 12.2828 5.32104 12.1563C4.31137 11.6763 3.41737 11.0677 2.60104 10.3307C1.0417 8.92199 0.132704 6.98365 0.0730369 4.93932L0.0037037 2.56332C-0.00462963 2.28165 0.0037037 1.66699 0.0037037 1.66699C0.287037 1.63365 0.575704 1.60599 0.866704 1.57832C2.15104 1.45632 3.47804 1.33032 4.5667 0.664987L5.2177 0.266987L5.21737 0.266987ZM5.32704 5.33365L5.32704 3.00032L6.66037 3.00032L6.66037 5.33365L8.9937 5.33365L8.9937 6.66699L6.66037 6.66699L6.66037 9.00032L5.32704 9.00032L5.32704 6.66699L2.9937 6.66699L2.9937 5.33365L5.32704 5.33365Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="12.5%"
          bottom="10.42%"
          left="12.54%"
          right="12.5%"
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
        children="Healthcare"
        {...getOverrideProps(overrides, "Healthcare")}
      ></Text>
    </Flex>
  );
}
