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
import CheckBoxbutton from "./CheckBoxbutton";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import Deletebutton from "./Deletebutton";
import Savefolaterbutton from "./Savefolaterbutton";
export default function CartItemList(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        "Check Box button": {},
        "Rectangle 6": {},
        "CatGPT Nitro Code Generator": {},
        "Frame 35": {},
        Vector3135045: {},
        Vector3135046: {},
        Group: {},
        "tabler:star-filled": {},
        "4.3": {},
        "Frame 32": {},
        "AI Models Tag": {},
        "Tiny Category Tag": {},
        "Frame 36": {},
        "Prompt Intro (Tiny)": {},
        "delete button": {},
        "Line 14": {},
        "Save fo later button": {},
        "Frame 119": {},
        "Prompt Thumbnial (Tiny)": {},
        "$ 2.99": {},
        "Frame 120": {},
        "Line 16": {},
        "Frame 121": {},
        CartItemList: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="20px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "CartItemList")}
      {...rest}
    >
      <Flex
        gap="15px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 121")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="690px"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 120")}
        >
          <CheckBoxbutton
            width="20px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            property1="Default"
            {...getOverrideProps(overrides, "Check Box button")}
          ></CheckBoxbutton>
          <Flex
            gap="15px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="10px"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Prompt Thumbnial (Tiny)")}
          >
            <View
              width="50px"
              height="50px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              borderRadius="6px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Rectangle 6")}
            ></View>
            <Flex
              gap="6px"
              direction="column"
              width="230px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Prompt Intro (Tiny)")}
            >
              <Flex
                gap="15px"
                direction="row"
                width="230px"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 35")}
              >
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(0,0,0,1)"
                  lineHeight="18.75px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="230px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="CatGPT Nitro Code Generator"
                  {...getOverrideProps(
                    overrides,
                    "CatGPT Nitro Code Generator"
                  )}
                ></Text>
              </Flex>
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 36")}
              >
                <Flex
                  gap="6px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  display="flex"
                  {...getOverrideProps(overrides, "Frame 32")}
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
                    {...getOverrideProps(overrides, "tabler:star-filled")}
                  >
                    <View
                      padding="0px 0px 0px 0px"
                      width="16px"
                      height="16px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="0%"
                      bottom="0%"
                      left="0%"
                      right="0%"
                      {...getOverrideProps(overrides, "Group")}
                    >
                      <Icon
                        width="16px"
                        height="16px"
                        viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
                        paths={[]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="0%"
                        bottom="0%"
                        left="0%"
                        right="0%"
                        {...getOverrideProps(overrides, "Vector3135045")}
                      ></Icon>
                      <Icon
                        width="14.65px"
                        height="14px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 14.6480712890625,
                          height: 13.99560546875,
                        }}
                        paths={[
                          {
                            d: "M4.82428 4.22531L0.570946 4.84198L0.495612 4.85731C0.381572 4.88759 0.277609 4.94759 0.19434 5.03118C0.111072 5.11478 0.0514812 5.21897 0.0216536 5.33313C-0.00817395 5.44729 -0.00716965 5.56732 0.0245639 5.68096C0.0562974 5.7946 0.117623 5.89779 0.202279 5.97998L3.28361 8.97931L2.55695 13.216L2.54828 13.2893C2.5413 13.4073 2.56579 13.5249 2.61925 13.6303C2.6727 13.7357 2.7532 13.825 2.8525 13.889C2.9518 13.953 3.06634 13.9895 3.18438 13.9947C3.30242 13.9999 3.41972 13.9737 3.52428 13.9186L7.32828 11.9186L11.1236 13.9186L11.1903 13.9493C11.3003 13.9927 11.4199 14.0059 11.5368 13.9878C11.6537 13.9697 11.7636 13.9208 11.8553 13.8462C11.9471 13.7715 12.0173 13.6738 12.0588 13.5631C12.1004 13.4523 12.1117 13.3325 12.0916 13.216L11.3643 8.97931L14.4469 5.97931L14.4989 5.92265C14.5732 5.83116 14.6219 5.72162 14.6401 5.60518C14.6583 5.48874 14.6452 5.36957 14.6023 5.2598C14.5594 5.15004 14.4882 5.0536 14.3959 4.98032C14.3036 4.90704 14.1936 4.85954 14.0769 4.84265L9.82361 4.22531L7.92228 0.37198C7.86726 0.260336 7.78209 0.166323 7.67641 0.100583C7.57072 0.0348422 7.44874 1.4803e-16 7.32428 0C7.19982 1.4803e-16 7.07784 0.0348422 6.97215 0.100583C6.86647 0.166323 6.7813 0.260336 6.72628 0.37198L4.82428 4.22531Z",
                            fill: "rgba(255,215,0,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="4.18%"
                        bottom="8.35%"
                        left="4.19%"
                        right="4.26%"
                        {...getOverrideProps(overrides, "Vector3135046")}
                      ></Icon>
                    </View>
                  </View>
                  <Text
                    fontFamily="Roboto"
                    fontSize="12px"
                    fontWeight="500"
                    color="rgba(0,0,0,1)"
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
                    children="4.3"
                    {...getOverrideProps(overrides, "4.3")}
                  ></Text>
                </Flex>
                <Flex
                  width="unset"
                  height="unset"
                  {...getOverrideProps(overrides, "AI Models Tag")}
                ></Flex>
                <Flex
                  width="unset"
                  height="unset"
                  {...getOverrideProps(overrides, "Tiny Category Tag")}
                ></Flex>
              </Flex>
            </Flex>
            <Flex
              gap="5px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 119")}
            >
              <Deletebutton
                display="flex"
                gap="9px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="6px"
                padding="0px 0px 0px 0px"
                delete="Default"
                {...getOverrideProps(overrides, "delete button")}
              ></Deletebutton>
              <Icon
                width="10px"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 1, height: 10 }}
                paths={[
                  {
                    d: "M0 0L10 0L10 -1L0 -1L0 0Z",
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
                {...getOverrideProps(overrides, "Line 14")}
              ></Icon>
              <Savefolaterbutton
                display="flex"
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="3px 6px 3px 6px"
                property1="Default"
                {...getOverrideProps(overrides, "Save fo later button")}
              ></Savefolaterbutton>
            </Flex>
          </Flex>
          <Text
            fontFamily="Roboto"
            fontSize="20px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="23.4375px"
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
            children="$ 2.99"
            {...getOverrideProps(overrides, "$ 2.99")}
          ></Text>
        </Flex>
        <Icon
          width="700px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 700, height: 1 }}
          paths={[
            {
              d: "M0 0L700 0L700 -1L0 -1L0 0Z",
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
          {...getOverrideProps(overrides, "Line 16")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
