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
import { Icon } from "@aws-amplify/ui-react";
export default function Returnbutton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: { Returnbutton: {} },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Returnbutton: {
          paths: [
            {
              d: "M59 30C59 46.0163 46.0163 59 30 59L30 61C47.1208 61 61 47.1208 61 30L59 30ZM30 59C13.9837 59 1 46.0163 1 30L-1 30C-1 47.1208 12.8792 61 30 61L30 59ZM1 30C1 13.9837 13.9837 1 30 1L30 -1C12.8792 -1 -1 12.8792 -1 30L1 30ZM30 1C46.0163 1 59 13.9837 59 30L61 30C61 12.8792 47.1208 -1 30 -1L30 1Z",
              stroke: "rgba(217,217,217,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM20.7071 0.707107C21.0976 0.316583 21.0976 -0.316583 20.7071 -0.707107L14.3431 -7.07107C13.9526 -7.46159 13.3195 -7.46159 12.9289 -7.07107C12.5384 -6.68054 12.5384 -6.04738 12.9289 -5.65685L18.5858 0L12.9289 5.65685C12.5384 6.04738 12.5384 6.68054 12.9289 7.07107C13.3195 7.46159 13.9526 7.46159 14.3431 7.07107L20.7071 0.707107ZM0 1L20 1L20 -1L0 -1L0 1Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
              style: { transform: "translate(66.67%, 50%)" },
            },
          ],
        },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="60px"
      height="60px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 60, height: 60 }}
      paths={[
        {
          d: "M59 30C59 46.0163 46.0163 59 30 59L30 61C47.1208 61 61 47.1208 61 30L59 30ZM30 59C13.9837 59 1 46.0163 1 30L-1 30C-1 47.1208 12.8792 61 30 61L30 59ZM1 30C1 13.9837 13.9837 1 30 1L30 -1C12.8792 -1 -1 12.8792 -1 30L1 30ZM30 1C46.0163 1 59 13.9837 59 30L61 30C61 12.8792 47.1208 -1 30 -1L30 1Z",
          stroke: "rgba(217,217,217,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM20.7071 0.707107C21.0976 0.316583 21.0976 -0.316583 20.7071 -0.707107L14.3431 -7.07107C13.9526 -7.46159 13.3195 -7.46159 12.9289 -7.07107C12.5384 -6.68054 12.5384 -6.04738 12.9289 -5.65685L18.5858 0L12.9289 5.65685C12.5384 6.04738 12.5384 6.68054 12.9289 7.07107C13.3195 7.46159 13.9526 7.46159 14.3431 7.07107L20.7071 0.707107ZM0 1L20 1L20 -1L0 -1L0 1Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 2,
          style: { transform: "translate(66.67%, 50%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Returnbutton")}
      {...rest}
    ></Icon>
  );
}
