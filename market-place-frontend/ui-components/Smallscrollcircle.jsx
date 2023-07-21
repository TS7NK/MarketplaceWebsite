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
export default function Smallscrollcircle(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: { Smallscrollcircle: {} },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Smallscrollcircle: {
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
    <Icon
      width="12px"
      height="12px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 12, height: 12 }}
      paths={[
        {
          d: "M11 6C11 8.76142 8.76142 11 6 11L6 13C9.86599 13 13 9.86599 13 6L11 6ZM6 11C3.23858 11 1 8.76142 1 6L-1 6C-1 9.86599 2.13401 13 6 13L6 11ZM1 6C1 3.23858 3.23858 1 6 1L6 -1C2.13401 -1 -1 2.13401 -1 6L1 6ZM6 1C8.76142 1 11 3.23858 11 6L13 6C13 2.13401 9.86599 -1 6 -1L6 1Z",
          stroke: "rgba(217,217,217,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Smallscrollcircle")}
      {...rest}
    ></Icon>
  );
}
