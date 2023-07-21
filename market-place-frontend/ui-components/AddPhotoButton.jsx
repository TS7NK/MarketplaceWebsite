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
export default function AddPhotoButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        "Ellipse 51": {},
        Vector: {},
        "tabler:plus": {},
        AddPhotoButton: {},
      },
    },
    {
      variantValues: { property1: "Variant2" },
      overrides: {
        "Ellipse 51": {
          paths: [
            {
              d: "M58 30C58 45.464 45.464 58 30 58L30 62C47.6731 62 62 47.6731 62 30L58 30ZM30 58C14.536 58 2 45.464 2 30L-2 30C-2 47.6731 12.3269 62 30 62L30 58ZM2 30C2 14.536 14.536 2 30 2L30 -2C12.3269 -2 -2 12.3269 -2 30L2 30ZM30 2C45.464 2 58 14.536 58 30L62 30C62 12.3269 47.6731 -2 30 -2L30 2Z",
              stroke: "rgba(217,217,217,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
            },
            {
              d: "M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z",
              fill: "rgba(236,236,236,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Vector: {},
        "tabler:plus": {},
        AddPhotoButton: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="60px"
      height="60px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddPhotoButton")}
      {...rest}
    >
      <Icon
        width="60px"
        height="60px"
        viewBox={{ minX: 0, minY: 0, width: 60, height: 60 }}
        paths={[
          {
            d: "M58 30C58 45.464 45.464 58 30 58L30 62C47.6731 62 62 47.6731 62 30L58 30ZM30 58C14.536 58 2 45.464 2 30L-2 30C-2 47.6731 12.3269 62 30 62L30 58ZM2 30C2 14.536 14.536 2 30 2L30 -2C12.3269 -2 -2 12.3269 -2 30L2 30ZM30 2C45.464 2 58 14.536 58 30L62 30C62 12.3269 47.6731 -2 30 -2L30 2Z",
            stroke: "rgba(217,217,217,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
          {
            d: "M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z",
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
        width="22.5px"
        height="22.5px"
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
          width="22.5px"
          height="22.5px"
          viewBox={{ minX: 0, minY: 0, width: 22.5, height: 22.5 }}
          paths={[
            {
              d: "M12.25 0C12.25 -0.552285 11.8023 -1 11.25 -1C10.6977 -1 10.25 -0.552285 10.25 0L12.25 0ZM10.25 22.5C10.25 23.0523 10.6977 23.5 11.25 23.5C11.8023 23.5 12.25 23.0523 12.25 22.5L10.25 22.5ZM0 10.25C-0.552285 10.25 -1 10.6977 -1 11.25C-1 11.8023 -0.552285 12.25 0 12.25L0 10.25ZM22.5 12.25C23.0523 12.25 23.5 11.8023 23.5 11.25C23.5 10.6977 23.0523 10.25 22.5 10.25L22.5 12.25ZM10.25 0L10.25 22.5L12.25 22.5L12.25 0L10.25 0ZM0 12.25L22.5 12.25L22.5 10.25L0 10.25L0 12.25Z",
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
