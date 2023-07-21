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
export default function PublicProfileButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        Vector49925520: {},
        Vector49925521: {},
        "carbon:view-filled": {},
        Text: {},
        "Frame 249": {},
        PublicProfileButton: {},
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Vector49925520: {},
        Vector49925521: {},
        "carbon:view-filled": {},
        Text: {},
        "Frame 249": {},
        PublicProfileButton: { backgroundColor: "rgba(217,217,217,0.5)" },
      },
    },
    {
      variantValues: { property1: "active" },
      overrides: {
        Vector49925520: {},
        Vector49925521: {},
        "carbon:view-filled": {},
        Text: {},
        "Frame 249": {},
        PublicProfileButton: {
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
      {...getOverrideProps(overrides, "PublicProfileButton")}
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
        {...getOverrideProps(overrides, "Frame 249")}
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
          {...getOverrideProps(overrides, "carbon:view-filled")}
        >
          <Icon
            width="4px"
            height="4px"
            viewBox={{ minX: 0, minY: 0, width: 4, height: 4 }}
            paths={[
              {
                d: "M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="37.5%"
            bottom="37.5%"
            left="37.5%"
            right="37.5%"
            {...getOverrideProps(overrides, "Vector49925520")}
          ></Icon>
          <Icon
            width="15px"
            height="11px"
            viewBox={{ minX: 0, minY: 0, width: 14.99957275390625, height: 11 }}
            paths={[
              {
                d: "M14.9698 5.33C14.3817 3.80882 13.3608 2.49331 12.0332 1.54604C10.7056 0.598778 9.12953 0.0612865 7.49979 0C5.87005 0.0612865 4.29398 0.598778 2.96639 1.54604C1.6388 2.49331 0.617868 3.80882 0.0297873 5.33C-0.00992909 5.43985 -0.00992909 5.56015 0.0297873 5.67C0.617868 7.19118 1.6388 8.50669 2.96639 9.45396C4.29398 10.4012 5.87005 10.9387 7.49979 11C9.12953 10.9387 10.7056 10.4012 12.0332 9.45396C13.3608 8.50669 14.3817 7.19118 14.9698 5.67C15.0095 5.56015 15.0095 5.43985 14.9698 5.33ZM7.49979 8.75C6.857 8.75 6.22864 8.55939 5.69418 8.20228C5.15972 7.84516 4.74316 7.33758 4.49718 6.74372C4.25119 6.14986 4.18683 5.49639 4.31224 4.86596C4.43764 4.23552 4.74717 3.65642 5.20169 3.2019C5.65621 2.74738 6.23531 2.43785 6.86574 2.31245C7.49618 2.18705 8.14965 2.25141 8.74351 2.49739C9.33737 2.74338 9.84495 3.15994 10.2021 3.6944C10.5592 4.22886 10.7498 4.85721 10.7498 5.5C10.7485 6.36155 10.4056 7.18743 9.79642 7.79664C9.18722 8.40584 8.36133 8.74868 7.49979 8.75Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="15.63%"
            bottom="15.63%"
            left="3.13%"
            right="3.13%"
            {...getOverrideProps(overrides, "Vector49925521")}
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
          children="Public Profile"
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </Flex>
    </Flex>
  );
}
