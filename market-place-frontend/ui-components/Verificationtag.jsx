/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function Verificationtag(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="3px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Verificationtag")}
      {...rest}
    >
      <Icon
        width="13px"
        height="13px"
        viewBox={{ minX: 0, minY: 0, width: 13, height: 13 }}
        paths={[
          {
            d: "M6.5 0C7.09668 0 7.6722 0.0761719 8.22656 0.228516C8.78092 0.380859 9.2972 0.600911 9.77539 0.888672C10.2536 1.17643 10.6916 1.51497 11.0894 1.9043C11.4871 2.29362 11.8278 2.73161 12.1113 3.21826C12.3949 3.70492 12.6128 4.22331 12.7651 4.77344C12.9175 5.32357 12.9958 5.89909 13 6.5C13 7.09668 12.9238 7.6722 12.7715 8.22656C12.6191 8.78092 12.3991 9.2972 12.1113 9.77539C11.8236 10.2536 11.485 10.6916 11.0957 11.0894C10.7064 11.4871 10.2684 11.8278 9.78174 12.1113C9.29508 12.3949 8.77669 12.6128 8.22656 12.7651C7.67643 12.9175 7.10091 12.9958 6.5 13C5.90332 13 5.3278 12.9238 4.77344 12.7715C4.21908 12.6191 3.7028 12.3991 3.22461 12.1113C2.74642 11.8236 2.30843 11.485 1.91064 11.0957C1.51286 10.7064 1.1722 10.2684 0.888672 9.78174C0.605143 9.29508 0.387207 8.77669 0.234863 8.22656C0.0825195 7.67643 0.00423177 7.10091 0 6.5C0 5.90332 0.0761719 5.3278 0.228516 4.77344C0.380859 4.21908 0.600911 3.7028 0.888672 3.22461C1.17643 2.74642 1.51497 2.30843 1.9043 1.91064C2.29362 1.51286 2.73161 1.1722 3.21826 0.888672C3.70492 0.605143 4.22331 0.387207 4.77344 0.234863C5.32357 0.0825195 5.89909 0.00423177 6.5 0ZM10.3276 4.34814L9.46436 3.48486L5.28125 7.66797L3.53564 5.92236L2.67236 6.78564L5.28125 9.39453L10.3276 4.34814Z",
            fill: "rgba(12,188,139,1)",
            fillRule: "nonzero",
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
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(141,143,155,1)"
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
        children="Tested"
        {...getOverrideProps(overrides, "Tested")}
      ></Text>
    </Flex>
  );
}
