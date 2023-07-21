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
import DetailsvsExamples from "./DetailsvsExamples";
import Chats from "./Chats";
import { Flex, View } from "@aws-amplify/ui-react";
export default function ExamplePage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Examples Selected" },
      overrides: {
        "Details vs. Examples": {},
        Chats: {},
        "vertical scroll frame": {},
        ExamplePage: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="40px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "ExamplePage")}
      {...rest}
    >
      <DetailsvsExamples
        display="flex"
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(217,217,217,1)"
        borderRadius="30px"
        padding="5px 5px 5px 5px"
        property1="Examples selected"
        {...getOverrideProps(overrides, "Details vs. Examples")}
      ></DetailsvsExamples>
      <View
        width="500px"
        height="600px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="2px SOLID rgba(217,217,217,1)"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,250,223,1)"
        {...getOverrideProps(overrides, "vertical scroll frame")}
      >
        <Chats
          width="460px"
          height="1633px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="40px"
          left="calc(50% - 230px - 0px)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Chats")}
        ></Chats>
      </View>
    </Flex>
  );
}
