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
export default function AIModelsBig(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { aIModelsTag: "ChatGPT (Big)" },
      overrides: { "OpenAI - png 0": {}, ChatGPT: {}, AIModelsBig: {} },
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
      {...getOverrideProps(overrides, "AIModelsBig")}
      {...rest}
    >
      <Icon
        width="16px"
        height="16px"
        viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
        paths={[
          {
            d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z",
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
        fontSize="12px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="14.0625px"
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
