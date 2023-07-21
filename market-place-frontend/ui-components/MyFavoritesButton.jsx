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
export default function MyFavoritesButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        Vector: {},
        "Like icon": {},
        Text: {},
        "Frame 245": {},
        MyFavoritesButton: {},
      },
    },
    {
      variantValues: { property1: "active" },
      overrides: {
        Vector: {},
        "Like icon": {},
        Text: {},
        "Frame 245": {},
        MyFavoritesButton: {
          border: "1px SOLID rgba(255,215,0,1)",
          backgroundColor: "rgba(255,215,0,1)",
        },
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Vector: {},
        "Like icon": {},
        Text: {},
        "Frame 245": {},
        MyFavoritesButton: { backgroundColor: "rgba(236,236,236,1)" },
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
      {...getOverrideProps(overrides, "MyFavoritesButton")}
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
          {...getOverrideProps(overrides, "Like icon")}
        >
          <Icon
            width="13.33px"
            height="11.65px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 13.33331298828125,
              height: 11.6494140625,
            }}
            paths={[
              {
                d: "M9.61757 0C8.34727 0 7.26182 0.905455 6.66545 1.5297C6.06909 0.905455 4.98606 0 3.71636 0C1.52788 -2.69145e-16 0 1.52545 0 3.70909C0 6.11515 1.89758 7.6703 3.73333 9.17455C4.6 9.88546 5.49697 10.62 6.18485 11.4345C6.30061 11.5709 6.4703 11.6497 6.64848 11.6497L6.68364 11.6497C6.86242 11.6497 7.03151 11.5703 7.14667 11.4345C7.83576 10.62 8.73212 9.88485 9.59939 9.17455C11.4345 7.67091 13.3333 6.11576 13.3333 3.70909C13.3333 1.52545 11.8055 0 9.61757 0Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="14.96%"
            bottom="12.23%"
            left="7.69%"
            right="8.97%"
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
          children="Favorites"
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </Flex>
    </Flex>
  );
}
