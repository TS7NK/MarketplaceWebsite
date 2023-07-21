/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import ManageCartButton from "./ManageCartButton";
import PrimaryActionButton from "./PrimaryActionButton";
export default function CartCheckoutBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.20000000298023224)"
      borderRadius="60px"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(0,0,0,1)"
      {...getOverrideProps(overrides, "CartCheckoutBar")}
      {...rest}
    >
      <Flex
        gap="30px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 117")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="28.125px"
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
          children="$ 9.97"
          {...getOverrideProps(overrides, "$ 9.97")}
        ></Text>
        <Icon
          width="13px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 1, height: 13 }}
          paths={[
            {
              d: "M0 0L13 0L13 -1L0 -1L0 0Z",
              stroke: "rgba(217,217,217,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Line 12")}
        ></Icon>
        <ManageCartButton
          display="flex"
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          manageCart="Default"
          {...getOverrideProps(overrides, "Manage Cart Button")}
        ></ManageCartButton>
        <PrimaryActionButton
          display="flex"
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="30px"
          padding="10px 15px 10px 15px"
          backgroundColor="rgba(255,215,0,1)"
          primaryActionButton="Default"
          {...getOverrideProps(overrides, "Primary Action Button")}
        ></PrimaryActionButton>
      </Flex>
    </Flex>
  );
}
