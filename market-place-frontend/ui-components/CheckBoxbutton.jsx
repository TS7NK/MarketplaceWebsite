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
export default function CheckBoxbutton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: { CheckBoxbutton: {} },
    },
    {
      variantValues: { property1: "active" },
      overrides: {
        CheckBoxbutton: {
          paths: [
            {
              d: "M10 0C10.918 0 11.8034 0.117188 12.6562 0.351562C13.5091 0.585938 14.3034 0.924479 15.0391 1.36719C15.7747 1.8099 16.4486 2.33073 17.0605 2.92969C17.6725 3.52865 18.1966 4.20247 18.6328 4.95117C19.069 5.69987 19.4043 6.4974 19.6387 7.34375C19.873 8.1901 19.9935 9.07552 20 10C20 10.918 19.8828 11.8034 19.6484 12.6562C19.4141 13.5091 19.0755 14.3034 18.6328 15.0391C18.1901 15.7747 17.6693 16.4486 17.0703 17.0605C16.4714 17.6725 15.7975 18.1966 15.0488 18.6328C14.3001 19.069 13.5026 19.4043 12.6562 19.6387C11.8099 19.873 10.9245 19.9935 10 20C9.08203 20 8.19661 19.8828 7.34375 19.6484C6.49089 19.4141 5.69661 19.0755 4.96094 18.6328C4.22526 18.1901 3.55143 17.6693 2.93945 17.0703C2.32747 16.4714 1.80339 15.7975 1.36719 15.0488C0.93099 14.3001 0.595703 13.5026 0.361328 12.6562C0.126953 11.8099 0.00651042 10.9245 0 10C0 9.08203 0.117188 8.19661 0.351562 7.34375C0.585938 6.49089 0.924479 5.69661 1.36719 4.96094C1.8099 4.22526 2.33073 3.55143 2.92969 2.93945C3.52865 2.32747 4.20247 1.80339 4.95117 1.36719C5.69987 0.93099 6.4974 0.595703 7.34375 0.361328C8.1901 0.126953 9.07552 0.00651042 10 0ZM15.8887 6.68945L14.5605 5.36133L8.125 11.7969L5.43945 9.11133L4.11133 10.4395L8.125 14.4531L15.8887 6.68945Z",
              fill: "rgba(0,131,252,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M19 10C19 14.9706 14.9706 19 10 19L10 21C16.0751 21 21 16.0751 21 10L19 10ZM10 19C5.02944 19 1 14.9706 1 10L-1 10C-1 16.0751 3.92487 21 10 21L10 19ZM1 10C1 5.02944 5.02944 1 10 1L10 -1C3.92487 -1 -1 3.92487 -1 10L1 10ZM10 1C14.9706 1 19 5.02944 19 10L21 10C21 3.92487 16.0751 -1 10 -1L10 1Z",
              stroke: "rgba(0,131,252,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
              style: { transform: "translate(0%, 0%)" },
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
      width="20px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
      paths={[
        {
          d: "M18 10C18 14.4183 14.4183 18 10 18L10 22C16.6274 22 22 16.6274 22 10L18 10ZM10 18C5.58172 18 2 14.4183 2 10L-2 10C-2 16.6274 3.37258 22 10 22L10 18ZM2 10C2 5.58172 5.58172 2 10 2L10 -2C3.37258 -2 -2 3.37258 -2 10L2 10ZM10 2C14.4183 2 18 5.58172 18 10L22 10C22 3.37258 16.6274 -2 10 -2L10 2Z",
          stroke: "rgba(0,131,252,1)",
          fillRule: "nonzero",
          strokeWidth: 2,
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "CheckBoxbutton")}
      {...rest}
    ></Icon>
  );
}
