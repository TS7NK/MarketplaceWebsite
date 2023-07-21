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
export default function Scrollbuttonbig(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { scrollButton: "large" },
      overrides: { Scrollbuttonbig: {} },
    },
    {
      variantValues: { scrollButton: "large (hover)" },
      overrides: {
        Scrollbuttonbig: {
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
          d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
          fill: "rgba(255,215,0,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M11.0805 11.0805C10.7988 11.3621 10.4168 11.5203 10.0185 11.5203C9.62014 11.5203 9.23812 11.3621 8.95642 11.0805L0.458598 2.58268C0.315124 2.44411 0.200685 2.27835 0.121957 2.09508C0.0432295 1.91181 0.00178995 1.71469 5.67168e-05 1.51523C-0.00167652 1.31577 0.0363315 1.11797 0.111862 0.933355C0.187393 0.748743 0.298935 0.581021 0.439978 0.439977C0.581022 0.298934 0.748742 0.187393 0.933355 0.111862C1.11797 0.0363308 1.31577 -0.00167652 1.51523 5.67178e-05C1.71469 0.00178996 1.91181 0.0432295 2.09508 0.121957C2.27835 0.200685 2.44411 0.315124 2.58268 0.458597L10.0185 7.89438L17.4542 0.458597C17.7376 0.184963 18.117 0.0335519 18.5109 0.0369745C18.9047 0.0403971 19.2815 0.198379 19.56 0.476895C19.8385 0.755411 19.9965 1.13218 19.9999 1.52604C20.0034 1.91991 19.852 2.29936 19.5783 2.58268L11.0805 11.0805Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "evenodd",
          style: {
            transform:
              "translate(calc(50% - 10px - -16px), calc(50% - 5.76px - 4.24px))",
          },
        },
      ]}
      {...getOverrideProps(overrides, "Scrollbuttonbig")}
      {...rest}
    ></Icon>
  );
}
