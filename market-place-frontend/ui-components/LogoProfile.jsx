/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function LogoProfile(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="50px"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LogoProfile")}
      {...rest}
    >
      <Icon
        width="50px"
        height="50px"
        viewBox={{ minX: 0, minY: 0, width: 50, height: 50 }}
        paths={[
          {
            d: "M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z",
            fill: "rgba(255,215,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 25px - 0px)"
        left="calc(50% - 25px - 0px)"
        {...getOverrideProps(overrides, "Ellipse 108")}
      ></Icon>
      <Text
        fontFamily="Roboto"
        fontSize="30px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="35.15625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 17.5px - -0.5px)"
        left="calc(50% - 9.5px - 0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="P"
        {...getOverrideProps(overrides, "P")}
      ></Text>
    </View>
  );
}
