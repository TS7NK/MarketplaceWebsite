/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import LogoWhite from "./LogoWhite";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import Button2 from "./Button2";

export default function Nav(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="352px"
      direction="row"
      width="1163px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="8px 24px 8px 24px"
      backgroundColor="rgba(255,215,0,1)"
      {...getOverrideProps(overrides, "Nav")}
      {...rest}
    >
      <LogoWhite
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        property1="Default"
        {...getOverrideProps(overrides, "Logo (White)")}
      ></LogoWhite>
      <Flex
        gap="14px"
        direction="row"
        width="311px"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Menu")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="11px 19px 11px 19px"
          backgroundColor="rgba(255,215,0,1)"
          {...getOverrideProps(overrides, "User63027845")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "User63027846")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Avatar")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(overrides, "Group 6027")}
              >
                <Icon
                  width="24px"
                  height="24px"
                  viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                  paths={[
                    {
                      d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z",
                      fill: "rgba(226,98,24,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Base")}
                ></Icon>
                <Text
                  fontFamily="Inter"
                  fontSize="13px"
                  fontWeight="500"
                  color="rgba(76,76,76,1)"
                  lineHeight="15.732954025268555px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  position="absolute"
                  top="16.67%"
                  bottom="16.67%"
                  left="29.17%"
                  right="29.17%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="C"
                  {...getOverrideProps(overrides, "C")}
                ></Text>
              </View>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(76,76,76,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Christian Nwamba"
              {...getOverrideProps(overrides, "Name")}
            ></Text>
          </Flex>
        </Flex>
        <Button2
          display="flex"
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          backgroundColor="rgba(255,255,255,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          {...getOverrideProps(overrides, "Button2")}
        ></Button2>
      </Flex>
    </Flex>
  );
}
