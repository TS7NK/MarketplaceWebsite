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
export default function Closebutton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { variantValues: { property1: "Default" }, overrides: { Closebutton: {} } },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Closebutton: {
          paths: [
            {
              d: "M39 20C39 30.4934 30.4934 39 20 39L20 41C31.598 41 41 31.598 41 20L39 20ZM20 39C9.50659 39 1 30.4934 1 20L-1 20C-1 31.598 8.40202 41 20 41L20 39ZM1 20C1 9.50659 9.50659 1 20 1L20 -1C8.40202 -1 -1 8.40202 -1 20L1 20ZM20 1C30.4934 1 39 9.50659 39 20L41 20C41 8.40202 31.598 -1 20 -1L20 1Z",
              stroke: "rgba(217,217,217,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
              fill: "rgba(2,2,2,1)",
              fillRule: "evenodd",
              style: { transform: "translate(32.5%, 32.5%)" },
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
      width="40px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
      paths={[
        {
          d: "M39 20C39 30.4934 30.4934 39 20 39L20 41C31.598 41 41 31.598 41 20L39 20ZM20 39C9.50659 39 1 30.4934 1 20L-1 20C-1 31.598 8.40202 41 20 41L20 39ZM1 20C1 9.50659 9.50659 1 20 1L20 -1C8.40202 -1 -1 8.40202 -1 20L1 20ZM20 1C30.4934 1 39 9.50659 39 20L41 20C41 8.40202 31.598 -1 20 -1L20 1Z",
          stroke: "rgba(217,217,217,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
          fill: "rgba(2,2,2,1)",
          fillRule: "evenodd",
          style: { transform: "translate(32.5%, 32.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Closebutton")}
      {...rest}
    ></Icon>
  );
}
