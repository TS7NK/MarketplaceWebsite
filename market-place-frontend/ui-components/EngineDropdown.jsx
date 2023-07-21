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
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function EngineDropdown(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: { "Chat GPT": {}, Vector: {}, EngineDropdown: {} },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        "Chat GPT": {},
        Vector: {},
        EngineDropdown: {
          padding: "6px 10px 6px 10px",
          backgroundColor: "rgba(217,217,217,0.5)",
        },
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
      border="1px SOLID rgba(217,217,217,1)"
      borderRadius="6px"
      padding="5px 9px 5px 9px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "EngineDropdown")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
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
        children="GPT-4"
        {...getOverrideProps(overrides, "Chat GPT")}
      ></Text>
      <Icon
        width="12px"
        height="6.91px"
        viewBox={{ minX: 0, minY: 0, width: 12, height: 6.912109375 }}
        paths={[
          {
            d: "M6.6483 6.6483C6.47928 6.81727 6.25007 6.91219 6.01108 6.91219C5.77208 6.91219 5.54287 6.81727 5.37385 6.6483L0.275159 1.54961C0.189075 1.46646 0.120411 1.36701 0.0731743 1.25705C0.0259377 1.14708 0.00107397 1.02881 3.40301e-05 0.909139C-0.00100591 0.789464 0.0217989 0.670781 0.0671174 0.560013C0.112436 0.449246 0.179361 0.348613 0.263987 0.263986C0.348613 0.17936 0.449245 0.112436 0.560013 0.067117C0.67078 0.0217985 0.789464 -0.00100591 0.909139 3.40307e-05C1.02881 0.00107397 1.14708 0.0259377 1.25705 0.0731743C1.36701 0.120411 1.46646 0.189074 1.54961 0.275158L6.01108 4.73663L10.4725 0.275158C10.6425 0.110978 10.8702 0.0201312 11.1065 0.0221847C11.3428 0.0242383 11.5689 0.119028 11.736 0.286137C11.9031 0.453247 11.9979 0.679306 12 0.915626C12.002 1.15195 11.9112 1.37962 11.747 1.54961L6.6483 6.6483Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "evenodd",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </Flex>
  );
}
