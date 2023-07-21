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
import AcademicDropdown from "./AcademicDropdown";
import Tagsbutton from "./Tagsbutton";
import AddButton from "./AddButton";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
export default function SellStep2(props) {
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
      {...getOverrideProps(overrides, "SellStep2")}
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
              width="400px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 400, height: 1 }}
              paths={[
                {
                  d: "M0 -3C-1.65685 -3 -3 -1.65685 -3 0C-3 1.65685 -1.65685 3 0 3L0 -3ZM400 3C401.657 3 403 1.65685 403 0C403 -1.65685 401.657 -3 400 -3L400 3ZM0 3L400 3L400 -3L0 -3L0 3Z",
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
            children="Step 2/5"
            {...getOverrideProps(overrides, "Step 2/5")}
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
              children="Choose a Category"
              {...getOverrideProps(overrides, "Choose a Category")}
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
              children="Choose the most relevant category for your prompt. Add tags to help customers better understand your prompt."
              {...getOverrideProps(
                overrides,
                "Choose the most relevant category for your prompt. Add tags to help customers better understand your prompt."
              )}
            ></Text>
            <Flex
              padding="0px 0px 0px 0px"
              width="300px"
              height="248.24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Choose Illustration")}
            >
              <Icon
                width="234.49px"
                height="169.82px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 234.49365234375,
                  height: 169.818359375,
                }}
                paths={[
                  {
                    d: "M234.494 0L0 0L0 169.818L234.494 169.818L234.494 0Z",
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
                bottom="31.59%"
                left="21.84%"
                right="0%"
                {...getOverrideProps(overrides, "Vector44414440")}
              ></Icon>
              <Icon
                width="234.49px"
                height="13.99px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 234.49365234375,
                  height: 13.98828125,
                }}
                paths={[
                  {
                    d: "M234.494 0L0 0L0 13.9887L234.494 13.9887L234.494 0Z",
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
                bottom="94.36%"
                left="21.84%"
                right="0%"
                {...getOverrideProps(overrides, "Vector44414441")}
              ></Icon>
              <Icon
                width="7.02px"
                height="7.02px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 7.01953125,
                  height: 7.01953125,
                }}
                paths={[
                  {
                    d: "M3.50975 7.01948C5.44812 7.01948 7.01947 5.44811 7.01947 3.50974C7.01947 1.57136 5.44812 0 3.50975 0C1.57137 0 0 1.57136 0 3.50974C0 5.44811 1.57137 7.01948 3.50975 7.01948Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="1.4%"
                bottom="95.77%"
                left="96.21%"
                right="1.45%"
                {...getOverrideProps(overrides, "Vector44414442")}
              ></Icon>
              <Icon
                width="161.33px"
                height="27.38px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 161.330078125,
                  height: 27.384765625,
                }}
                paths={[
                  {
                    d: "M161.33 0L0 0L0 27.3847L161.33 27.3847L161.33 0Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="9.3%"
                bottom="79.67%"
                left="25.26%"
                right="20.96%"
                {...getOverrideProps(overrides, "Vector44414443")}
              ></Icon>
              <Icon
                width="161.33px"
                height="27.38px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 161.330078125,
                  height: 27.384765625,
                }}
                paths={[
                  {
                    d: "M161.33 0L0 0L0 27.3847L161.33 27.3847L161.33 0Z",
                    fill: "rgba(193,216,237,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="23.77%"
                bottom="65.2%"
                left="25.26%"
                right="20.96%"
                {...getOverrideProps(overrides, "Vector44414444")}
              ></Icon>
              <Icon
                width="161.33px"
                height="27.38px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 161.330078125,
                  height: 27.384765625,
                }}
                paths={[
                  {
                    d: "M161.33 0L0 0L0 27.3847L161.33 27.3847L161.33 0Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="38.23%"
                bottom="50.74%"
                left="25.26%"
                right="20.96%"
                {...getOverrideProps(overrides, "Vector44414445")}
              ></Icon>
              <Icon
                width="161.33px"
                height="27.38px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 161.330078125,
                  height: 27.384765625,
                }}
                paths={[
                  {
                    d: "M161.33 0L0 0L0 27.3847L161.33 27.3847L161.33 0Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="52.7%"
                bottom="36.27%"
                left="25.26%"
                right="20.96%"
                {...getOverrideProps(overrides, "Vector44414446")}
              ></Icon>
              <Icon
                width="43.73px"
                height="38.02px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 43.73046875,
                  height: 38.0234375,
                }}
                paths={[
                  {
                    d: "M43.7305 0L0 0L0 38.0238L43.7305 38.0238L43.7305 0Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="9.6%"
                bottom="75.08%"
                left="82.29%"
                right="3.13%"
                {...getOverrideProps(overrides, "Vector44414447")}
              ></Icon>
              <Icon
                width="43.73px"
                height="38.02px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 43.73046875,
                  height: 38.0234375,
                }}
                paths={[
                  {
                    d: "M43.7305 0L0 0L0 38.0238L43.7305 38.0238L43.7305 0Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="29.05%"
                bottom="55.64%"
                left="82.29%"
                right="3.13%"
                {...getOverrideProps(overrides, "Vector44414448")}
              ></Icon>
              <Icon
                width="43.73px"
                height="38.02px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 43.73046875,
                  height: 38.0234375,
                }}
                paths={[
                  {
                    d: "M43.7305 0L0 0L0 38.0238L43.7305 38.0238L43.7305 0Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="48.7%"
                bottom="35.98%"
                left="82.29%"
                right="3.13%"
                {...getOverrideProps(overrides, "Vector44414449")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="77.39px"
                height="183.29px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="26.16%"
                bottom="0%"
                left="29.5%"
                right="44.7%"
                {...getOverrideProps(overrides, "Group44414450")}
              >
                <Icon
                  width="8.71px"
                  height="8.08px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 8.7109375,
                    height: 8.0810546875,
                  }}
                  paths={[
                    {
                      d: "M7.87312 8.08152L0 7.14596C0.354523 4.1663 0.755104 0.586718 0.782288 0C0.782288 0.0377554 0.782288 0.0683353 0.782288 0.0924988L8.71091 0.0924988C8.70903 0.329225 8.70903 1.05223 7.87312 8.08152Z",
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
                  left="53.59%"
                  right="35.16%"
                  {...getOverrideProps(overrides, "Vector44414451")}
                ></Icon>
                <Icon
                  width="7.96px"
                  height="8.94px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 7.95556640625,
                    height: 8.9375,
                  }}
                  paths={[
                    {
                      d: "M7.92863 8.93782L0 8.91214C0 8.91214 0.0268002 0.724903 0.0268002 0L7.95543 0C7.95543 0.726791 7.92863 8.93782 7.92863 8.93782Z",
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
                  left="12.69%"
                  right="77.03%"
                  {...getOverrideProps(overrides, "Vector44414452")}
                ></Icon>
                <Icon
                  width="44.49px"
                  height="110.96px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 44.4892578125,
                    height: 110.962890625,
                  }}
                  paths={[
                    {
                      d: "M30.5195 110.241L44.489 110.003C43.8328 93.3784 43.7928 75.9404 43.5882 59.2759C40.8622 41.3142 39.4264 21.59 36.0616 3.75703L35.9608 3.78686L35.6656 1.77451L6.94245 0C6.94245 0 6.11183 14.0756 5.82489 18.7644C4.4253 41.5237 1.70616 83.684 0 109.787L13.9196 110.963C16.4277 85.3705 19.9314 48.0792 22.3187 21.1936C25.0601 34.283 27.3024 47.8368 29.6863 60.8141C30.1601 77.0621 30.563 94.0444 30.5195 110.241Z",
                      fill: "rgba(38,38,38,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="36.26%"
                  bottom="3.2%"
                  left="10.06%"
                  right="32.46%"
                  {...getOverrideProps(overrides, "Vector44414453")}
                ></Icon>
                <Icon
                  width="19.94px"
                  height="6.23px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 19.935546875,
                    height: 6.23046875,
                  }}
                  paths={[
                    {
                      d: "M18.3914 6.16099C18.8028 6.15909 19.1966 5.99388 19.4861 5.70167C19.7757 5.40947 19.9374 5.0142 19.9356 4.60282C19.9356 4.56506 19.9356 4.52731 19.9307 4.48956C19.9077 4.19488 19.801 3.91292 19.6232 3.67686C19.4453 3.4408 19.2037 3.26049 18.9268 3.15717L9.69821 0.0665293C9.51949 0.00716381 9.33004 -0.0128157 9.14286 0.00797436C8.95569 0.0287644 8.77523 0.0898199 8.61389 0.186957C7.34515 1.0671 5.82753 1.51705 4.2841 1.47065C3.08205 1.3851 1.92822 0.963575 0.954082 0.254154C0.868444 0.184041 0.764638 0.139704 0.654774 0.126306C0.54491 0.112907 0.433507 0.131001 0.333529 0.178477C0.233551 0.225954 0.149118 0.300859 0.0900687 0.394469C0.0310198 0.488079 -0.000213701 0.596545 1.10052e-06 0.707223L1.10052e-06 5.21975C1.10052e-06 5.48791 0.106524 5.74508 0.29614 5.93469C0.485756 6.12431 0.742924 6.23083 1.01108 6.23083L1.01486 6.23083L18.3914 6.16099Z",
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
                  left="11.63%"
                  right="62.61%"
                  {...getOverrideProps(overrides, "Vector44414454")}
                ></Icon>
                <Icon
                  width="19.94px"
                  height="6.23px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 19.935546875,
                    height: 6.232421875,
                  }}
                  paths={[
                    {
                      d: "M18.3918 6.16023C18.5954 6.15934 18.7969 6.11834 18.9847 6.03959C19.1724 5.96084 19.3429 5.84588 19.4862 5.70126C19.6296 5.55664 19.7431 5.38521 19.8202 5.19674C19.8973 5.00826 19.9365 4.80645 19.9356 4.60282C19.9356 4.56507 19.9356 4.52732 19.9307 4.48956C19.9077 4.19494 19.8011 3.91303 19.6233 3.67698C19.4455 3.44094 19.204 3.26059 18.9271 3.15718L9.6986 0.06651C9.51988 0.00714452 9.33042 -0.0128119 9.14324 0.00797812C8.95607 0.0287682 8.77561 0.0898236 8.61427 0.186961C7.34553 1.06711 5.82792 1.51703 4.28449 1.47063C3.08243 1.38514 1.92858 0.963633 0.954463 0.254158C0.868832 0.18393 0.765 0.139494 0.655075 0.126033C0.54515 0.112572 0.433657 0.130645 0.33361 0.178135C0.233564 0.225626 0.149091 0.300587 0.0900233 0.394265C0.0309559 0.487944 -0.000271916 0.596481 1.78383e-06 0.707226L1.78383e-06 5.21973C-0.000147357 5.35273 0.0259449 5.48446 0.0767845 5.60736C0.127624 5.73026 0.202216 5.84194 0.296279 5.93597C0.390342 6.02999 0.502037 6.10453 0.624956 6.15532C0.747875 6.20612 0.879603 6.23216 1.0126 6.23197L1.01676 6.23197L18.3918 6.16023Z",
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
                  left="52.48%"
                  right="21.76%"
                  {...getOverrideProps(overrides, "Vector44414455")}
                ></Icon>
                <Icon
                  width="10.74px"
                  height="9.9px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 10.73779296875,
                    height: 9.90234375,
                  }}
                  paths={[
                    {
                      d: "M0 9.90248C0 9.90248 3.03629 8.59841 3.03629 0.621832L9.13944 0C9.13944 0 7.88143 7.04855 10.738 9.55211L0 9.90248Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="9.31%"
                  bottom="85.28%"
                  left="30.73%"
                  right="55.4%"
                  {...getOverrideProps(overrides, "Vector44414456")}
                ></Icon>
                <Icon
                  width="16.26px"
                  height="20.04px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 16.25927734375,
                    height: 20.037109375,
                  }}
                  paths={[
                    {
                      d: "M0.125376 12.6778C0.344357 15.116 1.46946 17.4999 3.52638 18.4502C5.76245 19.5573 8.23552 20.1003 10.7297 20.0317C17.355 20.0317 17.2803 4.96057 14.3943 1.79591C11.5082 -1.36874 2.18681 -0.277987 0.672822 4.49202C-0.109847 6.96122 -0.0834114 10.3573 0.125376 12.6778Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0.91%"
                  bottom="88.16%"
                  left="30.41%"
                  right="48.58%"
                  {...getOverrideProps(overrides, "Vector44414457")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="5.96px"
                  height="13.69px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="42.56%"
                  bottom="49.97%"
                  left="0.64%"
                  right="91.66%"
                  {...getOverrideProps(overrides, "Group44414458")}
                >
                  <Icon
                    width="1.79px"
                    height="5.16px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.79345703125,
                      height: 5.162109375,
                    }}
                    paths={[
                      {
                        d: "M1.61102 0C1.61102 1.12549 2.20529 4.88667 1.2497 5.15549C0.676575 5.31671 0 2.51262 0 2.51262",
                        fill: "rgba(233,136,98,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="15.08%"
                    bottom="47.22%"
                    left="69.9%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector44414459")}
                  ></Icon>
                  <Icon
                    width="5.67px"
                    height="13.69px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 5.6728515625,
                      height: 13.69140625,
                    }}
                    paths={[
                      {
                        d: "M1.26532 1.47284C1.26532 1.47284 -1.85478 9.06695 1.70404 13.4296C1.7948 13.5406 1.91693 13.6216 2.05446 13.6621C2.19199 13.7026 2.33853 13.7007 2.47495 13.6566C2.61138 13.6125 2.73135 13.5283 2.81918 13.415C2.90702 13.3017 2.95866 13.1646 2.96733 13.0215C3.14025 10.0799 3.73338 4.03757 5.67288 4.74359L5.67288 0",
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
                    right="4.8%"
                    {...getOverrideProps(overrides, "Vector44414460")}
                  ></Icon>
                </View>
                <Icon
                  width="8.95px"
                  height="13.16px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 8.94921875,
                    height: 13.16015625,
                  }}
                  paths={[
                    {
                      d: "M3.66982 13.1606C3.66982 13.1606 8.02754 9.69919 8.33563 8.45591C8.64371 7.21262 5.57496 4.76721 5.57496 4.76721C5.57496 4.76721 9.65556 0.651879 8.84193 0.05761C7.88181 -0.646527 3.14654 5.33656 3.14654 5.33656C3.14654 5.33656 3.81594 3.18451 2.98192 3.04293C2.63948 2.98478 2.36802 3.32118 1.8319 4.84461C1.22102 6.58136 0 9.19214 0 9.19214L3.66982 13.1606Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="14.11%"
                  bottom="78.71%"
                  left="88.44%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector44414461")}
                ></Icon>
                <Icon
                  width="73.89px"
                  height="55.05px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 73.8916015625,
                    height: 55.0458984375,
                  }}
                  paths={[
                    {
                      d: "M67.5277 8.57046L54.6388 23.0712L44.5581 5.02637C43.6036 2.17546 41.4308 0.265797 36.9984 0.0755096C35.4825 0.0105703 28.0858 0 22.6706 0C19.0321 0 16.0453 1.11643 14.3206 2.84147C13.4518 3.69778 12.8017 4.75041 12.4249 5.91061L12.3728 5.89135L3.70606 29.4567C3.609 29.721 3.53916 29.9945 3.49765 30.273L0 53.8376L8.14307 55.0458L11.5788 31.9018L15.0787 22.3848C15.4435 23.8475 15.6427 25.3466 15.6726 26.8539C15.6726 34.7825 12.0859 38.3383 12.3502 42.4072C12.7655 48.8048 43.8487 47.2935 45.4325 43.6595C47.0632 39.9116 43.7535 37.6028 43.8985 25.3444C43.914 24.0105 44.0175 22.6147 44.159 21.194L50.2754 32.143C50.5955 32.7165 51.0483 33.2051 51.5959 33.5679C52.1434 33.9307 52.7699 34.1571 53.4228 34.2283C54.0758 34.2995 54.7363 34.2133 55.3492 33.9771C55.962 33.7408 56.5094 33.3613 56.9456 32.8702L73.8918 13.0486L67.5277 8.57046Z",
                      fill: "rgba(0,163,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="14.1%"
                  bottom="55.87%"
                  left="0%"
                  right="4.52%"
                  {...getOverrideProps(overrides, "Vector44414462")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="1.96px"
                  height="2.37px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="5.94%"
                  bottom="92.76%"
                  left="41.27%"
                  right="56.2%"
                  {...getOverrideProps(overrides, "Group44414463")}
                >
                  <Icon
                    width="1.09px"
                    height="1.09px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.09423828125,
                      height: 1.09375,
                    }}
                    paths={[
                      {
                        d: "M0.547077 1.09415C0.849218 1.09415 1.09415 0.849218 1.09415 0.547077C1.09415 0.244936 0.849218 0 0.547077 0C0.244936 0 0 0.244936 0 0.547077C0 0.849218 0.244936 1.09415 0.547077 1.09415Z",
                        fill: "rgba(54,124,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="53.86%"
                    bottom="-0.01%"
                    left="40.05%"
                    right="4.05%"
                    {...getOverrideProps(overrides, "Vector44414464")}
                  ></Icon>
                  <Icon
                    width="1.96px"
                    height="0.74px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.95751953125,
                      height: 0.7392578125,
                    }}
                    paths={[
                      {
                        d: "M0.255612 0.739552C0.190961 0.739172 0.128823 0.714449 0.0815832 0.67031C0.0343432 0.626171 0.00546056 0.565857 0.000698643 0.50138C-0.00406327 0.436904 0.0156461 0.372997 0.0558891 0.322397C0.0961322 0.271797 0.153961 0.238216 0.217854 0.228343L1.66993 0.00180843C1.73607 -0.00607627 1.80269 0.0120165 1.85576 0.0522749C1.90882 0.0925333 1.9442 0.151818 1.95443 0.217639C1.96466 0.283459 1.94894 0.350679 1.91059 0.405143C1.87224 0.459606 1.81425 0.49706 1.74883 0.509618L0.296768 0.736153C0.283175 0.738474 0.269402 0.739612 0.255612 0.739552Z",
                        fill: "rgba(54,124,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="68.81%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector44414465")}
                  ></Icon>
                </View>
                <Icon
                  width="20.15px"
                  height="21.6px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 20.1455078125,
                    height: 21.59765625,
                  }}
                  paths={[
                    {
                      d: "M16.007 8.47751C13.4162 20.0986 11.0305 23.2051 5.02359 20.8783C3.64627 20.3448 0.346452 17.0729 0.016093 10.1104C-0.119096 7.78549 0.601057 5.49142 2.04074 3.66087C3.48043 1.83031 5.54014 0.589779 7.83146 0.173217C19.7278 -1.48122 20.1454 9.26055 20.1454 9.26055C14.1751 10.2841 6.04411 8.59304 6.04411 8.59304",
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
                  bottom="88.22%"
                  left="27.49%"
                  right="46.48%"
                  {...getOverrideProps(overrides, "Vector44414466")}
                ></Icon>
                <Icon
                  width="4.64px"
                  height="4.67px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 4.638671875,
                    height: 4.6708984375,
                  }}
                  paths={[
                    {
                      d: "M4.63857 2.31931C4.64282 2.6241 4.58695 2.92674 4.47415 3.20992C4.36135 3.4931 4.19384 3.75127 3.98119 3.96966C3.76854 4.18806 3.51493 4.36238 3.23485 4.48269C2.95478 4.60299 2.65373 4.66691 2.34894 4.67078C2.04414 4.67465 1.74157 4.6184 1.45853 4.50525C1.17549 4.3921 0.917538 4.22426 0.699412 4.01133C0.481285 3.79841 0.307269 3.54458 0.187316 3.26436C0.0673619 2.98413 0.00381485 2.68301 0.000324739 2.37821L0.000324739 2.31931C-0.0098755 1.71447 0.22058 1.13035 0.641007 0.695406C1.06143 0.260464 1.63741 0.0103265 2.24224 0C2.26792 -1.07307e-14 2.29396 0 2.31775 0C3.97143 0.0815516 4.63857 1.03827 4.63857 2.31931Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="6.94%"
                  bottom="90.51%"
                  left="42.54%"
                  right="51.47%"
                  {...getOverrideProps(overrides, "Vector44414467")}
                ></Icon>
                <Icon
                  width="20.71px"
                  height="44.64px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 20.71240234375,
                    height: 44.6376953125,
                  }}
                  paths={[
                    {
                      d: "M3.37451 12.2136C3.14797 6.61525 4.42449 3.22255 6.25109 1.42011C8.05315 -0.358165 13.849 -1.67809 16.2993 5.2621C17.8982 9.79274 17.3806 11.3509 18.033 18.5014C18.6854 25.6519 20.3701 25.6421 20.6861 32.2221C21.0225 39.2181 18.1738 44.684 10.6734 44.6375C4.54983 44.5998 0.657637 41.6571 0.0962147 35.5064C-0.709107 26.6796 3.81851 23.1849 3.37451 12.2136Z",
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
                  bottom="75.65%"
                  left="14.18%"
                  right="59.05%"
                  {...getOverrideProps(overrides, "Vector44414468")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="62.16px"
                height="96.05px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="61.31%"
                bottom="0%"
                left="0%"
                right="79.28%"
                {...getOverrideProps(overrides, "Group44414469")}
              >
                <View
                  padding="0px 0px 0px 0px"
                  width="62.16px"
                  height="81.73px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="14.91%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group44414470")}
                >
                  <Icon
                    width="21px"
                    height="74.77px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 21,
                      height: 74.7744140625,
                    }}
                    paths={[
                      {
                        d: "M8.48065 74.7749C5.40547 73.8922 3.09069 71.1406 2.17097 68.0763C1.25125 65.0121 1.57519 61.687 2.47301 58.616C3.20584 56.1102 4.31698 53.6878 4.59071 51.0913C5.5025 42.4454 -2.88485 33.6106 1.06285 25.8651C2.33898 23.36 4.80856 21.4024 5.24916 18.6255C5.6135 16.3296 4.48235 14.0979 3.9198 11.842C3.14619 8.73699 3.53847 5.21404 5.55272 2.72785C7.56696 0.241658 11.3735 -0.844563 14.1489 0.747581C17.779 2.83017 18.0939 7.97093 17.161 12.0508C16.228 16.1306 14.4988 20.3279 15.6387 24.3545C16.7253 28.1927 20.2611 31.0829 20.895 35.0211C21.4236 38.2949 19.8239 41.4871 19.1205 44.728C18.0165 49.8216 19.1401 55.1017 19.1881 60.3131C19.236 65.5245 17.7677 71.3694 8.48065 74.7749Z",
                        fill: "rgba(141,219,224,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="8.5%"
                    left="33.19%"
                    right="33.02%"
                    {...getOverrideProps(overrides, "Vector44414471")}
                  ></Icon>
                  <Icon
                    width="36.12px"
                    height="59.93px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 36.12060546875,
                      height: 59.93359375,
                    }}
                    paths={[
                      {
                        d: "M24.3681 55.1035C22.5381 54.5219 20.8958 53.4638 19.6099 52.0377C18.3241 50.6116 17.4409 48.869 17.0511 46.9888C16.4493 43.8875 17.1885 40.4042 15.491 37.7387C13.191 34.1285 10.8328 33.7204 7.96942 30.5384C3.56714 25.6457 3.41234 23.4781 3.70306 14.4168C3.82577 10.5847 -1.46527 6.26169 0.397956 2.57828C2.03994 -0.665661 7.03044 -0.682272 9.86058 1.60042C12.6907 3.88311 13.934 7.54197 15.1671 10.9637C16.4002 14.3855 17.955 18.0029 21.0811 19.8593C22.9557 20.9727 25.4101 21.4873 26.4458 23.4064C27.2764 24.9479 26.8584 26.83 26.5239 28.5498C25.6835 32.8728 25.8942 38.1461 29.5221 40.6429C31.1588 41.7695 33.3021 42.1572 34.6477 43.6195C35.9782 45.0648 36.1927 47.2062 36.1028 49.1695C35.9258 52.9425 34.8862 56.6247 33.0639 59.9332",
                        fill: "rgba(222,232,245,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="24.68%"
                    bottom="1.99%"
                    left="0%"
                    right="41.89%"
                    {...getOverrideProps(overrides, "Vector44414472")}
                  ></Icon>
                  <Icon
                    width="36.21px"
                    height="68.09px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 36.20849609375,
                      height: 68.09375,
                    }}
                    paths={[
                      {
                        d: "M2.79558 64.6477C-0.470635 60.9155 -0.932382 55.0034 1.71465 50.8096C3.93579 47.2904 8.07491 44.8669 8.94404 40.7976C9.71803 37.1731 7.57126 33.4277 8.21385 29.7776C8.9127 25.8083 12.5795 23.2036 15.4923 20.4184C16.2502 19.741 16.9021 18.9537 17.4262 18.0828C18.7072 15.7771 18.35 12.9481 18.7854 10.3475C19.6182 5.36382 23.723 0.946446 28.7067 0.122624C33.0776 -0.599636 36.2087 1.91109 36.2087 6.53537C36.2087 12.0137 32.1047 14.3609 30.0112 16.8426C27.0042 20.4336 25.4083 24.997 25.522 29.6794C25.6697 34.9089 27.8965 40.4774 25.5175 45.1364C23.7717 48.5559 20.043 50.3791 17.1128 52.8604C14.8987 54.7574 13.0964 57.0876 11.8167 59.7073C10.537 62.3271 9.80715 65.1811 9.67196 68.0936",
                        fill: "rgba(243,245,253,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="16.68%"
                    bottom="0%"
                    left="41.75%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector44414473")}
                  ></Icon>
                </View>
                <Icon
                  width="26.36px"
                  height="26.36px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 26.357421875,
                    height: 26.357421875,
                  }}
                  paths={[
                    {
                      d: "M26.3574 0L0 0L0 26.3574L26.3574 26.3574L26.3574 0Z",
                      fill: "rgba(12,188,139,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="72.56%"
                  bottom="0%"
                  left="26.52%"
                  right="31.08%"
                  {...getOverrideProps(overrides, "Vector44414474")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="26.36px"
                  height="5.14px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="77.91%"
                  bottom="16.73%"
                  left="26.52%"
                  right="31.08%"
                  {...getOverrideProps(overrides, "Group44414475")}
                >
                  <Icon
                    width="26.36px"
                    height="5.14px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 26.357421875,
                      height: 5.14453125,
                    }}
                    paths={[
                      {
                        d: "M26.3574 0L0 0L0 5.14454L26.3574 5.14454L26.3574 0Z",
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
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector44414476")}
                  ></Icon>
                </View>
              </View>
            </Flex>
          </Flex>
          <Flex
            gap="184px"
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
            {...getOverrideProps(overrides, "Frame 214")}
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
              {...getOverrideProps(overrides, "Frame 197")}
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
                  children="Category"
                  {...getOverrideProps(overrides, "Category")}
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
                  children="Choose the most relevant category"
                  {...getOverrideProps(
                    overrides,
                    "Choose the most relevant category"
                  )}
                ></Text>
                <AcademicDropdown
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
                  {...getOverrideProps(overrides, "Academic Dropdown")}
                ></AcademicDropdown>
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
                  children="Tags"
                  {...getOverrideProps(overrides, "Tags")}
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
                  children="Add at most 3 tags for your prompt"
                  {...getOverrideProps(
                    overrides,
                    "Add at most 3 tags for your prompt"
                  )}
                ></Text>
                <Flex
                  gap="15px"
                  direction="row"
                  width="380px"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 21")}
                >
                  <Tagsbutton
                    display="flex"
                    gap="10px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    borderRadius="6px"
                    padding="6px 15px 6px 15px"
                    backgroundColor="rgba(255,241,167,1)"
                    tag="Default"
                    {...getOverrideProps(overrides, "tags button44414487")}
                  ></Tagsbutton>
                  <Tagsbutton
                    display="flex"
                    gap="10px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    borderRadius="6px"
                    padding="6px 15px 6px 15px"
                    backgroundColor="rgba(255,241,167,1)"
                    tag="Default"
                    {...getOverrideProps(overrides, "tags button44414488")}
                  ></Tagsbutton>
                  <Tagsbutton
                    display="flex"
                    gap="10px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    borderRadius="6px"
                    padding="6px 15px 6px 15px"
                    backgroundColor="rgba(255,241,167,1)"
                    tag="Default"
                    {...getOverrideProps(overrides, "tags button44414489")}
                  ></Tagsbutton>
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
                    {...getOverrideProps(overrides, "Frame 199")}
                  >
                    <AddButton
                      width="30px"
                      height="30px"
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      property1="Default"
                      {...getOverrideProps(overrides, "Add Button")}
                    ></AddButton>
                    <Text
                      fontFamily="Roboto"
                      fontSize="14px"
                      fontWeight="400"
                      color="rgba(141,143,155,1)"
                      lineHeight="16.40625px"
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
                      children="3/3"
                      {...getOverrideProps(overrides, "3/3")}
                    ></Text>
                  </Flex>
                </Flex>
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
              {...getOverrideProps(overrides, "Frame 198")}
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
    </View>
  );
}
