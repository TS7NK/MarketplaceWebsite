/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import Deletebutton from "./Deletebutton";
import AIModelDropdown from "./AIModelDropdown";
import EngineDropdown from "./EngineDropdown";
import NextButton from "./NextButton";
export default function SellStep1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="900px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,246,255,1)"
      {...getOverrideProps(overrides, "SellStep1")}
      {...rest}
    >
      <Flex
        gap="60px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="40px"
        left="155px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 194")}
      >
        <Flex
          gap="20px"
          direction="row"
          width="1130px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 190")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="1000px"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="30px"
            padding="3px 0px 3px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Progress Line")}
          >
            <Icon
              width="200px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 200, height: 1 }}
              paths={[
                {
                  d: "M0 -3C-1.65685 -3 -3 -1.65685 -3 0C-3 1.65685 -1.65685 3 0 3L0 -3ZM200 3C201.657 3 203 1.65685 203 0C203 -1.65685 201.657 -3 200 -3L200 3ZM0 3L200 3L200 -3L0 -3L0 3Z",
                  stroke: "rgba(0,163,255,1)",
                  fillRule: "nonzero",
                  strokeWidth: 6,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Line 76")}
            ></Icon>
          </Flex>
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
            children="Step 1/5"
            {...getOverrideProps(overrides, "Step 1/5")}
          ></Text>
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
        </Flex>
        <Flex
          gap="100px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 193")}
        >
          <Flex
            gap="60px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 192")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="40px"
              fontWeight="600"
              color="rgba(0,0,0,1)"
              lineHeight="46.875px"
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
              children="Suggest a Title"
              {...getOverrideProps(overrides, "Suggest a Title")}
            ></Text>
            <Text
              fontFamily="Roboto"
              fontSize="20px"
              fontWeight="400"
              color="rgba(141,143,155,1)"
              lineHeight="23.4375px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="500px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Select the proper AI Model for your prompt. Give a short, descriptive title for your customers."
              {...getOverrideProps(
                overrides,
                "Select the proper AI Model for your prompt. Give a short, descriptive title for your customers."
              )}
            ></Text>
            <Flex
              padding="0px 0px 0px 0px"
              width="300px"
              height="280px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Group44013450")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="94.5px"
                height="101.11px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="63.64%"
                bottom="0.25%"
                left="7.75%"
                right="60.75%"
                {...getOverrideProps(overrides, "Group44013451")}
              >
                <View
                  padding="0px 0px 0px 0px"
                  width="24.3px"
                  height="6.97px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="8.71%"
                  bottom="84.4%"
                  left="32.18%"
                  right="42.11%"
                  {...getOverrideProps(overrides, "Group44013452")}
                >
                  <Icon
                    width="24.3px"
                    height="6.97px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 24.29638671875,
                      height: 6.96875,
                    }}
                    paths={[
                      {
                        d: "M24.2965 0L0 0L0 6.96904L24.2965 6.96904L24.2965 0Z",
                        fill: "rgba(244,244,244,1)",
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
                    {...getOverrideProps(overrides, "Vector44013453")}
                  ></Icon>
                  <Icon
                    width="3.18px"
                    height="6.97px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 3.18359375,
                      height: 6.96875,
                    }}
                    paths={[
                      {
                        d: "M3.18354 0L0 0L0 6.96904L3.18354 6.96904L3.18354 0Z",
                        fill: "rgba(41,42,46,0.05)",
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
                    left="13.43%"
                    right="73.47%"
                    {...getOverrideProps(overrides, "Vector44013454")}
                  ></Icon>
                  <Icon
                    width="13.24px"
                    height="4.13px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 13.2373046875,
                      height: 4.1298828125,
                    }}
                    paths={[
                      {
                        d: "M13.2375 0L0 0L0 4.12977L13.2375 4.12977L13.2375 0Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="21.71%"
                    bottom="19.04%"
                    left="32.74%"
                    right="12.78%"
                    {...getOverrideProps(overrides, "Vector44013455")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  width="25.41px"
                  height="16.11px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="84.07%"
                  left="51.51%"
                  right="21.6%"
                  {...getOverrideProps(overrides, "Group44013456")}
                >
                  <Icon
                    width="24.58px"
                    height="6.99px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 25.4052734375,
                      height: 16.1064453125,
                    }}
                    paths={[
                      {
                        d: "M24.5793 0L0 0L0 6.98522L24.5793 6.98522L24.5793 0Z",
                        fill: "rgba(244,244,244,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="56.63%"
                    left="11.14%"
                    right="-7.89%"
                    transformOrigin="top left"
                    transform="rotate(23.29deg)"
                    {...getOverrideProps(overrides, "Vector44013457")}
                  ></Icon>
                  <Icon
                    width="24.58px"
                    height="6.99px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 25.4052734375,
                      height: 16.1064453125,
                    }}
                    paths={[
                      {
                        d: "M24.5793 0L0 0L0 6.98522L24.5793 6.98522L24.5793 0Z",
                        fill: "rgba(41,42,46,0.05)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="56.63%"
                    left="11.14%"
                    right="-7.89%"
                    transformOrigin="top left"
                    transform="rotate(23.29deg)"
                    {...getOverrideProps(overrides, "Vector44013458")}
                  ></Icon>
                  <Icon
                    width="3.22px"
                    height="6.99px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 5.78759765625,
                      height: 7.66015625,
                    }}
                    paths={[
                      {
                        d: "M3.2207 0L0 0L0 6.98522L3.2207 6.98522L3.2207 0Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="44.33%"
                    bottom="12.3%"
                    left="76.42%"
                    right="10.9%"
                    transformOrigin="top left"
                    transform="rotate(23.29deg)"
                    {...getOverrideProps(overrides, "Vector44013459")}
                  ></Icon>
                  <Icon
                    width="13.39px"
                    height="4.14px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 13.9765625,
                      height: 9.080078125,
                    }}
                    paths={[
                      {
                        d: "M13.3913 0L0 0L0 4.13936L13.3913 4.13936L13.3913 0Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="16.33%"
                    bottom="57.97%"
                    left="20.07%"
                    right="27.22%"
                    transformOrigin="top left"
                    transform="rotate(23.29deg)"
                    {...getOverrideProps(overrides, "Vector44013460")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  width="94.5px"
                  height="85.01px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="15.93%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group44013461")}
                >
                  <View
                    padding="0px 0px 0px 0px"
                    width="68.53px"
                    height="4.02px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="95.27%"
                    bottom="0%"
                    left="5.92%"
                    right="21.56%"
                    {...getOverrideProps(overrides, "Group44013462")}
                  >
                    <Icon
                      width="6.11px"
                      height="4.02px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 6.10595703125,
                        height: 4.01953125,
                      }}
                      paths={[
                        {
                          d: "M6.10574 0L0 0L0 4.01976L6.10574 4.01976L6.10574 0Z",
                          fill: "rgba(41,42,46,0.05)",
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
                      left="91.09%"
                      right="0%"
                      {...getOverrideProps(overrides, "Vector44013463")}
                    ></Icon>
                    <Icon
                      width="6.11px"
                      height="4.02px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 6.10595703125,
                        height: 4.01953125,
                      }}
                      paths={[
                        {
                          d: "M6.10574 0L0 0L0 4.01976L6.10574 4.01976L6.10574 0Z",
                          fill: "rgba(41,42,46,0.05)",
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
                      right="91.09%"
                      {...getOverrideProps(overrides, "Vector44013464")}
                    ></Icon>
                  </View>
                  <Icon
                    width="79.72px"
                    height="80.85px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 79.72412109375,
                      height: 80.8515625,
                    }}
                    paths={[
                      {
                        d: "M79.7243 0L0 0L0 80.8518L79.7243 80.8518L79.7243 0Z",
                        fill: "rgba(244,244,244,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="4.89%"
                    left="0%"
                    right="15.63%"
                    {...getOverrideProps(overrides, "Vector44013465")}
                  ></Icon>
                  <Icon
                    width="79.72px"
                    height="80.85px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 79.72412109375,
                      height: 80.8515625,
                    }}
                    paths={[
                      {
                        d: "M79.7243 0L0 0L0 80.8518L79.7243 80.8518L79.7243 0Z",
                        fill: "rgba(41,42,46,0.03)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="4.89%"
                    left="0%"
                    right="15.63%"
                    {...getOverrideProps(overrides, "Vector44013466")}
                  ></Icon>
                  <Icon
                    width="79.72px"
                    height="80.85px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 79.72412109375,
                      height: 80.8515625,
                    }}
                    paths={[
                      {
                        d: "M79.7243 0L0 0L0 80.8518L79.7243 80.8518L79.7243 0Z",
                        fill: "rgba(244,244,244,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="4.89%"
                    left="15.63%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector44013467")}
                  ></Icon>
                  <View
                    padding="0px 0px 0px 0px"
                    width="68.53px"
                    height="4.02px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="95.27%"
                    bottom="0%"
                    left="21.56%"
                    right="5.92%"
                    {...getOverrideProps(overrides, "Group44013468")}
                  >
                    <Icon
                      width="6.11px"
                      height="4.02px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 6.10595703125,
                        height: 4.01953125,
                      }}
                      paths={[
                        {
                          d: "M6.10574 0L0 0L0 4.01976L6.10574 4.01976L6.10574 0Z",
                          fill: "rgba(41,42,46,0.05)",
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
                      left="91.09%"
                      right="0%"
                      {...getOverrideProps(overrides, "Vector44013469")}
                    ></Icon>
                    <Icon
                      width="6.11px"
                      height="4.02px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 6.10595703125,
                        height: 4.01953125,
                      }}
                      paths={[
                        {
                          d: "M6.10574 0L0 0L0 4.01976L6.10574 4.01976L6.10574 0Z",
                          fill: "rgba(41,42,46,0.05)",
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
                      right="91.09%"
                      {...getOverrideProps(overrides, "Vector44013470")}
                    ></Icon>
                  </View>
                  <Icon
                    width="73.74px"
                    height="15.53px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 73.73876953125,
                      height: 15.533203125,
                    }}
                    paths={[
                      {
                        d: "M73.739 0L0 0L0 15.5333L73.739 15.5333L73.739 0Z",
                        fill: "rgba(255,255,255,0.7)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="4.45%"
                    bottom="77.27%"
                    left="18.8%"
                    right="3.17%"
                    {...getOverrideProps(overrides, "Vector44013471")}
                  ></Icon>
                  <Icon
                    width="73.74px"
                    height="15.53px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 73.73876953125,
                      height: 15.533203125,
                    }}
                    paths={[
                      {
                        d: "M73.739 0L0 0L0 15.5333L73.739 15.5333L73.739 0Z",
                        fill: "rgba(255,255,255,0.7)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="27.2%"
                    bottom="54.53%"
                    left="18.8%"
                    right="3.17%"
                    {...getOverrideProps(overrides, "Vector44013472")}
                  ></Icon>
                  <Icon
                    width="73.74px"
                    height="15.53px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 73.73876953125,
                      height: 15.533203125,
                    }}
                    paths={[
                      {
                        d: "M73.739 0L0 0L0 15.5333L73.739 15.5333L73.739 0Z",
                        fill: "rgba(255,255,255,0.7)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="49.94%"
                    bottom="31.78%"
                    left="18.8%"
                    right="3.17%"
                    {...getOverrideProps(overrides, "Vector44013473")}
                  ></Icon>
                  <Icon
                    width="4.41px"
                    height="4.35px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 4.40966796875,
                      height: 4.3466796875,
                    }}
                    paths={[
                      {
                        d: "M2.20474 4.34685C3.42238 4.34685 4.40946 3.37378 4.40946 2.17343C4.40946 0.973077 3.42238 0 2.20474 0C0.987098 0 0 0.973077 0 2.17343C0 3.37378 0.987098 4.34685 2.20474 4.34685Z",
                        fill: "rgba(41,42,46,0.05)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="11.04%"
                    bottom="83.85%"
                    left="55.48%"
                    right="39.85%"
                    {...getOverrideProps(overrides, "Vector44013474")}
                  ></Icon>
                  <Icon
                    width="4.41px"
                    height="4.35px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 4.40966796875,
                      height: 4.3466796875,
                    }}
                    paths={[
                      {
                        d: "M2.20474 4.34685C3.42238 4.34685 4.40946 3.37378 4.40946 2.17343C4.40946 0.973077 3.42238 0 2.20474 0C0.987098 0 0 0.973077 0 2.17343C0 3.37378 0.987098 4.34685 2.20474 4.34685Z",
                        fill: "rgba(41,42,46,0.05)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="33.78%"
                    bottom="61.11%"
                    left="55.48%"
                    right="39.85%"
                    {...getOverrideProps(overrides, "Vector44013475")}
                  ></Icon>
                  <Icon
                    width="4.41px"
                    height="4.35px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 4.40966796875,
                      height: 4.3466796875,
                    }}
                    paths={[
                      {
                        d: "M2.20474 4.34685C3.42238 4.34685 4.40946 3.37378 4.40946 2.17343C4.40946 0.973077 3.42238 0 2.20474 0C0.987098 0 0 0.973077 0 2.17343C0 3.37378 0.987098 4.34685 2.20474 4.34685Z",
                        fill: "rgba(41,42,46,0.05)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="56.52%"
                    bottom="38.36%"
                    left="55.48%"
                    right="39.85%"
                    {...getOverrideProps(overrides, "Vector44013476")}
                  ></Icon>
                  <View
                    padding="0px 0px 0px 0px"
                    width="73.74px"
                    height="15.53px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="73.2%"
                    bottom="8.52%"
                    left="18.8%"
                    right="3.17%"
                    {...getOverrideProps(overrides, "Group44013477")}
                  >
                    <Icon
                      width="73.74px"
                      height="15.53px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 73.73876953125,
                        height: 15.533203125,
                      }}
                      paths={[
                        {
                          d: "M73.739 0L0 0L0 15.5333L73.739 15.5333L73.739 0Z",
                          fill: "rgba(255,255,255,0.7)",
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
                      {...getOverrideProps(overrides, "Vector44013478")}
                    ></Icon>
                    <Icon
                      width="4.41px"
                      height="4.35px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 4.40966796875,
                        height: 4.3466796875,
                      }}
                      paths={[
                        {
                          d: "M2.20474 4.34685C3.42238 4.34685 4.40946 3.37378 4.40946 2.17343C4.40946 0.973077 3.42238 0 2.20474 0C0.987098 0 0 0.973077 0 2.17343C0 3.37378 0.987098 4.34685 2.20474 4.34685Z",
                          fill: "rgba(41,42,46,0.05)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="36.02%"
                      bottom="35.99%"
                      left="47.01%"
                      right="47.01%"
                      {...getOverrideProps(overrides, "Vector44013479")}
                    ></Icon>
                  </View>
                </View>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="300px"
                height="231.86px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="17.19%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group44013480")}
              >
                <View
                  padding="0px 0px 0px 0px"
                  width="300px"
                  height="0.42px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="99.75%"
                  bottom="0.07%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group44013481")}
                >
                  <Icon
                    width="300px"
                    height="0.42px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 300,
                      height: 0.4169921875,
                    }}
                    paths={[
                      {
                        d: "M0.211732 0.41744L299.788 0.41744C299.844 0.41744 299.898 0.395451 299.938 0.356308C299.978 0.317164 300 0.264068 300 0.208711C300 0.153353 299.978 0.100275 299.938 0.0611318C299.898 0.0219882 299.844 0 299.788 0L0.211732 0C0.155577 -3.3899e-14 0.101722 0.0219882 0.0620148 0.0611318C0.0223074 0.100275 5.45697e-17 0.153353 0 0.208711C2.93837e-17 0.264068 0.0223074 0.317164 0.0620148 0.356308C0.101722 0.395451 0.155577 0.41744 0.211732 0.41744Z",
                        fill: "rgba(41,42,46,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0.47%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector44013482")}
                  ></Icon>
                  <View
                    padding="0px 0px 0px 0px"
                    width="300px"
                    height="0.42px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="0.47%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Group44013483")}
                  >
                    <Icon
                      width="300px"
                      height="0.42px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 300,
                        height: 0.4169921875,
                      }}
                      paths={[
                        {
                          d: "M0.211732 0.41744L299.788 0.41744C299.844 0.41744 299.898 0.395451 299.938 0.356308C299.978 0.317164 300 0.264068 300 0.208711C300 0.153353 299.978 0.100275 299.938 0.0611318C299.898 0.0219882 299.844 0 299.788 0L0.211732 0C0.155577 -3.3899e-14 0.101722 0.0219882 0.0620148 0.0611318C0.0223074 0.100275 5.45697e-17 0.153353 0 0.208711C2.93837e-17 0.264068 0.0223074 0.317164 0.0620148 0.356308C0.101722 0.395451 0.155577 0.41744 0.211732 0.41744Z",
                          fill: "rgba(41,42,46,1)",
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
                      {...getOverrideProps(overrides, "Vector44013484")}
                    ></Icon>
                  </View>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  width="287.17px"
                  height="231.86px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="1.95%"
                  right="2.33%"
                  {...getOverrideProps(overrides, "Group44013485")}
                >
                  <View
                    padding="0px 0px 0px 0px"
                    width="118.06px"
                    height="168.77px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="27.09%"
                    bottom="0.12%"
                    left="56.44%"
                    right="2.44%"
                    {...getOverrideProps(overrides, "Group44013486")}
                  >
                    <Icon
                      width="9.88px"
                      height="91.07px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 9.87890625,
                        height: 91.06640625,
                      }}
                      paths={[
                        {
                          d: "M9.28474 91.0666L9.8788 90.9538L0.594056 0L0 0.112727L9.28474 91.0666Z",
                          fill: "rgba(73,73,73,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="46.04%"
                      bottom="0%"
                      left="86.65%"
                      right="4.98%"
                      {...getOverrideProps(overrides, "Vector44013487")}
                    ></Icon>
                    <Icon
                      width="9.88px"
                      height="91.07px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 9.87841796875,
                        height: 91.06640625,
                      }}
                      paths={[
                        {
                          d: "M9.28445 91.0666L9.87852 90.9538L0.594074 0L0 0.112727L9.28445 91.0666Z",
                          fill: "rgba(73,73,73,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="46.04%"
                      bottom="0%"
                      left="57.37%"
                      right="34.26%"
                      {...getOverrideProps(overrides, "Vector44013488")}
                    ></Icon>
                    <View
                      padding="0px 0px 0px 0px"
                      width="44.45px"
                      height="91.07px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="46.04%"
                      bottom="0%"
                      left="0%"
                      right="62.35%"
                      {...getOverrideProps(overrides, "Group44013489")}
                    >
                      <Icon
                        width="9.88px"
                        height="91.07px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 9.87890625,
                          height: 91.06640625,
                        }}
                        paths={[
                          {
                            d: "M0.594074 91.0666L0 90.9538L9.28476 0L9.87882 0.112727L0.594074 91.0666Z",
                            fill: "rgba(73,73,73,1)",
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
                        right="77.78%"
                        {...getOverrideProps(overrides, "Vector44013490")}
                      ></Icon>
                      <Icon
                        width="9.88px"
                        height="91.07px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 9.87841796875,
                          height: 91.06640625,
                        }}
                        paths={[
                          {
                            d: "M0.594056 91.0666L0 90.9538L9.28444 0L9.8785 0.112727L0.594056 91.0666Z",
                            fill: "rgba(73,73,73,1)",
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
                        left="77.78%"
                        right="0%"
                        {...getOverrideProps(overrides, "Vector44013491")}
                      ></Icon>
                    </View>
                    <Icon
                      width="40.41px"
                      height="0.6px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 6.0234375,
                        height: 40.1259765625,
                      }}
                      paths={[
                        {
                          d: "M40.4123 0L0 0L0 0.604799L40.4123 0.604799L40.4123 0Z",
                          fill: "rgba(73,73,73,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="46.05%"
                      bottom="53.59%"
                      left="35.62%"
                      right="30.15%"
                      transformOrigin="top left"
                      transform="rotate(-82.29deg)"
                      {...getOverrideProps(overrides, "Vector44013492")}
                    ></Icon>
                    <Icon
                      width="40.41px"
                      height="0.6px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 6.0234375,
                        height: 40.1259765625,
                      }}
                      paths={[
                        {
                          d: "M40.4123 0L0 0L0 0.604799L40.4123 0.604799L40.4123 0Z",
                          fill: "rgba(73,73,73,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="46.05%"
                      bottom="53.59%"
                      left="88.35%"
                      right="-22.59%"
                      transformOrigin="top left"
                      transform="rotate(-82.29deg)"
                      {...getOverrideProps(overrides, "Vector44013493")}
                    ></Icon>
                    <View
                      padding="0px 0px 0px 0px"
                      width="67.45px"
                      height="6.46px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="44.16%"
                      bottom="52.01%"
                      left="32.89%"
                      right="9.98%"
                      {...getOverrideProps(overrides, "Group44013494")}
                    >
                      <Icon
                        width="66.84px"
                        height="5.87px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 66.84375,
                          height: 5.865234375,
                        }}
                        paths={[
                          {
                            d: "M63.8689 0L2.97484 0C1.33188 0 0 1.31297 0 2.9326L0 2.93289C0 4.55251 1.33188 5.86548 2.97484 5.86548L63.8689 5.86548C65.5119 5.86548 66.8438 4.55251 66.8438 2.93289L66.8438 2.9326C66.8438 1.31297 65.5119 0 63.8689 0Z",
                            fill: "rgba(41,42,46,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="95.38%"
                        bottom="-86.16%"
                        left="99.55%"
                        right="-98.66%"
                        transformOrigin="top left"
                        transform="rotate(180deg)"
                        {...getOverrideProps(overrides, "Vector44013495")}
                      ></Icon>
                      <Icon
                        width="66.84px"
                        height="5.87px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 66.84375,
                          height: 5.865234375,
                        }}
                        paths={[
                          {
                            d: "M63.8689 0L2.97484 0C1.33188 0 0 1.31297 0 2.9326L0 2.93289C0 4.55251 1.33188 5.86548 2.97484 5.86548L63.8689 5.86548C65.5119 5.86548 66.8438 4.55251 66.8438 2.93289L66.8438 2.9326C66.8438 1.31297 65.5119 0 63.8689 0Z",
                            fill: "rgba(255,255,255,0.8)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="95.38%"
                        bottom="-86.16%"
                        left="99.55%"
                        right="-98.66%"
                        transformOrigin="top left"
                        transform="rotate(180deg)"
                        {...getOverrideProps(overrides, "Vector44013496")}
                      ></Icon>
                      <Icon
                        width="67.45px"
                        height="6.46px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 67.44873046875,
                          height: 6.4619140625,
                        }}
                        paths={[
                          {
                            d: "M0 3.23198C0.000640465 2.37521 0.346095 1.55369 0.960536 0.947752C1.57498 0.341813 2.4082 0.000947609 3.27731 0L64.1714 0C65.0406 3.3899e-14 65.8742 0.340391 66.4888 0.946278C67.1034 1.55216 67.4487 2.37392 67.4487 3.23078C67.4487 4.08763 67.1034 4.90939 66.4888 5.51527C65.8742 6.12116 65.0406 6.46155 64.1714 6.46155L3.27731 6.46155C2.40865 6.46053 1.57583 6.11997 0.961478 5.51456C0.347124 4.90916 0.00136067 4.08831 0 3.23198ZM3.27731 0.597559C2.56856 0.597559 1.88883 0.875111 1.38766 1.36916C0.886498 1.86321 0.604948 2.53329 0.604948 3.23198C0.604948 3.93067 0.886498 4.60073 1.38766 5.09478C1.88883 5.58882 2.56856 5.86638 3.27731 5.86638L64.1714 5.86638C64.8801 5.86638 65.5599 5.58882 66.061 5.09478C66.5622 4.60073 66.8438 3.93067 66.8438 3.23198C66.8438 2.53329 66.5622 1.86321 66.061 1.36916C65.5599 0.875111 64.8801 0.597559 64.1714 0.597559L3.27731 0.597559Z",
                            fill: "rgba(41,42,46,1)",
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
                        {...getOverrideProps(overrides, "Vector44013497")}
                      ></Icon>
                    </View>
                    <View
                      padding="0px 0px 0px 0px"
                      width="67.45px"
                      height="6.46px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="44.16%"
                      bottom="52.01%"
                      left="4.58%"
                      right="38.29%"
                      {...getOverrideProps(overrides, "Group44013498")}
                    >
                      <Icon
                        width="66.84px"
                        height="5.87px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 66.84375,
                          height: 5.865234375,
                        }}
                        paths={[
                          {
                            d: "M63.8689 0L2.97484 0C1.33188 0 0 1.31297 0 2.9326L0 2.93289C0 4.55251 1.33188 5.86548 2.97484 5.86548L63.8689 5.86548C65.5119 5.86548 66.8438 4.55251 66.8438 2.93289L66.8438 2.9326C66.8438 1.31297 65.5119 0 63.8689 0Z",
                            fill: "rgba(255,255,255,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="95.35%"
                        bottom="-86.13%"
                        left="99.55%"
                        right="-98.65%"
                        transformOrigin="top left"
                        transform="rotate(-180deg)"
                        {...getOverrideProps(overrides, "Vector44013499")}
                      ></Icon>
                      <Icon
                        width="67.45px"
                        height="6.46px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 67.44921875,
                          height: 6.4619140625,
                        }}
                        paths={[
                          {
                            d: "M0 3.23078C0.00104077 2.37419 0.34671 1.55297 0.961164 0.947297C1.57562 0.341624 2.4087 0.000946941 3.27763 0L64.1717 0C65.0409 3.3899e-14 65.8745 0.340391 66.4891 0.946278C67.1037 1.55216 67.449 2.37392 67.449 3.23078C67.449 4.08763 67.1037 4.90939 66.4891 5.51527C65.8745 6.12116 65.0409 6.46153 64.1717 6.46153L3.27763 6.46153C2.40872 6.46051 1.57569 6.1198 0.961256 5.51414C0.346819 4.90849 0.00112065 4.08734 0 3.23078ZM3.27763 0.596358C2.56887 0.596358 1.88914 0.87391 1.38798 1.36796C0.886812 1.86201 0.605262 2.53209 0.605262 3.23078C0.605262 3.92946 0.886812 4.59953 1.38798 5.09358C1.88914 5.58762 2.56887 5.86517 3.27763 5.86517L64.1717 5.86517C64.8805 5.86517 65.5602 5.58762 66.0614 5.09358C66.5625 4.59953 66.8441 3.92946 66.8441 3.23078C66.8441 2.53209 66.5625 1.86201 66.0614 1.36796C65.5602 0.87391 64.8805 0.596358 64.1717 0.596358L3.27763 0.596358Z",
                            fill: "rgba(41,42,46,1)",
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
                        {...getOverrideProps(overrides, "Vector44013500")}
                      ></Icon>
                    </View>
                    <View
                      padding="0px 0px 0px 0px"
                      width="71.52px"
                      height="38.01px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="0%"
                      bottom="77.48%"
                      left="39.42%"
                      right="0%"
                      {...getOverrideProps(overrides, "Group44013501")}
                    >
                      <Icon
                        width="70.92px"
                        height="37.41px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 70.91650390625,
                          height: 37.412109375,
                        }}
                        paths={[
                          {
                            d: "M3.97724 37.4122L63.0344 37.4122C63.9999 37.4122 64.9325 37.0659 65.658 36.4378C66.3835 35.8097 66.8524 34.9428 66.9771 33.999L70.8833 4.42557C70.9563 3.87279 70.9089 3.31102 70.7442 2.77775C70.5795 2.24447 70.3013 1.75196 69.9282 1.33311C69.5551 0.914248 69.0956 0.578668 68.5804 0.348782C68.0653 0.118897 67.5063 -5.89578e-06 66.9408 2.19259e-10L7.88246 2.19259e-10C6.91688 6.35655e-05 5.98432 0.346486 5.25882 0.974614C4.53331 1.60274 4.06444 2.46965 3.93972 3.41355L0.0332759 32.9866C-0.0397405 33.5395 0.00772472 34.1014 0.172531 34.6348C0.337338 35.1681 0.615687 35.6607 0.988975 36.0796C1.36226 36.4984 1.82191 36.834 2.33722 37.0638C2.85253 37.2936 3.41165 37.4124 3.97724 37.4122Z",
                            fill: "rgba(41,42,46,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="0.78%"
                        bottom="0.79%"
                        left="0.42%"
                        right="0.42%"
                        {...getOverrideProps(overrides, "Vector44013502")}
                      ></Icon>
                      <Icon
                        width="70.92px"
                        height="37.41px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 70.91650390625,
                          height: 37.412109375,
                        }}
                        paths={[
                          {
                            d: "M3.97724 37.4122L63.0344 37.4122C63.9999 37.4122 64.9325 37.0659 65.658 36.4378C66.3835 35.8097 66.8524 34.9428 66.9771 33.999L70.8833 4.42557C70.9563 3.87279 70.9089 3.31102 70.7442 2.77775C70.5795 2.24447 70.3013 1.75196 69.9282 1.33311C69.5551 0.914248 69.0956 0.578668 68.5804 0.348782C68.0653 0.118897 67.5063 -5.89578e-06 66.9408 2.19259e-10L7.88246 2.19259e-10C6.91688 6.35655e-05 5.98432 0.346486 5.25882 0.974614C4.53331 1.60274 4.06444 2.46965 3.93972 3.41355L0.0332759 32.9866C-0.0397405 33.5395 0.00772472 34.1014 0.172531 34.6348C0.337338 35.1681 0.615687 35.6607 0.988975 36.0796C1.36226 36.4984 1.82191 36.834 2.33722 37.0638C2.85253 37.2936 3.41165 37.4124 3.97724 37.4122Z",
                            fill: "rgba(255,255,255,0.8)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="0.78%"
                        bottom="0.79%"
                        left="0.42%"
                        right="0.42%"
                        {...getOverrideProps(overrides, "Vector44013503")}
                      ></Icon>
                      <Icon
                        width="71.52px"
                        height="38.01px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 71.52099609375,
                          height: 38.0087890625,
                        }}
                        paths={[
                          {
                            d: "M1.06414 36.574C0.662537 36.1234 0.363065 35.5935 0.185722 35.0197C0.00837827 34.446 -0.0427453 33.8415 0.0357401 33.2467L3.94219 3.67327C4.07845 2.65856 4.58349 1.72703 5.36356 1.05152C6.14364 0.37602 7.14578 0.00240766 8.18408 2.57711e-09L67.2425 2.57711e-09C67.851 -2.09659e-05 68.4525 0.127916 69.0068 0.375281C69.5612 0.622646 70.0556 0.983747 70.4572 1.43447C70.8587 1.88519 71.1581 2.41517 71.3353 2.98902C71.5125 3.56286 71.5636 4.16738 71.485 4.76221L67.5785 34.3356C67.4422 35.3504 66.9371 36.282 66.1569 36.9574C65.3767 37.6329 64.3744 38.0064 63.336 38.0086L4.27885 38.0086C3.67035 38.0086 3.06883 37.8806 2.51448 37.6332C1.96013 37.3859 1.46568 37.0248 1.06414 36.574ZM8.18408 0.596358C7.29266 0.598582 6.43233 0.919473 5.76268 1.4995C5.09303 2.07953 4.65952 2.87933 4.54259 3.7505L0.636147 33.3239C0.56869 33.8346 0.612516 34.3536 0.764713 34.8463C0.91691 35.339 1.17398 35.794 1.51874 36.181C1.8635 36.568 2.28803 36.878 2.76399 37.0903C3.23995 37.3027 3.75641 37.4125 4.27885 37.4125L63.336 37.4125C64.2276 37.4107 65.0882 37.09 65.7581 36.5101C66.428 35.9301 66.8617 35.1303 66.9787 34.259L70.8849 4.68558C70.9524 4.17487 70.9086 3.65583 70.7564 3.16313C70.6042 2.67043 70.3472 2.21539 70.0025 1.82839C69.6578 1.4414 69.2332 1.13135 68.7573 0.918942C68.2813 0.706536 67.7649 0.596658 67.2425 0.596649L8.18408 0.596358Z",
                            fill: "rgba(41,42,46,1)",
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
                        {...getOverrideProps(overrides, "Vector44013504")}
                      ></Icon>
                    </View>
                    <View
                      padding="0px 0px 0px 0px"
                      width="71.52px"
                      height="38.01px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="0%"
                      bottom="77.48%"
                      left="36.59%"
                      right="2.83%"
                      {...getOverrideProps(overrides, "Group44013505")}
                    >
                      <Icon
                        width="70.92px"
                        height="37.41px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 70.9169921875,
                          height: 37.412109375,
                        }}
                        paths={[
                          {
                            d: "M3.97576 37.4122L63.0344 37.4122C64 37.4122 64.9326 37.0659 65.6581 36.4378C66.3836 35.8097 66.8525 34.9428 66.9772 33.999L70.8836 4.42557C70.9566 3.87278 70.9092 3.311 70.7445 2.77772C70.5797 2.24444 70.3015 1.75194 69.9283 1.33309C69.5552 0.914236 69.0957 0.578674 68.5805 0.348792C68.0654 0.118909 67.5064 -1.46403e-08 66.9409 0L7.88221 0C6.91666 7.23861e-05 5.98413 0.346499 5.25867 0.974633C4.53322 1.60277 4.06441 2.46968 3.93976 3.41355L0.0333152 32.9866C-0.0397353 33.5394 0.00766849 34.1012 0.172368 34.6345C0.337067 35.1677 0.615272 35.6603 0.988405 36.0791C1.36154 36.498 1.821 36.8335 2.33615 37.0634C2.85131 37.2933 3.41029 37.4122 3.97576 37.4122Z",
                            fill: "rgba(255,255,255,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="0.78%"
                        bottom="0.79%"
                        left="0.42%"
                        right="0.42%"
                        {...getOverrideProps(overrides, "Vector44013506")}
                      ></Icon>
                      <Icon
                        width="71.52px"
                        height="38.01px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 71.52099609375,
                          height: 38.0087890625,
                        }}
                        paths={[
                          {
                            d: "M1.0641 36.574C0.662558 36.1234 0.363127 35.5935 0.185787 35.0197C0.00844708 34.4459 -0.0427306 33.8415 0.035676 33.2467L3.94212 3.67327C4.07846 2.65849 4.5836 1.72691 5.36379 1.05141C6.14398 0.3759 7.14624 0.00232655 8.18463 2.57711e-09L67.2424 2.57711e-09C67.8509 -2.09659e-05 68.4524 0.127916 69.0068 0.375281C69.5611 0.622646 70.0556 0.983747 70.4571 1.43447C70.8586 1.88519 71.158 2.41517 71.3353 2.98902C71.5125 3.56286 71.5635 4.16738 71.4849 4.76221L67.5788 34.3356C67.4424 35.3501 66.9374 36.2815 66.1575 36.9569C65.3776 37.6323 64.3756 38.006 63.3375 38.0086L4.27879 38.0086C3.67029 38.0085 3.0688 37.8806 2.51445 37.6332C1.96011 37.3858 1.46566 37.0247 1.0641 36.574ZM8.18524 0.596358C7.29365 0.59842 6.43309 0.919224 5.76321 1.49926C5.09333 2.07929 4.65962 2.87918 4.54255 3.7505L0.636083 33.3239C0.568626 33.8346 0.61247 34.3536 0.764668 34.8463C0.916865 35.339 1.17391 35.794 1.51867 36.181C1.86344 36.568 2.28798 36.878 2.76394 37.0903C3.23991 37.3027 3.75634 37.4125 4.27879 37.4125L63.3375 37.4125C64.229 37.4107 65.0896 37.09 65.7595 36.5101C66.4294 35.9301 66.8631 35.1303 66.9802 34.259L70.8866 4.68588C70.9541 4.17514 70.9102 3.65608 70.758 3.16337C70.6059 2.67065 70.3488 2.2156 70.004 1.82858C69.6593 1.44157 69.2348 1.1315 68.7588 0.919061C68.2828 0.706624 67.7664 0.596707 67.2439 0.596649L8.18524 0.596358Z",
                            fill: "rgba(41,42,46,1)",
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
                        {...getOverrideProps(overrides, "Vector44013507")}
                      ></Icon>
                    </View>
                  </View>
                  <View
                    padding="0px 0px 0px 0px"
                    width="148.72px"
                    height="231.52px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="0.15%"
                    left="39.64%"
                    right="8.57%"
                    {...getOverrideProps(overrides, "Group44013508")}
                  >
                    <View
                      padding="0px 0px 0px 0px"
                      width="29.98px"
                      height="52.49px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="0%"
                      bottom="77.33%"
                      left="67.63%"
                      right="12.21%"
                      {...getOverrideProps(overrides, "Group44013509")}
                    >
                      <Icon
                        width="10.74px"
                        height="14.61px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 10.7353515625,
                          height: 14.61328125,
                        }}
                        paths={[
                          {
                            d: "M3.52428 14.6137C3.52428 14.6137 0.0379659 11.1956 0.000156618 4.40639C-0.0300908 -0.8505 4.33098 3.14122 4.33098 3.14122C4.33098 3.14122 4.34732 -0.644158 7.04267 0.0959218C9.73801 0.836002 10.7353 4.94908 10.7353 4.94908",
                            fill: "rgba(12,12,12,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="1.71%"
                        bottom="70.45%"
                        left="0%"
                        right="64.19%"
                        {...getOverrideProps(overrides, "Vector44013510")}
                      ></Icon>
                      <Icon
                        width="8.23px"
                        height="20.83px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 8.2294921875,
                          height: 20.828125,
                        }}
                        paths={[
                          {
                            d: "M0 0C0 0 13.4335 3.28176 5.97418 20.8284L4.75671 20.7452L2.2855 20.5761",
                            fill: "rgba(12,12,12,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="6.38%"
                        bottom="53.94%"
                        left="70.67%"
                        right="1.87%"
                        {...getOverrideProps(overrides, "Vector44013511")}
                      ></Icon>
                      <Icon
                        width="26.03px"
                        height="26.13px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 26.03271484375,
                          height: 26.134765625,
                        }}
                        paths={[
                          {
                            d: "M0 16.059C0.0604948 16.051 0.731986 27.032 13.6736 26.0754C22.6329 25.4138 25.8274 16.0432 26.0327 16.0432C25.0666 15.8411 23.8731 15.5339 23.3985 15.4284C22.3648 15.1915 21.4287 14.6501 20.7148 13.8761C20.0008 13.1021 19.5428 12.1321 19.4016 11.0952C19.1394 9.53875 19.5831 1.57498 19.4473 0L5.69467 3.02622C5.88674 6.3524 7.23184 14.0636 2.51869 15.4284C1.73196 15.6541 0.887157 15.8607 0 16.059Z",
                            fill: "rgba(233,136,98,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="50.21%"
                        bottom="0%"
                        left="13.15%"
                        right="0%"
                        {...getOverrideProps(overrides, "sk44013512")}
                      ></Icon>
                      <Icon
                        width="9.26px"
                        height="10.28px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 9.26220703125,
                          height: 10.28125,
                        }}
                        paths={[
                          {
                            d: "M0 10.2809C0.215561 9.59651 0.354331 8.89088 0.413797 8.17666C0.564741 6.54705 0.534298 4.90603 0.32304 3.28294C3.11828 2.91101 5.75166 1.77361 7.92392 0C8.17921 0.929722 9.5836 4.99211 9.19432 5.87412C8.46082 7.54601 5.00685 10.2809 0 10.2809Z",
                            fill: "rgba(12,12,12,0.52)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="54.01%"
                        bottom="26.4%"
                        left="31.5%"
                        right="37.6%"
                        {...getOverrideProps(overrides, "sh44013513")}
                      ></Icon>
                      <Icon
                        width="23.52px"
                        height="30.62px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 23.51904296875,
                          height: 30.615234375,
                        }}
                        paths={[
                          {
                            d: "M8.87846 30.5984C14.32 30.8491 21.2194 28.3698 22.311 21.1893L23.2968 14.7102C24.389 7.52975 21.4487 1.14305 14.5907 0.129241C7.73267 -0.884567 1.721 4.17881 0.628761 11.3593L0.192293 14.2274C0.0598768 15.2149 -0.00409228 16.2102 0.000827942 17.2062C-0.00582649 19.8386 -0.00582924 23.8425 1.40461 26.7414C2.7358 29.4781 5.40212 30.4376 8.87846 30.5984Z",
                            fill: "rgba(233,136,98,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="9.2%"
                        bottom="32.47%"
                        left="8.75%"
                        right="12.79%"
                        {...getOverrideProps(overrides, "Vector44013514")}
                      ></Icon>
                      <Icon
                        width="6.4px"
                        height="1.38px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 6.3974609375,
                          height: 1.3837890625,
                        }}
                        paths={[
                          {
                            d: "M3.23423 1.36781C2.11809 1.26746 1.04149 0.909981 0.0912208 0.324181C0.0705246 0.313043 0.0523163 0.297901 0.0377007 0.279661C0.0230851 0.26142 0.0123669 0.24046 0.00616837 0.218033C-3.01285e-05 0.195606 -0.0015827 0.172176 0.00162682 0.149148C0.00483634 0.12612 0.012747 0.103965 0.0248515 0.0840171C0.0369559 0.0640692 0.0530119 0.0467374 0.0720761 0.0330588C0.0911404 0.0193801 0.112811 0.00963557 0.135787 0.00441289C0.158763 -0.000809786 0.182578 -0.00140247 0.205793 0.00266575C0.229008 0.00673397 0.251146 0.0153816 0.270889 0.0280903C2.32529 1.24019 4.32405 1.37318 6.0539 0.413635C6.08885 0.393151 6.1249 0.374538 6.16188 0.357877C6.20458 0.342347 6.25172 0.343813 6.29334 0.361963C6.33497 0.380113 6.36779 0.41352 6.38486 0.455112C6.40192 0.496704 6.40188 0.543212 6.38477 0.584783C6.36765 0.626354 6.3348 0.659723 6.29316 0.677823C6.27955 0.683786 6.25716 0.696904 6.2257 0.714199C5.31677 1.22074 4.27515 1.44833 3.23423 1.36781Z",
                            fill: "rgba(12,12,12,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="51.73%"
                        bottom="45.64%"
                        left="22.3%"
                        right="56.35%"
                        {...getOverrideProps(overrides, "Vector44013515")}
                      ></Icon>
                      <Icon
                        width="2.36px"
                        height="0.68px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 2.3564453125,
                          height: 0.6787109375,
                        }}
                        paths={[
                          {
                            d: "M0.732234 0.662529C0.530121 0.6475 0.329662 0.615578 0.133028 0.56711C0.110724 0.561686 0.0897374 0.551988 0.0712369 0.538564C0.0527363 0.525139 0.0370932 0.508252 0.0252122 0.488871C0.0133313 0.469489 0.00544015 0.447989 0.00198758 0.4256C-0.00146499 0.403212 -0.000412304 0.380368 0.00508912 0.358381C0.0105905 0.336394 0.0204374 0.315696 0.0340553 0.297458C0.0476732 0.27922 0.0647942 0.263799 0.0844553 0.252087C0.104116 0.240375 0.125935 0.232596 0.148646 0.229192C0.171357 0.225789 0.194521 0.226836 0.216825 0.232259C1.4001 0.520002 2.04861 0.0551375 2.07583 0.0351595C2.11277 0.00748078 2.15934 -0.00459752 2.20532 0.00158157C2.25129 0.00776067 2.2929 0.0316922 2.32098 0.0681095C2.34906 0.104527 2.36131 0.150446 2.35504 0.195769C2.34877 0.241092 2.32451 0.282101 2.28756 0.309779C1.82603 0.60095 1.27644 0.725597 0.732234 0.662529Z",
                            fill: "rgba(12,12,12,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="56.17%"
                        bottom="42.54%"
                        left="30.07%"
                        right="62.07%"
                        {...getOverrideProps(overrides, "Vector44013516")}
                      ></Icon>
                      <Icon
                        width="1.71px"
                        height="1.68px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 1.70849609375,
                          height: 1.6845703125,
                        }}
                        paths={[
                          {
                            d: "M0.854179 1.68412C1.32593 1.68412 1.70838 1.30711 1.70838 0.842059C1.70838 0.377004 1.32593 0 0.854179 0C0.382425 0 0 0.377004 0 0.842059C0 1.30711 0.382425 1.68412 0.854179 1.68412Z",
                            fill: "rgba(12,12,12,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="33.61%"
                        bottom="63.18%"
                        left="14.52%"
                        right="79.78%"
                        {...getOverrideProps(overrides, "Vector44013517")}
                      ></Icon>
                      <Icon
                        width="1.71px"
                        height="1.68px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 1.70849609375,
                          height: 1.6845703125,
                        }}
                        paths={[
                          {
                            d: "M0.854198 1.68411C1.32595 1.68411 1.70838 1.30711 1.70838 0.842059C1.70838 0.377004 1.32595 0 0.854198 0C0.382443 0 0 0.377004 0 0.842059C0 1.30711 0.382443 1.68411 0.854198 1.68411Z",
                            fill: "rgba(12,12,12,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="34.6%"
                        bottom="62.19%"
                        left="41.01%"
                        right="53.29%"
                        {...getOverrideProps(overrides, "Vector44013518")}
                      ></Icon>
                      <Icon
                        width="6.25px"
                        height="7.47px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 6.25341796875,
                          height: 7.47265625,
                        }}
                        paths={[
                          {
                            d: "M1.79186 7.44016C3.87591 7.74818 5.90006 5.80018 6.21252 3.74543C6.52497 1.69068 5.00775 0.308019 2.9237 0L1.64031 1.21776L0 7.17538L1.79186 7.44016Z",
                            fill: "rgba(233,136,98,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="39.44%"
                        bottom="46.32%"
                        left="74.67%"
                        right="4.47%"
                        {...getOverrideProps(overrides, "Vector44013519")}
                      ></Icon>
                      <View
                        padding="0px 0px 0px 0px"
                        width="24.03px"
                        height="23.4px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="4.84%"
                        bottom="50.57%"
                        left="12.45%"
                        right="7.38%"
                        {...getOverrideProps(overrides, "Group44013520")}
                      >
                        <Icon
                          width="24.03px"
                          height="22.11px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 24.03125,
                            height: 22.109375,
                          }}
                          paths={[
                            {
                              d: "M18.8234 22.0102C18.8234 22.0102 19.5328 11.7368 16.4893 10.6854C14.4627 9.98526 9.0009 12.2183 4.43959 10.7054C2.44326 10.0434 0.429695 10.2808 0.0990908 11.2081C-0.031578 11.5752 -0.553957 5.97416 3.22727 2.28717C6.2378 -0.648398 14.7267 -0.445638 18.3812 1.14366C28.499 5.54418 21.9413 18.6641 21.9413 18.6641L20.984 22.1095L18.8234 22.0102Z",
                              fill: "rgba(12,12,12,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="0%"
                          bottom="5.52%"
                          left="0%"
                          right="0%"
                          {...getOverrideProps(overrides, "Vector44013521")}
                        ></Icon>
                        <Icon
                          width="2.41px"
                          height="6.11px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 2.40771484375,
                            height: 6.10546875,
                          }}
                          paths={[
                            {
                              d: "M1.7312 6.10348L1.71789 6.10348C1.04609 6.00598 -0.0700455 5.76863 0.0034557 5.27305C0.0639505 4.86246 1.867 0.59612 2.07268 0.111281C2.08078 0.0897381 2.09322 0.0700276 2.10924 0.0533383C2.12525 0.036649 2.14452 0.023325 2.16589 0.0141595C2.18727 0.00499407 2.21029 0.000179892 2.23359 4.94697e-06C2.2569 -0.000169998 2.28 0.0042968 2.30151 0.0131404C2.32302 0.0219839 2.34251 0.0350214 2.35878 0.0514683C2.37505 0.0679152 2.38777 0.0874326 2.3962 0.108851C2.40463 0.130269 2.40859 0.153144 2.40783 0.176107C2.40707 0.199069 2.40162 0.221643 2.39179 0.242476C1.59205 2.13174 0.387604 5.04316 0.345862 5.32255C0.394561 5.44928 1.0718 5.66486 1.76749 5.76624C1.81131 5.77311 1.85079 5.79631 1.87775 5.83105C1.90471 5.86579 1.9171 5.90941 1.91236 5.9529C1.90762 5.99639 1.88612 6.03642 1.85229 6.06472C1.81846 6.09303 1.77489 6.10744 1.73059 6.10498L1.7312 6.10348Z",
                              fill: "rgba(12,12,12,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="73.91%"
                          bottom="0%"
                          left="14.68%"
                          right="75.3%"
                          {...getOverrideProps(overrides, "Vector44013522")}
                        ></Icon>
                        <Icon
                          width="4.44px"
                          height="1.32px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 4.4404296875,
                            height: 1.322265625,
                          }}
                          paths={[
                            {
                              d: "M4.2136 0.326468C3.53301 0.0394707 2.78643 -0.0609768 2.05273 0.0357417C1.69256 0.0809263 1.34131 0.179128 1.0107 0.327064C0.684267 0.471786 0.37765 0.656523 0.0981266 0.876904C0.0467771 0.915928 0.0126648 0.972965 0.00288342 1.03615C-0.00689794 1.09933 0.008417 1.1638 0.0456219 1.21615C0.0828269 1.26849 0.139055 1.30469 0.202637 1.3172C0.26622 1.32971 0.332255 1.31758 0.386995 1.28332L0.404238 1.27229C0.658768 1.0963 0.934784 0.952641 1.22576 0.844701C1.51178 0.736881 1.81273 0.672436 2.11836 0.653566C2.72066 0.611723 3.3235 0.727226 3.86606 0.988421L3.88875 1.00005C3.97799 1.04536 4.08184 1.05387 4.17745 1.02371C4.27306 0.993537 4.35259 0.927165 4.39856 0.839186C4.44453 0.751207 4.45316 0.648831 4.42256 0.554579C4.39196 0.460327 4.32463 0.381919 4.23538 0.336605L4.2136 0.326468Z",
                              fill: "rgba(12,12,12,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="54.9%"
                          bottom="39.45%"
                          left="0.53%"
                          right="80.99%"
                          {...getOverrideProps(overrides, "Vector44013523")}
                        ></Icon>
                        <Icon
                          width="4.35px"
                          height="1.67px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 4.34814453125,
                            height: 1.6708984375,
                          }}
                          paths={[
                            {
                              d: "M0.527778 0.845096C1.1017 0.660001 1.71505 0.627703 2.30572 0.751469C2.60578 0.811619 2.89483 0.916381 3.16294 1.06217C3.43595 1.20875 3.68919 1.38857 3.91671 1.5974L3.93152 1.61023C3.98078 1.65224 4.04464 1.67381 4.10969 1.67042C4.17474 1.66703 4.23593 1.63893 4.28042 1.59203C4.32491 1.54512 4.34925 1.48305 4.34832 1.41884C4.34739 1.35463 4.32127 1.29327 4.27544 1.24764C4.0294 0.991319 3.75155 0.766609 3.44847 0.578825C3.14185 0.387295 2.80784 0.242159 2.45756 0.148254C1.74433 -0.0472676 0.990798 -0.0494343 0.276424 0.141989C0.179757 0.168679 0.0977985 0.232131 0.0485896 0.318387C-0.000619215 0.404643 -0.013045 0.50664 0.0140296 0.601934C0.0411042 0.697227 0.105479 0.778013 0.192977 0.826523C0.280476 0.875033 0.383924 0.887292 0.48059 0.860602L0.50267 0.853745L0.527778 0.845096Z",
                              fill: "rgba(12,12,12,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="57.36%"
                          bottom="35.5%"
                          left="36.46%"
                          right="45.44%"
                          {...getOverrideProps(overrides, "Vector44013524")}
                        ></Icon>
                      </View>
                      <Icon
                        width="8.39px"
                        height="5.76px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 8.28564453125,
                          height: 9.7958984375,
                        }}
                        paths={[
                          {
                            d: "M4.19326 5.76144C6.50913 5.76144 8.38651 4.4717 8.38651 2.88072C8.38651 1.28974 6.50913 0 4.19326 0C1.87738 0 0 1.28974 0 2.88072C0 4.4717 1.87738 5.76144 4.19326 5.76144Z",
                            fill: "rgba(12,12,12,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="15.03%"
                        bottom="73.99%"
                        left="24.47%"
                        right="47.55%"
                        transformOrigin="top left"
                        transform="rotate(-70.14deg)"
                        {...getOverrideProps(overrides, "Vector44013525")}
                      ></Icon>
                    </View>
                    <View
                      padding="0px 0px 0px 0px"
                      width="140.99px"
                      height="125.14px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="45.95%"
                      bottom="0%"
                      left="3.34%"
                      right="1.86%"
                      {...getOverrideProps(overrides, "Group44013526")}
                    >
                      <Icon
                        width="30.24px"
                        height="15.39px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 30.2353515625,
                          height: 15.392578125,
                        }}
                        paths={[
                          {
                            d: "M15.8134 0C15.8134 0 14.1915 8.2873 6.32055 8.74918C-1.55043 9.21106 0.156131 15.3926 0.156131 15.3926L30.2354 15.3926L30.2354 0.577886L15.8134 0Z",
                            fill: "rgba(0,163,255,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="87.7%"
                        bottom="0%"
                        left="0%"
                        right="78.56%"
                        {...getOverrideProps(overrides, "Vector44013527")}
                      ></Icon>
                      <Icon
                        width="28.32px"
                        height="26.38px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 28.32177734375,
                          height: 26.3828125,
                        }}
                        paths={[
                          {
                            d: "M8.48832 5.75723C8.48832 5.75723 10.7439 13.8993 3.8877 17.739C-2.96848 21.5786 1.33088 26.3826 1.33088 26.3826L28.3216 13.2925L21.6874 0L8.48832 5.75723Z",
                            fill: "rgba(0,163,255,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="78.92%"
                        bottom="0%"
                        left="45.78%"
                        right="34.13%"
                        {...getOverrideProps(overrides, "Vector44013528")}
                      ></Icon>
                      <View
                        padding="0px 0px 0px 0px"
                        width="128.54px"
                        height="117.44px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="0%"
                        bottom="6.15%"
                        left="8.83%"
                        right="0%"
                        {...getOverrideProps(overrides, "Group44013529")}
                      >
                        <Icon
                          width="87.43px"
                          height="109.67px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 87.42529296875,
                            height: 109.6728515625,
                          }}
                          paths={[
                            {
                              d: "M57.1862 101.214L34.4251 30.4289L75.6825 30.4289C83.9703 30.4289 87.4252 23.5007 87.4252 15.3312C87.4252 7.16165 79.278 0 70.9906 0L15.3081 0C10.2535 0 4.58568 3.04739 1.81169 7.21295C-0.962298 11.3785 -0.212759 17.8332 1.79718 22.4055L38.2453 109.673",
                              fill: "rgba(38,38,38,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="0.85%"
                          bottom="5.76%"
                          left="15.65%"
                          right="16.34%"
                          {...getOverrideProps(overrides, "Vector44013530")}
                        ></Icon>
                        <Icon
                          width="87.43px"
                          height="109.67px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 87.42529296875,
                            height: 109.6728515625,
                          }}
                          paths={[
                            {
                              d: "M57.1862 101.214L34.4251 30.4289L75.6825 30.4289C83.9703 30.4289 87.4252 23.5007 87.4252 15.3312C87.4252 7.16165 79.278 0 70.9906 0L15.3081 0C10.2535 0 4.58568 3.04739 1.81169 7.21295C-0.962298 11.3785 -0.212759 17.8332 1.79718 22.4055L38.2453 109.673",
                              fill: "rgba(10,10,10,0.8)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="0.85%"
                          bottom="5.76%"
                          left="15.65%"
                          right="16.34%"
                          {...getOverrideProps(overrides, "Vector44013531")}
                        ></Icon>
                        <Icon
                          width="124.45px"
                          height="117.44px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 124.44921875,
                            height: 117.4443359375,
                          }}
                          paths={[
                            {
                              d: "M19.5156 117.445L57.5726 31.4313L107.544 31.4281C119.253 30.5231 124.616 24.1972 124.445 16.0295C124.277 7.96525 120.135 0 111.991 0L44.6397 0C38.6145 0.121955 33.8741 6.68606 31.6388 12.203L0 112.179",
                              fill: "rgba(38,38,38,1)",
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
                          right="3.19%"
                          {...getOverrideProps(overrides, "Vector44013532")}
                        ></Icon>
                        <Icon
                          width="22.84px"
                          height="31.44px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 22.84375,
                            height: 31.4423828125,
                          }}
                          paths={[
                            {
                              d: "M22.1532 0.0984041C22.1532 0.0984041 24.3725 14.3651 20.8547 22.2969C16.4631 32.1994 0 31.4281 0 31.4281L0.927693 0L22.1532 0.0984041Z",
                              fill: "rgba(38,38,38,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="0%"
                          bottom="73.23%"
                          left="82.23%"
                          right="0%"
                          {...getOverrideProps(overrides, "Vector44013533")}
                        ></Icon>
                      </View>
                    </View>
                    <Icon
                      width="59.94px"
                      height="60.74px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 59.94140625,
                        height: 60.7431640625,
                      }}
                      paths={[
                        {
                          d: "M3.62454 60.7426L38.9233 53.5321C40.3941 53.2316 41.7644 52.5703 42.9072 51.6093C44.0501 50.6483 44.9286 49.4187 45.4615 48.0343L59.3451 11.9686C59.7679 10.8862 59.9695 9.73216 59.9385 8.57272C59.9075 7.41327 59.6444 6.27128 59.1643 5.21237C58.6842 4.15346 57.9967 3.19848 57.1412 2.40228C56.2856 1.60609 55.2789 0.984376 54.1789 0.572852C53.0789 0.161328 51.9072 -0.0318919 50.7312 0.00428425C49.5553 0.0404605 48.3981 0.30532 47.3263 0.783655C46.2544 1.26199 45.289 1.94437 44.4855 2.7916C43.682 3.63884 43.0561 4.63422 42.644 5.72058L30.4991 37.2679L0 43.499C0 43.499 3.01354 60.8676 3.62454 60.7426Z",
                          fill: "rgba(0,163,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="19.63%"
                      bottom="54.13%"
                      left="29.58%"
                      right="30.11%"
                      {...getOverrideProps(overrides, "Vector44013534")}
                    ></Icon>
                    <Icon
                      width="62.08px"
                      height="64.8px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 62.0830078125,
                        height: 64.7978515625,
                      }}
                      paths={[
                        {
                          d: "M1.81045 24.8085C2.21788 29.5296 5.10742 58.9828 5.50064 64.7979L58.6066 64.7979C58.9118 59.5532 59.9024 37.2861 61.0597 27.0302C62.164 17.2434 62.5648 11.6585 61.2926 8.61737C59.0488 3.25313 53.434 1.32302 48.5975 0.677463C45.6444 0.283569 41.2026 0.00089177 41.2026 0.00089177C41.2026 0.00089177 40.8266 7.5001 31.8585 7.91755C19.651 8.48409 20.4662 0 20.4057 0C18.4281 0 7.66303 1.41784 4.97131 3.14728C1.16951 5.59026 0.0458306 8.91913 0.00136691 11.9776C-0.0497512 15.5002 1.34706 19.4544 1.81045 24.8085Z",
                          fill: "rgba(0,163,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="18.04%"
                      bottom="53.97%"
                      left="58.26%"
                      right="0%"
                      {...getOverrideProps(overrides, "Vector44013535")}
                    ></Icon>
                    <Icon
                      width="1.68px"
                      height="16.62px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 1.68115234375,
                        height: 16.625,
                      }}
                      paths={[
                        {
                          d: "M1.52984 16.6246L1.54255 16.6246C1.58249 16.6213 1.61946 16.6025 1.64532 16.5723C1.67118 16.5421 1.68382 16.503 1.68047 16.4636L0.3018 0.137123C0.300686 0.117439 0.295514 0.0981835 0.286606 0.0805322C0.277698 0.062881 0.265233 0.0472011 0.249978 0.0344513C0.234724 0.0217016 0.217001 0.012146 0.19788 0.00636966C0.178759 0.000593312 0.158647 -0.00128047 0.138766 0.000855245C0.118962 0.00247172 0.0996826 0.00792039 0.0820152 0.0168889C0.0643479 0.0258574 0.0486435 0.0381703 0.035806 0.0531239C0.0229684 0.0680776 0.0132417 0.0853771 0.00719054 0.104037C0.00113941 0.122696 -0.00113163 0.142344 0.000525914 0.161865L1.37861 16.4878C1.38173 16.5252 1.39904 16.56 1.42707 16.5854C1.4551 16.6107 1.49179 16.6248 1.52984 16.6246Z",
                          fill: "rgba(12,12,12,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="31.97%"
                      bottom="60.85%"
                      left="59.85%"
                      right="39.02%"
                      {...getOverrideProps(overrides, "Vector44013536")}
                    ></Icon>
                    <View
                      padding="0px 0px 0px 0px"
                      width="88.95px"
                      height="41.49px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="27.21%"
                      bottom="54.86%"
                      left="0%"
                      right="40.19%"
                      {...getOverrideProps(overrides, "Group44013537")}
                    >
                      <Icon
                        width="65.4px"
                        height="41.49px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 65.39697265625,
                          height: 41.4931640625,
                        }}
                        paths={[
                          {
                            d: "M65.2433 37.4459L53.5908 2.13525C53.3862 1.51481 52.9877 0.974096 52.4523 0.590543C51.917 0.20699 51.2723 0.000274654 50.6105 5.3963e-09L3.13533 5.3963e-09C2.64045 -2.88203e-05 2.15259 0.115428 1.71166 0.336935C1.27073 0.558441 0.889254 0.879698 0.598439 1.27443C0.307625 1.66916 0.115728 2.12617 0.038454 2.60804C-0.0388197 3.08991 0.000727951 3.58297 0.153848 4.04688L11.8067 39.3581C12.0114 39.9787 12.4101 40.5194 12.9457 40.9029C13.4812 41.2864 14.1262 41.4929 14.7881 41.4928L62.2618 41.4928C62.7567 41.4928 63.2445 41.3774 63.6854 41.1558C64.1264 40.9343 64.5079 40.6131 64.7987 40.2184C65.0895 39.8236 65.2814 39.3666 65.3586 38.8848C65.4359 38.4029 65.3964 37.9098 65.2433 37.4459Z",
                            fill: "rgba(41,42,46,1)",
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
                        right="26.48%"
                        {...getOverrideProps(overrides, "Vector44013538")}
                      ></Icon>
                      <Icon
                        width="65.4px"
                        height="41.49px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 65.39697265625,
                          height: 41.4931640625,
                        }}
                        paths={[
                          {
                            d: "M65.2433 37.4459L53.5908 2.13525C53.3862 1.51481 52.9877 0.974096 52.4523 0.590543C51.917 0.20699 51.2723 0.000274654 50.6105 5.3963e-09L3.13533 5.3963e-09C2.64045 -2.88203e-05 2.15259 0.115428 1.71166 0.336935C1.27073 0.558441 0.889254 0.879698 0.598439 1.27443C0.307625 1.66916 0.115728 2.12617 0.038454 2.60804C-0.0388197 3.08991 0.000727951 3.58297 0.153848 4.04688L11.8067 39.3581C12.0114 39.9787 12.4101 40.5194 12.9457 40.9029C13.4812 41.2864 14.1262 41.4929 14.7881 41.4928L62.2618 41.4928C62.7567 41.4928 63.2445 41.3774 63.6854 41.1558C64.1264 40.9343 64.5079 40.6131 64.7987 40.2184C65.0895 39.8236 65.2814 39.3666 65.3586 38.8848C65.4359 38.4029 65.3964 37.9098 65.2433 37.4459Z",
                            fill: "rgba(41,42,46,1)",
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
                        right="26.48%"
                        {...getOverrideProps(overrides, "Vector44013539")}
                      ></Icon>
                      <Icon
                        width="34.65px"
                        height="2.86px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 34.646484375,
                          height: 2.86328125,
                        }}
                        paths={[
                          {
                            d: "M33.2129 0L1.43372 0C0.641899 0 0 0.632784 0 1.41337L0 1.44975C0 2.23033 0.641899 2.86311 1.43372 2.86311L33.2129 2.86311C34.0047 2.86311 34.6466 2.23033 34.6466 1.44975L34.6466 1.41337C34.6466 0.632784 34.0047 0 33.2129 0Z",
                            fill: "rgba(41,42,46,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="93.1%"
                        bottom="0%"
                        left="61.05%"
                        right="0%"
                        {...getOverrideProps(overrides, "Vector44013540")}
                      ></Icon>
                      <Icon
                        width="34.65px"
                        height="2.86px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 34.646484375,
                          height: 2.86328125,
                        }}
                        paths={[
                          {
                            d: "M33.2129 0L1.43372 0C0.641899 0 0 0.632784 0 1.41337L0 1.44975C0 2.23033 0.641899 2.86311 1.43372 2.86311L33.2129 2.86311C34.0047 2.86311 34.6466 2.23033 34.6466 1.44975L34.6466 1.41337C34.6466 0.632784 34.0047 0 33.2129 0Z",
                            fill: "rgba(41,42,46,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="93.1%"
                        bottom="0%"
                        left="61.05%"
                        right="0%"
                        {...getOverrideProps(overrides, "Vector44013541")}
                      ></Icon>
                      <Icon
                        width="9.96px"
                        height="9.82px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 9.9580078125,
                          height: 9.81640625,
                        }}
                        paths={[
                          {
                            d: "M4.97903 9.81665C7.72887 9.81665 9.95804 7.61912 9.95804 4.90832C9.95804 2.19753 7.72887 0 4.97903 0C2.22919 0 0 2.19753 0 4.90832C0 7.61912 2.22919 9.81665 4.97903 9.81665Z",
                            fill: "rgba(255,255,255,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="42.32%"
                        bottom="34.02%"
                        left="31.16%"
                        right="57.64%"
                        {...getOverrideProps(overrides, "Vector44013542")}
                      ></Icon>
                    </View>
                    <View
                      padding="0px 0px 0px 0px"
                      width="21.94px"
                      height="13.94px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="37.4%"
                      bottom="56.58%"
                      left="45.06%"
                      right="40.19%"
                      {...getOverrideProps(overrides, "b_4_ha")}
                    >
                      <Icon
                        width="21.94px"
                        height="13.94px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 21.93603515625,
                          height: 13.9375,
                        }}
                        paths={[
                          {
                            d: "M0.884962 5.57994L8.81614 2.83938L7.67763 2.76185C7.31055 2.72966 6.96955 2.56125 6.72361 2.29069C6.47767 2.02012 6.34513 1.66758 6.35279 1.30435C6.36337 1.11708 6.41253 0.933898 6.49727 0.765969C6.58202 0.59804 6.70058 0.448883 6.84572 0.3276C6.99085 0.206317 7.15952 0.115452 7.34145 0.0605329C7.52337 0.00561417 7.71474 -0.0122014 7.90388 0.00817321L21.936 1.47819L21.5715 5.92344C21.4582 7.30408 20.9293 8.61993 20.0525 9.7023C19.1757 10.7847 17.991 11.5842 16.6502 11.9985L10.5735 13.8645C10.2597 13.9676 9.9194 13.9606 9.61022 13.8447C9.30105 13.7288 9.042 13.5111 8.87693 13.2285C8.73345 12.9703 8.67742 12.6736 8.71704 12.3817C8.75665 12.0899 8.88983 11.8181 9.09714 11.6061C9.07864 11.5928 9.06411 11.5747 9.05509 11.554C9.04787 11.5342 9.04569 11.513 9.04875 11.4922C9.05181 11.4714 9.06003 11.4516 9.07264 11.4347L7.95348 11.7809C7.60414 11.8966 7.22327 11.8772 6.88788 11.7266C6.5525 11.576 6.28761 11.3055 6.1468 10.9698C6.0317 10.6654 6.02927 10.3306 6.13993 10.0246C6.25059 9.71853 6.46725 9.46079 6.75175 9.29674C6.73859 9.28984 6.72688 9.28053 6.71726 9.26931L6.2569 9.41154C5.94279 9.51549 5.60186 9.50903 5.29203 9.39325C4.9822 9.27747 4.72258 9.05951 4.5573 8.77641C4.38335 8.46323 4.3391 8.09584 4.43383 7.75122C4.52855 7.40659 4.75491 7.11148 5.06545 6.92771C5.06286 6.91858 5.06145 6.90916 5.06122 6.89968L1.75821 8.04111C1.59446 8.09768 1.42101 8.12188 1.24777 8.11236C1.07452 8.10285 0.904874 8.05978 0.748512 7.98563C0.432725 7.83588 0.190213 7.5686 0.0743332 7.24259C-0.0415462 6.91657 -0.0213053 6.55853 0.130604 6.24723C0.282513 5.93592 0.553641 5.69686 0.884352 5.58262L0.884962 5.57994Z",
                            fill: "rgba(233,136,98,1)",
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
                        {...getOverrideProps(overrides, "Vector44013544")}
                      ></Icon>
                      <Icon
                        width="3.46px"
                        height="1.4px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 3.458984375,
                          height: 1.4052734375,
                        }}
                        paths={[
                          {
                            d: "M0.132751 1.40491C0.148117 1.40493 0.163364 1.40231 0.177816 1.39716L3.37255 0.251853C3.3888 0.24598 3.4037 0.23701 3.41643 0.225455C3.42916 0.2139 3.43946 0.199984 3.44673 0.184506C3.454 0.169029 3.45811 0.152285 3.45882 0.135241C3.45953 0.118197 3.45684 0.10118 3.45088 0.085165C3.44493 0.0691496 3.43584 0.0544536 3.42411 0.041905C3.41239 0.0293565 3.39828 0.019202 3.38258 0.0120307C3.36687 0.00485938 3.34989 0.000812396 3.3326 0.000110085C3.31531 -0.000592227 3.29804 0.00207131 3.28179 0.00794493L0.0867631 1.15324C0.0576401 1.16364 0.0331671 1.18384 0.0176615 1.21027C0.00215593 1.2367 -0.00337884 1.26768 0.00200611 1.29775C0.00739105 1.32782 0.0233581 1.35505 0.0471077 1.37466C0.0708573 1.39426 0.100854 1.40497 0.131828 1.40491L0.132751 1.40491Z",
                            fill: "rgba(10,10,10,0.2)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="40.32%"
                        bottom="49.6%"
                        left="23.07%"
                        right="61.17%"
                        {...getOverrideProps(overrides, "b_4_ha_sh44013545")}
                      ></Icon>
                      <Icon
                        width="2.78px"
                        height="1.14px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 2.7841796875,
                          height: 1.1416015625,
                        }}
                        paths={[
                          {
                            d: "M0.131476 1.14153C0.14652 1.14155 0.161456 1.13903 0.175636 1.13408L2.69374 0.252954C2.7104 0.247567 2.72579 0.238957 2.73902 0.22762C2.75226 0.216283 2.76306 0.202446 2.7708 0.186935C2.77853 0.171424 2.78304 0.154551 2.78407 0.137296C2.78509 0.120041 2.78262 0.102752 2.77678 0.0864563C2.77093 0.0701609 2.76185 0.0551876 2.75005 0.0424047C2.73824 0.0296217 2.72395 0.0192885 2.70805 0.0120207C2.69214 0.00475302 2.67493 0.000695855 2.6574 8.19408e-05C2.63988 -0.000531973 2.62242 0.00230848 2.60603 0.00844457L0.0876112 0.889569C0.0583741 0.899786 0.0337504 0.919859 0.0180665 0.946242C0.00238253 0.972624 -0.0033521 1.00361 0.00189415 1.03375C0.0071404 1.06389 0.0230284 1.09124 0.0467373 1.11096C0.0704461 1.13067 0.100456 1.14151 0.131476 1.14153Z",
                            fill: "rgba(10,10,10,0.2)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="58.63%"
                        bottom="33.18%"
                        left="30.43%"
                        right="56.88%"
                        {...getOverrideProps(overrides, "b_4_ha_sh44013546")}
                      ></Icon>
                      <Icon
                        width="1.44px"
                        height="0.7px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 1.44287109375,
                          height: 0.703125,
                        }}
                        paths={[
                          {
                            d: "M0.131537 0.70302C0.147561 0.702899 0.163427 0.699974 0.178411 0.694375L1.35807 0.250983C1.39068 0.238686 1.41699 0.214126 1.43123 0.182699C1.44547 0.151272 1.44646 0.11555 1.43398 0.0834033C1.42151 0.0512565 1.39659 0.0253148 1.36471 0.0112791C1.33283 -0.0027567 1.2966 -0.00372988 1.26399 0.00856736L0.0843496 0.452251C0.0556973 0.463115 0.0318031 0.483514 0.0167987 0.509915C0.0017944 0.536317 -0.003387 0.567065 0.00217719 0.596826C0.00774137 0.626588 0.023694 0.653497 0.0472603 0.672891C0.0708266 0.692285 0.100525 0.702939 0.131223 0.70302L0.131537 0.70302Z",
                            fill: "rgba(10,10,10,0.2)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="78.46%"
                        bottom="16.49%"
                        left="41.24%"
                        right="52.18%"
                        {...getOverrideProps(overrides, "b_4_ha_sh44013547")}
                      ></Icon>
                    </View>
                    <Icon
                      width="65.14px"
                      height="49.65px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 65.14013671875,
                        height: 49.654296875,
                      }}
                      paths={[
                        {
                          d: "M0.503317 30.2908L33.7755 30.2687L46.3632 0L65.1399 7.78247L49.4349 43.7071L49.2815 44.0649C48.5131 45.811 47.2189 47.2822 45.5742 48.2791C43.9295 49.276 42.0137 49.7506 40.0863 49.6384L0 47.3037L0.503317 30.2908Z",
                          fill: "rgba(0,163,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="23.82%"
                      bottom="54.73%"
                      left="55.3%"
                      right="0.9%"
                      {...getOverrideProps(overrides, "Vector44013548")}
                    ></Icon>
                    <Icon
                      width="63.11px"
                      height="42.77px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 63.11083984375,
                        height: 42.7705078125,
                      }}
                      paths={[
                        {
                          d: "M40.7932 42.7705C42.6584 42.7673 44.4824 42.2285 46.042 41.2199C47.6017 40.2114 48.8296 38.7767 49.5755 37.0914L49.7292 36.7336L63.1106 6.12371L62.833 6.00443L49.2972 36.9745C48.5377 38.6898 47.2636 40.1347 45.6462 41.1148C44.0288 42.095 42.1457 42.5634 40.2502 42.4571L0.310653 40.1313L0.805496 23.4085L34.032 23.3865L43.7112 0.113009L43.4311 0L33.8296 23.0883L0.512087 23.1107L0 40.4119L0.146714 40.4206L40.233 42.755C40.4196 42.7651 40.6087 42.7705 40.7932 42.7705Z",
                          fill: "rgba(12,12,12,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="26.86%"
                      bottom="54.67%"
                      left="55.19%"
                      right="2.37%"
                      {...getOverrideProps(overrides, "Vector44013549")}
                    ></Icon>
                  </View>
                  <View
                    padding="0px 0px 0px 0px"
                    width="287.17px"
                    height="127.22px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="45.13%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Group44013550")}
                  >
                    <Icon
                      width="125.1px"
                      height="0.6px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 13.353515625,
                        height: 124.50390625,
                      }}
                      paths={[
                        {
                          d: "M125.096 0L0 0L0 0.604862L125.096 0.604862L125.096 0Z",
                          fill: "rgba(73,73,73,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="99.95%"
                      bottom="-0.43%"
                      left="18.89%"
                      right="37.55%"
                      transformOrigin="top left"
                      transform="rotate(-84.15deg)"
                      {...getOverrideProps(overrides, "Vector44013551")}
                    ></Icon>
                    <View
                      padding="0px 0px 0px 0px"
                      width="284.95px"
                      height="124.51px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="2.13%"
                      bottom="0%"
                      left="0.53%"
                      right="0.24%"
                      {...getOverrideProps(overrides, "Group44013552")}
                    >
                      <View
                        padding="0px 0px 0px 0px"
                        width="66.08px"
                        height="124.5px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="0%"
                        bottom="0%"
                        left="76.81%"
                        right="0%"
                        {...getOverrideProps(overrides, "Group44013553")}
                      >
                        <Icon
                          width="0.6px"
                          height="125.1px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 13.3623046875,
                            height: 124.50390625,
                          }}
                          paths={[
                            {
                              d: "M0.604862 0L0 0L0 125.096L0.604862 125.096L0.604862 0Z",
                              fill: "rgba(73,73,73,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="0.05%"
                          bottom="-0.52%"
                          left="79.78%"
                          right="19.31%"
                          transformOrigin="top left"
                          transform="rotate(-5.69deg)"
                          {...getOverrideProps(overrides, "Vector44013554")}
                        ></Icon>
                        <Icon
                          width="0.6px"
                          height="125.1px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 13.3623046875,
                            height: 124.50390625,
                          }}
                          paths={[
                            {
                              d: "M0.604862 0L0 0L0 125.096L0.604862 125.096L0.604862 0Z",
                              fill: "rgba(73,73,73,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="0.05%"
                          bottom="-0.52%"
                          left="0%"
                          right="99.08%"
                          transformOrigin="top left"
                          transform="rotate(-5.69deg)"
                          {...getOverrideProps(overrides, "Vector44013555")}
                        ></Icon>
                      </View>
                      <Icon
                        width="125.1px"
                        height="0.6px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 13.353515625,
                          height: 124.50390625,
                        }}
                        paths={[
                          {
                            d: "M125.096 0L0 0L0 0.604862L125.096 0.604862L125.096 0Z",
                            fill: "rgba(73,73,73,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="99.95%"
                        bottom="-0.44%"
                        left="0%"
                        right="56.1%"
                        transformOrigin="top left"
                        transform="rotate(-84.15deg)"
                        {...getOverrideProps(overrides, "Vector44013556")}
                      ></Icon>
                    </View>
                    <View
                      padding="0px 0px 0px 0px"
                      width="287.17px"
                      height="5.48px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="0%"
                      bottom="95.69%"
                      left="0%"
                      right="0%"
                      {...getOverrideProps(overrides, "Group44013557")}
                    >
                      <Icon
                        width="286.56px"
                        height="4.89px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 286.5615234375,
                          height: 4.88671875,
                        }}
                        paths={[
                          {
                            d: "M284.083 0L2.47847 0C1.10965 0 0 1.09382 0 2.44312C0 3.79243 1.10965 4.88627 2.47847 4.88627L284.083 4.88627C285.452 4.88627 286.561 3.79243 286.561 2.44312C286.561 1.09382 285.452 0 284.083 0Z",
                            fill: "rgba(41,42,46,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="94.58%"
                        bottom="-83.69%"
                        left="99.9%"
                        right="-99.68%"
                        transformOrigin="top left"
                        transform="rotate(180deg)"
                        {...getOverrideProps(overrides, "Vector44013558")}
                      ></Icon>
                      <Icon
                        width="286.56px"
                        height="4.89px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 286.5615234375,
                          height: 4.88671875,
                        }}
                        paths={[
                          {
                            d: "M284.083 0L2.47847 0C1.10965 0 0 1.09382 0 2.44312C0 3.79243 1.10965 4.88627 2.47847 4.88627L284.083 4.88627C285.452 4.88627 286.561 3.79243 286.561 2.44312C286.561 1.09382 285.452 0 284.083 0Z",
                            fill: "rgba(255,255,255,0.8)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="94.58%"
                        bottom="-83.69%"
                        left="99.9%"
                        right="-99.68%"
                        transformOrigin="top left"
                        transform="rotate(180deg)"
                        {...getOverrideProps(overrides, "Vector44013559")}
                      ></Icon>
                      <Icon
                        width="287.17px"
                        height="5.48px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 287.1650390625,
                          height: 5.4833984375,
                        }}
                        paths={[
                          {
                            d: "M0 2.74147C0.00048076 2.01453 0.293627 1.31751 0.815052 0.803485C1.33648 0.289465 2.04354 0.000473933 2.78095 0L284.384 0C285.122 3.3899e-14 285.829 0.288834 286.351 0.802957C286.872 1.31708 287.165 2.01439 287.165 2.74147C287.165 3.46855 286.872 4.16583 286.351 4.67996C285.829 5.19408 285.122 5.48291 284.384 5.48291L2.78095 5.48291C2.04354 5.48244 1.33648 5.19345 0.815052 4.67943C0.293627 4.16541 0.00048076 3.4684 0 2.74147ZM2.78095 0.596358C2.20384 0.596358 1.65036 0.822353 1.24228 1.22464C0.834205 1.62692 0.604948 2.17255 0.604948 2.74147C0.604948 3.31038 0.834205 3.85599 1.24228 4.25828C1.65036 4.66056 2.20384 4.88656 2.78095 4.88656L284.384 4.88656C284.961 4.88656 285.515 4.66056 285.923 4.25828C286.331 3.85599 286.56 3.31038 286.56 2.74147C286.56 2.17255 286.331 1.62692 285.923 1.22464C285.515 0.822353 284.961 0.596358 284.384 0.596358L2.78095 0.596358Z",
                            fill: "rgba(41,42,46,1)",
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
                        {...getOverrideProps(overrides, "Vector44013560")}
                      ></Icon>
                    </View>
                    <View
                      padding="0px 0px 0px 0px"
                      width="232.43px"
                      height="5.48px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="0%"
                      bottom="95.69%"
                      left="0%"
                      right="19.06%"
                      {...getOverrideProps(overrides, "Group44013561")}
                    >
                      <Icon
                        width="231.83px"
                        height="4.89px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 231.8251953125,
                          height: 4.88671875,
                        }}
                        paths={[
                          {
                            d: "M229.347 0L2.47847 0C1.10965 0 0 1.09382 0 2.44312C0 3.79243 1.10965 4.88627 2.47847 4.88627L229.347 4.88627C230.716 4.88627 231.825 3.79243 231.825 2.44312C231.825 1.09382 230.716 0 229.347 0Z",
                            fill: "rgba(255,255,255,1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="94.58%"
                        bottom="-83.69%"
                        left="99.87%"
                        right="-99.61%"
                        transformOrigin="top left"
                        transform="rotate(180deg)"
                        {...getOverrideProps(overrides, "Vector44013562")}
                      ></Icon>
                      <Icon
                        width="232.43px"
                        height="5.48px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 232.4306640625,
                          height: 5.4833984375,
                        }}
                        paths={[
                          {
                            d: "M0 2.74147C0.00048076 2.01453 0.293627 1.31751 0.815052 0.803485C1.33648 0.289465 2.04354 0.000473933 2.78095 0L229.65 0C230.387 3.3899e-14 231.094 0.288834 231.616 0.802957C232.138 1.31708 232.431 2.01439 232.431 2.74147C232.431 3.46855 232.138 4.16583 231.616 4.67996C231.094 5.19408 230.387 5.48291 229.65 5.48291L2.78095 5.48291C2.04354 5.48244 1.33648 5.19345 0.815052 4.67943C0.293627 4.16541 0.00048076 3.4684 0 2.74147ZM2.78095 0.596358C2.20384 0.596358 1.65036 0.822353 1.24228 1.22464C0.834205 1.62692 0.604948 2.17255 0.604948 2.74147C0.604948 3.31038 0.834205 3.85599 1.24228 4.25828C1.65036 4.66056 2.20384 4.88656 2.78095 4.88656L229.65 4.88656C230.227 4.88656 230.78 4.66056 231.188 4.25828C231.596 3.85599 231.826 3.31038 231.826 2.74147C231.826 2.17255 231.596 1.62692 231.188 1.22464C230.78 0.822353 230.227 0.596358 229.65 0.596358L2.78095 0.596358Z",
                            fill: "rgba(41,42,46,1)",
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
                        {...getOverrideProps(overrides, "Vector44013563")}
                      ></Icon>
                    </View>
                  </View>
                </View>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="121.28px"
                height="264.35px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="5.37%"
                bottom="0.22%"
                left="1.47%"
                right="58.1%"
                {...getOverrideProps(overrides, "Group44013564")}
              >
                <View
                  padding="0px 0px 0px 0px"
                  width="69.76px"
                  height="160.71px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="39.21%"
                  bottom="0%"
                  left="10.31%"
                  right="32.17%"
                  {...getOverrideProps(overrides, "Group44013565")}
                >
                  <Icon
                    width="23.48px"
                    height="31.85px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 23.4775390625,
                      height: 31.849609375,
                    }}
                    paths={[
                      {
                        d: "M22.0355 8.54551C22.0355 8.54551 16.3076 16.8561 21.3843 22.8393C26.461 28.8226 20.708 31.8497 20.708 31.8497L0 10.1992L10.9719 0L22.0355 8.54551Z",
                        fill: "rgba(0,163,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="80.18%"
                    bottom="0%"
                    left="3.14%"
                    right="63.21%"
                    {...getOverrideProps(overrides, "Vector44013566")}
                  ></Icon>
                  <Icon
                    width="60.77px"
                    height="143.39px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 60.77197265625,
                      height: 143.3896484375,
                    }}
                    paths={[
                      {
                        d: "M45.2985 3.78478C45.2985 3.78478 64.6336 69.3427 60.0765 78.9259C55.5963 88.3483 14.7054 143.389 14.7054 143.389L0 130.757L36.3692 72.6134C36.3692 72.6134 25.6032 39.0367 19.7827 21.4277C16.274 10.8126 10.3703 11.1507 9.80954 0L45.2985 3.78478Z",
                        fill: "rgba(38,38,38,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="10.78%"
                    left="12.88%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector44013567")}
                  ></Icon>
                  <Icon
                    width="6.58px"
                    height="36.51px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 6.57568359375,
                      height: 36.513671875,
                    }}
                    paths={[
                      {
                        d: "M1.79277 5.36932L6.57579 0L5.33081 31.5187L0 36.5135L1.79277 5.36932Z",
                        fill: "rgba(10,10,10,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="45%"
                    bottom="32.28%"
                    left="44.56%"
                    right="46.01%"
                    {...getOverrideProps(overrides, "Vector44013568")}
                  ></Icon>
                  <Icon
                    width="9.89px"
                    height="38.46px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 9.88818359375,
                      height: 38.4560546875,
                    }}
                    paths={[
                      {
                        d: "M0.972239 10.9332C0.972239 10.9332 -1.31779 -2.46721 1.13134 0.403058C9.09518 9.73606 9.88796 38.4561 9.88796 38.4561L0.972239 10.9332Z",
                        fill: "rgba(10,10,10,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="12.81%"
                    bottom="63.26%"
                    left="44.6%"
                    right="41.23%"
                    {...getOverrideProps(overrides, "Vector44013569")}
                  ></Icon>
                  <Icon
                    width="30.34px"
                    height="15.45px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 30.34375,
                      height: 15.4462890625,
                    }}
                    paths={[
                      {
                        d: "M14.4728 0C14.4728 0 16.1004 8.31651 24.0007 8.77988C31.901 9.24325 30.1866 15.4466 30.1866 15.4466L0 15.4466L0 0.57996L14.4728 0Z",
                        fill: "rgba(0,163,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="90.16%"
                    bottom="0.22%"
                    left="44.42%"
                    right="12.08%"
                    {...getOverrideProps(overrides, "Vector44013570")}
                  ></Icon>
                  <Icon
                    width="49.49px"
                    height="148.88px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 49.4931640625,
                      height: 148.8818359375,
                    }}
                    paths={[
                      {
                        d: "M0.393798 0.813131C0.393798 0.813131 0.260104 0.200373 0.182066 3.78329C0.126108 6.31334 -0.916218 15.2685 2.68746 29.3933C9.43808 55.857 29.6585 148.882 29.6585 148.882L49.4932 148.717L30.7882 0L0.393798 0.813131Z",
                        fill: "rgba(38,38,38,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0.83%"
                    bottom="6.53%"
                    left="0%"
                    right="29.05%"
                    {...getOverrideProps(overrides, "Vector44013571")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  width="121.28px"
                  height="107.54px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="59.32%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group44013572")}
                >
                  <Icon
                    width="0.06px"
                    height="0.55px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 0.06396484375,
                      height: 0.548828125,
                    }}
                    paths={[
                      {
                        d: "M0.0638105 0.544941L0 0.548517C0 0.548517 0.0459198 -0.683258 0.0638105 0.544941Z",
                        fill: "rgba(51,51,51,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="97.96%"
                    bottom="1.53%"
                    left="10.33%"
                    right="89.62%"
                    {...getOverrideProps(overrides, "Vector44013573")}
                  ></Icon>
                  <View
                    padding="0px 0px 0px 0px"
                    width="17.21px"
                    height="15.56px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="37.02%"
                    bottom="48.52%"
                    left="85.81%"
                    right="0%"
                    {...getOverrideProps(overrides, "Group44013574")}
                  >
                    <Icon
                      width="17.21px"
                      height="15.56px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 17.21435546875,
                        height: 15.556640625,
                      }}
                      paths={[
                        {
                          d: "M17.1015 7.46638C16.9822 7.23338 16.7924 7.04264 16.5584 6.92049C16.3244 6.79834 16.0577 6.75081 15.7952 6.78444C15.7975 6.76142 15.7924 6.73827 15.7806 6.71825C15.7684 6.70276 15.7523 6.69072 15.7339 6.68334C15.7155 6.67596 15.6954 6.6735 15.6757 6.6762L16.5619 6.05003C16.8268 5.87103 17.0171 5.60365 17.0977 5.29721C17.1783 4.99077 17.1438 4.66594 17.0005 4.38261C16.8495 4.10717 16.6001 3.89686 16.3007 3.7925C16.0013 3.68814 15.6732 3.69718 15.3802 3.81786C15.3823 3.80563 15.3738 3.79371 15.372 3.78118L15.735 3.52386C15.984 3.35429 16.166 3.10509 16.25 2.81846C16.3341 2.53183 16.3151 2.22537 16.1962 1.95096C16.1181 1.78045 16.0026 1.62917 15.8579 1.50801C15.7133 1.38686 15.5432 1.29887 15.3599 1.25037C15.1766 1.20188 14.9846 1.1941 14.7979 1.22759C14.6112 1.26109 14.4343 1.33502 14.2801 1.44406L13.4401 2.03773C13.4377 2.03266 13.4401 2.027 13.4368 2.02252C13.4334 2.01805 13.4244 2.01626 13.4195 2.01119C13.6124 1.79729 13.7258 1.52511 13.7411 1.23931C13.7565 0.953517 13.6728 0.671069 13.5039 0.438298C13.1074 -0.19086 12.1918 -0.0623439 11.6485 0.321412L6.7037 3.68875L7.58752 2.22171C7.76547 1.93944 7.82813 1.60111 7.76284 1.27507C7.69754 0.949025 7.50916 0.659558 7.23575 0.465133C7.09106 0.369639 6.92815 0.304214 6.75696 0.272847C6.58577 0.241481 6.40989 0.244833 6.24005 0.282698C6.07022 0.320563 5.90999 0.392148 5.76915 0.493083C5.62832 0.594018 5.50983 0.722186 5.4209 0.869765L0.597352 8.87796C0.0311785 9.8175 -0.141064 10.9376 0.117222 12.0004C0.375508 13.0631 1.04397 13.9847 1.98057 14.5693C3.06682 15.2474 4.33374 15.5902 5.61892 15.5538C6.90411 15.5174 8.14899 15.1035 9.19397 14.365L16.6614 9.08877C16.9095 8.90676 17.0879 8.64752 17.1678 8.35304C17.2477 8.05857 17.2243 7.74614 17.1015 7.46638Z",
                          fill: "rgba(233,136,98,1)",
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
                      {...getOverrideProps(overrides, "Vector44013575")}
                    ></Icon>
                    <View
                      padding="0px 0px 0px 0px"
                      width="4.94px"
                      height="3.44px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="12.67%"
                      bottom="65.21%"
                      left="49.52%"
                      right="21.81%"
                      {...getOverrideProps(overrides, "Group44013576")}
                    >
                      <Icon
                        width="4.94px"
                        height="3.44px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 4.93505859375,
                          height: 3.44140625,
                        }}
                        paths={[
                          {
                            d: "M0.0230326 3.39321C0.0411802 3.41788 0.0684101 3.43456 0.0988819 3.43969C0.129354 3.44482 0.160646 3.43798 0.186067 3.42064L4.8844 0.21253C4.89717 0.203798 4.90807 0.192675 4.91648 0.17979C4.92489 0.166905 4.93064 0.152511 4.93341 0.137435C4.93618 0.122359 4.9359 0.106895 4.93261 0.0919229C4.92931 0.0769505 4.92305 0.0627626 4.91419 0.0501735C4.90533 0.0375844 4.89405 0.0268367 4.88098 0.0185475C4.86791 0.0102583 4.85331 0.00459054 4.83802 0.00186322C4.82272 -0.000864093 4.80703 -0.000594874 4.79185 0.0026549C4.77666 0.00590466 4.76227 0.0120721 4.7495 0.0208042L0.051168 3.22891C0.0383742 3.2376 0.0274434 3.24869 0.0189988 3.26155C0.0105541 3.2744 0.00475848 3.28878 0.00194953 3.30384C-0.00085943 3.3189 -0.000631331 3.33436 0.00262337 3.34934C0.00587808 3.36431 0.0120963 3.37851 0.0209188 3.39112L0.0230326 3.39321Z",
                            fill: "rgba(12,12,12,1)",
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
                        {...getOverrideProps(overrides, "Vector44013577")}
                      ></Icon>
                    </View>
                    <View
                      padding="0px 0px 0px 0px"
                      width="5.48px"
                      height="3.81px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="23.67%"
                      bottom="51.82%"
                      left="57.53%"
                      right="10.64%"
                      {...getOverrideProps(overrides, "Group44013578")}
                    >
                      <Icon
                        width="5.48px"
                        height="3.81px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 5.47998046875,
                          height: 3.8115234375,
                        }}
                        paths={[
                          {
                            d: "M0.0224234 3.76411C0.0406648 3.78867 0.0679096 3.80524 0.0983558 3.81031C0.128802 3.81538 0.160048 3.80854 0.185457 3.79124L5.42885 0.211007C5.44165 0.202317 5.45258 0.191227 5.46102 0.178371C5.46947 0.165514 5.47525 0.151143 5.47806 0.13608C5.48087 0.121016 5.48064 0.105557 5.47739 0.0905812C5.47413 0.0756049 5.46792 0.0614071 5.45909 0.0487999C5.44057 0.0242503 5.4133 0.00752763 5.38277 0.00199561C5.35225 -0.00353642 5.32073 0.00253084 5.29456 0.0189802L0.0511588 3.59922C0.038365 3.60791 0.0274342 3.619 0.0189895 3.63185C0.0105449 3.64471 0.00475848 3.65908 0.00194953 3.67414C-0.00085943 3.68921 -0.000631331 3.70467 0.00262337 3.71965C0.00587808 3.73462 0.0120963 3.74882 0.0209188 3.76142L0.0224234 3.76411Z",
                            fill: "rgba(12,12,12,1)",
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
                        {...getOverrideProps(overrides, "Vector44013579")}
                      ></Icon>
                    </View>
                    <View
                      padding="0px 0px 0px 0px"
                      width="4.42px"
                      height="3.09px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="42.87%"
                      bottom="37.27%"
                      left="66.12%"
                      right="8.2%"
                      {...getOverrideProps(overrides, "Group44013580")}
                    >
                      <Icon
                        width="4.42px"
                        height="3.09px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 4.41943359375,
                          height: 3.0888671875,
                        }}
                        paths={[
                          {
                            d: "M0.0230378 3.04105C0.0412791 3.06561 0.0685147 3.08219 0.0989609 3.08726C0.129407 3.09233 0.160663 3.08548 0.186072 3.06819L4.36869 0.212531C4.39448 0.194896 4.4121 0.167884 4.41769 0.137436C4.42328 0.106988 4.41636 0.0755995 4.39847 0.0501746C4.38058 0.0247498 4.35319 0.0073724 4.3223 0.00186434C4.29141 -0.00364372 4.25957 0.00316554 4.23378 0.0208008L0.0511639 2.87646C0.0383701 2.88515 0.0274394 2.89624 0.0189947 2.9091C0.01055 2.92196 0.00475439 2.93633 0.00194543 2.95139C-0.000863527 2.96645 -0.000626196 2.98191 0.00262851 2.99689C0.00588321 3.01187 0.0120922 3.02606 0.0209147 3.03867L0.0230378 3.04105Z",
                            fill: "rgba(12,12,12,1)",
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
                        {...getOverrideProps(overrides, "Vector44013581")}
                      ></Icon>
                    </View>
                  </View>
                  <Icon
                    width="61.44px"
                    height="49.7px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 61.4384765625,
                      height: 49.7001953125,
                    }}
                    paths={[
                      {
                        d: "M45.8285 0L31.656 23.7947L14.3627 1.43424L0 14.1981L24.527 45.5105L24.6879 45.7332C25.6696 47.0587 26.9774 48.116 28.4882 48.8055C29.999 49.495 31.663 49.7939 33.3234 49.6741C34.9838 49.5543 36.5859 49.0197 37.9787 48.1208C39.3716 47.2218 40.5093 45.988 41.2847 44.5357L61.4383 8.55774L45.8285 0Z",
                        fill: "rgba(0,163,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="43.58%"
                    bottom="10.21%"
                    left="46.16%"
                    right="3.18%"
                    {...getOverrideProps(overrides, "Vector44013582")}
                  ></Icon>
                  <Icon
                    width="1.74px"
                    height="3.02px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.740234375,
                      height: 3.01953125,
                    }}
                    paths={[
                      {
                        d: "M0.180067 3.01996C0.149241 3.01997 0.118928 3.01219 0.0920326 2.99734C0.0651376 2.98249 0.0425578 2.96108 0.0264664 2.93516C0.0103749 2.90924 0.00130685 2.87968 0.000130941 2.84931C-0.00104496 2.81895 0.0057155 2.78879 0.0197556 2.76174L1.40902 0.0781269C1.43391 0.0421317 1.47127 0.0163297 1.51409 0.00555678C1.55691 -0.00521619 1.60225 -0.000217253 1.64159 0.0196158C1.68094 0.0394489 1.71159 0.0727515 1.7278 0.113279C1.74401 0.153807 1.74466 0.198769 1.72964 0.239738L0.340377 2.92335C0.325142 2.95234 0.302147 2.97667 0.273888 2.9937C0.24563 3.01073 0.213187 3.01981 0.180067 3.01996Z",
                        fill: "rgba(12,12,12,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="65.56%"
                    bottom="31.64%"
                    left="70.97%"
                    right="27.6%"
                    {...getOverrideProps(overrides, "Vector44013583")}
                  ></Icon>
                  <Icon
                    width="7.53px"
                    height="0.36px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 0.7919921875,
                      height: 7.5361328125,
                    }}
                    paths={[
                      {
                        d: "M7.52788 0L0 0L0 0.359929L7.52788 0.359929L7.52788 0Z",
                        fill: "rgba(12,12,12,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="72.56%"
                    bottom="27.1%"
                    left="56.83%"
                    right="36.97%"
                    transformOrigin="top left"
                    transform="rotate(-86.71deg)"
                    {...getOverrideProps(overrides, "Vector44013584")}
                  ></Icon>
                  <View
                    padding="0px 0px 0px 0px"
                    width="103.55px"
                    height="107.54px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="14.62%"
                    {...getOverrideProps(overrides, "Group44013585")}
                  >
                    <View
                      padding="0px 0px 0px 0px"
                      width="47.34px"
                      height="54.72px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="0%"
                      bottom="49.12%"
                      left="15.34%"
                      right="38.94%"
                      {...getOverrideProps(overrides, "Group44013586")}
                    >
                      <View
                        padding="0px 0px 0px 0px"
                        width="47.34px"
                        height="54.72px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="0%"
                        bottom="0%"
                        left="0%"
                        right="0%"
                        {...getOverrideProps(overrides, "Group44013587")}
                      >
                        <Icon
                          width="47.34px"
                          height="40.41px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 47.34326171875,
                            height: 40.41015625,
                          }}
                          paths={[
                            {
                              d: "M7.79382 1.8329C7.79382 1.8329 7.12838 10.1983 5.18347 13.2138C-0.419864 21.8953 -2.12975 31.714 3.31902 36.916C8.76779 42.1181 43.8993 42.5904 46.6996 30.8001C49.057 20.874 44.261 19.7493 43.1872 11.5264C42.7015 7.80573 41.3367 0 41.3367 0",
                              fill: "rgba(10,10,10,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="26.14%"
                          bottom="0%"
                          left="0%"
                          right="0%"
                          {...getOverrideProps(overrides, "Vector44013588")}
                        ></Icon>
                        <Icon
                          width="26.1px"
                          height="26.2px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 26.0966796875,
                            height: 26.1982421875,
                          }}
                          paths={[
                            {
                              d: "M26.0966 16.0981C26.0361 16.09 25.3628 27.0991 12.3896 26.1393C3.40828 25.4761 0.205682 16.0823 0 16.0823C0.967917 15.8795 2.59886 15.5846 3.02898 15.3583C4.44335 14.609 6.19316 13.8295 6.64899 11.1221C6.91184 9.56171 6.46599 1.57856 6.60331 0L20.3907 3.03338C20.198 6.36791 18.8499 14.0982 23.5754 15.4674C24.3604 15.6923 25.2073 15.9004 26.0966 16.0981Z",
                              fill: "rgba(233,136,98,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="49.57%"
                          bottom="2.55%"
                          left="24.63%"
                          right="20.25%"
                          {...getOverrideProps(overrides, "sk44013589")}
                        ></Icon>
                        <Icon
                          width="9.29px"
                          height="10.31px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 9.28515625,
                            height: 10.306640625,
                          }}
                          paths={[
                            {
                              d: "M9.2853 10.3063C9.06956 9.62014 8.93051 8.91284 8.87061 8.19694C8.71935 6.56326 8.74978 4.91817 8.96135 3.291C6.15926 2.91802 3.51943 1.77785 1.34173 0C1.08583 0.932108 -0.321883 5.00434 0.0677041 5.89023C0.805438 7.5645 4.26635 10.3063 9.2853 10.3063Z",
                              fill: "rgba(12,12,12,0.52)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="53.23%"
                          bottom="27.94%"
                          left="48.49%"
                          right="31.9%"
                          {...getOverrideProps(overrides, "sh44013590")}
                        ></Icon>
                        <Icon
                          width="23.8px"
                          height="30.57px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 23.80419921875,
                            height: 30.56640625,
                          }}
                          paths={[
                            {
                              d: "M15.4081 30.5099C9.9672 30.9661 2.96009 28.7429 1.58716 21.5911L0.347014 15.1382C-1.02592 7.98635 1.67155 1.478 8.50202 0.203581C15.3328 -1.07084 21.5514 3.77427 22.9243 10.9261L23.4727 13.7829C24.0002 16.5271 25.1163 29.6956 15.4081 30.5099Z",
                              fill: "rgba(233,136,98,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="9.97%"
                          bottom="34.17%"
                          left="31.7%"
                          right="18.02%"
                          {...getOverrideProps(overrides, "Vector44013591")}
                        ></Icon>
                        <Icon
                          width="1.71px"
                          height="1.69px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 1.71240234375,
                            height: 1.6884765625,
                          }}
                          paths={[
                            {
                              d: "M0.856302 1.68829C1.32923 1.68829 1.71261 1.31035 1.71261 0.844145C1.71261 0.377937 1.32923 0 0.856302 0C0.383379 0 0 0.377937 0 0.844145C0 1.31035 0.383379 1.68829 0.856302 1.68829Z",
                              fill: "rgba(12,12,12,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="32.64%"
                          bottom="64.27%"
                          left="75.36%"
                          right="21.02%"
                          {...getOverrideProps(overrides, "Vector44013592")}
                        ></Icon>
                        <Icon
                          width="1.71px"
                          height="1.69px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 1.71240234375,
                            height: 1.6884765625,
                          }}
                          paths={[
                            {
                              d: "M0.856302 1.68829C1.32923 1.68829 1.71261 1.31035 1.71261 0.844145C1.71261 0.377937 1.32923 0 0.856302 0C0.383379 0 0 0.377937 0 0.844145C0 1.31035 0.383379 1.68829 0.856302 1.68829Z",
                              fill: "rgba(12,12,12,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="34.75%"
                          bottom="62.16%"
                          left="56.83%"
                          right="39.55%"
                          {...getOverrideProps(overrides, "Vector44013593")}
                        ></Icon>
                        <Icon
                          width="2.62px"
                          height="6.07px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 2.6201171875,
                            height: 6.0732421875,
                          }}
                          paths={[
                            {
                              d: "M0.922401 6.07197C0.926873 6.07167 0.931321 6.07107 0.935712 6.07018C1.21237 6.01648 1.48582 5.94779 1.75481 5.86444C2.1565 5.73712 2.6825 5.52631 2.61414 5.16879C2.5361 4.76118 0.559432 0.576832 0.334391 0.0997458C0.32464 0.0791686 0.310875 0.0606867 0.293877 0.0453546C0.27688 0.0300226 0.256982 0.0181395 0.235327 0.0103868C0.213671 0.00263399 0.190681 -0.000836751 0.167665 0.000170075C0.144648 0.0011769 0.122058 0.00664292 0.101185 0.0162561C0.0803112 0.0258692 0.0615608 0.039441 0.0460079 0.0561969C0.0304549 0.0729529 0.0184031 0.092564 0.0105386 0.113912C0.00267416 0.13526 -0.000848886 0.157925 0.000172444 0.180615C0.00119377 0.203305 0.00674084 0.225574 0.0164925 0.246151C0.859488 2.02837 2.21669 4.95887 2.26932 5.23319C2.22395 5.36022 1.5573 5.60204 0.870376 5.73026C0.826054 5.73883 0.786794 5.76393 0.76077 5.80032C0.734746 5.83672 0.723965 5.8816 0.730669 5.92564C0.737373 5.96967 0.761046 6.00946 0.796761 6.03672C0.832475 6.06397 0.877478 6.0766 0.922401 6.07197Z",
                              fill: "rgba(12,12,12,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="36.51%"
                          bottom="52.39%"
                          left="66.86%"
                          right="27.61%"
                          {...getOverrideProps(overrides, "Vector44013594")}
                        ></Icon>
                        <Icon
                          width="6.39px"
                          height="1.52px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 6.390625,
                            height: 1.5146484375,
                          }}
                          paths={[
                            {
                              d: "M3.20463 1.47984C4.31871 1.33755 5.38328 0.939215 6.31255 0.316943C6.35105 0.291702 6.37788 0.252499 6.38721 0.207861C6.39655 0.163223 6.38763 0.11676 6.3624 0.0785677C6.33717 0.040376 6.29766 0.0135444 6.25248 0.00390924C6.20729 -0.00572591 6.16007 0.00261388 6.12109 0.0271135C4.11024 1.31853 2.11209 1.52755 0.343827 0.631224C0.308047 0.612182 0.271299 0.594963 0.233727 0.579638C0.190067 0.564476 0.142099 0.56694 0.100273 0.58649C0.0584469 0.606041 0.0261526 0.641093 0.0104296 0.684012C-0.00529338 0.726931 -0.00317044 0.774241 0.0163327 0.815625C0.0358358 0.85701 0.0711401 0.889116 0.114553 0.904953C0.128467 0.910618 0.151454 0.922845 0.183516 0.939245C1.11357 1.41172 2.16546 1.59994 3.20463 1.47984Z",
                              fill: "rgba(12,12,12,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="50.55%"
                          bottom="46.69%"
                          left="59.9%"
                          right="26.6%"
                          {...getOverrideProps(overrides, "Vector44013595")}
                        ></Icon>
                        <Icon
                          width="33.54px"
                          height="22.91px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 33.541015625,
                            height: 22.912109375,
                          }}
                          paths={[
                            {
                              d: "M2.09453 22.8414L8.21782 21.7348C12.8551 19.8861 14.2576 11.9709 14.2576 11.9709C14.2576 11.9709 19.8903 17.3829 33.541 14.3048C33.541 14.3048 30.8039 -4.46171 10.6373 0.994967C4.13411 2.75422 -0.532458 9.21427 0.048897 17.8477C0.45633 23.8981 2.09453 22.8414 2.09453 22.8414Z",
                              fill: "rgba(10,10,10,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="0%"
                          bottom="58.12%"
                          left="16.47%"
                          right="12.69%"
                          {...getOverrideProps(overrides, "Vector44013596")}
                        ></Icon>
                        <Icon
                          width="6.42px"
                          height="7.46px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 6.4208984375,
                            height: 7.4619140625,
                          }}
                          paths={[
                            {
                              d: "M4.63544 7.41064C2.55956 7.79827 0.456757 5.92273 0.0638427 3.87632C-0.329071 1.82992 1.13702 0.387633 3.2129 0L4.5456 1.17154L6.42094 7.07728L4.63544 7.41064Z",
                              fill: "rgba(233,136,98,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="39.72%"
                          bottom="46.64%"
                          left="27.04%"
                          right="59.4%"
                          {...getOverrideProps(overrides, "Vector44013597")}
                        ></Icon>
                        <Icon
                          width="4.27px"
                          height="1.13px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 4.2666015625,
                            height: 1.1259765625,
                          }}
                          paths={[
                            {
                              d: "M0.113867 0.633778C0.719805 0.24826 1.41979 0.0305353 2.14044 0.00342792C2.495 -0.012048 2.84992 0.0249382 3.19336 0.113157C3.53343 0.199377 3.86116 0.327408 4.16883 0.494232C4.21079 0.51608 4.24251 0.553114 4.25733 0.597545C4.27216 0.641977 4.26893 0.690343 4.24832 0.732475C4.22772 0.774607 4.19134 0.807221 4.14685 0.823459C4.10235 0.839697 4.0532 0.838293 4.00973 0.819544L3.99643 0.813581C3.71203 0.675901 3.41124 0.573922 3.1011 0.510033C2.79457 0.445284 2.47985 0.426686 2.16767 0.454871C1.54812 0.505921 0.953295 0.717634 0.443563 1.06852L0.427229 1.08045C0.367983 1.11913 0.295858 1.13372 0.225948 1.12117C0.156037 1.10862 0.0937573 1.06991 0.0521412 1.01313C0.0105251 0.95635 -0.00720036 0.885903 0.00266886 0.816532C0.0125381 0.74716 0.0492388 0.684239 0.105094 0.640935L0.113867 0.633778Z",
                              fill: "rgba(12,12,12,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="29.28%"
                          bottom="68.66%"
                          left="69.97%"
                          right="21.02%"
                          {...getOverrideProps(overrides, "Vector44013598")}
                        ></Icon>
                        <Icon
                          width="4.09px"
                          height="1.69px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 4.09375,
                            height: 1.6943359375,
                          }}
                          paths={[
                            {
                              d: "M3.72831 0.604174C3.12471 0.458392 2.49272 0.472692 1.89653 0.645621C1.59514 0.730641 1.30849 0.860018 1.04627 1.02938C0.780429 1.19944 0.537348 1.4018 0.322757 1.6317L0.313078 1.64124C0.279503 1.67443 0.234161 1.69345 0.186626 1.6943C0.13909 1.69515 0.0930791 1.67776 0.0583041 1.6458C0.0235291 1.61384 0.00271368 1.56981 0.000247083 1.52301C-0.00221951 1.4762 0.0138572 1.43028 0.0450856 1.39494C0.270696 1.12979 0.529336 0.893763 0.814882 0.692436C1.10281 0.487926 1.4202 0.32711 1.75648 0.215348C2.43814 -0.0156836 3.17027 -0.061821 3.87622 0.0817645C3.94762 0.0969087 4.00999 0.139393 4.04961 0.19987C4.08923 0.260346 4.10287 0.333861 4.0875 0.404244C4.07214 0.474627 4.02904 0.536113 3.9677 0.575173C3.90635 0.614233 3.83177 0.627667 3.76037 0.612523L3.74919 0.609841L3.72831 0.604174Z",
                              fill: "rgba(12,12,12,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="31.65%"
                          bottom="65.25%"
                          left="50.8%"
                          right="40.56%"
                          {...getOverrideProps(overrides, "Vector44013599")}
                        ></Icon>
                        <Icon
                          width="2.37px"
                          height="0.64px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 2.3701171875,
                            height: 0.638671875,
                          }}
                          paths={[
                            {
                              d: "M1.64663 0.610488C1.84853 0.587455 2.04807 0.547556 2.24311 0.491218C2.26526 0.484934 2.28593 0.474413 2.30395 0.460252C2.32197 0.446092 2.33699 0.428569 2.34814 0.408689C2.35929 0.388808 2.36635 0.366959 2.36894 0.344386C2.37152 0.321812 2.36957 0.298955 2.3632 0.277125C2.35682 0.255295 2.34615 0.234917 2.33178 0.217154C2.31742 0.19939 2.29965 0.18459 2.27948 0.173598C2.25931 0.162606 2.23715 0.155635 2.21425 0.153087C2.19135 0.150539 2.16816 0.152462 2.14602 0.158747C0.972118 0.491813 0.304557 0.0505077 0.276427 0.0314242C0.238322 0.00505038 0.191152 -0.00532077 0.14529 0.00259182C0.0994282 0.0105044 0.0586347 0.0360556 0.0318809 0.0736195C0.00512718 0.111183 -0.00539799 0.157684 0.00262859 0.202894C0.0106552 0.248105 0.0365744 0.288324 0.0746794 0.314698C0.548265 0.589362 1.10372 0.693879 1.64663 0.610488Z",
                              fill: "rgba(12,12,12,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="55.1%"
                          bottom="43.73%"
                          left="63.69%"
                          right="31.3%"
                          {...getOverrideProps(overrides, "Vector44013600")}
                        ></Icon>
                        <Icon
                          width="6.24px"
                          height="10.54px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 6.23974609375,
                            height: 10.5380859375,
                          }}
                          paths={[
                            {
                              d: "M0.0604939 10.5382L0 10.3713C7.75816 7.62563 5.86104 0.120465 5.84108 0.0450253L6.015 0C6.03527 0.0775265 7.97715 7.73774 0.0604939 10.5382Z",
                              fill: "rgba(12,12,12,1)",
                              fillRule: "nonzero",
                            },
                          ]}
                          display="block"
                          gap="unset"
                          alignItems="unset"
                          justifyContent="unset"
                          position="absolute"
                          top="20.32%"
                          bottom="60.42%"
                          left="33.72%"
                          right="53.1%"
                          {...getOverrideProps(overrides, "Vector44013601")}
                        ></Icon>
                      </View>
                      <Icon
                        width="3.26px"
                        height="2.36px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 3.5,
                          height: 2.689453125,
                        }}
                        paths={[
                          {
                            d: "M1.63098 2.35958C2.53175 2.35958 3.26196 1.83138 3.26196 1.17979C3.26196 0.528214 2.53175 0 1.63098 0C0.730216 0 0 0.528214 0 1.17979C0 1.83138 0.730216 2.35958 1.63098 2.35958Z",
                            fill: "rgba(12,12,12,0.1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="44.6%"
                        bottom="51.09%"
                        left="53.21%"
                        right="39.9%"
                        transformOrigin="top left"
                        transform="rotate(-6.05deg)"
                        {...getOverrideProps(overrides, "Vector44013602")}
                      ></Icon>
                      <Icon
                        width="2.26px"
                        height="2.37px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 2.26416015625,
                          height: 2.37109375,
                        }}
                        paths={[
                          {
                            d: "M0.0050563 1.35842C0.0776501 2.00517 0.860758 2.45274 1.75638 2.35881C1.91121 2.34238 2.06387 2.3101 2.21191 2.2625C2.26242 1.4929 2.2724 0.752223 2.25879 0.0661133C2.01113 0.00223262 1.75356 -0.0155654 1.49928 0.0136331C0.603351 0.107261 -0.0651177 0.708092 0.0050563 1.35842Z",
                            fill: "rgba(12,12,12,0.1)",
                            fillRule: "nonzero",
                          },
                        ]}
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="41.55%"
                        bottom="54.11%"
                        left="77.19%"
                        right="18.02%"
                        {...getOverrideProps(overrides, "Vector44013603")}
                      ></Icon>
                    </View>
                    <Icon
                      width="63.93px"
                      height="64.96px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 63.927734375,
                        height: 64.9560546875,
                      }}
                      paths={[
                        {
                          d: "M62.0265 24.8681C61.6179 29.6005 59.63 59.1262 59.2374 64.9556L4.96542 64.9556C4.65962 59.6981 3.411 36.7085 2.25101 26.4273C1.14396 16.6172 -1.02841 11.7047 0.563815 8.80493C3.16509 4.06388 10.276 1.32541 15.124 0.67836C18.0846 0.283273 22.5373 0 22.5373 0C22.5373 0 22.9145 7.51858 31.9041 7.93693C44.1419 8.50615 43.3246 0 43.3854 0C45.3678 0 56.6942 1.23715 59.464 2.85626C67.0143 7.26245 62.894 14.838 62.0265 24.8681Z",
                          fill: "rgba(0,163,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="39.6%"
                      bottom="0%"
                      left="7.47%"
                      right="30.79%"
                      {...getOverrideProps(overrides, "Vector44013604")}
                    ></Icon>
                    <Icon
                      width="43.93px"
                      height="28.65px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 43.9306640625,
                        height: 28.65234375,
                      }}
                      paths={[
                        {
                          d: "M43.8857 2.6145L38.8746 26.6248C38.7728 27.1123 38.5045 27.5506 38.1146 27.8668C37.7246 28.183 37.2365 28.3578 36.7316 28.3623L2.22596 28.6518C1.89682 28.6544 1.57125 28.5845 1.27307 28.4471C0.974881 28.3097 0.71163 28.1083 0.502572 27.8577C0.293514 27.6071 0.143937 27.3135 0.0647884 26.9986C-0.0143602 26.6836 -0.0210794 26.3552 0.0451222 26.0374L5.05652 2.02709C5.15838 1.53959 5.42664 1.10123 5.8166 0.785064C6.20656 0.468899 6.69466 0.294029 7.19954 0.289603L41.7052 6.91223e-05C42.0343 -0.00251649 42.3598 0.0674673 42.658 0.204885C42.9561 0.342303 43.2194 0.543682 43.4284 0.7943C43.6374 1.04492 43.787 1.33843 43.8661 1.65337C43.9452 1.9683 43.9519 2.29668 43.8857 2.6145Z",
                          fill: "rgba(41,42,46,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="63.37%"
                      bottom="9.99%"
                      left="57.58%"
                      right="0%"
                      {...getOverrideProps(overrides, "Vector44013605")}
                    ></Icon>
                    <View
                      padding="0px 0px 0px 0px"
                      width="18.85px"
                      height="14.26px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="74.27%"
                      bottom="12.47%"
                      left="50.9%"
                      right="30.89%"
                      {...getOverrideProps(overrides, "Group44013606")}
                    >
                      <Icon
                        width="18.85px"
                        height="14.26px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 18.85302734375,
                          height: 14.255859375,
                        }}
                        paths={[
                          {
                            d: "M18.6227 7.94438C18.6413 8.26057 18.5433 8.57272 18.3467 8.82323C18.1501 9.07374 17.8683 9.2457 17.5531 9.30735L16.4911 9.53815C16.5101 9.54429 16.5273 9.55495 16.541 9.56921C16.5548 9.58346 16.5648 9.60086 16.5701 9.61985C16.5728 9.64209 16.5677 9.66457 16.5559 9.68365C16.8112 9.75437 17.0379 9.90175 17.2043 10.1053C17.3708 10.3088 17.4688 10.5584 17.4848 10.8194C17.4862 11.1236 17.3836 11.4194 17.1935 11.6591C17.0034 11.8987 16.7369 12.0682 16.437 12.1401L7.46712 14.103C7.00855 14.2045 6.53999 14.2557 6.06999 14.2556C5.02307 14.2555 3.99189 14.0043 3.06536 13.5238C2.13883 13.0433 1.34476 12.3479 0.751589 11.4975C0.122574 10.5978 -0.125512 9.49161 0.0601117 8.41434C0.245736 7.33707 0.850418 6.37371 1.74552 5.72921L9.37573 0.230787C9.5436 0.109519 9.73886 0.0303172 9.94468 0L9.24234 3.36167L9.42957 3.31902L9.4692 3.31187L15.3209 2.13675C15.9724 1.99481 16.8656 2.22918 16.9808 2.96031C17.0426 3.24029 17.0064 3.53264 16.8783 3.78979C16.7501 4.04694 16.5374 4.25378 16.2749 4.37666C16.2785 4.38024 16.2858 4.38382 16.2858 4.39098C16.2858 4.39813 16.2821 4.40172 16.2821 4.40858L17.2939 4.18852C17.479 4.14808 17.671 4.14863 17.8559 4.19012C18.0407 4.23161 18.214 4.31301 18.3631 4.42846C18.5123 4.54391 18.6336 4.69053 18.7183 4.85776C18.803 5.02498 18.8491 5.20866 18.8532 5.39555C18.8531 5.69393 18.7484 5.9831 18.5568 6.21407C18.3652 6.44503 18.0984 6.60357 17.8018 6.66281L17.3659 6.75852C17.3626 6.77283 17.3659 6.78834 17.3589 6.79758C17.6764 6.79994 17.9817 6.91865 18.2152 7.13062C18.4488 7.3426 18.5941 7.63267 18.6227 7.94438Z",
                            fill: "rgba(233,136,98,1)",
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
                        {...getOverrideProps(overrides, "Vector44013607")}
                      ></Icon>
                      <View
                        padding="0px 0px 0px 0px"
                        width="5.83px"
                        height="1.37px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="30.15%"
                        bottom="60.27%"
                        left="55.46%"
                        right="13.6%"
                        {...getOverrideProps(overrides, "Group44013608")}
                      >
                        <Icon
                          width="5.83px"
                          height="1.37px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 5.833984375,
                            height: 1.3662109375,
                          }}
                          paths={[
                            {
                              d: "M0.00187937 1.27443C0.00856188 1.30434 0.026883 1.33047 0.0529025 1.3472C0.078922 1.36392 0.110564 1.36991 0.14102 1.36388L5.73981 0.230808C5.77054 0.22456 5.79749 0.206539 5.81474 0.180705C5.83198 0.15487 5.8381 0.123336 5.83177 0.0930473C5.82543 0.0627589 5.80715 0.0361936 5.78094 0.0191941C5.75474 0.0021946 5.72275 -0.00384232 5.69203 0.00240515L0.0932272 1.13548C0.0627467 1.14193 0.0360933 1.16 0.0190902 1.18576C0.00208705 1.21151 -0.00387956 1.24286 0.0024886 1.27294L0.00187937 1.27443Z",
                              fill: "rgba(12,12,12,1)",
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
                          {...getOverrideProps(overrides, "Vector44013609")}
                        ></Icon>
                      </View>
                      <View
                        padding="0px 0px 0px 0px"
                        width="6.48px"
                        height="1.49px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="46.42%"
                        bottom="43.09%"
                        left="57.77%"
                        right="7.84%"
                        {...getOverrideProps(overrides, "Group44013610")}
                      >
                        <Icon
                          width="6.48px"
                          height="1.49px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 6.4833984375,
                            height: 1.4951171875,
                          }}
                          paths={[
                            {
                              d: "M0.00304333 1.40434C0.00998988 1.43401 0.0284347 1.45983 0.0544357 1.47627C0.0804367 1.4927 0.111932 1.49846 0.142183 1.49231L6.39039 0.229225C6.4209 0.222712 6.44755 0.204572 6.46455 0.178767C6.48154 0.152962 6.48751 0.121584 6.48113 0.0914642C6.4739 0.0617423 6.45537 0.0358854 6.42937 0.0192398C6.40336 0.00259423 6.37187 -0.00357515 6.34139 0.002005L0.0931819 1.2651C0.0627181 1.27168 0.0361126 1.28983 0.019128 1.31561C0.00214328 1.3414 -0.00385378 1.37274 0.00243871 1.40285L0.00304333 1.40434Z",
                              fill: "rgba(12,12,12,1)",
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
                          {...getOverrideProps(overrides, "Vector44013611")}
                        ></Icon>
                      </View>
                      <View
                        padding="0px 0px 0px 0px"
                        width="5.22px"
                        height="1.24px"
                        display="block"
                        gap="unset"
                        alignItems="unset"
                        justifyContent="unset"
                        position="absolute"
                        top="66.82%"
                        bottom="24.48%"
                        left="60.22%"
                        right="12.09%"
                        {...getOverrideProps(overrides, "Group44013612")}
                      >
                        <Icon
                          width="5.22px"
                          height="1.24px"
                          viewBox={{
                            minX: 0,
                            minY: 0,
                            width: 5.22119140625,
                            height: 1.2412109375,
                          }}
                          paths={[
                            {
                              d: "M0.00188907 1.14921C0.00850035 1.17916 0.0268036 1.20533 0.052843 1.22207C0.0788823 1.23881 0.110561 1.24478 0.141025 1.23867L5.12489 0.231124C5.14029 0.228234 5.15494 0.222357 5.16801 0.213835C5.18108 0.205313 5.1923 0.19431 5.20102 0.181476C5.20974 0.168642 5.21579 0.154229 5.21881 0.139072C5.22183 0.123914 5.22177 0.108315 5.21862 0.0931819C5.21547 0.0780491 5.20931 0.0636866 5.20048 0.0509229C5.19166 0.0381592 5.18035 0.0272455 5.16721 0.0188283C5.15407 0.0104111 5.13936 0.00465134 5.12395 0.00188465C5.10853 -0.000882042 5.09271 -0.000599713 5.0774 0.00271272L0.0932368 1.01026C0.0627328 1.01677 0.0360745 1.03491 0.0190768 1.06072C0.00207902 1.08652 -0.00388093 1.1179 0.00249369 1.14802L0.00188907 1.14921Z",
                              fill: "rgba(12,12,12,1)",
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
                          {...getOverrideProps(overrides, "Vector44013613")}
                        ></Icon>
                      </View>
                    </View>
                    <Icon
                      width="59.62px"
                      height="59.41px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 59.61962890625,
                        height: 59.41015625,
                      }}
                      paths={[
                        {
                          d: "M59.6197 50.6838L10.9559 59.3531C9.43732 59.5159 7.90115 59.3298 6.46787 58.8091C5.03459 58.2884 3.7432 57.4474 2.69501 56.3521C1.64682 55.2567 0.870346 53.9369 0.42652 52.496C-0.0173055 51.0552 -0.116415 49.5326 0.136968 48.0476L6.9499 8.12829C7.38506 5.5794 8.82952 3.30532 10.9655 1.80632C12.0232 1.06409 13.2188 0.534481 14.484 0.247743C15.7493 -0.0389944 17.0594 -0.0772479 18.3397 0.135162C19.62 0.347571 20.8453 0.806484 21.9456 1.4857C23.046 2.16492 23.9998 3.05114 24.7528 4.09377C25.5057 5.13639 26.0429 6.315 26.3338 7.5623C26.6246 8.80959 26.6635 10.1012 26.448 11.3632L21.8038 38.8422L57.4815 34.4253L59.6197 50.6838Z",
                          fill: "rgba(0,163,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="43.51%"
                      bottom="1.25%"
                      left="0%"
                      right="42.42%"
                      {...getOverrideProps(overrides, "b_4_b44013614")}
                    ></Icon>
                    <View
                      padding="0px 0px 0px 0px"
                      width="49.01px"
                      height="38.43px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="63.13%"
                      bottom="1.14%"
                      left="10.42%"
                      right="42.25%"
                      {...getOverrideProps(overrides, "b_4_b44013615")}
                    >
                      <Icon
                        width="49.01px"
                        height="38.43px"
                        viewBox={{
                          minX: 0,
                          minY: 0,
                          width: 49.01318359375,
                          height: 38.4287109375,
                        }}
                        paths={[
                          {
                            d: "M0.168319 38.4285C0.125221 38.4254 0.0846557 38.4072 0.0539194 38.3773C0.0231831 38.3474 0.00429329 38.3076 0.000647397 38.2651C-0.00299849 38.2227 0.00883894 38.1804 0.0340305 38.1458C0.0592221 38.1111 0.0961143 38.0865 0.138072 38.0763L48.6332 29.4372L46.5388 13.5216L11.0377 17.9165C11.0101 17.92 10.9819 17.917 10.9557 17.9078C10.9294 17.8985 10.9057 17.8833 10.8865 17.8634C10.867 17.8435 10.8525 17.8194 10.8442 17.793C10.8359 17.7665 10.834 17.7386 10.8387 17.7113L13.7918 0.148564C13.7954 0.125453 13.8037 0.103293 13.8161 0.0833826C13.8285 0.0634717 13.8449 0.0462111 13.8642 0.0326245C13.8835 0.0190379 13.9054 0.00939985 13.9285 0.00426981C13.9517 -0.000860237 13.9756 -0.00137236 13.999 0.00275926C14.0223 0.00655515 14.0446 0.0148535 14.0647 0.0271829C14.0848 0.0395122 14.1022 0.0556247 14.1159 0.0746014C14.1297 0.0935781 14.1395 0.11505 14.1448 0.137772C14.1501 0.160493 14.1508 0.184021 14.1469 0.207011L11.2331 17.5351L46.6713 13.1477C46.7185 13.1422 46.766 13.1551 46.8037 13.1838C46.8413 13.2125 46.866 13.2545 46.8725 13.3009L49.0119 29.5595C49.0174 29.6045 49.0054 29.65 48.9782 29.6867C48.951 29.7233 48.9107 29.7484 48.8655 29.7568L0.200684 38.4258C0.189991 38.4276 0.179164 38.4285 0.168319 38.4285Z",
                            fill: "rgba(12,12,12,1)",
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
                        {...getOverrideProps(overrides, "Vector44013616")}
                      ></Icon>
                    </View>
                    <Icon
                      width="3.17px"
                      height="0.36px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 3.1875,
                        height: 0.8447265625,
                      }}
                      paths={[
                        {
                          d: "M3.16912 0L0 0L0 0.355263L3.16912 0.355263L3.16912 0Z",
                          fill: "rgba(12,12,12,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="79.92%"
                      bottom="19.75%"
                      left="18.01%"
                      right="78.93%"
                      transformOrigin="top left"
                      transform="rotate(-8.97deg)"
                      {...getOverrideProps(overrides, "Vector44013617")}
                    ></Icon>
                  </View>
                </View>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="54.92px"
                height="77.87px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="72.19%"
                left="45.41%"
                right="36.29%"
                {...getOverrideProps(overrides, "b_1_idea44013618")}
              >
                <Icon
                  width="54.92px"
                  height="68.51px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 54.9189453125,
                    height: 68.5107421875,
                  }}
                  paths={[
                    {
                      d: "M54.9188 27.1006C54.923 23.4906 54.1947 19.9162 52.7767 16.5878C51.3587 13.2594 49.2797 10.2443 46.6621 7.71975C44.0444 5.19523 40.9409 3.21236 37.5343 1.88784C34.1276 0.563318 30.4867 -0.076101 26.8256 0.00720979C11.963 0.336697 -0.0422347 12.4938 0.000111684 27.1492C0.00710545 30.9323 0.820821 34.6716 2.38846 38.1245C3.95611 41.5775 6.24265 44.667 9.09974 47.1925C15.2472 52.6435 18.8969 60.3103 18.8872 68.4613L18.8872 68.4911L35.9346 68.5105L35.9346 68.4807C35.944 60.3404 39.5925 52.6772 45.7508 47.2522C48.6342 44.7206 50.9416 41.6163 52.5217 38.1433C54.1018 34.6702 54.9187 30.907 54.9188 27.1006Z",
                      fill: "rgba(12,188,139,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="12.02%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "b_1_idea44013619")}
                ></Icon>
                <Icon
                  width="18.4px"
                  height="39.9px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 18.3984375,
                    height: 39.8984375,
                  }}
                  paths={[
                    {
                      d: "M18.1571 0.941595C17.8749 0.583781 17.3843 0.361338 16.6998 0.2856C15.5395 0.157681 14.2146 0.805626 13.0764 2.06812L12.966 2.18739L12.8801 2.05201C12.7273 1.80793 12.5534 1.57737 12.3602 1.36292C11.5408 0.458248 10.0641 -0.465511 7.67182 0.262344C6.86797 0.493092 6.12859 0.902673 5.51063 1.45953L5.42715 1.53706L5.34398 1.45953C5.15245 1.28775 4.94447 1.13467 4.72299 1.00242C3.3788 0.194655 1.87974 0.388175 0.859494 0.692914C0.576427 0.778027 0.334665 0.962177 0.179694 1.21072C0.0247216 1.45926 -0.0327821 1.75506 0.0180072 2.04247L6.70026 39.6908C6.71133 39.7541 6.74745 39.8105 6.80065 39.8475C6.85386 39.8845 6.91982 39.8992 6.984 39.8882C7.04817 39.8773 7.10532 39.8417 7.14288 39.7893C7.18043 39.7368 7.1953 39.6718 7.18423 39.6086L0.500758 1.96137C0.470013 1.79009 0.503918 1.61365 0.596085 1.46533C0.688251 1.31702 0.832302 1.20709 1.00105 1.15628C1.92601 0.880767 3.27748 0.701562 4.46741 1.41749C4.6629 1.5339 4.84617 1.66914 5.01457 1.82122L5.09806 1.89636L5.0291 1.98343C4.45992 2.72399 4.14236 3.62276 4.12168 4.55165C4.05786 6.12842 4.75204 7.70519 5.66944 8.063C5.8465 8.13451 6.04004 8.15677 6.22905 8.12739C6.41805 8.098 6.59527 8.01808 6.74141 7.89632C7.05296 7.64466 7.52783 6.97972 7.22233 5.35703C6.95011 3.92786 6.48158 2.79269 5.82642 1.97628L5.75534 1.88921L5.83883 1.81168C6.40429 1.30458 7.08083 0.932946 7.8158 0.725714C9.51117 0.210759 10.9561 0.539651 11.9915 1.68585C12.2239 1.94416 12.4263 2.2273 12.5949 2.52999L12.6339 2.59768L12.5873 2.6606C12.4966 2.77987 12.4083 2.90242 12.3224 3.02825C11.3315 4.47919 10.5414 6.54438 11.15 7.65211C11.2698 7.86684 11.45 8.04293 11.6688 8.15928C11.8877 8.27563 12.1359 8.3273 12.3838 8.30811L12.4058 8.30811C12.9113 8.30095 13.3357 7.96967 13.5982 7.37958C14.1124 6.22592 13.9612 4.26957 13.2425 2.72441L13.2104 2.65672L13.2597 2.59858C14.2531 1.41361 15.3816 0.753443 16.3922 0.753443C16.4781 0.753443 16.5615 0.758214 16.645 0.765371C17.9354 0.910584 17.9154 1.57045 17.9109 1.6456L12.4548 39.6244C12.4503 39.6558 12.4521 39.6878 12.4602 39.7186C12.4682 39.7493 12.4823 39.7782 12.5017 39.8036C12.5211 39.829 12.5454 39.8503 12.5731 39.8664C12.6009 39.8825 12.6316 39.8931 12.6635 39.8975C12.7275 39.9043 12.7918 39.8868 12.8432 39.8487C12.8947 39.8105 12.9295 39.7545 12.9406 39.692L18.3939 1.71954C18.4203 1.43976 18.3354 1.1608 18.1571 0.941595ZM6.73899 5.4441C7.0088 6.87327 6.61376 7.37391 6.42985 7.52151C6.32824 7.60799 6.19871 7.65598 6.06446 7.65688C5.99134 7.656 5.91899 7.64206 5.85092 7.61573C5.21814 7.36646 4.55029 6.05596 4.61078 4.57103C4.63587 3.79103 4.88613 3.03427 5.33218 2.38955L5.42776 2.25418L5.53091 2.38717C6.16024 3.30436 6.57306 4.34894 6.73899 5.4441ZM13.149 7.18516C12.9627 7.60261 12.7101 7.8188 12.3986 7.82357L12.352 7.82357C12.1976 7.84023 12.0417 7.8109 11.9044 7.73936C11.767 7.66782 11.6546 7.55736 11.5816 7.42222C11.1581 6.64844 11.6503 4.87577 12.731 3.299L12.8635 3.10548L12.9615 3.30377C13.4854 4.65541 13.5637 6.25186 13.149 7.18516Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="37.04%"
                  bottom="11.72%"
                  left="31.9%"
                  right="34.6%"
                  {...getOverrideProps(overrides, "Vector44013620")}
                ></Icon>
                <Icon
                  width="17.05px"
                  height="9.38px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 17.056640625,
                    height: 9.4013671875,
                  }}
                  paths={[
                    {
                      d: "M0 0L17.0474 0L17.0474 0.982203C17.0474 3.21073 16.1494 5.34799 14.5509 6.9238C12.9524 8.49961 10.7843 9.38489 8.52372 9.38489C6.26309 9.38489 4.09505 8.49961 2.49654 6.9238C0.89803 5.34799 3.43873e-14 3.21073 0 0.982203L0 0Z",
                      fill: "rgba(38,38,38,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="87.93%"
                  bottom="0.02%"
                  left="34.41%"
                  right="34.55%"
                  transformOrigin="top left"
                  transform="rotate(0.06deg)"
                  {...getOverrideProps(overrides, "b_1_idea44013621")}
                ></Icon>
              </View>
            </Flex>
          </Flex>
          <Flex
            gap="196px"
            direction="column"
            width="500px"
            height="600px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.10000000149011612)"
            borderRadius="30px"
            padding="60px 0px 60px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Frame 213")}
          >
            <Flex
              gap="76px"
              direction="column"
              width="unset"
              height="480px"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 224")}
            >
              <Flex
                gap="30px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 19744013623")}
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
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 195")}
                >
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
                    children="Prompt AI Model"
                    {...getOverrideProps(overrides, "Prompt AI Model")}
                  ></Text>
                  <Text
                    fontFamily="Roboto"
                    fontSize="14px"
                    fontWeight="400"
                    color="rgba(141,143,155,1)"
                    fontStyle="italic"
                    lineHeight="16.40625px"
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
                    children="Select the type of prompt you want to sell"
                    {...getOverrideProps(
                      overrides,
                      "Select the type of prompt you want to sell"
                    )}
                  ></Text>
                  <AIModelDropdown
                    display="flex"
                    gap="6px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    border="1px SOLID rgba(217,217,217,1)"
                    borderRadius="6px"
                    padding="5px 9px 5px 9px"
                    backgroundColor="rgba(255,255,255,1)"
                    property1="Default"
                    {...getOverrideProps(overrides, "AI Model Dropdown")}
                  ></AIModelDropdown>
                </Flex>
                <Flex
                  gap="10px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 19744013628")}
                >
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
                    children="Model Engine"
                    {...getOverrideProps(overrides, "Model Engine")}
                  ></Text>
                  <Text
                    fontFamily="Roboto"
                    fontSize="14px"
                    fontWeight="400"
                    color="rgba(141,143,155,1)"
                    fontStyle="italic"
                    lineHeight="16.40625px"
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
                    children="What engine does this prompt use"
                    {...getOverrideProps(
                      overrides,
                      "What engine does this prompt use"
                    )}
                  ></Text>
                  <EngineDropdown
                    display="flex"
                    gap="6px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    border="1px SOLID rgba(217,217,217,1)"
                    borderRadius="6px"
                    padding="5px 9px 5px 9px"
                    backgroundColor="rgba(255,255,255,1)"
                    property1="Default"
                    {...getOverrideProps(overrides, "Engine Dropdown")}
                  ></EngineDropdown>
                </Flex>
                <Flex
                  gap="10px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 196")}
                >
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
                    children="Title"
                    {...getOverrideProps(overrides, "Title")}
                  ></Text>
                  <Text
                    fontFamily="Roboto"
                    fontSize="14px"
                    fontWeight="400"
                    color="rgba(141,143,155,1)"
                    fontStyle="italic"
                    lineHeight="16.40625px"
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
                    children="Suggest a title for this prompt"
                    {...getOverrideProps(
                      overrides,
                      "Suggest a title for this prompt"
                    )}
                  ></Text>
                  <Flex
                    gap="10px"
                    direction="column"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-end"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 182")}
                  >
                    <Flex
                      gap="10px"
                      direction="row"
                      width="unset"
                      height="unset"
                      justifyContent="center"
                      alignItems="center"
                      shrink="0"
                      position="relative"
                      border="1px SOLID rgba(217,217,217,1)"
                      borderRadius="11px"
                      padding="10px 10px 10px 10px"
                      backgroundColor="rgba(217,217,217,0.5)"
                      {...getOverrideProps(overrides, "Frame 173")}
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
                        width="350px"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        shrink="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="Expert Tutor Augmented Learning"
                        {...getOverrideProps(overrides, "List Title")}
                      ></Text>
                    </Flex>
                    <Text
                      fontFamily="Roboto"
                      fontSize="14px"
                      fontWeight="400"
                      color="rgba(141,143,155,1)"
                      lineHeight="16.40625px"
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
                      children="0/20 words"
                      {...getOverrideProps(overrides, "0/20 words")}
                    ></Text>
                  </Flex>
                </Flex>
              </Flex>
              <NextButton
                display="flex"
                gap="0"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                borderRadius="6px"
                padding="0px 0px 0px 0px"
                property1="Default"
                {...getOverrideProps(overrides, "Next Button")}
              ></NextButton>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
