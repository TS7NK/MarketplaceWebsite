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
import Textbutton from "./Textbutton";
import Imagebutton from "./Imagebutton";
import AddaExampleButton from "./AddaExampleButton";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
export default function SellStep4(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="60px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SellStep4")}
      {...rest}
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
            width="800px"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 800, height: 1 }}
            paths={[
              {
                d: "M0 -3C-1.65685 -3 -3 -1.65685 -3 0C-3 1.65685 -1.65685 3 0 3L0 -3ZM800 3C801.657 3 803 1.65685 803 0C803 -1.65685 801.657 -3 800 -3L800 3ZM0 3L800 3L800 -3L0 -3L0 3Z",
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
          children="Step 4/5"
          {...getOverrideProps(overrides, "Step 4/5")}
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
          {...getOverrideProps(overrides, "delete button44615225")}
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
            children="Provide Real Examples"
            {...getOverrideProps(overrides, "Provide Real Examples")}
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
            children="Give 2 to 5 examples containing sample outputs for your prompt to attract your customers."
            {...getOverrideProps(
              overrides,
              "Give 2 to 5 examples containing sample outputs for your prompt to attract your customers."
            )}
          ></Text>
          <Flex
            padding="0px 0px 0px 0px"
            width="300px"
            height="242.73px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Detail Illustration")}
          >
            <Icon
              width="300px"
              height="46.48px"
              viewBox={{ minX: 0, minY: 0, width: 300, height: 46.4833984375 }}
              paths={[
                {
                  d: "M300 46.4836L0 46.4836C3.28735 37.5836 9.35798 30.0328 17.9168 27.7926C30.4353 24.5202 43.683 33.5185 56.1735 30.1351C63.2698 28.2149 68.8565 22.6191 74.7272 17.9724C96.8733 0.440194 127.223 -4.7414 153.429 4.53835C167.126 9.38661 179.61 17.865 193.643 21.4698C211.789 26.1324 230.765 22.2656 249.426 21.6285C267.601 21.0085 293.641 28.8709 300 46.4836Z",
                  fill: "rgba(243,245,253,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="77.87%"
              bottom="2.98%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector44615231")}
            ></Icon>
            <Icon
              width="150.39px"
              height="195.09px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 150.3857421875,
                height: 195.0869140625,
              }}
              paths={[
                {
                  d: "M150.386 0L0 0L0 195.087L150.386 195.087L150.386 0Z",
                  fill: "rgba(222,232,245,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="19.63%"
              left="23.03%"
              right="26.84%"
              {...getOverrideProps(overrides, "Vector44615232")}
            ></Icon>
            <Icon
              width="61.22px"
              height="18.6px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 61.21875,
                height: 18.6044921875,
              }}
              paths={[
                {
                  d: "M61.2188 0L0 0L0 18.6049L61.2188 18.6049L61.2188 0Z",
                  fill: "rgba(38,38,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="51.97%"
              bottom="40.36%"
              left="48.55%"
              right="31.05%"
              {...getOverrideProps(overrides, "Vector44615233")}
            ></Icon>
            <Icon
              width="64.31px"
              height="40.02px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 64.3134765625,
                height: 40.015625,
              }}
              paths={[
                {
                  d: "M64.3137 0L0 0L0 40.0159L64.3137 40.0159L64.3137 0Z",
                  fill: "rgba(12,188,139,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.39%"
              bottom="71.13%"
              left="26.66%"
              right="51.9%"
              {...getOverrideProps(overrides, "Vector44615234")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="56.08px"
              height="167.63px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5.81%"
              bottom="25.13%"
              left="28.06%"
              right="53.25%"
              {...getOverrideProps(overrides, "Group44615235")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="56.08px"
                height="42.26px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="62.9%"
                bottom="11.89%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group44615236")}
              >
                <Icon
                  width="56.08px"
                  height="42.26px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 42.2587890625,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 42.2588L56.0797 42.2588L56.0797 0Z",
                      fill: "rgba(193,216,237,1)",
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
                  {...getOverrideProps(overrides, "Vector44615237")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="42.48px"
                  height="16.79px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="30.14%"
                  bottom="30.13%"
                  left="12.12%"
                  right="12.12%"
                  {...getOverrideProps(overrides, "Group44615238")}
                >
                  <Icon
                    width="21.09px"
                    height="8.6px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 21.09375,
                      height: 8.6044921875,
                    }}
                    paths={[
                      {
                        d: "M0 8.60495L9.88867 0L21.0942 8.60495L0 8.60495Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="48.74%"
                    bottom="0%"
                    left="0%"
                    right="50.35%"
                    {...getOverrideProps(overrides, "Vector44615239")}
                  ></Icon>
                  <Icon
                    width="30.84px"
                    height="12.63px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 30.83984375,
                      height: 12.634765625,
                    }}
                    paths={[
                      {
                        d: "M0 12.6343L17.5929 0L30.84 12.6343L0 12.6343Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="24.75%"
                    bottom="0%"
                    left="27.41%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector44615240")}
                  ></Icon>
                  <Icon
                    width="4.37px"
                    height="4.37px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 4.373046875,
                      height: 4.373046875,
                    }}
                    paths={[
                      {
                        d: "M2.1867 4.3734C3.39438 4.3734 4.3734 3.39438 4.3734 2.1867C4.3734 0.979018 3.39438 0 2.1867 0C0.979018 0 0 0.979018 0 2.1867C0 3.39438 0.979018 4.3734 2.1867 4.3734Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="73.95%"
                    left="35.75%"
                    right="53.95%"
                    {...getOverrideProps(overrides, "Vector44615241")}
                  ></Icon>
                </View>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="56.08px"
                height="32.54px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="80.59%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group44615242")}
              >
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="87.72%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615243")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="30.29%"
                  bottom="57.43%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615244")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="60.57%"
                  bottom="27.15%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615245")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="87.72%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615246")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="56.08px"
                height="32.54px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="22.72%"
                bottom="57.86%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group44615247")}
              >
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="87.72%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615248")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="30.29%"
                  bottom="57.43%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615249")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="60.57%"
                  bottom="27.15%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615250")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="87.72%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615251")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="56.08px"
                height="23.71px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="45.45%"
                bottom="40.41%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group44615252")}
              >
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="83.14%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615253")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="41.57%"
                  bottom="41.57%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615254")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99657L56.0797 3.99657L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="83.14%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615255")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="56.08px"
                height="13.85px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="91.74%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group44615256")}
              >
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99658L56.0797 3.99658L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="71.15%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615257")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="71.15%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615258")}
                ></Icon>
              </View>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="56.08px"
              height="167.02px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="6.06%"
              bottom="25.13%"
              left="49.36%"
              right="31.95%"
              {...getOverrideProps(overrides, "Group44615259")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="56.08px"
                height="42.26px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="74.7%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group44615260")}
              >
                <Icon
                  width="56.08px"
                  height="42.26px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 42.2587890625,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 42.2588L56.0797 42.2588L56.0797 0Z",
                      fill: "rgba(193,216,237,1)",
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
                  {...getOverrideProps(overrides, "Vector44615261")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="42.48px"
                  height="16.79px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="30.14%"
                  bottom="30.13%"
                  left="12.12%"
                  right="12.12%"
                  {...getOverrideProps(overrides, "Group44615262")}
                >
                  <Icon
                    width="21.09px"
                    height="8.6px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 21.09375,
                      height: 8.6044921875,
                    }}
                    paths={[
                      {
                        d: "M0 8.60496L9.889 0L21.0942 8.60496L0 8.60496Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="48.75%"
                    bottom="0%"
                    left="0%"
                    right="50.35%"
                    {...getOverrideProps(overrides, "Vector44615263")}
                  ></Icon>
                  <Icon
                    width="30.84px"
                    height="12.63px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 30.83984375,
                      height: 12.6337890625,
                    }}
                    paths={[
                      {
                        d: "M0 12.634L17.5932 0L30.84 12.634L0 12.634Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="24.75%"
                    bottom="0%"
                    left="27.41%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector44615264")}
                  ></Icon>
                  <Icon
                    width="4.37px"
                    height="4.37px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 4.373046875,
                      height: 4.373046875,
                    }}
                    paths={[
                      {
                        d: "M2.1867 4.3734C3.39438 4.3734 4.3734 3.39438 4.3734 2.1867C4.3734 0.979018 3.39438 0 2.1867 0C0.979018 0 0 0.979018 0 2.1867C0 3.39438 0.979018 4.3734 2.1867 4.3734Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="73.95%"
                    left="35.75%"
                    right="53.95%"
                    {...getOverrideProps(overrides, "Vector44615265")}
                  ></Icon>
                </View>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="56.08px"
                height="32.54px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="28.12%"
                bottom="52.39%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group44615266")}
              >
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="87.72%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615267")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="30.29%"
                  bottom="57.43%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615268")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="60.57%"
                  bottom="27.15%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615269")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="87.72%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615270")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="56.08px"
                height="32.54px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="50.93%"
                bottom="29.58%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group44615271")}
              >
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99657L56.0797 3.99657L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="87.72%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615272")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="30.29%"
                  bottom="57.43%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615273")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="60.57%"
                  bottom="27.15%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615274")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="87.72%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615275")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="56.08px"
                height="23.71px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="73.74%"
                bottom="12.07%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group44615276")}
              >
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99657L56.0797 3.99657L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="83.14%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615277")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="41.57%"
                  bottom="41.57%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615278")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="83.14%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615279")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="56.08px"
                height="13.85px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="91.71%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group44615280")}
              >
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99658L56.0797 3.99658L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="71.15%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615281")}
                ></Icon>
                <Icon
                  width="56.08px"
                  height="4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 56.080078125,
                    height: 3.99609375,
                  }}
                  paths={[
                    {
                      d: "M56.0797 0L0 0L0 3.99656L56.0797 3.99656L56.0797 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="71.15%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615282")}
                ></Icon>
              </View>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="29.24px"
              height="26.07px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="86.28%"
              bottom="2.98%"
              left="50.22%"
              right="40.03%"
              {...getOverrideProps(overrides, "Group44615283")}
            >
              <Icon
                width="20.29px"
                height="21.7px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 20.291015625,
                  height: 21.7021484375,
                }}
                paths={[
                  {
                    d: "M20.2915 0L0 0L0 21.7018L20.2915 21.7018L20.2915 0Z",
                    fill: "rgba(215,232,244,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="96.87%"
                bottom="-80.13%"
                left="93.71%"
                right="-63.1%"
                transformOrigin="top left"
                transform="rotate(-180deg)"
                {...getOverrideProps(overrides, "Vector44615284")}
              ></Icon>
              <Icon
                width="20.29px"
                height="21.7px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 20.291015625,
                  height: 21.7021484375,
                }}
                paths={[
                  {
                    d: "M20.2915 0L0 0L0 21.7018L20.2915 21.7018L20.2915 0Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="96.87%"
                bottom="-80.13%"
                left="72.22%"
                right="-41.61%"
                transformOrigin="top left"
                transform="rotate(-180deg)"
                {...getOverrideProps(overrides, "Vector44615285")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="28.95px"
                height="17.34px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="33.46%"
                bottom="0%"
                left="0%"
                right="1.01%"
                {...getOverrideProps(overrides, "Group44615286")}
              >
                <Icon
                  width="22.21px"
                  height="17.34px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 22.208984375,
                    height: 17.34375,
                  }}
                  paths={[
                    {
                      d: "M0 0L0 4.23514L0 17.3436L22.2094 17.3436L22.2094 4.23514L22.2094 0L0 0Z",
                      fill: "rgba(193,216,237,1)",
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
                  left="23.28%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615287")}
                ></Icon>
                <Icon
                  width="22.21px"
                  height="17.34px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 22.208984375,
                    height: 17.34375,
                  }}
                  paths={[
                    {
                      d: "M22.2094 0L0 0L0 17.3436L22.2094 17.3436L22.2094 0Z",
                      fill: "rgba(222,232,245,1)",
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
                  right="23.28%"
                  {...getOverrideProps(overrides, "Vector44615288")}
                ></Icon>
                <Icon
                  width="22.21px"
                  height="1.3px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 22.208984375,
                    height: 1.2998046875,
                  }}
                  paths={[
                    {
                      d: "M22.2094 0L0 0L0 1.30026L22.2094 1.30026L22.2094 0Z",
                      fill: "rgba(193,216,237,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="92.5%"
                  left="0%"
                  right="23.28%"
                  {...getOverrideProps(overrides, "Vector44615289")}
                ></Icon>
                <Icon
                  width="5.95px"
                  height="2.6px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 5.9462890625,
                    height: 2.6044921875,
                  }}
                  paths={[
                    {
                      d: "M5.3017 0L0.644614 0C0.288602 0 0 0.288612 0 0.644624L0 1.95949C0 2.3155 0.288602 2.60411 0.644614 2.60411L5.3017 2.60411C5.65771 2.60411 5.94632 2.3155 5.94632 1.95949L5.94632 0.644624C5.94632 0.288612 5.65771 0 5.3017 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="20.09%"
                  bottom="64.9%"
                  left="28.09%"
                  right="51.37%"
                  {...getOverrideProps(overrides, "Vector44615290")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="29.24px"
                height="7.54px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="71.08%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group44615291")}
              >
                <Icon
                  width="22.21px"
                  height="4.24px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 22.548828125,
                    height: 6.76171875,
                  }}
                  paths={[
                    {
                      d: "M22.2094 0L0 0L0 4.23512L22.2094 4.23512L22.2094 0Z",
                      fill: "rgba(193,216,237,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="100%"
                  bottom="-56.19%"
                  left="98.33%"
                  right="-74.28%"
                  transformOrigin="top left"
                  transform="rotate(-173.39deg)"
                  {...getOverrideProps(overrides, "Vector44615292")}
                ></Icon>
                <Icon
                  width="22.21px"
                  height="4.24px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 22.548828125,
                    height: 6.76171875,
                  }}
                  paths={[
                    {
                      d: "M22.2094 0L0 0L0 4.23512L22.2094 4.23512L22.2094 0Z",
                      fill: "rgba(222,232,245,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="89.71%"
                  bottom="-45.9%"
                  left="75.44%"
                  right="-51.39%"
                  transformOrigin="top left"
                  transform="rotate(-173.39deg)"
                  {...getOverrideProps(overrides, "Vector44615293")}
                ></Icon>
              </View>
              <Icon
                width="8.11px"
                height="1.24px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 8.1123046875,
                  height: 1.244140625,
                }}
                paths={[
                  {
                    d: "M8.11257 0L0.826062 0C0.435914 0.325714 0.148904 0.757868 0 1.2438C0 1.2438 2.51453 0.478107 8.11257 0Z",
                    fill: "rgba(222,232,245,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="26.22%"
                bottom="69.01%"
                left="0%"
                right="72.26%"
                {...getOverrideProps(overrides, "Vector44615294")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="60.31px"
              height="157.47px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="32.15%"
              bottom="2.98%"
              left="12.98%"
              right="66.91%"
              {...getOverrideProps(overrides, "Group44615295")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="18.82px"
                height="23.91px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="84.81%"
                left="10.76%"
                right="58.04%"
                {...getOverrideProps(overrides, "Group44615296")}
              >
                <Icon
                  width="9.17px"
                  height="9.13px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 9.1748046875,
                    height: 9.126953125,
                  }}
                  paths={[
                    {
                      d: "M0 9.12656C0 9.12656 2.50965 7.79578 1.94943 0.961409L7.13396 0C7.13396 0 6.55133 6.12743 9.17492 8.07297L0 9.12656Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="61.83%"
                  bottom="0%"
                  left="19.15%"
                  right="32.09%"
                  {...getOverrideProps(overrides, "Vector44615297")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="4.31px"
                  height="3.33px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="76.31%"
                  bottom="9.77%"
                  left="39.37%"
                  right="37.73%"
                  {...getOverrideProps(overrides, "Group44615298")}
                >
                  <Icon
                    width="4.31px"
                    height="3.33px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 4.3076171875,
                      height: 3.330078125,
                    }}
                    paths={[
                      {
                        d: "M4.30783 3.33053L0 0.0350552L3.38343 0C3.48145 1.15806 3.79497 2.28761 4.30783 3.33053Z",
                        fill: "rgba(0,0,0,1)",
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
                    {...getOverrideProps(overrides, "Vector44615299")}
                  ></Icon>
                </View>
                <Icon
                  width="13.4px"
                  height="17.08px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 13.4013671875,
                    height: 17.078125,
                  }}
                  paths={[
                    {
                      d: "M0.382377 11.5234C0.741363 13.5971 1.87285 15.5605 3.70186 16.2298C5.87331 17.0247 7.4816 17.0786 9.98509 17.0786C13.4013 17.0786 13.2883 13.516 13.3844 9.92548C13.4818 6.32069 13.1942 2.45428 11.844 1.19816C9.14995 -1.30923 1.23862 0.278618 0.276567 4.4722C-0.221989 6.64072 0.0405933 9.54897 0.382377 11.5234Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="6.58%"
                  bottom="22%"
                  left="11.84%"
                  right="16.94%"
                  {...getOverrideProps(overrides, "Vector44615300")}
                ></Icon>
                <Icon
                  width="18.82px"
                  height="17.95px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 18.818359375,
                    height: 17.9462890625,
                  }}
                  paths={[
                    {
                      d: "M17.444 4.85647C17.444 4.85647 18.8432 4.5439 18.4599 3.14885C18.2061 2.22379 17.0207 2.42926 17.0207 2.42926C17.0207 2.42926 18.1431 2.22379 18.1431 1.24389C18.1431 0.627182 17.6686 -0.419586 16.2375 0.178291C14.5581 0.879709 12.6431 0.789475 11.1867 0.544742C10.3629 0.364271 9.5267 0.246112 8.68516 0.191272L8.68062 0.191272C7.7132 0.174489 6.74876 0.303496 5.81976 0.573953C3.21663 1.35295 -0.722805 3.687 0.114612 8.97831C1.0494 14.8837 3.82067 17.1422 5.0398 17.8666C5.11193 17.9101 5.19301 17.9366 5.27689 17.9441C5.36077 17.9517 5.44527 17.94 5.52399 17.9101C5.60272 17.8802 5.67361 17.8327 5.73132 17.7714C5.78902 17.7101 5.83203 17.6364 5.85709 17.556C6.20277 16.4495 6.79837 13.6646 6.63186 7.92213C14.6334 7.52939 16.9357 7.41059 16.9357 7.41059C16.9357 7.41059 18.8182 7.48103 18.8182 6.10513C18.8182 4.72923 17.444 4.85647 17.444 4.85647Z",
                      fill: "rgba(15,16,17,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="24.95%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615301")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="5.98px"
                  height="2.23px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="38.75%"
                  bottom="51.91%"
                  left="50.46%"
                  right="17.78%"
                  {...getOverrideProps(overrides, "Group44615302")}
                >
                  <Icon
                    width="0.94px"
                    height="0.94px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 0.9404296875,
                      height: 0.9404296875,
                    }}
                    paths={[
                      {
                        d: "M0.470319 0.940638C0.730068 0.940638 0.940633 0.730068 0.940633 0.470319C0.940633 0.21057 0.730068 0 0.470319 0C0.21057 0 0 0.21057 0 0.470319C0 0.730068 0.21057 0.940638 0.470319 0.940638Z",
                        fill: "rgba(15,16,17,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="57.9%"
                    bottom="-0.01%"
                    left="12.81%"
                    right="71.45%"
                    {...getOverrideProps(overrides, "Vector44615303")}
                  ></Icon>
                  <Icon
                    width="0.94px"
                    height="0.94px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 0.9404296875,
                      height: 0.9404296875,
                    }}
                    paths={[
                      {
                        d: "M0.470319 0.940628C0.730068 0.940628 0.940633 0.730058 0.940633 0.470309C0.940633 0.21056 0.730068 0 0.470319 0C0.21057 0 0 0.21056 0 0.470309C0 0.730058 0.21057 0.940628 0.470319 0.940628Z",
                        fill: "rgba(15,16,17,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="44.3%"
                    bottom="13.6%"
                    left="74.91%"
                    right="9.35%"
                    {...getOverrideProps(overrides, "Vector44615304")}
                  ></Icon>
                  <Icon
                    width="1.67px"
                    height="0.46px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.6748046875,
                      height: 0.45703125,
                    }}
                    paths={[
                      {
                        d: "M1.46022 0.457333L1.4573 0.457333L0.211238 0.441752C0.154115 0.439216 0.100197 0.414645 0.0608092 0.373196C0.0214211 0.331747 -0.000373265 0.276642 4.83867e-06 0.219464C0.000382943 0.162287 0.022902 0.107479 0.0628349 0.0665544C0.102768 0.0256301 0.157009 0.00177999 0.21416 0L0.217082 0L1.46314 0.0155812C1.52027 0.0181169 1.57418 0.0426877 1.61357 0.0841366C1.65296 0.125585 1.67475 0.180681 1.67438 0.237859C1.674 0.295036 1.65148 0.349844 1.61155 0.390768C1.57161 0.431693 1.51737 0.455553 1.46022 0.457333Z",
                        fill: "rgba(15,16,17,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="79.53%"
                    left="71.97%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector44615305")}
                  ></Icon>
                  <Icon
                    width="1.67px"
                    height="0.74px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.6748046875,
                      height: 0.73828125,
                    }}
                    paths={[
                      {
                        d: "M0.220479 0.738611C0.166425 0.738474 0.114296 0.718537 0.0739479 0.682566C0.0336002 0.646595 0.00783034 0.597079 0.00151458 0.543395C-0.00480118 0.489711 0.00877243 0.435581 0.0396702 0.391228C0.070568 0.346875 0.116647 0.315382 0.169193 0.302704L1.39741 0.00733417C1.42588 -0.000187019 1.45556 -0.0019474 1.48472 0.00216354C1.51388 0.00627448 1.54192 0.0161762 1.5672 0.0312755C1.59248 0.0463749 1.6145 0.0663705 1.63194 0.0900939C1.64939 0.113817 1.66192 0.140784 1.66879 0.169416C1.67567 0.198049 1.67676 0.227773 1.67199 0.256832C1.66722 0.28589 1.65669 0.313697 1.64103 0.338631C1.62536 0.363565 1.60487 0.38512 1.58076 0.402025C1.55665 0.41893 1.5294 0.430851 1.50062 0.43708L0.272413 0.73244C0.255408 0.73655 0.237973 0.738624 0.220479 0.738611Z",
                        fill: "rgba(15,16,17,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="7.77%"
                    bottom="59.17%"
                    left="0%"
                    right="71.97%"
                    {...getOverrideProps(overrides, "Vector44615306")}
                  ></Icon>
                </View>
                <Icon
                  width="3.99px"
                  height="4.01px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 3.9931640625,
                    height: 4.01171875,
                  }}
                  paths={[
                    {
                      d: "M3.98372 1.82731C4.03421 2.35372 3.87352 2.87863 3.537 3.28655C3.20047 3.69447 2.71568 3.952 2.18928 4.00249C1.66288 4.05298 1.13798 3.89229 0.730055 3.55577C0.32213 3.21925 0.0645951 2.73445 0.0141068 2.20805C0.0124839 2.18955 0.0108585 2.17072 0.00956017 2.1519C-0.0417031 1.6345 0.114623 1.11794 0.44416 0.715789C0.773697 0.313636 1.24946 0.0588235 1.76684 0.0073935C1.78924 0.00512143 1.81131 0.00349908 1.83371 0.00187618C3.25569 -0.0432405 3.89382 0.729908 3.98372 1.82731Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="43.3%"
                  bottom="39.93%"
                  left="22.86%"
                  right="55.92%"
                  {...getOverrideProps(overrides, "Vector44615307")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="1.46px"
                  height="2.33px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="47.29%"
                  bottom="42.96%"
                  left="67.26%"
                  right="25%"
                  {...getOverrideProps(overrides, "Group44615308")}
                >
                  <Icon
                    width="1.46px"
                    height="2.33px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.45703125,
                      height: 2.330078125,
                    }}
                    paths={[
                      {
                        d: "M0.162069 2.33038C0.123217 2.33033 0.0856725 2.31634 0.0562591 2.29096C0.0268456 2.26558 0.00751572 2.23048 0.00177931 2.19206C-0.0039571 2.15363 0.00428002 2.11443 0.0249976 2.08156C0.0457152 2.04869 0.0775387 2.02434 0.114681 2.01295L1.07089 1.72083L0.401611 0.230675C0.392558 0.211193 0.38746 0.190104 0.386619 0.168638C0.385778 0.147171 0.389207 0.12575 0.396708 0.10562C0.404209 0.0854888 0.415634 0.06705 0.430317 0.0513677C0.445 0.0356854 0.462647 0.0230806 0.482241 0.014272C0.501835 0.00546331 0.522987 0.000630521 0.544462 5.76963e-05C0.565937 -0.000515128 0.587311 0.00318226 0.607347 0.0109338C0.627382 0.0186854 0.64568 0.0303392 0.661178 0.0452165C0.676675 0.0600937 0.689066 0.0778939 0.697629 0.0975963L1.44254 1.75523C1.45199 1.77619 1.45688 1.79893 1.45688 1.82193C1.45688 1.84493 1.45199 1.86767 1.44254 1.88863C1.43305 1.90962 1.41919 1.92836 1.4019 1.94358C1.38461 1.9588 1.36427 1.97017 1.34224 1.97692L0.210105 2.32454C0.194505 2.32903 0.17829 2.33101 0.162069 2.33038Z",
                        fill: "rgba(0,0,0,1)",
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
                    {...getOverrideProps(overrides, "Vector44615309")}
                  ></Icon>
                </View>
                <Icon
                  width="2.95px"
                  height="1.26px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 2.9541015625,
                    height: 1.263671875,
                  }}
                  paths={[
                    {
                      d: "M0 0.242138C0 0.242138 1.73618 0.4252 2.95368 0C2.95368 0 2.94394 1.14351 1.56999 1.25613C0.196044 1.36876 0 0.242138 0 0.242138Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="60.6%"
                  bottom="34.12%"
                  left="58.18%"
                  right="26.12%"
                  {...getOverrideProps(overrides, "Vector44615310")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="13.08px"
                height="5.54px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="12.26%"
                bottom="84.23%"
                left="74.74%"
                right="3.58%"
                {...getOverrideProps(overrides, "Group44615311")}
              >
                <Icon
                  width="13.08px"
                  height="4.61px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 13.0791015625,
                    height: 4.6064453125,
                  }}
                  paths={[
                    {
                      d: "M0 3.70331C0 3.70331 0.0486823 -0.194911 2.83521 0.00762764C4.59313 0.135512 12.9462 -0.252035 13.0705 0.508782C13.3782 2.39135 5.7376 2.85161 5.0443 4.60597L0 3.70331Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="16.84%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615312")}
                ></Icon>
                <Icon
                  width="5.06px"
                  height="1.6px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 5.060546875,
                    height: 1.6015625,
                  }}
                  paths={[
                    {
                      d: "M0 1.06555C0 1.06555 3.87842 -0.198367 4.83171 0.026892C5.67562 0.227158 3.91639 1.60111 3.91639 1.60111L0 1.06555Z",
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
                  bottom="71.09%"
                  left="14.12%"
                  right="47.18%"
                  {...getOverrideProps(overrides, "Vector44615313")}
                ></Icon>
              </View>
              <Icon
                width="7.49px"
                height="6.95px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 7.48828125,
                  height: 6.9482421875,
                }}
                paths={[
                  {
                    d: "M6.7688 6.94829L0 6.14399C0.304781 3.58175 0.649163 0.504723 0.672533 0C0.672533 0.032458 0.672533 0.0590721 0.672533 0.0795206L7.48872 0.0795206C7.48709 0.283682 7.4871 0.905574 6.7688 6.94829Z",
                    fill: "rgba(233,136,98,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="93.36%"
                bottom="2.23%"
                left="63.12%"
                right="24.47%"
                {...getOverrideProps(overrides, "Vector44615314")}
              ></Icon>
              <Icon
                width="6.84px"
                height="7.68px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 6.8388671875,
                  height: 7.6826171875,
                }}
                paths={[
                  {
                    d: "M6.81619 7.68216L0 7.66009C0 7.66009 0.0227181 0.621572 0.0227181 0L6.83891 0C6.83891 0.623519 6.81619 7.68216 6.81619 7.68216Z",
                    fill: "rgba(233,136,98,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="93.41%"
                bottom="1.71%"
                left="12.63%"
                right="76.04%"
                {...getOverrideProps(overrides, "Vector44615315")}
              ></Icon>
              <Icon
                width="45.73px"
                height="96.05px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 45.7255859375,
                  height: 96.0498046875,
                }}
                paths={[
                  {
                    d: "M34.037 96.0502L45.7251 93.2912C38.1591 63.5808 31.8094 33.2578 25.6573 3.2299L25.5706 3.25554L25.3171 1.52552L0.624021 0C0.624021 0 -0.035202 12.0942 0.00147563 16.1294C0.111508 28.1765 2.81494 68.8552 4.37942 95.1972L16.373 94.5827C15.6674 69.0383 14.4103 43.4568 14.5472 17.9055C21.7292 43.7557 28.2429 69.8815 34.037 96.0502Z",
                    fill: "rgba(38,38,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="36.22%"
                bottom="2.79%"
                left="2.43%"
                right="21.76%"
                {...getOverrideProps(overrides, "Vector44615316")}
              ></Icon>
              <Icon
                width="17.14px"
                height="5.36px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.138671875,
                  height: 5.3564453125,
                }}
                paths={[
                  {
                    d: "M15.8113 5.29668C16.1649 5.29496 16.5033 5.15287 16.7521 4.90167C17.001 4.65046 17.1398 4.31071 17.1382 3.95713C17.1382 3.92467 17.1369 3.89222 17.1343 3.85976C17.1145 3.60645 17.0228 3.36405 16.87 3.16107C16.7172 2.95809 16.5095 2.80299 16.2715 2.714L8.33783 0.0569727C8.18415 0.00608723 8.0213 -0.0109992 7.86041 0.00687112C7.69953 0.0247415 7.54439 0.077157 7.40563 0.160524C6.31503 0.917429 5.01026 1.30425 3.68334 1.26409C2.6499 1.19079 1.65788 0.82841 0.820541 0.218292C0.746924 0.157918 0.657661 0.119716 0.563159 0.108144C0.468657 0.0965718 0.372812 0.112109 0.286803 0.152936C0.200793 0.193764 0.128167 0.258207 0.0773875 0.338742C0.0266076 0.419277 -0.000233764 0.512585 1.53382e-06 0.607793L1.53382e-06 4.48717C1.53382e-06 4.7177 0.0915837 4.93881 0.254595 5.10182C0.417607 5.26483 0.638698 5.35641 0.869231 5.35641L0.872802 5.35641L15.8113 5.29668Z",
                    fill: "rgba(193,216,237,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="96.6%"
                bottom="0%"
                left="11.45%"
                right="60.14%"
                {...getOverrideProps(overrides, "Vector44615317")}
              ></Icon>
              <Icon
                width="17.14px"
                height="5.36px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.138671875,
                  height: 5.3564453125,
                }}
                paths={[
                  {
                    d: "M15.8113 5.29666C16.1649 5.29494 16.5033 5.15285 16.7521 4.90165C17.0009 4.65044 17.1398 4.31069 17.1382 3.95711C17.1382 3.92465 17.1369 3.8922 17.1343 3.85974C17.1146 3.60635 17.0229 3.36387 16.87 3.16087C16.7171 2.95787 16.5093 2.80282 16.2712 2.71398L8.33783 0.0569536C8.1841 0.00608355 8.0212 -0.0109979 7.86026 0.0068718C7.69932 0.0247415 7.54413 0.077151 7.4053 0.160505C6.31479 0.917343 5.01015 1.30416 3.68334 1.26407C2.6498 1.19073 1.6577 0.828355 0.820215 0.218273C0.746633 0.157861 0.657384 0.119636 0.562888 0.108046C0.468391 0.0964558 0.372547 0.111979 0.286546 0.152818C0.200546 0.193657 0.127939 0.258125 0.0772006 0.338683C0.0264622 0.419241 -0.00031254 0.512569 2.75281e-06 0.607774L2.75281e-06 4.48715C-3.98797e-05 4.60125 0.0223903 4.71426 0.0660174 4.81969C0.109644 4.92513 0.173615 5.02094 0.25427 5.10166C0.334925 5.18237 0.430685 5.24641 0.536089 5.29012C0.641492 5.33383 0.754473 5.35634 0.868578 5.35639L0.872798 5.35639L15.8113 5.29666Z",
                    fill: "rgba(193,216,237,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="96.6%"
                bottom="0%"
                left="61.89%"
                right="9.69%"
                {...getOverrideProps(overrides, "Vector44615318")}
              ></Icon>
              <Icon
                width="50.76px"
                height="40.68px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 50.7578125,
                  height: 40.6796875,
                }}
                paths={[
                  {
                    d: "M44.7492 0L37.7542 13.0592L27.2897 3.2708C26.8089 2.52107 26.1485 1.90322 25.3685 1.47327L25.3185 1.42685L25.3068 1.43951C24.1248 0.845579 22.8226 0.529723 21.4998 0.516082C21.2953 0.506344 20.9675 0.49985 20.5456 0.493359C20.4612 2.27855 9.40596 2.27206 9.17227 0.451162C6.0498 0.454408 3.48886 1.41192 2.00553 2.89525C-3.10661 8.00739 3.16753 16.7191 3.16753 23.5353C3.16753 30.3515 0.0840132 33.4091 0.31122 36.908C0.668258 42.4064 27.391 41.1081 28.7506 37.9824C29.5468 36.1544 28.9736 34.7223 28.3524 31.8998L34.6934 31.705L34.4779 24.6311L27.4669 24.8447C27.4367 24.0378 27.4234 23.1734 27.4345 22.239C27.4669 19.4868 27.9298 16.4316 28.2514 13.5016L36.3374 21.0643C36.7188 21.4211 37.1772 21.6854 37.6771 21.8368C38.1769 21.9883 38.7049 22.0228 39.2202 21.9378C39.7356 21.8527 40.2244 21.6504 40.6491 21.3464C41.0738 21.0423 41.423 20.6448 41.6696 20.1844L50.7578 3.2153L44.7492 0Z",
                    fill: "rgba(0,163,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="13.75%"
                bottom="60.41%"
                left="0%"
                right="15.85%"
                {...getOverrideProps(overrides, "Vector44615319")}
              ></Icon>
              <Icon
                width="11.37px"
                height="4.67px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 11.373046875,
                  height: 4.6669921875,
                }}
                paths={[
                  {
                    d: "M11.3733 0.042197C11.2889 1.82739 10.3184 4.45325 7.32254 4.65124C3.3302 4.91415 0.233698 1.8209 0 0L0.00973702 0C3.94041 0 9.08176 0.00649319 11.3733 0.042197Z",
                    fill: "rgba(233,136,98,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="14.04%"
                bottom="83%"
                left="15.21%"
                right="65.93%"
                {...getOverrideProps(overrides, "Vector44615320")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="40.53px"
                height="20.05px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="17.83%"
                bottom="69.44%"
                left="32.8%"
                right="0%"
                {...getOverrideProps(overrides, "Group44615321")}
              >
                <View
                  padding="0px 0px 0px 0px"
                  width="40.53px"
                  height="20.05px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group44615322")}
                >
                  <Icon
                    width="31.28px"
                    height="20.05px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 31.2802734375,
                      height: 20.048828125,
                    }}
                    paths={[
                      {
                        d: "M3.98898 1.34604L0.0476054 17.8902C-0.0136536 18.1477 -0.0158191 18.4157 0.0412708 18.6741C0.0983608 18.9325 0.213222 19.1746 0.377243 19.3823C0.541263 19.59 0.750182 19.7578 0.988327 19.8732C1.22647 19.9886 1.48766 20.0486 1.7523 20.0487L24.9871 20.0487C25.371 20.0486 25.7442 19.9225 26.0495 19.6897C26.3548 19.4569 26.5752 19.1303 26.6768 18.7601L31.218 2.21591C31.2893 1.95587 31.2996 1.6829 31.2481 1.41823C31.1967 1.15356 31.0849 0.904323 30.9214 0.689922C30.7579 0.47552 30.5471 0.301733 30.3055 0.182071C30.0639 0.0624097 29.7979 0.000101807 29.5283 0L5.69368 0C5.29958 4.50692e-05 4.917 0.132903 4.6077 0.377129C4.2984 0.621354 4.08043 0.962694 3.98898 1.34604Z",
                        fill: "rgba(158,188,234,1)",
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
                    left="22.83%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector44615323")}
                  ></Icon>
                  <Icon
                    width="30.14px"
                    height="2.06px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 30.1416015625,
                      height: 2.0595703125,
                    }}
                    paths={[
                      {
                        d: "M1.02957 1.84503e-14L29.1119 1.84503e-14C29.2471 0 29.381 0.0266309 29.506 0.0783716C29.6309 0.130112 29.7444 0.205946 29.84 0.30155C29.9356 0.397155 30.0114 0.510658 30.0632 0.635571C30.1149 0.760484 30.1415 0.894363 30.1415 1.02957C30.1415 1.30263 30.033 1.5645 29.84 1.75759C29.6469 1.95067 29.385 2.05914 29.1119 2.05914L1.02957 2.05914C0.756514 2.05914 0.494637 1.95067 0.301555 1.75759C0.108474 1.5645 -9.22513e-15 1.30263 0 1.02957C-1.84503e-14 0.894363 0.0266309 0.760484 0.0783716 0.635571C0.130112 0.510658 0.205951 0.397155 0.301555 0.30155C0.39716 0.205946 0.510658 0.130112 0.635571 0.0783716C0.760484 0.0266309 0.894368 1.84503e-14 1.02957 1.84503e-14Z",
                        fill: "rgba(158,188,234,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="89.73%"
                    bottom="0%"
                    left="0%"
                    right="25.64%"
                    {...getOverrideProps(overrides, "Vector44615324")}
                  ></Icon>
                </View>
                <Icon
                  width="5.5px"
                  height="5.5px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 5.49609375,
                    height: 5.49609375,
                  }}
                  paths={[
                    {
                      d: "M2.74789 5.4958C4.26552 5.4958 5.49579 4.26552 5.49579 2.7479C5.49579 1.23028 4.26552 0 2.74789 0C1.23027 0 0 1.23028 0 2.7479C0 4.26552 1.23027 5.4958 2.74789 5.4958Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="35.48%"
                  bottom="37.11%"
                  left="56.97%"
                  right="29.48%"
                  {...getOverrideProps(overrides, "Vector44615325")}
                ></Icon>
              </View>
              <Icon
                width="8.26px"
                height="5.64px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 8.2578125,
                  height: 5.6416015625,
                }}
                paths={[
                  {
                    d: "M5.79051 4.16189C4.33347 5.06098 2.07764 5.48617 0.110356 5.64197L0 2.0586C0.925379 2.03264 2.34704 1.93526 3.73917 1.99044C4.36853 1.47728 4.73076 1.32505 5.37635 0.679135C6.06414 -0.00832689 7.86815 -0.421193 8.20864 0.679135C8.54912 1.77946 7.06969 3.36991 5.79051 4.16189Z",
                    fill: "rgba(233,136,98,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="29.3%"
                bottom="67.12%"
                left="57.26%"
                right="29.05%"
                {...getOverrideProps(overrides, "Vector44615326")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="30.25px"
              height="18.12px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="32.09%"
              bottom="60.44%"
              left="33.82%"
              right="56.1%"
              {...getOverrideProps(overrides, "Group44615327")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="4.38px"
                height="10.75px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="40.65%"
                left="0%"
                right="85.52%"
                {...getOverrideProps(overrides, "Group44615328")}
              >
                <Icon
                  width="1.28px"
                  height="9.71px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 1.283203125,
                    height: 9.7138671875,
                  }}
                  paths={[
                    {
                      d: "M1.28307 0L0 0L0 9.71404L1.28307 9.71404L1.28307 0Z",
                      fill: "rgba(12,188,139,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="96.3%"
                  bottom="-86.63%"
                  left="64.66%"
                  right="6.04%"
                  transformOrigin="top left"
                  transform="rotate(-180deg)"
                  {...getOverrideProps(overrides, "Vector44615329")}
                ></Icon>
                <Icon
                  width="1.28px"
                  height="4.38px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 4.37890625,
                    height: 1.283203125,
                  }}
                  paths={[
                    {
                      d: "M1.28307 0L0 0L0 4.37891L1.28307 4.37891L1.28307 0Z",
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
                  bottom="59.28%"
                  left="100%"
                  right="-29.3%"
                  transformOrigin="top left"
                  transform="rotate(90deg)"
                  {...getOverrideProps(overrides, "Vector44615330")}
                ></Icon>
                <Icon
                  width="1.28px"
                  height="4.38px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 4.37890625,
                    height: 1.283203125,
                  }}
                  paths={[
                    {
                      d: "M1.28307 0L0 0L0 4.37891L1.28307 4.37891L1.28307 0Z",
                      fill: "rgba(12,188,139,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="88.07%"
                  bottom="-28.79%"
                  left="100%"
                  right="-29.3%"
                  transformOrigin="top left"
                  transform="rotate(90deg)"
                  {...getOverrideProps(overrides, "Vector44615331")}
                ></Icon>
              </View>
              <Icon
                width="23.81px"
                height="9.69px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 23.8095703125,
                  height: 9.689453125,
                }}
                paths={[
                  {
                    d: "M23.8096 0L0 0L0 9.68938L23.8096 9.68938L23.8096 0Z",
                    fill: "rgba(12,188,139,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="46.53%"
                bottom="0%"
                left="21.28%"
                right="0%"
                {...getOverrideProps(overrides, "Vector44615332")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="30.24px"
              height="18.12px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="63.51%"
              bottom="29.03%"
              left="51.65%"
              right="38.27%"
              {...getOverrideProps(overrides, "Group44615333")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="4.38px"
                height="10.75px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="40.65%"
                left="85.52%"
                right="0%"
                {...getOverrideProps(overrides, "Group44615334")}
              >
                <Icon
                  width="1.28px"
                  height="9.71px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 1.283203125,
                    height: 9.7138671875,
                  }}
                  paths={[
                    {
                      d: "M1.28307 0L0 0L0 9.71405L1.28307 9.71405L1.28307 0Z",
                      fill: "rgba(38,38,38,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="5.97%"
                  bottom="3.7%"
                  left="35.35%"
                  right="35.35%"
                  {...getOverrideProps(overrides, "Vector44615335")}
                ></Icon>
                <Icon
                  width="1.28px"
                  height="4.38px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 4.37890625,
                    height: 1.283203125,
                  }}
                  paths={[
                    {
                      d: "M1.28307 0L0 0L0 4.37891L1.28307 4.37891L1.28307 0Z",
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
                  bottom="59.28%"
                  left="100%"
                  right="-29.3%"
                  transformOrigin="top left"
                  transform="rotate(90deg)"
                  {...getOverrideProps(overrides, "Vector44615336")}
                ></Icon>
                <Icon
                  width="1.28px"
                  height="4.38px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 4.37890625,
                    height: 1.283203125,
                  }}
                  paths={[
                    {
                      d: "M1.28307 0L0 0L0 4.37891L1.28307 4.37891L1.28307 0Z",
                      fill: "rgba(38,38,38,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="88.07%"
                  bottom="-28.79%"
                  left="100%"
                  right="-29.3%"
                  transformOrigin="top left"
                  transform="rotate(90deg)"
                  {...getOverrideProps(overrides, "Vector44615337")}
                ></Icon>
              </View>
              <Icon
                width="23.81px"
                height="9.69px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 23.8095703125,
                  height: 9.689453125,
                }}
                paths={[
                  {
                    d: "M23.8096 0L0 0L0 9.68937L23.8096 9.68937L23.8096 0Z",
                    fill: "rgba(38,38,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="100%"
                bottom="-53.48%"
                left="78.73%"
                right="-57.45%"
                transformOrigin="top left"
                transform="rotate(-180deg)"
                {...getOverrideProps(overrides, "Vector44615338")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="63.56px"
              height="82.06px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="66.19%"
              bottom="0%"
              left="62.45%"
              right="16.36%"
              {...getOverrideProps(overrides, "Group44615339")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="24.65px"
                height="23.89px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="70.89%"
                left="31.96%"
                right="29.27%"
                {...getOverrideProps(overrides, "Group44615340")}
              >
                <Icon
                  width="12.12px"
                  height="15.26px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 12.1171875,
                    height: 15.2587890625,
                  }}
                  paths={[
                    {
                      d: "M3.90469 0C3.90469 0 1.44437 8.81529 0.0623047 13.3896C-0.00339573 13.6063 -0.0173684 13.8355 0.0214944 14.0586C0.0603572 14.2817 0.150977 14.4926 0.286088 14.6743C0.421199 14.8561 0.597034 15.0036 0.799485 15.1052C1.00194 15.2067 1.22536 15.2593 1.45184 15.2588L10.0857 15.2588C10.4586 15.2589 10.8173 15.1153 11.0872 14.8579C11.3571 14.6005 11.5176 14.249 11.5352 13.8765L12.1172 1.60505L3.90469 0Z",
                      fill: "rgba(15,16,17,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="17.9%"
                  bottom="18.21%"
                  left="0%"
                  right="50.83%"
                  {...getOverrideProps(overrides, "Vector44615341")}
                ></Icon>
                <Icon
                  width="9.18px"
                  height="9.12px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 9.1767578125,
                    height: 9.1201171875,
                  }}
                  paths={[
                    {
                      d: "M9.17687 9.12039C9.17687 9.12039 6.66559 7.7922 7.21997 0.956863L2.0335 0C2.0335 0 2.62164 6.1271 0 8.07491L9.17687 9.12039Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="61.82%"
                  bottom="0%"
                  left="32.3%"
                  right="30.47%"
                  {...getOverrideProps(overrides, "Vector44615342")}
                ></Icon>
                <Icon
                  width="4.3px"
                  height="3.33px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 4.3046875,
                    height: 3.33203125,
                  }}
                  paths={[
                    {
                      d: "M0 3.33214L4.30491 0.0324501L0.92148 0C0.824583 1.15842 0.512061 2.28853 0 3.33214Z",
                      fill: "rgba(0,0,0,0.15)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="76.31%"
                  bottom="9.74%"
                  left="36.6%"
                  right="45.93%"
                  {...getOverrideProps(overrides, "Vector44615343")}
                ></Icon>
                <Icon
                  width="14.06px"
                  height="17.16px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 14.05859375,
                    height: 17.1572265625,
                  }}
                  paths={[
                    {
                      d: "M13.6797 11.5161C13.3226 13.5898 12.1928 15.5545 10.3641 16.2257C8.3712 17.0193 6.21428 17.3128 4.08183 17.0804C-1.59541 16.6201 -0.484049 3.7112 2.20899 1.20155C4.90204 -1.30811 12.813 0.272593 13.779 4.4652C14.2792 6.63372 14.0201 9.54359 13.6797 11.5161Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="6.5%"
                  bottom="21.66%"
                  left="18.01%"
                  right="24.94%"
                  {...getOverrideProps(overrides, "Vector44615344")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="5.54px"
                  height="6.27px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="39.64%"
                  bottom="34.12%"
                  left="22.2%"
                  right="55.32%"
                  {...getOverrideProps(overrides, "Group44615345")}
                >
                  <Icon
                    width="0.94px"
                    height="0.94px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 0.9404296875,
                      height: 0.9404296875,
                    }}
                    paths={[
                      {
                        d: "M0.470329 0.940638C0.730078 0.940638 0.940638 0.730058 0.940638 0.470309C0.940638 0.21056 0.730078 0 0.470329 0C0.21058 0 0 0.21056 0 0.470309C0 0.730058 0.21058 0.940638 0.470329 0.940638Z",
                        fill: "rgba(15,16,17,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="17.07%"
                    bottom="67.92%"
                    left="73.2%"
                    right="9.83%"
                    {...getOverrideProps(overrides, "Vector44615346")}
                  ></Icon>
                  <Icon
                    width="0.94px"
                    height="0.94px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 0.9404296875,
                      height: 0.9404296875,
                    }}
                    paths={[
                      {
                        d: "M0.470329 0.940638C0.730078 0.940638 0.940638 0.730058 0.940638 0.470309C0.940638 0.21056 0.730078 0 0.470329 0C0.21058 0 0 0.21056 0 0.470309C0 0.730058 0.21058 0.940638 0.470329 0.940638Z",
                        fill: "rgba(15,16,17,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="12.26%"
                    bottom="72.73%"
                    left="6.23%"
                    right="76.79%"
                    {...getOverrideProps(overrides, "Vector44615347")}
                  ></Icon>
                  <Icon
                    width="1.25px"
                    height="0.02px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.24609375,
                      height: 0.0166015625,
                    }}
                    paths={[
                      {
                        d: "M1.25528 0.680938C1.63136 0.675843 1.93209 0.366848 1.927 -0.0092238C1.9219 -0.385295 1.61291 -0.686032 1.23684 -0.680938L1.25528 0.680938ZM-0.0092238 -0.664059C-0.385295 -0.658965 -0.686032 -0.349969 -0.680938 0.0261026C-0.675843 0.402174 -0.366848 0.70291 0.0092238 0.697816L-0.0092238 -0.664059ZM1.23684 -0.680938L-0.0092238 -0.664059L0.0092238 0.697816L1.25528 0.680938L1.23684 -0.680938Z",
                        stroke: "rgba(15,16,17,1)",
                        fillRule: "nonzero",
                        strokeWidth: 1,
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="99.73%"
                    left="0%"
                    right="77.51%"
                    {...getOverrideProps(overrides, "Vector44615348")}
                  ></Icon>
                  <Icon
                    width="1.23px"
                    height="0.29px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.228515625,
                      height: 0.2939453125,
                    }}
                    paths={[
                      {
                        d: "M1.06982 0.956658C1.43557 1.04431 1.80313 0.818862 1.89078 0.453112C1.97843 0.087362 1.75298 -0.280191 1.38723 -0.367841L1.06982 0.956658ZM0.158704 -0.662249C-0.207047 -0.749899 -0.5746 -0.524454 -0.662249 -0.158704C-0.749899 0.207047 -0.524454 0.5746 -0.158704 0.662249L0.158704 -0.662249ZM1.38723 -0.367841L0.158704 -0.662249L-0.158704 0.662249L1.06982 0.956658L1.38723 -0.367841Z",
                        stroke: "rgba(15,16,17,1)",
                        fillRule: "nonzero",
                        strokeWidth: 1,
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="2.74%"
                    bottom="92.56%"
                    left="77.83%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector44615349")}
                  ></Icon>
                  <Icon
                    width="2.95px"
                    height="1.26px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 2.9541015625,
                      height: 1.2626953125,
                    }}
                    paths={[
                      {
                        d: "M2.95367 0.239216C2.95367 0.239216 1.21783 0.423902 0 0C0 0 0.0107084 1.14316 1.38466 1.25482C2.75861 1.36647 2.95367 0.239216 2.95367 0.239216Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="79.85%"
                    bottom="0%"
                    left="24.52%"
                    right="22.17%"
                    {...getOverrideProps(overrides, "Vector44615350")}
                  ></Icon>
                </View>
                <View
                  padding="0px 0px 0px 0px"
                  width="1.52px"
                  height="2.34px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="47.24%"
                  bottom="42.98%"
                  left="26.6%"
                  right="67.24%"
                  {...getOverrideProps(overrides, "Group44615351")}
                >
                  <Icon
                    width="1.52px"
                    height="2.34px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.5185546875,
                      height: 2.3359375,
                    }}
                    paths={[
                      {
                        d: "M1.35544 2.33546C1.39448 2.33567 1.4323 2.32181 1.46194 2.2964C1.49158 2.27098 1.51106 2.23574 1.51682 2.19712C1.52257 2.15851 1.51422 2.1191 1.49328 2.08614C1.47234 2.05319 1.44023 2.02889 1.40282 2.0177L0.446298 1.72559L1.11428 0.234783C1.12406 0.215197 1.12977 0.193834 1.13108 0.171982C1.13239 0.150131 1.12926 0.128248 1.12189 0.107637C1.11451 0.0870254 1.10304 0.0681117 1.08817 0.0520476C1.0733 0.0359835 1.05534 0.0230889 1.03535 0.0141495C1.01537 0.00521014 0.993786 0.000404823 0.971899 2.44246e-05C0.950012 -0.000355974 0.92827 0.00371091 0.907989 0.0119505C0.887709 0.0201902 0.869306 0.0324488 0.853886 0.0479864C0.838466 0.0635241 0.826352 0.0820046 0.818266 0.102347L0 1.92845L1.30773 2.32898C1.32323 2.33351 1.3393 2.33568 1.35544 2.33546Z",
                        fill: "rgba(0,0,0,1)",
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
                    {...getOverrideProps(overrides, "Vector44615352")}
                  ></Icon>
                </View>
                <Icon
                  width="21.03px"
                  height="19.69px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 21.0341796875,
                    height: 19.6904296875,
                  }}
                  paths={[
                    {
                      d: "M0 5.33289C0 5.33289 0.831251 -1.39014 11.6038 0.260996C14.2893 0.672564 18.0953 2.76936 18.7121 9.64138C18.9938 12.7937 20.0805 15.7659 20.9095 17.6472C21.0076 17.868 21.049 18.1099 21.0299 18.3508C21.0108 18.5917 20.9319 18.8241 20.8002 19.0268C20.6686 19.2294 20.4884 19.396 20.276 19.5114C20.0637 19.6268 19.8259 19.6873 19.5842 19.6875L12.0117 19.6901C11.8215 19.6904 11.633 19.6533 11.4571 19.5808C11.2811 19.5083 11.1212 19.4018 10.9864 19.2675C10.8516 19.1332 10.7446 18.9737 10.6715 18.798C10.5984 18.6224 10.5606 18.434 10.5602 18.2437C10.5602 18.2226 10.5602 18.2012 10.5602 18.1788C10.6147 16.8899 10.6576 14.7077 10.5842 11.3724C10.1905 9.46869 11.2392 8.12655 9.71695 8.56409C4.06308 10.186 0.421955 5.44163 0 5.33289Z",
                      fill: "rgba(15,16,17,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="17.56%"
                  left="14.65%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615353")}
                ></Icon>
                <Icon
                  width="3.99px"
                  height="3.98px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 3.990234375,
                    height: 3.982421875,
                  }}
                  paths={[
                    {
                      d: "M0.006524 1.82744C-0.0146391 2.08843 0.015804 2.35103 0.0961283 2.60026C0.176453 2.84948 0.305071 3.08043 0.474654 3.27994C0.644237 3.47946 0.851466 3.64362 1.08449 3.76305C1.31751 3.88248 1.57177 3.95483 1.83276 3.976C2.09375 3.99716 2.35636 3.96672 2.60558 3.88639C2.85481 3.80607 3.08576 3.67743 3.28527 3.50785C3.48479 3.33826 3.64895 3.13106 3.76838 2.89803C3.88781 2.66501 3.96016 2.41073 3.98133 2.14974C4.03192 1.63231 3.87496 1.11597 3.54493 0.714245C3.21491 0.312524 2.73886 0.0583185 2.22145 0.00751427C2.19938 0.00524221 2.17731 0.00362977 2.15653 0.00200686C0.733572 -0.0447327 0.0954591 0.729704 0.006524 1.82744Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="46.92%"
                  bottom="36.41%"
                  left="50.18%"
                  right="33.62%"
                  {...getOverrideProps(overrides, "Vector44615354")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="12.69px"
                height="17.02px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="79.26%"
                bottom="0%"
                left="8.42%"
                right="71.62%"
                {...getOverrideProps(overrides, "Group44615355")}
              >
                <Icon
                  width="8.7px"
                  height="8.01px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 8.7001953125,
                    height: 8.0107421875,
                  }}
                  paths={[
                    {
                      d: "M7.57409 8.01064C6.95739 7.9071 0 6.7188 0 6.7188L1.1474 0C1.1474 0 8.08595 1.18504 8.70038 1.28826L7.57409 8.01064Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="5.97%"
                  bottom="46.96%"
                  left="31.42%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615356")}
                ></Icon>
                <Icon
                  width="7.67px"
                  height="17.02px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 7.673828125,
                    height: 17.01953125,
                  }}
                  paths={[
                    {
                      d: "M0.017321 15.4723C-0.012129 15.6533 -0.00395977 15.8383 0.0413317 16.016C0.0866231 16.1936 0.168058 16.36 0.280547 16.5047C0.393037 16.6495 0.534157 16.7695 0.695109 16.8572C0.85606 16.945 1.03339 16.9986 1.21599 17.0148C1.46908 17.0371 1.72328 16.9866 1.94868 16.8694C2.17408 16.7521 2.3613 16.573 2.48834 16.3529L6.41935 8.9671C6.49496 8.82398 6.53874 8.6662 6.5477 8.50458C6.55666 8.34296 6.53059 8.1813 6.47127 8.03069C5.9048 6.83008 5.73871 5.47934 5.9974 4.17726C6.24044 3.16999 6.76173 2.25133 7.50181 1.5261C7.57348 1.46341 7.62585 1.38163 7.65281 1.29031C7.67977 1.19899 7.6802 1.1019 7.65407 1.01034C7.62794 0.918787 7.57633 0.836542 7.50524 0.773209C7.43414 0.709876 7.34649 0.668058 7.25253 0.652641L3.4267 0.0119191C3.31381 -0.00697032 3.19829 -0.0033766 3.08679 0.0224783C2.97528 0.0483331 2.86999 0.0959557 2.77693 0.1626C2.68387 0.229245 2.60487 0.313589 2.54449 0.41083C2.48411 0.50807 2.44352 0.616286 2.42505 0.729249L0.017321 15.4723Z",
                      fill: "rgba(193,216,237,1)",
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
                  right="39.52%"
                  {...getOverrideProps(overrides, "Vector44615357")}
                ></Icon>
              </View>
              <Icon
                width="51.73px"
                height="20.12px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 51.732421875,
                  height: 20.1162109375,
                }}
                paths={[
                  {
                    d: "M26.6198 0C29.507 0.120419 32.4476 0.204804 35.3883 0.27751L39.8078 0.37488L44.2221 0.454421L44.6619 0.462206C46.4852 0.496469 48.2276 1.22073 49.5379 2.48895C50.8482 3.75718 51.629 5.47503 51.7227 7.29617C51.8165 9.1173 51.2162 10.9062 50.0431 12.3023C48.8699 13.6984 47.2111 14.5977 45.401 14.819L1.77739 20.1162L0 7.22354L43.4289 0.519321L44.6077 14.8843L40.1256 15.1738L35.6464 15.4445C32.6554 15.6175 29.6634 15.7792 26.6175 15.9041L26.6198 0Z",
                    fill: "rgba(38,38,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="68.12%"
                bottom="7.37%"
                left="18.61%"
                right="0%"
                {...getOverrideProps(overrides, "Vector44615358")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="14.43px"
                height="16.38px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="76.18%"
                bottom="3.86%"
                left="67.07%"
                right="10.23%"
                {...getOverrideProps(overrides, "Group44615359")}
              >
                <Icon
                  width="7.8px"
                  height="7.69px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 7.8017578125,
                    height: 7.69140625,
                  }}
                  paths={[
                    {
                      d: "M6.82007 7.69157C0.797807 6.8152 0.198643 6.65291 0 6.6013L1.77188 0.0191373C1.75176 0.013944 1.72579 0.00681619 1.6943 0C2.18799 0.107761 5.24879 0.575142 7.80162 0.946462L6.82007 7.69157Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="6.32%"
                  bottom="46.72%"
                  left="0%"
                  right="45.92%"
                  {...getOverrideProps(overrides, "Vector44615360")}
                ></Icon>
                <Icon
                  width="10.33px"
                  height="16.38px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 10.3251953125,
                    height: 16.37890625,
                  }}
                  paths={[
                    {
                      d: "M10.2432 14.5862C10.3065 14.7582 10.3336 14.9415 10.3229 15.1245C10.3121 15.3075 10.2637 15.4863 10.1808 15.6497C10.0978 15.8132 9.98199 15.9578 9.8406 16.0745C9.69922 16.1911 9.53529 16.2774 9.35906 16.3279C9.11484 16.3978 8.85573 16.3965 8.61221 16.3242C8.3687 16.2518 8.15089 16.1114 7.98445 15.9195L2.72267 9.4143C2.62162 9.2881 2.549 9.14157 2.50979 8.98472C2.47057 8.82787 2.4657 8.66439 2.49548 8.50548C2.82353 7.21919 2.73024 5.86159 2.22933 4.63227C1.79957 3.68957 1.11349 2.88663 0.249373 2.31507C0.167094 2.26714 0.100154 2.19681 0.0563359 2.11227C0.0125182 2.02773 -0.00637232 1.93247 0.00189578 1.83761C0.0101639 1.74275 0.0452471 1.65219 0.10303 1.57651C0.160813 1.50082 0.238929 1.44313 0.328259 1.41015L3.96354 0.0546981C4.07077 0.0147475 4.18483 -0.00363727 4.29918 0.000594791C4.41353 0.00482685 4.52592 0.0315952 4.6299 0.0793626C4.73388 0.12713 4.82741 0.194961 4.90511 0.278957C4.98282 0.362953 5.04315 0.461453 5.0827 0.568829L10.2432 14.5862Z",
                      fill: "rgba(193,216,237,1)",
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
                  left="28.42%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44615361")}
                ></Icon>
              </View>
              <Icon
                width="48.59px"
                height="19.65px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 48.5888671875,
                  height: 19.646484375,
                }}
                paths={[
                  {
                    d: "M28.762 15.9015C26.9339 15.7461 25.1069 15.6337 23.2798 15.5283C21.4527 15.4309 19.626 15.3335 17.7999 15.2686L15.0604 15.1631L12.3213 15.0842C10.4952 15.0232 8.66978 14.9982 6.84434 14.9635L7.47696 1.84752C10.8945 2.3253 14.3165 2.76446 17.7376 3.21433C21.1587 3.66419 24.5833 4.07835 28.0073 4.49965L33.1467 5.10533L38.2894 5.68178C41.7199 6.05051 45.1504 6.41662 48.5886 6.71848L47.08 19.6465C43.6648 19.1486 40.242 18.715 36.819 18.2833L31.6816 17.6601L26.5409 17.0661C23.1117 16.6876 19.6831 16.303 16.2517 15.9521C12.8202 15.6013 9.38776 15.2417 5.95208 14.9197C4.3045 14.7648 2.77612 13.9936 1.67273 12.7603C0.569329 11.527 -0.0277232 9.92256 0.000989547 8.26797C0.0297023 6.61337 0.682063 5.03062 1.82759 3.83635C2.97311 2.64207 4.52731 1.92434 6.17927 1.82674L6.58565 1.8037C8.40849 1.69691 10.2317 1.59953 12.0539 1.46677L14.7875 1.2795L17.5208 1.06592C19.343 0.928624 21.1645 0.758213 22.9861 0.589431C24.8076 0.41221 26.6288 0.227531 28.4494 0L28.762 15.9015Z",
                    fill: "rgba(38,38,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="66.7%"
                bottom="9.36%"
                left="0%"
                right="23.56%"
                {...getOverrideProps(overrides, "Vector44615362")}
              ></Icon>
              <Icon
                width="27.75px"
                height="16.13px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 27.748046875,
                  height: 16.1328125,
                }}
                paths={[
                  {
                    d: "M26.7876 0L27.7484 16.1333L0 15.8074L2.09452 1.52391L26.7876 0Z",
                    fill: "rgba(38,38,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="65.69%"
                bottom="14.65%"
                left="28.78%"
                right="27.56%"
                {...getOverrideProps(overrides, "Vector44615363")}
              ></Icon>
              <Icon
                width="45.31px"
                height="37.31px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 45.314453125,
                  height: 37.3076171875,
                }}
                paths={[
                  {
                    d: "M45.1434 28.3511L37.7897 5.55163C37.4854 4.3645 36.8522 3.28737 35.963 2.4441C34.4796 0.960768 31.9187 0.0032458 28.7962 0C28.5625 1.8209 17.5073 1.82739 17.4229 0.042197C17.001 0.0486887 16.6732 0.0551826 16.4687 0.0649201C12.0025 0.257396 10.2043 1.97637 9.63367 4.56425L0.258478 27.2495C0.0288316 27.8051 -0.0497757 28.4115 0.0306138 29.0072C0.111003 29.603 0.347544 30.1668 0.716227 30.6417C1.08491 31.1165 1.57261 31.4853 2.12987 31.7108C2.68713 31.9362 3.29412 32.0103 3.88925 31.9254L9.01112 31.1954C8.75892 32.4714 8.71901 33.4633 9.21756 34.61C10.5776 37.7357 37.3003 39.034 37.6573 33.5357C37.6609 33.4818 37.6612 33.4282 37.6631 33.3734L42.1034 32.9605C42.6312 32.9115 43.1412 32.7446 43.5958 32.472C44.0504 32.1994 44.4379 31.8282 44.7297 31.3857C45.0216 30.9432 45.2103 30.4409 45.2819 29.9157C45.3535 29.3905 45.3062 28.8556 45.1434 28.3511ZM8.83844 24.3345L10.5331 20.2337C10.5143 21.7008 10.4357 22.9878 10.3231 24.1232L8.83844 24.3345ZM37.0532 26.3228L35.7572 26.4436C35.1189 24.4112 34.7963 22.2929 34.801 20.1626C34.801 19.9143 34.8117 19.668 34.8273 19.4222L37.0532 26.3228Z",
                    fill: "rgba(0,163,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="26.7%"
                bottom="27.84%"
                left="14.48%"
                right="14.23%"
                {...getOverrideProps(overrides, "Vector44615364")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="31.36px"
                height="20.05px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="38.31%"
                bottom="37.26%"
                left="13.22%"
                right="37.45%"
                {...getOverrideProps(overrides, "Group44615365")}
              >
                <View
                  padding="0px 0px 0px 0px"
                  width="31.36px"
                  height="20.05px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group44615366")}
                >
                  <Icon
                    width="28.6px"
                    height="20.05px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 28.599609375,
                      height: 20.0478515625,
                    }}
                    paths={[
                      {
                        d: "M27.4495 1.37525L28.5965 18.4738C28.6101 18.6754 28.582 18.8776 28.5142 19.0679C28.4464 19.2582 28.3401 19.4325 28.2022 19.58C28.0642 19.7276 27.8974 19.8453 27.7121 19.9257C27.5268 20.0062 27.3269 20.0477 27.1249 20.0477L3.24323 20.0477C2.87827 20.0477 2.52626 19.9125 2.25523 19.668C1.98419 19.4236 1.81338 19.0874 1.7758 18.7244L0.00780654 1.62681C-0.0134129 1.42138 0.00874514 1.21379 0.0728256 1.01746C0.136906 0.821143 0.241491 0.640474 0.379814 0.487128C0.518138 0.333782 0.687119 0.211176 0.875818 0.127265C1.06452 0.0433538 1.26872 -2.33476e-06 1.47523 2.02981e-07L25.9772 2.02981e-07C26.3512 -0.000195921 26.7114 0.141738 26.9847 0.397068C27.2581 0.652399 27.4242 1.00205 27.4495 1.37525Z",
                        fill: "rgba(158,188,234,1)",
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
                    right="8.8%"
                    {...getOverrideProps(overrides, "Vector44615367")}
                  ></Icon>
                  <Icon
                    width="27.15px"
                    height="2.06px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 27.1513671875,
                      height: 2.0595703125,
                    }}
                    paths={[
                      {
                        d: "M26.1216 0L1.02957 0C0.460953 0 0 0.460953 0 1.02957C0 1.59818 0.460953 2.05914 1.02957 2.05914L26.1216 2.05914C26.6902 2.05914 27.1512 1.59818 27.1512 1.02957C27.1512 0.460953 26.6902 0 26.1216 0Z",
                        fill: "rgba(158,188,234,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="100%"
                    bottom="-10.27%"
                    left="100%"
                    right="-86.58%"
                    transformOrigin="top left"
                    transform="rotate(180deg)"
                    {...getOverrideProps(overrides, "Vector44615368")}
                  ></Icon>
                </View>
                <Icon
                  width="4.54px"
                  height="4.54px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 4.5439453125,
                    height: 4.5439453125,
                  }}
                  paths={[
                    {
                      d: "M2.27206 4.54413C3.52689 4.54413 4.54413 3.52689 4.54413 2.27206C4.54413 1.01724 3.52689 0 2.27206 0C1.01724 0 0 1.01724 0 2.27206C0 3.52689 1.01724 4.54413 2.27206 4.54413Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="38.66%"
                  bottom="38.67%"
                  left="36.35%"
                  right="49.16%"
                  {...getOverrideProps(overrides, "Vector44615369")}
                ></Icon>
              </View>
              <Icon
                width="8.26px"
                height="5.64px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 8.2578125,
                  height: 5.6416015625,
                }}
                paths={[
                  {
                    d: "M2.46775 4.16188C3.92512 5.06096 6.18095 5.48616 8.14791 5.64196L8.25828 2.0586C7.33322 2.03263 5.91155 1.93525 4.5191 1.99043C3.89007 1.4776 3.52783 1.32505 2.88192 0.679135C2.19446 -0.00832689 0.390453 -0.421193 0.0496431 0.679135C-0.291166 1.77946 1.1889 3.3699 2.46775 4.16188Z",
                    fill: "rgba(233,136,98,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="60.32%"
                bottom="32.81%"
                left="35.99%"
                right="51.02%"
                {...getOverrideProps(overrides, "Vector44615370")}
              ></Icon>
              <Icon
                width="11.37px"
                height="4.67px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 11.373046875,
                  height: 4.6669921875,
                }}
                paths={[
                  {
                    d: "M0 0.042197C0.0843909 1.82739 1.05488 4.45325 4.05076 4.65124C8.0431 4.91415 11.1396 1.8209 11.3733 0L11.3636 0C7.4329 0.0016229 2.29154 0.00649319 0 0.042197Z",
                    fill: "rgba(233,136,98,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="26.7%"
                bottom="67.62%"
                left="41.89%"
                right="40.22%"
                {...getOverrideProps(overrides, "Vector44615371")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
        <Flex
          gap="60px"
          direction="column"
          width="500px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.10000000149011612)"
          borderRadius="30px"
          padding="60px 0px 60px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 209")}
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
            {...getOverrideProps(overrides, "Frame 19744615373")}
          >
            <Flex
              gap="20px"
              direction="column"
              width="380px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 19744615374")}
            >
              <Flex
                gap="20px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="space-between"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 21044615375")}
              >
                <Text
                  fontFamily="Roboto"
                  fontSize="24px"
                  fontWeight="500"
                  color="rgba(0,0,0,1)"
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
                  children="Example 1"
                  {...getOverrideProps(overrides, "Example 1")}
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
                  {...getOverrideProps(overrides, "delete button44615377")}
                ></Deletebutton>
              </Flex>
              <Flex
                gap="10px"
                direction="column"
                width="380px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 19644615378")}
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
                  {...getOverrideProps(overrides, "Title44615379")}
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
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Briefly describe the goal of this example. Visible to all users after your prompt is published."
                  {...getOverrideProps(
                    overrides,
                    "Briefly describe the goal of this example. Visible to all users after your prompt is published.44615380"
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
                  {...getOverrideProps(overrides, "Frame 18244615381")}
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
                    border="1px SOLID rgba(141,143,155,1)"
                    borderRadius="11px"
                    padding="10px 10px 10px 10px"
                    {...getOverrideProps(overrides, "Frame 17344615382")}
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
                      width="360px"
                      height="unset"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="Expert Tutor Augmented Learning"
                      {...getOverrideProps(overrides, "List Title44615383")}
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
                    {...getOverrideProps(overrides, "0/20 words44615384")}
                  ></Text>
                </Flex>
              </Flex>
              <Flex
                gap="10px"
                direction="column"
                width="380px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 20844615385")}
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
                  children="Sample Input"
                  {...getOverrideProps(overrides, "Sample Input44615386")}
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
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Provide the real input of your prompt. We may use it to evaluate the reliability of your prompt.&#xA;&#xA;Only users who have purchased this prompt can see this input."
                  {...getOverrideProps(
                    overrides,
                    "Provide the real input of your prompt. We may use it to evaluate the reliability of your prompt. Only users who have purchased this prompt can see this input.44615387"
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
                  {...getOverrideProps(overrides, "Frame 18244615388")}
                >
                  <View
                    width="382px"
                    height="122px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    border="1px SOLID rgba(141,143,155,1)"
                    borderRadius="11px"
                    padding="0px 0px 0px 0px"
                    backgroundColor="rgba(255,250,223,1)"
                    {...getOverrideProps(overrides, "Frame 20644615389")}
                  >
                    <View
                      width="380px"
                      height="112px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      overflow="hidden"
                      position="absolute"
                      top="calc(50% - 56px - 4px)"
                      left="0px"
                      borderRadius="10px"
                      padding="0px 0px 0px 0px"
                      backgroundColor="rgba(255,250,223,1)"
                      {...getOverrideProps(overrides, "Frame 20544615390")}
                    >
                      <Text
                        fontFamily="Roboto"
                        fontSize="14px"
                        fontWeight="400"
                        color="rgba(76,76,76,1)"
                        lineHeight="20px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="360px"
                        height="95px"
                        gap="unset"
                        alignItems="unset"
                        position="absolute"
                        top="10px"
                        left="10px"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children='This prompt is an excellent example of AI tutoring session to provide high-quality, user-focused learning experiences. It&apos;s part of a broader field called "Augmented Learning," which aims to use technology to enhance and personalise education including Expert-level responses: Detailed, high-quality responses that would resemble those given by a top-tier expert in the field.&#xA;&#xA;'
                        {...getOverrideProps(overrides, "List Title44615391")}
                      ></Text>
                    </View>
                  </View>
                  <Flex
                    gap="10px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-end"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 21244615392")}
                  >
                    <Textbutton
                      width="20px"
                      height="20px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      overflow="hidden"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      property1="hover"
                      {...getOverrideProps(overrides, "text button44615393")}
                    ></Textbutton>
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
                      {...getOverrideProps(overrides, "Line 7944615394")}
                    ></Icon>
                    <Imagebutton
                      width="20px"
                      height="20px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      overflow="hidden"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      property1="Default"
                      {...getOverrideProps(overrides, "image button44615395")}
                    ></Imagebutton>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="10px"
                direction="column"
                width="380px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 21144615396")}
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
                  children="Sample Output"
                  {...getOverrideProps(overrides, "Sample Output44615397")}
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
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Provide the real output of your prompt. Visible to all users after your prompt is published.&#xA;&#xA;Do NOT include your input prompt here."
                  {...getOverrideProps(
                    overrides,
                    "Provide the real output of your prompt. Visible to all users after your prompt is published. Do NOT include your input prompt here."
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
                  {...getOverrideProps(overrides, "Frame 18244615399")}
                >
                  <View
                    width="382px"
                    height="122px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    border="1px SOLID rgba(141,143,155,1)"
                    borderRadius="11px"
                    padding="0px 0px 0px 0px"
                    backgroundColor="rgba(255,250,223,1)"
                    {...getOverrideProps(overrides, "Frame 20744615400")}
                  >
                    <View
                      width="380px"
                      height="112px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      overflow="hidden"
                      position="absolute"
                      top="calc(50% - 56px - 4px)"
                      left="0px"
                      borderRadius="10px"
                      padding="0px 0px 0px 0px"
                      backgroundColor="rgba(255,250,223,1)"
                      {...getOverrideProps(overrides, "Frame 20544615401")}
                    >
                      <Text
                        fontFamily="Roboto"
                        fontSize="14px"
                        fontWeight="400"
                        color="rgba(76,76,76,1)"
                        lineHeight="20px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="360px"
                        height="95px"
                        gap="unset"
                        alignItems="unset"
                        position="absolute"
                        top="10px"
                        left="10px"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children='This prompt is an excellent example of AI tutoring session to provide high-quality, user-focused learning experiences. It&apos;s part of a broader field called "Augmented Learning," which aims to use technology to enhance and personalise education including Expert-level responses: Detailed, high-quality responses that would resemble those given by a top-tier expert in the field.&#xA;&#xA;'
                        {...getOverrideProps(overrides, "List Title44615402")}
                      ></Text>
                    </View>
                  </View>
                  <Flex
                    gap="10px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-end"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 21244615403")}
                  >
                    <Textbutton
                      width="20px"
                      height="20px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      overflow="hidden"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      property1="hover"
                      {...getOverrideProps(overrides, "text button44615404")}
                    ></Textbutton>
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
                      {...getOverrideProps(overrides, "Line 7944615405")}
                    ></Icon>
                    <Imagebutton
                      width="20px"
                      height="20px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      overflow="hidden"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      property1="Default"
                      {...getOverrideProps(overrides, "image button44615406")}
                    ></Imagebutton>
                  </Flex>
                </Flex>
              </Flex>
              <Icon
                width="unset"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 380, height: 1 }}
                paths={[
                  {
                    d: "M0 0L380 0L380 -1L0 -1L0 0Z",
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
                alignSelf="stretch"
                position="relative"
                {...getOverrideProps(overrides, "Line 7844615407")}
              ></Icon>
            </Flex>
            <Flex
              gap="20px"
              direction="column"
              width="380px"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 198")}
            >
              <Flex
                gap="20px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="space-between"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 21044615409")}
              >
                <Text
                  fontFamily="Roboto"
                  fontSize="24px"
                  fontWeight="500"
                  color="rgba(0,0,0,1)"
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
                  children="Example 2"
                  {...getOverrideProps(overrides, "Example 2")}
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
                  {...getOverrideProps(overrides, "delete button44615411")}
                ></Deletebutton>
              </Flex>
              <Flex
                gap="10px"
                direction="column"
                width="380px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 19644615412")}
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
                  {...getOverrideProps(overrides, "Title44615413")}
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
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Briefly describe the goal of this example. Visible to all users after your prompt is published."
                  {...getOverrideProps(
                    overrides,
                    "Briefly describe the goal of this example. Visible to all users after your prompt is published.44615414"
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
                  {...getOverrideProps(overrides, "Frame 18244615415")}
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
                    border="1px SOLID rgba(141,143,155,1)"
                    borderRadius="11px"
                    padding="10px 10px 10px 10px"
                    {...getOverrideProps(overrides, "Frame 17344615416")}
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
                      width="360px"
                      height="unset"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="Tutor AI for PhD"
                      {...getOverrideProps(overrides, "List Title44615417")}
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
                    {...getOverrideProps(overrides, "0/20 words44615418")}
                  ></Text>
                </Flex>
              </Flex>
              <Flex
                gap="10px"
                direction="column"
                width="380px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 20844615419")}
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
                  children="Sample Input"
                  {...getOverrideProps(overrides, "Sample Input44615420")}
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
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Provide the real input of your prompt. We may use it to evaluate the reliability of your prompt.&#xA;&#xA;Only users who have purchased this prompt can see this input."
                  {...getOverrideProps(
                    overrides,
                    "Provide the real input of your prompt. We may use it to evaluate the reliability of your prompt. Only users who have purchased this prompt can see this input.44615421"
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
                  {...getOverrideProps(overrides, "Frame 18244615422")}
                >
                  <View
                    width="382px"
                    height="122px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    border="1px SOLID rgba(141,143,155,1)"
                    borderRadius="11px"
                    padding="0px 0px 0px 0px"
                    backgroundColor="rgba(255,250,223,1)"
                    {...getOverrideProps(overrides, "Frame 20644615423")}
                  >
                    <View
                      width="380px"
                      height="112px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      overflow="hidden"
                      position="absolute"
                      top="calc(50% - 56px - 4px)"
                      left="0px"
                      borderRadius="10px"
                      padding="0px 0px 0px 0px"
                      backgroundColor="rgba(255,250,223,1)"
                      {...getOverrideProps(overrides, "Frame 20544615424")}
                    >
                      <Text
                        fontFamily="Roboto"
                        fontSize="14px"
                        fontWeight="400"
                        color="rgba(76,76,76,1)"
                        lineHeight="20px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="360px"
                        height="95px"
                        gap="unset"
                        alignItems="unset"
                        position="absolute"
                        top="10px"
                        left="10px"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children='This prompt is an excellent example of AI tutoring session to provide high-quality, user-focused learning experiences. It&apos;s part of a broader field called "Augmented Learning," which aims to use technology to enhance and personalise education including Expert-level responses: Detailed, high-quality responses that would resemble those given by a top-tier expert in the field.&#xA;&#xA;'
                        {...getOverrideProps(overrides, "List Title44615425")}
                      ></Text>
                    </View>
                  </View>
                  <Flex
                    gap="10px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-end"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 21244615426")}
                  >
                    <Textbutton
                      width="20px"
                      height="20px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      overflow="hidden"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      property1="hover"
                      {...getOverrideProps(overrides, "text button44615427")}
                    ></Textbutton>
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
                      {...getOverrideProps(overrides, "Line 7944615428")}
                    ></Icon>
                    <Imagebutton
                      width="20px"
                      height="20px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      overflow="hidden"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      property1="Default"
                      {...getOverrideProps(overrides, "image button44615429")}
                    ></Imagebutton>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="10px"
                direction="column"
                width="380px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 21144615430")}
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
                  children="Sample Output"
                  {...getOverrideProps(overrides, "Sample Output44615431")}
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
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Provide the real output of your prompt. Visible to other users after your prompt is published.&#xA;&#xA;Do NOT include your input prompt here."
                  {...getOverrideProps(
                    overrides,
                    "Provide the real output of your prompt. Visible to other users after your prompt is published. Do NOT include your input prompt here."
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
                  {...getOverrideProps(overrides, "Frame 18244615433")}
                >
                  <View
                    width="382px"
                    height="122px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    border="1px SOLID rgba(141,143,155,1)"
                    borderRadius="11px"
                    padding="0px 0px 0px 0px"
                    backgroundColor="rgba(255,250,223,1)"
                    {...getOverrideProps(overrides, "Frame 20744615434")}
                  >
                    <View
                      width="380px"
                      height="112px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      overflow="hidden"
                      position="absolute"
                      top="calc(50% - 56px - 4px)"
                      left="0px"
                      borderRadius="10px"
                      padding="0px 0px 0px 0px"
                      backgroundColor="rgba(255,250,223,1)"
                      {...getOverrideProps(overrides, "Frame 20544615435")}
                    >
                      <Text
                        fontFamily="Roboto"
                        fontSize="14px"
                        fontWeight="400"
                        color="rgba(76,76,76,1)"
                        lineHeight="20px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="360px"
                        height="95px"
                        gap="unset"
                        alignItems="unset"
                        position="absolute"
                        top="10px"
                        left="10px"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children='This prompt is an excellent example of AI tutoring session to provide high-quality, user-focused learning experiences. It&apos;s part of a broader field called "Augmented Learning," which aims to use technology to enhance and personalise education including Expert-level responses: Detailed, high-quality responses that would resemble those given by a top-tier expert in the field.&#xA;&#xA;'
                        {...getOverrideProps(overrides, "List Title44615436")}
                      ></Text>
                    </View>
                  </View>
                  <Flex
                    gap="10px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-end"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame 21244615437")}
                  >
                    <Textbutton
                      width="20px"
                      height="20px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      overflow="hidden"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      property1="hover"
                      {...getOverrideProps(overrides, "text button44615438")}
                    ></Textbutton>
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
                      {...getOverrideProps(overrides, "Line 7944615439")}
                    ></Icon>
                    <Imagebutton
                      width="20px"
                      height="20px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      overflow="hidden"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      property1="Default"
                      {...getOverrideProps(overrides, "image button44615440")}
                    ></Imagebutton>
                  </Flex>
                </Flex>
              </Flex>
              <Icon
                width="unset"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 380, height: 1 }}
                paths={[
                  {
                    d: "M0 0L380 0L380 -1L0 -1L0 0Z",
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
                alignSelf="stretch"
                position="relative"
                {...getOverrideProps(overrides, "Line 7844615441")}
              ></Icon>
              <AddaExampleButton
                display="flex"
                gap="8px"
                direction="row"
                width="unset"
                height="40px"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(217,217,217,1)"
                boxShadow="0px 1px 2px rgba(0.7764706015586853, 0.8941176533699036, 0.9647058844566345, 0.05000000074505806)"
                borderRadius="999px"
                padding="9px 15px 9px 15px"
                backgroundColor="rgba(255,255,255,1)"
                property1="Default"
                {...getOverrideProps(overrides, "Add a Example Button")}
              ></AddaExampleButton>
            </Flex>
          </Flex>
          <Flex
            gap="30px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 199")}
          >
            <BackButton
              display="flex"
              gap="8px"
              direction="row"
              width="110px"
              height="40px"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              border="1px SOLID rgba(217,217,217,1)"
              borderRadius="6px"
              padding="9px 14px 9px 14px"
              backgroundColor="rgba(255,255,255,1)"
              property1="Default"
              {...getOverrideProps(overrides, "Back Button")}
            ></BackButton>
            <Icon
              width="15px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 1, height: 15 }}
              paths={[
                {
                  d: "M0 0L15 0L15 -1L0 -1L0 0Z",
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
              {...getOverrideProps(overrides, "Line 77")}
            ></Icon>
            <NextButton
              display="flex"
              gap="0"
              direction="row"
              width="110px"
              height="40px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="6px"
              padding="10px 20px 10px 20px"
              backgroundColor="rgba(255,215,0,1)"
              property1="Default"
              {...getOverrideProps(overrides, "Next Button")}
            ></NextButton>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
