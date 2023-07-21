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
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function Deletebutton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { delete: "Default" },
      overrides: {
        Vector3135116: {},
        Vector3135117: {},
        Vector3135118: {},
        Vector3135119: {},
        Vector3135120: {},
        Vector3135121: {},
        trash: {},
        "_Nav menu button": {},
        Deletebutton: {},
      },
    },
    {
      variantValues: { delete: "hover" },
      overrides: {
        Vector3135116: {},
        Vector3135117: {
          paths: [
            {
              d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM17.3333 1C17.8856 1 18.3333 0.552285 18.3333 0C18.3333 -0.552285 17.8856 -1 17.3333 -1L17.3333 1ZM0 1L17.3333 1L17.3333 -1L0 -1L0 1Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 2,
            },
          ],
        },
        Vector3135118: {
          paths: [
            {
              d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 6.5C-1 7.05229 -0.552285 7.5 0 7.5C0.552285 7.5 1 7.05229 1 6.5L-1 6.5ZM-1 0L-1 6.5L1 6.5L1 0L-1 0Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 2,
            },
          ],
        },
        Vector3135119: {
          paths: [
            {
              d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 6.5C-1 7.05229 -0.552285 7.5 0 7.5C0.552285 7.5 1 7.05229 1 6.5L-1 6.5ZM-1 0L-1 6.5L1 6.5L1 0L-1 0Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 2,
            },
          ],
        },
        Vector3135120: {
          paths: [
            {
              d: "M0.996546 -0.0830455C0.950681 -0.633422 0.467332 -1.04241 -0.0830455 -0.996546C-0.633422 -0.950681 -1.04241 -0.467332 -0.996546 0.0830455L0.996546 -0.0830455ZM1.08333 13L2.08333 13C2.08333 12.9723 2.08218 12.9446 2.07988 12.917L1.08333 13ZM14.0833 13L13.0868 12.917C13.0845 12.9446 13.0833 12.9723 13.0833 13L14.0833 13ZM16.1632 0.0830455C16.2091 -0.467332 15.8001 -0.950681 15.2497 -0.996546C14.6993 -1.04241 14.216 -0.633422 14.1701 -0.0830455L16.1632 0.0830455ZM-0.996546 0.0830455L0.0867875 13.083L2.07988 12.917L0.996546 -0.0830455L-0.996546 0.0830455ZM0.0833333 13C0.0833333 13.8399 0.416963 14.6453 1.01083 15.2392L2.42504 13.825C2.20625 13.6062 2.08333 13.3094 2.08333 13L0.0833333 13ZM1.01083 15.2392C1.60469 15.833 2.41015 16.1667 3.25 16.1667L3.25 14.1667C2.94058 14.1667 2.64383 14.0437 2.42504 13.825L1.01083 15.2392ZM3.25 16.1667L11.9167 16.1667L11.9167 14.1667L3.25 14.1667L3.25 16.1667ZM11.9167 16.1667C12.7565 16.1667 13.562 15.833 14.1558 15.2392L12.7416 13.825C12.5228 14.0437 12.2261 14.1667 11.9167 14.1667L11.9167 16.1667ZM14.1558 15.2392C14.7497 14.6453 15.0833 13.8399 15.0833 13L13.0833 13C13.0833 13.3094 12.9604 13.6062 12.7416 13.825L14.1558 15.2392ZM15.0799 13.083L16.1632 0.0830455L14.1701 -0.0830455L13.0868 12.917L15.0799 13.083Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 2,
            },
          ],
        },
        Vector3135121: {
          paths: [
            {
              d: "M-1 4.33333C-1 4.88562 -0.552285 5.33333 0 5.33333C0.552285 5.33333 1 4.88562 1 4.33333L-1 4.33333ZM1.08333 0L1.08333 -1L1.08333 0ZM5.41667 0L5.41667 -1L5.41667 0ZM5.5 4.33333C5.5 4.88562 5.94772 5.33333 6.5 5.33333C7.05229 5.33333 7.5 4.88562 7.5 4.33333L5.5 4.33333ZM1 4.33333L1 1.08333L-1 1.08333L-1 4.33333L1 4.33333ZM1 1.08333C1 1.06123 1.00878 1.04004 1.02441 1.02441L-0.389806 -0.389806C-0.780506 0.000894536 -1 0.530798 -1 1.08333L1 1.08333ZM1.02441 1.02441C1.04004 1.00878 1.06123 1 1.08333 1L1.08333 -1C0.530799 -1 0.000895199 -0.780507 -0.389806 -0.389806L1.02441 1.02441ZM1.08333 1L5.41667 1L5.41667 -1L1.08333 -1L1.08333 1ZM5.41667 1C5.43877 1 5.45996 1.00878 5.47559 1.02441L6.88981 -0.389806C6.4991 -0.780507 5.9692 -1 5.41667 -1L5.41667 1ZM5.47559 1.02441C5.49122 1.04004 5.5 1.06123 5.5 1.08333L7.5 1.08333C7.5 0.530798 7.28051 0.000894536 6.88981 -0.389806L5.47559 1.02441ZM5.5 1.08333L5.5 4.33333L7.5 4.33333L7.5 1.08333L5.5 1.08333Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 2,
            },
          ],
        },
        trash: {},
        "_Nav menu button": {},
        Deletebutton: { backgroundColor: "rgba(207,21,21,1)" },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="9px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="6px"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Deletebutton")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="row"
        width="29px"
        height="29px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="8px"
        padding="8px 8px 8px 8px"
        display="flex"
        {...getOverrideProps(overrides, "_Nav menu button")}
      >
        <View
          width="26px"
          height="26px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "trash")}
        >
          <Icon
            width="26px"
            height="26px"
            viewBox={{ minX: 0, minY: 0, width: 26, height: 26 }}
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
            {...getOverrideProps(overrides, "Vector3135116")}
          ></Icon>
          <Icon
            width="17.33px"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 17.3333740234375, height: 1 }}
            paths={[
              {
                d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM17.3333 1C17.8856 1 18.3333 0.552285 18.3333 0C18.3333 -0.552285 17.8856 -1 17.3333 -1L17.3333 1ZM0 1L17.3333 1L17.3333 -1L0 -1L0 1Z",
                stroke: "rgba(207,21,21,1)",
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
            top="29.17%"
            bottom="70.83%"
            left="16.67%"
            right="16.67%"
            {...getOverrideProps(overrides, "Vector3135117")}
          ></Icon>
          <Icon
            width="0px"
            height="6.5px"
            viewBox={{ minX: 0, minY: 0, width: 1, height: 6.5 }}
            paths={[
              {
                d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 6.5C-1 7.05229 -0.552285 7.5 0 7.5C0.552285 7.5 1 7.05229 1 6.5L-1 6.5ZM-1 0L-1 6.5L1 6.5L1 0L-1 0Z",
                stroke: "rgba(207,21,21,1)",
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
            top="45.83%"
            bottom="29.17%"
            left="41.67%"
            right="58.33%"
            {...getOverrideProps(overrides, "Vector3135118")}
          ></Icon>
          <Icon
            width="0px"
            height="6.5px"
            viewBox={{ minX: 0, minY: 0, width: 1, height: 6.5 }}
            paths={[
              {
                d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 6.5C-1 7.05229 -0.552285 7.5 0 7.5C0.552285 7.5 1 7.05229 1 6.5L-1 6.5ZM-1 0L-1 6.5L1 6.5L1 0L-1 0Z",
                stroke: "rgba(207,21,21,1)",
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
            top="45.83%"
            bottom="29.17%"
            left="58.33%"
            right="41.67%"
            {...getOverrideProps(overrides, "Vector3135119")}
          ></Icon>
          <Icon
            width="15.17px"
            height="15.17px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 15.1666259765625,
              height: 15.16650390625,
            }}
            paths={[
              {
                d: "M0.996546 -0.0830455C0.950681 -0.633422 0.467332 -1.04241 -0.0830455 -0.996546C-0.633422 -0.950681 -1.04241 -0.467332 -0.996546 0.0830455L0.996546 -0.0830455ZM1.08333 13L2.08333 13C2.08333 12.9723 2.08218 12.9446 2.07988 12.917L1.08333 13ZM14.0833 13L13.0868 12.917C13.0845 12.9446 13.0833 12.9723 13.0833 13L14.0833 13ZM16.1632 0.0830455C16.2091 -0.467332 15.8001 -0.950681 15.2497 -0.996546C14.6993 -1.04241 14.216 -0.633422 14.1701 -0.0830455L16.1632 0.0830455ZM-0.996546 0.0830455L0.0867875 13.083L2.07988 12.917L0.996546 -0.0830455L-0.996546 0.0830455ZM0.0833333 13C0.0833333 13.8399 0.416963 14.6453 1.01083 15.2392L2.42504 13.825C2.20625 13.6062 2.08333 13.3094 2.08333 13L0.0833333 13ZM1.01083 15.2392C1.60469 15.833 2.41015 16.1667 3.25 16.1667L3.25 14.1667C2.94058 14.1667 2.64383 14.0437 2.42504 13.825L1.01083 15.2392ZM3.25 16.1667L11.9167 16.1667L11.9167 14.1667L3.25 14.1667L3.25 16.1667ZM11.9167 16.1667C12.7565 16.1667 13.562 15.833 14.1558 15.2392L12.7416 13.825C12.5228 14.0437 12.2261 14.1667 11.9167 14.1667L11.9167 16.1667ZM14.1558 15.2392C14.7497 14.6453 15.0833 13.8399 15.0833 13L13.0833 13C13.0833 13.3094 12.9604 13.6062 12.7416 13.825L14.1558 15.2392ZM15.0799 13.083L16.1632 0.0830455L14.1701 -0.0830455L13.0868 12.917L15.0799 13.083Z",
                stroke: "rgba(207,21,21,1)",
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
            top="29.17%"
            bottom="12.5%"
            left="20.83%"
            right="20.83%"
            {...getOverrideProps(overrides, "Vector3135120")}
          ></Icon>
          <Icon
            width="6.5px"
            height="4.33px"
            viewBox={{ minX: 0, minY: 0, width: 6.5, height: 4.33349609375 }}
            paths={[
              {
                d: "M-1 4.33333C-1 4.88562 -0.552285 5.33333 0 5.33333C0.552285 5.33333 1 4.88562 1 4.33333L-1 4.33333ZM1.08333 0L1.08333 -1L1.08333 0ZM5.41667 0L5.41667 -1L5.41667 0ZM5.5 4.33333C5.5 4.88562 5.94772 5.33333 6.5 5.33333C7.05229 5.33333 7.5 4.88562 7.5 4.33333L5.5 4.33333ZM1 4.33333L1 1.08333L-1 1.08333L-1 4.33333L1 4.33333ZM1 1.08333C1 1.06123 1.00878 1.04004 1.02441 1.02441L-0.389806 -0.389806C-0.780506 0.000894536 -1 0.530798 -1 1.08333L1 1.08333ZM1.02441 1.02441C1.04004 1.00878 1.06123 1 1.08333 1L1.08333 -1C0.530799 -1 0.000895199 -0.780507 -0.389806 -0.389806L1.02441 1.02441ZM1.08333 1L5.41667 1L5.41667 -1L1.08333 -1L1.08333 1ZM5.41667 1C5.43877 1 5.45996 1.00878 5.47559 1.02441L6.88981 -0.389806C6.4991 -0.780507 5.9692 -1 5.41667 -1L5.41667 1ZM5.47559 1.02441C5.49122 1.04004 5.5 1.06123 5.5 1.08333L7.5 1.08333C7.5 0.530798 7.28051 0.000894536 6.88981 -0.389806L5.47559 1.02441ZM5.5 1.08333L5.5 4.33333L7.5 4.33333L7.5 1.08333L5.5 1.08333Z",
                stroke: "rgba(207,21,21,1)",
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
            top="12.5%"
            bottom="70.83%"
            left="37.5%"
            right="37.5%"
            {...getOverrideProps(overrides, "Vector3135121")}
          ></Icon>
        </View>
      </Flex>
    </Flex>
  );
}
