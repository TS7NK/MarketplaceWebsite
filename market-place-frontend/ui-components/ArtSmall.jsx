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
export default function ArtSmall(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: { Vector: {}, "mdi:art": {}, Art: {}, ArtSmall: {} },
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
      border="1px SOLID rgba(148,128,99,1)"
      borderRadius="7px"
      padding="3px 6px 3px 6px"
      backgroundColor="rgba(148,128,99,1)"
      display="flex"
      {...getOverrideProps(overrides, "ArtSmall")}
      {...rest}
    >
      <View
        width="16px"
        height="16px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "mdi:art")}
      >
        <Icon
          width="12px"
          height="12px"
          viewBox={{ minX: 0, minY: 0, width: 12, height: 12 }}
          paths={[
            {
              d: "M9.66667 6C9.40145 6 9.1471 5.89464 8.95956 5.70711C8.77202 5.51957 8.66667 5.26522 8.66667 5C8.66667 4.73478 8.77202 4.48043 8.95956 4.29289C9.1471 4.10536 9.40145 4 9.66667 4C9.93188 4 10.1862 4.10536 10.3738 4.29289C10.5613 4.48043 10.6667 4.73478 10.6667 5C10.6667 5.26522 10.5613 5.51957 10.3738 5.70711C10.1862 5.89464 9.93188 6 9.66667 6ZM7.66667 3.33333C7.40145 3.33333 7.1471 3.22798 6.95956 3.04044C6.77202 2.8529 6.66667 2.59855 6.66667 2.33333C6.66667 2.06812 6.77202 1.81376 6.95956 1.62623C7.1471 1.43869 7.40145 1.33333 7.66667 1.33333C7.93188 1.33333 8.18624 1.43869 8.37377 1.62623C8.56131 1.81376 8.66667 2.06812 8.66667 2.33333C8.66667 2.59855 8.56131 2.8529 8.37377 3.04044C8.18624 3.22798 7.93188 3.33333 7.66667 3.33333ZM4.33333 3.33333C4.06812 3.33333 3.81376 3.22798 3.62623 3.04044C3.43869 2.8529 3.33333 2.59855 3.33333 2.33333C3.33333 2.06812 3.43869 1.81376 3.62623 1.62623C3.81376 1.43869 4.06812 1.33333 4.33333 1.33333C4.59855 1.33333 4.8529 1.43869 5.04044 1.62623C5.22798 1.81376 5.33333 2.06812 5.33333 2.33333C5.33333 2.59855 5.22798 2.8529 5.04044 3.04044C4.8529 3.22798 4.59855 3.33333 4.33333 3.33333ZM2.33333 6C2.06812 6 1.81376 5.89464 1.62623 5.70711C1.43869 5.51957 1.33333 5.26522 1.33333 5C1.33333 4.73478 1.43869 4.48043 1.62623 4.29289C1.81376 4.10536 2.06812 4 2.33333 4C2.59855 4 2.8529 4.10536 3.04044 4.29289C3.22798 4.48043 3.33333 4.73478 3.33333 5C3.33333 5.26522 3.22798 5.51957 3.04044 5.70711C2.8529 5.89464 2.59855 6 2.33333 6ZM6 0C4.4087 1.77636e-15 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 1.77636e-15 4.4087 0 6C2.36848e-15 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12C6.26522 12 6.51957 11.8946 6.70711 11.7071C6.89464 11.5196 7 11.2652 7 11C7 10.74 6.9 10.5067 6.74 10.3333C6.58667 10.1533 6.48667 9.92 6.48667 9.66667C6.48667 9.40145 6.59202 9.1471 6.77956 8.95956C6.9671 8.77202 7.22145 8.66667 7.48667 8.66667L8.66667 8.66667C9.55072 8.66667 10.3986 8.31548 11.0237 7.69036C11.6488 7.06523 12 6.21739 12 5.33333C12 2.38667 9.31333 0 6 0Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="12.5%"
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
        children="Art"
        {...getOverrideProps(overrides, "Art")}
      ></Text>
    </Flex>
  );
}
