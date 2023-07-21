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
import { Icon, View } from "@aws-amplify/ui-react";
export default function AddButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        "Ellipse 51": {},
        Vector: {},
        "tabler:plus": {},
        AddButton: {},
      },
    },
    {
      variantValues: { property1: "Variant2" },
      overrides: {
        "Ellipse 51": {},
        Vector: {},
        "tabler:plus": {},
        AddButton: {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.10000000149011612)",
        },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="30px"
      height="30px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddButton")}
      {...rest}
    >
      <Icon
        width="30px"
        height="30px"
        viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
        paths={[
          {
            d: "M29 15C29 22.732 22.732 29 15 29L15 31C23.8366 31 31 23.8366 31 15L29 15ZM15 29C7.26801 29 1 22.732 1 15L-1 15C-1 23.8366 6.16344 31 15 31L15 29ZM1 15C1 7.26801 7.26801 1 15 1L15 -1C6.16344 -1 -1 6.16344 -1 15L1 15ZM15 1C22.732 1 29 7.26801 29 15L31 15C31 6.16344 23.8366 -1 15 -1L15 1Z",
            stroke: "rgba(217,217,217,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Ellipse 51")}
      ></Icon>
      <View
        width="11.25px"
        height="11.25px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="31.25%"
        bottom="31.25%"
        left="31.25%"
        right="31.25%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "tabler:plus")}
      >
        <Icon
          width="11.25px"
          height="11.25px"
          viewBox={{ minX: 0, minY: 0, width: 11.25, height: 11.25 }}
          paths={[
            {
              d: "M6.625 0C6.625 -0.552285 6.17728 -1 5.625 -1C5.07272 -1 4.625 -0.552285 4.625 0L6.625 0ZM4.625 11.25C4.625 11.8023 5.07272 12.25 5.625 12.25C6.17728 12.25 6.625 11.8023 6.625 11.25L4.625 11.25ZM0 4.625C-0.552285 4.625 -1 5.07272 -1 5.625C-1 6.17728 -0.552285 6.625 0 6.625L0 4.625ZM11.25 6.625C11.8023 6.625 12.25 6.17728 12.25 5.625C12.25 5.07272 11.8023 4.625 11.25 4.625L11.25 6.625ZM4.625 0L4.625 11.25L6.625 11.25L6.625 0L4.625 0ZM0 6.625L11.25 6.625L11.25 4.625L0 4.625L0 6.625Z",
              stroke: "rgba(141,143,155,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 2,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </View>
  );
}
