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
export default function SecondaryActionButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { secondaryActionButton: "Default" },
      overrides: {
        Vector: {},
        "Add to Wishlist": {},
        "Frame 25": {},
        SecondaryActionButton: {},
      },
    },
    {
      variantValues: { secondaryActionButton: "Hover" },
      overrides: {
        Vector: {},
        "Add to Wishlist": {},
        "Frame 25": {},
        SecondaryActionButton: {
          padding: "4px 13px 4px 13px",
          border: "2px SOLID rgba(255,215,0,1)",
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
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      borderRadius="10px"
      padding="6px 15px 6px 15px"
      display="flex"
      {...getOverrideProps(overrides, "SecondaryActionButton")}
      {...rest}
    >
      <Flex
        gap="6px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 25")}
      >
        <Icon
          width="20px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          paths={[
            {
              d: "M10 0C4.48615 0 0 4.48615 0 10C0 15.5138 4.48615 20 10 20C15.5138 20 20 15.5138 20 10C20 4.48615 15.5138 0 10 0ZM10 1.53846C14.6823 1.53846 18.4615 5.31769 18.4615 10C18.4615 14.6823 14.6823 18.4615 10 18.4615C5.31769 18.4615 1.53846 14.6823 1.53846 10C1.53846 5.31769 5.31769 1.53846 10 1.53846ZM9.23077 5.38462L9.23077 9.23077L5.38462 9.23077L5.38462 10.7692L9.23077 10.7692L9.23077 14.6154L10.7692 14.6154L10.7692 10.7692L14.6154 10.7692L14.6154 9.23077L10.7692 9.23077L10.7692 5.38462L9.23077 5.38462Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="18.75px"
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
          children="Add to Wishlist"
          {...getOverrideProps(overrides, "Add to Wishlist")}
        ></Text>
      </Flex>
    </Flex>
  );
}
