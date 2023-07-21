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
export default function Scrollbuttonsmall(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { scrollButton: "Default" },
      overrides: {
        "Ellipse 50": {},
        Vector: {},
        "mdi:filter": {},
        Scrollbuttonsmall: {},
      },
    },
    {
      variantValues: { scrollButton: "hover" },
      overrides: {
        "Ellipse 50": {},
        Vector: {},
        "mdi:filter": {},
        Scrollbuttonsmall: {
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
      width="20px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Scrollbuttonsmall")}
      {...rest}
    >
      <Icon
        width="20px"
        height="20px"
        viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
        paths={[
          {
            d: "M19 10C19 14.9706 14.9706 19 10 19L10 21C16.0751 21 21 16.0751 21 10L19 10ZM10 19C5.02944 19 1 14.9706 1 10L-1 10C-1 16.0751 3.92487 21 10 21L10 19ZM1 10C1 5.02944 5.02944 1 10 1L10 -1C3.92487 -1 -1 3.92487 -1 10L1 10ZM10 1C14.9706 1 19 5.02944 19 10L21 10C21 3.92487 16.0751 -1 10 -1L10 1Z",
            stroke: "rgba(217,217,217,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
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
        {...getOverrideProps(overrides, "Ellipse 50")}
      ></Icon>
      <View
        width="10px"
        height="11px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="25%"
        bottom="20%"
        left="25%"
        right="25%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "mdi:filter")}
      >
        <Icon
          width="10px"
          height="5.76px"
          viewBox={{ minX: 0, minY: 0, width: 5.760158538818359, height: 10 }}
          paths={[
            {
              d: "M5.54025 5.54025C5.3994 5.68106 5.20839 5.76016 5.00923 5.76016C4.81007 5.76016 4.61906 5.68106 4.47821 5.54025L0.229299 1.29134C0.157562 1.22205 0.100342 1.13917 0.0609786 1.04754C0.0216147 0.955903 0.000894977 0.857345 2.83584e-05 0.757616C-0.00083826 0.657887 0.0181658 0.558984 0.0559312 0.466678C0.0936966 0.374372 0.149467 0.290511 0.219989 0.219989C0.290511 0.149467 0.374371 0.0936963 0.466677 0.0559308C0.558983 0.0181654 0.657887 -0.00083826 0.757616 2.83589e-05C0.857345 0.000894978 0.955903 0.0216147 1.04754 0.0609786C1.13917 0.100342 1.22205 0.157562 1.29134 0.229298L5.00923 3.94719L8.72712 0.229298C8.86878 0.0924815 9.0585 0.016776 9.25544 0.0184873C9.45237 0.0201986 9.64075 0.0991896 9.78001 0.238448C9.91927 0.377706 9.99826 0.566088 9.99997 0.763022C10.0017 0.959955 9.92598 1.14968 9.78916 1.29134L5.54025 5.54025Z",
              fill: "rgba(141,143,155,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 2.88px - 2.62px)"
          left="calc(50% - 5px - -8px)"
          transformOrigin="top left"
          transform="rotate(90deg)"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </View>
  );
}
