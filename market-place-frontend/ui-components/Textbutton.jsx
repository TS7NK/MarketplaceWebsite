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
export default function Textbutton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        Vector43714542: {},
        Vector43714543: {},
        Group: {},
        Textbutton: {},
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Vector43714542: {},
        Vector43714543: {
          paths: [
            {
              d: "M1.25 0C0.918479 0 0.600537 0.131696 0.366117 0.366117C0.131696 0.600537 0 0.918479 0 1.25C0 1.58152 0.131696 1.89946 0.366117 2.13388C0.600537 2.3683 0.918479 2.5 1.25 2.5L5.83333 2.5L5.83333 14.5833C5.83333 14.9149 5.96503 15.2328 6.19945 15.4672C6.43387 15.7016 6.75181 15.8333 7.08333 15.8333C7.41485 15.8333 7.7328 15.7016 7.96722 15.4672C8.20164 15.2328 8.33333 14.9149 8.33333 14.5833L8.33333 2.5L12.9167 2.5C13.2482 2.5 13.5661 2.3683 13.8006 2.13388C14.035 1.89946 14.1667 1.58152 14.1667 1.25C14.1667 0.918479 14.035 0.600537 13.8006 0.366117C13.5661 0.131696 13.2482 0 12.9167 0L1.25 0Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Group: {},
        Textbutton: {},
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
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Textbutton")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Group")}
      >
        <Icon
          width="20px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          paths={[]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector43714542")}
        ></Icon>
        <Icon
          width="14.17px"
          height="15.83px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.166656494140625,
            height: 15.8330078125,
          }}
          paths={[
            {
              d: "M1.25 0C0.918479 0 0.600537 0.131696 0.366117 0.366117C0.131696 0.600537 0 0.918479 0 1.25C0 1.58152 0.131696 1.89946 0.366117 2.13388C0.600537 2.3683 0.918479 2.5 1.25 2.5L5.83333 2.5L5.83333 14.5833C5.83333 14.9149 5.96503 15.2328 6.19945 15.4672C6.43387 15.7016 6.75181 15.8333 7.08333 15.8333C7.41485 15.8333 7.7328 15.7016 7.96722 15.4672C8.20164 15.2328 8.33333 14.9149 8.33333 14.5833L8.33333 2.5L12.9167 2.5C13.2482 2.5 13.5661 2.3683 13.8006 2.13388C14.035 1.89946 14.1667 1.58152 14.1667 1.25C14.1667 0.918479 14.035 0.600537 13.8006 0.366117C13.5661 0.131696 13.2482 0 12.9167 0L1.25 0Z",
              fill: "rgba(141,143,155,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="10.42%"
          bottom="10.42%"
          left="14.58%"
          right="14.58%"
          {...getOverrideProps(overrides, "Vector43714543")}
        ></Icon>
      </View>
    </View>
  );
}
