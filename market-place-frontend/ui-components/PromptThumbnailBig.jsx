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
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import AcademicBig from "./AcademicBig";
import AIModelsBig from "./AIModelsBig";
import PrimaryActionButton from "./PrimaryActionButton";
import SecondaryActionButton from "./SecondaryActionButton";
export default function PromptThumbnailBig(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        "16": {},
        "350": {},
        "Rectangle 3": {},
        "Academic Big": {},
        "High Quality Article Generation": {},
        "AI Models Big": {},
        "Frame 35": {},
        "Simply specify the topic and target readers to generate articles of surprisingly high quality. The output is written in markdown format, so it can be easily copied and pasted into blogs and other applications.":
          {},
        Vector189218: {},
        Vector189219: {},
        Group: {},
        "tabler:star-filled": {},
        "4.5": {},
        "Frame 32": {},
        Vector189223: {},
        Vector189224: {},
        "carbon:view-filled": {},
        "Frame 30": {},
        Vector189228: {},
        "bxs:purchase-tag": {},
        "Frame 31": {},
        "Frame 33": {},
        "$ 3.99": {},
        "Frame 27": {},
        "Primary Action Button": {},
        "Secondary Action Button": {},
        "Frame 26": {},
        "Prompt Intro": {},
        "Frame 34": {},
        PromptThumbnailBig: {},
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        "16": {},
        "350": {},
        "Rectangle 3": {},
        "Academic Big": {},
        "High Quality Article Generation": {},
        "AI Models Big": {},
        "Frame 35": {},
        "Simply specify the topic and target readers to generate articles of surprisingly high quality. The output is written in markdown format, so it can be easily copied and pasted into blogs and other applications.":
          {},
        Vector189218: {},
        Vector189219: {},
        Group: {},
        "tabler:star-filled": {},
        "4.5": {},
        "Frame 32": {},
        Vector189223: {},
        Vector189224: {},
        "carbon:view-filled": {},
        "Frame 30": {},
        Vector189228: {},
        "bxs:purchase-tag": {},
        "Frame 31": {},
        "Frame 33": {},
        "$ 3.99": {},
        "Frame 27": {},
        "Primary Action Button": {},
        "Secondary Action Button": {},
        "Frame 26": {},
        "Prompt Intro": {},
        "Frame 34": {},
        PromptThumbnailBig: {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.20000000298023224)",
        },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="600px"
      height="350px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PromptThumbnailBig")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></Image>
      <Flex
        gap="50px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="5.14%"
        bottom="8.86%"
        left="3%"
        right="40.17%"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 34")}
      >
        <AcademicBig
          display="flex"
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.20000000298023224)"
          borderRadius="6px"
          padding="3px 6px 3px 6px"
          backgroundColor="rgba(207,21,21,1)"
          property1="default"
          {...getOverrideProps(overrides, "Academic Big")}
        ></AcademicBig>
        <Flex
          gap="10px"
          direction="column"
          width="341px"
          height="225px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Prompt Intro")}
        >
          <Flex
            gap="15px"
            direction="column"
            width="341px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 27")}
          >
            <Flex
              gap="15px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 35")}
            >
              <Text
                fontFamily="Roboto"
                fontSize="20px"
                fontWeight="600"
                color="rgba(255,255,255,1)"
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
                children="High Quality Article Generation"
                {...getOverrideProps(
                  overrides,
                  "High Quality Article Generation"
                )}
              ></Text>
              <AIModelsBig
                display="flex"
                gap="6px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                borderRadius="6px"
                padding="3px 6px 3px 6px"
                backgroundColor="rgba(116,170,156,1)"
                aIModelsTag="ChatGPT (Big)"
                {...getOverrideProps(overrides, "AI Models Big")}
              ></AIModelsBig>
            </Flex>
            <Text
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="16.40625px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="341px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Simply specify the topic and target readers to generate articles of surprisingly high quality. The output is written in markdown format, so it can be easily copied and pasted into blogs and other applications."
              {...getOverrideProps(
                overrides,
                "Simply specify the topic and target readers to generate articles of surprisingly high quality. The output is written in markdown format, so it can be easily copied and pasted into blogs and other applications."
              )}
            ></Text>
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
              {...getOverrideProps(overrides, "Frame 33")}
            >
              <Flex
                gap="6px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 32")}
              >
                <View
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
                  {...getOverrideProps(overrides, "tabler:star-filled")}
                >
                  <View
                    padding="0px 0px 0px 0px"
                    width="20px"
                    height="20px"
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
                      width="20px"
                      height="20px"
                      viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
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
                      {...getOverrideProps(overrides, "Vector189218")}
                    ></Icon>
                    <Icon
                      width="18.31px"
                      height="17.49px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 18.310073852539062,
                        height: 17.49462890625,
                      }}
                      paths={[
                        {
                          d: "M6.03035 5.28164L0.713682 6.05247L0.619515 6.07164C0.476965 6.10948 0.347011 6.18448 0.242925 6.28898C0.13884 6.39347 0.0643514 6.52372 0.027067 6.66641C-0.0102174 6.80911 -0.00896206 6.95915 0.0307049 7.1012C0.0703718 7.24326 0.147029 7.37224 0.252849 7.47497L4.10452 11.2241L3.19618 16.52L3.18535 16.6116C3.17662 16.7591 3.20724 16.9062 3.27406 17.0379C3.34088 17.1696 3.4415 17.2812 3.56563 17.3612C3.68975 17.4413 3.83292 17.4869 3.98047 17.4934C4.12802 17.4999 4.27465 17.4671 4.40535 17.3983L9.16035 14.8983L13.9045 17.3983L13.9878 17.4366C14.1254 17.4908 14.2749 17.5074 14.421 17.4848C14.5671 17.4621 14.7045 17.401 14.8192 17.3077C14.9339 17.2144 15.0216 17.0923 15.0735 16.9538C15.1254 16.8154 15.1396 16.6657 15.1145 16.52L14.2053 11.2241L18.0587 7.47414L18.1237 7.40331C18.2165 7.28895 18.2774 7.15202 18.3001 7.00647C18.3228 6.86092 18.3065 6.71196 18.2529 6.57475C18.1993 6.43754 18.1103 6.317 17.9949 6.2254C17.8796 6.1338 17.742 6.07442 17.5962 6.05331L12.2795 5.28164L9.90285 0.464975C9.83408 0.32542 9.72761 0.207904 9.59551 0.125728C9.4634 0.0435528 9.31093 1.85037e-16 9.15535 0C8.99977 1.85037e-16 8.8473 0.0435528 8.71519 0.125728C8.58309 0.207904 8.47662 0.32542 8.40785 0.464975L6.03035 5.28164Z",
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
                      {...getOverrideProps(overrides, "Vector189219")}
                    ></Icon>
                  </View>
                </View>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(255,255,255,1)"
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
                  children="4.5"
                  {...getOverrideProps(overrides, "4.5")}
                ></Text>
              </Flex>
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
                {...getOverrideProps(overrides, "Frame 30")}
              >
                <View
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
                  {...getOverrideProps(overrides, "carbon:view-filled")}
                >
                  <Icon
                    width="5px"
                    height="5px"
                    viewBox={{ minX: 0, minY: 0, width: 5, height: 5 }}
                    paths={[
                      {
                        d: "M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="37.5%"
                    bottom="37.5%"
                    left="37.5%"
                    right="37.5%"
                    {...getOverrideProps(overrides, "Vector189223")}
                  ></Icon>
                  <Icon
                    width="18.75px"
                    height="13.75px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 18.749467849731445,
                      height: 13.75,
                    }}
                    paths={[
                      {
                        d: "M18.7122 6.6625C17.9771 4.76103 16.701 3.11664 15.0415 1.93255C13.382 0.748472 11.4119 0.0766081 9.37473 0C7.33756 0.0766081 5.36748 0.748472 3.70799 1.93255C2.04849 3.11664 0.772335 4.76103 0.0372341 6.6625C-0.0124114 6.79982 -0.0124114 6.95018 0.0372341 7.0875C0.772335 8.98897 2.04849 10.6334 3.70799 11.8174C5.36748 13.0015 7.33756 13.6734 9.37473 13.75C11.4119 13.6734 13.382 13.0015 15.0415 11.8174C16.701 10.6334 17.9771 8.98897 18.7122 7.0875C18.7619 6.95018 18.7619 6.79982 18.7122 6.6625ZM9.37473 10.9375C8.57125 10.9375 7.78581 10.6992 7.11773 10.2528C6.44966 9.80645 5.92895 9.17198 5.62147 8.42965C5.31399 7.68733 5.23354 6.87049 5.39029 6.08245C5.54705 5.2944 5.93396 4.57053 6.50211 4.00238C7.07026 3.43423 7.79413 3.04731 8.58218 2.89056C9.37023 2.73381 10.1871 2.81426 10.9294 3.12174C11.6717 3.42922 12.3062 3.94992 12.7526 4.618C13.199 5.28607 13.4372 6.07151 13.4372 6.875C13.4356 7.95193 13.007 8.98429 12.2455 9.7458C11.484 10.5073 10.4517 10.9358 9.37473 10.9375Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="15.63%"
                    bottom="15.63%"
                    left="3.13%"
                    right="3.13%"
                    {...getOverrideProps(overrides, "Vector189224")}
                  ></Icon>
                </View>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(255,255,255,1)"
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
                  children="350"
                  {...getOverrideProps(overrides, "350")}
                ></Text>
              </Flex>
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
                {...getOverrideProps(overrides, "Frame 31")}
              >
                <View
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
                  {...getOverrideProps(overrides, "bxs:purchase-tag")}
                >
                  <Icon
                    width="15.98px"
                    height="15.98px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 15.976310729980469,
                      height: 15.976318359375,
                    }}
                    paths={[
                      {
                        d: "M8.82167 0.488333C8.50918 0.175751 8.08533 9.43957e-05 7.64333 0L1.66667 0C1.22464 3.70074e-16 0.800716 0.175595 0.488155 0.488155C0.175595 0.800716 3.70074e-16 1.22464 0 1.66667L0 7.64333C9.43957e-05 8.08533 0.175751 8.50918 0.488333 8.82167L7.155 15.4883C7.46755 15.8008 7.89139 15.9763 8.33333 15.9763C8.77527 15.9763 9.19912 15.8008 9.51167 15.4883L15.4883 9.51167C15.8008 9.19912 15.9763 8.77527 15.9763 8.33333C15.9763 7.89139 15.8008 7.46755 15.4883 7.155L8.82167 0.488333ZM4.16667 5.83333C3.72453 5.83322 3.30054 5.65748 2.98798 5.34476C2.67542 5.03204 2.49989 4.60797 2.5 4.16583C2.50011 3.7237 2.67586 3.29971 2.98857 2.98715C3.30129 2.67459 3.72536 2.49906 4.1675 2.49917C4.60964 2.49928 5.03362 2.67502 5.34618 2.98774C5.65874 3.30046 5.83428 3.72453 5.83417 4.16667C5.83406 4.6088 5.65831 5.03279 5.3456 5.34535C5.03288 5.65791 4.6088 5.83344 4.16667 5.83333Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="8.33%"
                    bottom="11.79%"
                    left="8.33%"
                    right="11.79%"
                    {...getOverrideProps(overrides, "Vector189228")}
                  ></Icon>
                </View>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(255,255,255,1)"
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
                  children="16"
                  {...getOverrideProps(overrides, "16")}
                ></Text>
              </Flex>
            </Flex>
            <Text
              fontFamily="Roboto"
              fontSize="20px"
              fontWeight="500"
              color="rgba(255,255,255,1)"
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
              children="$ 3.99"
              {...getOverrideProps(overrides, "$ 3.99")}
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
            {...getOverrideProps(overrides, "Frame 26")}
          >
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
              borderRadius="6px"
              padding="6px 15px 6px 15px"
              backgroundColor="rgba(255,215,0,1)"
              primaryActionButton="Default"
              {...getOverrideProps(overrides, "Primary Action Button")}
            ></PrimaryActionButton>
            <SecondaryActionButton
              display="flex"
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              borderRadius="10px"
              padding="6px 15px 6px 15px"
              secondaryActionButton="Default"
              {...getOverrideProps(overrides, "Secondary Action Button")}
            ></SecondaryActionButton>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
