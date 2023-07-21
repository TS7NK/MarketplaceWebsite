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
export default function AIModelsSmall(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { aIModelsTag: "ChatGPT (Small)" },
      overrides: { "OpenAI - png 0": {}, ChatGPT: {}, AIModelsSmall: {} },
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
      borderRadius="6px"
      padding="3px 6px 3px 6px"
      backgroundColor="rgba(116,170,156,1)"
      display="flex"
      {...getOverrideProps(overrides, "AIModelsSmall")}
      {...rest}
    >
      <Icon
        width="12px"
        height="12px"
        viewBox={{ minX: 0, minY: 0, width: 12, height: 12 }}
        paths={[
          {
            d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "OpenAI - png 0")}
      ></Icon>
      <Text
        fontFamily="Roboto"
        fontSize="10px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="11.71875px"
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
        children="ChatGPT"
        {...getOverrideProps(overrides, "ChatGPT")}
      ></Text>
    </Flex>
  );
}
