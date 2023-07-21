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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Reportbutton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        Vector: {},
        "ic:round-report-problem": {},
        Report: {},
        "Frame 101": {},
        Reportbutton: {},
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Vector: {},
        "ic:round-report-problem": {},
        Report: { color: "rgba(0,0,0,1)" },
        "Frame 101": {},
        Reportbutton: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="6px"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Reportbutton")}
      {...rest}
    >
      <Flex
        gap="6px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 101")}
      >
        <View
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ic:round-report-problem")}
        >
          <Icon
            width="17.11px"
            height="15px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 17.113128662109375,
              height: 15.001953125,
            }}
            paths={[
              {
                d: "M0.835726 15.0019L16.2774 15.0019C16.9191 15.0019 17.3191 14.3102 17.0024 13.7519L9.27739 0.41854C9.20482 0.291406 9.09992 0.185727 8.97333 0.112222C8.84673 0.0387163 8.70295 0 8.55656 0C8.41017 0 8.26639 0.0387163 8.13979 0.112222C8.0132 0.185727 7.9083 0.291406 7.83573 0.41854L0.110726 13.7519C-0.20594 14.3102 0.19406 15.0019 0.835726 15.0019ZM9.39406 12.5019L7.72739 12.5019L7.72739 10.8352L9.39406 10.8352L9.39406 12.5019ZM8.56073 9.16854C8.10239 9.16854 7.72739 8.79354 7.72739 8.33521L7.72739 6.66854C7.72739 6.21021 8.10239 5.83521 8.56073 5.83521C9.01906 5.83521 9.39406 6.21021 9.39406 6.66854L9.39406 8.33521C9.39406 8.79354 9.01906 9.16854 8.56073 9.16854Z",
                fill: "rgba(207,21,21,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.49%"
            bottom="12.5%"
            left="7.2%"
            right="7.24%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="500"
          color="rgba(141,143,155,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Report"
          {...getOverrideProps(overrides, "Report")}
        ></Text>
      </Flex>
    </Flex>
  );
}
