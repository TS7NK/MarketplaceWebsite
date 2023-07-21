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
export default function HealthcareBig(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: {
        Vector: {},
        "healthicons:health": {},
        Healthcare: {},
        HealthcareBig: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="6px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(3,166,0,1)"
      borderRadius="7px"
      padding="3px 6px 3px 6px"
      backgroundColor="rgba(3,166,0,1)"
      display="flex"
      {...getOverrideProps(overrides, "HealthcareBig")}
      {...rest}
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
        {...getOverrideProps(overrides, "healthicons:health")}
      >
        <Icon
          width="14.99px"
          height="15.42px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.9920654296875,
            height: 15.4169921875,
          }}
          paths={[
            {
              d: "M6.52171 0.333733C6.88216 0.11542 7.29552 0 7.71692 0C8.13833 -3.70074e-16 8.55168 0.11542 8.91213 0.333733L9.76088 0.8529C10.9517 1.58082 12.308 1.7429 13.6705 1.90623C14.1109 1.95915 14.5517 2.01165 14.988 2.08373C14.988 2.08373 14.9975 2.8479 14.9875 3.19457L14.9005 6.17415C14.8255 8.72957 13.6892 11.1525 11.74 12.9133C10.8205 13.7437 9.86921 14.4941 8.7763 15.1175C8.45422 15.2997 8.09309 15.4019 7.72329 15.4154C7.3535 15.429 6.98585 15.3535 6.6513 15.1954C5.38921 14.5954 4.27171 13.8346 3.2513 12.9133C1.30213 11.1525 0.16588 8.72957 0.0912962 6.17415L0.00462963 3.20415C-0.00578704 2.85207 0.00462963 2.08373 0.00462963 2.08373C0.358796 2.04207 0.71963 2.00748 1.08338 1.9729C2.6888 1.8204 4.34755 1.6629 5.70838 0.831233L6.52213 0.333733L6.52171 0.333733ZM6.6588 6.66707L6.6588 3.7504L8.32546 3.7504L8.32546 6.66707L11.2421 6.66707L11.2421 8.33373L8.32546 8.33373L8.32546 11.2504L6.6588 11.2504L6.6588 8.33373L3.74213 8.33373L3.74213 6.66707L6.6588 6.66707Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="12.5%"
          bottom="10.42%"
          left="12.54%"
          right="12.5%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="18.75px"
        textAlign="center"
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
        children="Healthcare"
        {...getOverrideProps(overrides, "Healthcare")}
      ></Text>
    </Flex>
  );
}
