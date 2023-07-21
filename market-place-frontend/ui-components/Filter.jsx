/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import Tagsbutton from "./Tagsbutton";
import AcademicFilter from "./AcademicFilter";
import Ratingfilter4stars from "./Ratingfilter4stars";
import Ratingfilter3stars from "./Ratingfilter3stars";
import Ratingfilter2stars from "./Ratingfilter2stars";
import Ratingfilter1stars from "./Ratingfilter1stars";
import PrimaryActionButton from "./PrimaryActionButton";
export default function Filter(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="15px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.20000000298023224)"
      borderRadius="20px"
      padding="20px 20px 20px 20px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Filter")}
      {...rest}
    >
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
        {...getOverrideProps(overrides, "Frame 72")}
      >
        <Icon
          width="20px"
          height="22.31px"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 22.3076171875 }}
          paths={[
            {
              d: "M12.4997 11.1523L12.4997 20.9168C12.5496 21.2886 12.4247 21.6851 12.1372 21.9453C12.0216 22.0602 11.8842 22.1513 11.733 22.2135C11.5818 22.2757 11.4198 22.3077 11.2561 22.3077C11.0924 22.3077 10.9303 22.2757 10.7791 22.2135C10.6279 22.1513 10.4906 22.0602 10.3749 21.9453L7.8628 19.4546C7.72648 19.3225 7.62284 19.1609 7.55996 18.9825C7.49708 18.8041 7.47668 18.6137 7.50035 18.4261L7.50035 11.1523L7.46285 11.1523L0.263848 2.00742C0.0608864 1.74909 -0.030694 1.42162 0.00911818 1.09656C0.0489303 0.771496 0.216898 0.475271 0.476319 0.272613C0.713786 0.0991319 0.976249 0 1.25121 0L18.7488 0C19.0238 0 19.2862 0.0991319 19.5237 0.272613C19.7831 0.475271 19.9511 0.771496 19.9909 1.09656C20.0307 1.42162 19.9391 1.74909 19.7362 2.00742L12.5371 11.1523L12.4997 11.1523Z",
              fill: "rgba(141,143,155,1)",
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
          fontSize="24px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="28.125px"
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
          children="Filter"
          {...getOverrideProps(overrides, "Filter2431463")}
        ></Text>
      </Flex>
      <Flex
        gap="25px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 71")}
      >
        <Flex
          gap="20px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 60")}
        >
          <View
            width="300px"
            height="84px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 54")}
          >
            <Flex
              gap="20px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 53")}
            ></Flex>
            <Flex
              gap="15px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 61")}
            >
              <Text
                fontFamily="Roboto"
                fontSize="20px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="23.4375px"
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
                children="AI Model"
                {...getOverrideProps(overrides, "AI Model")}
              ></Text>
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
                {...getOverrideProps(overrides, "tags button")}
              ></Tagsbutton>
              <Icon
                width="300px"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 300, height: 1 }}
                paths={[
                  {
                    d: "M0 0L300 0L300 -1L0 -1L0 0Z",
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
                {...getOverrideProps(overrides, "Line 32431494")}
              ></Icon>
            </Flex>
          </View>
          <Flex
            gap="15px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 59")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="20px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="23.4375px"
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
              children="Price"
              {...getOverrideProps(overrides, "Price")}
            ></Text>
            <View
              width="275px"
              height="54px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 58")}
            >
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                position="absolute"
                top="0px"
                left="6.5px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 56")}
              >
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(0,0,0,1)"
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
                  children="min"
                  {...getOverrideProps(overrides, "min")}
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
                  {...getOverrideProps(overrides, "Frame 552441460")}
                >
                  <Text
                    fontFamily="Roboto"
                    fontSize="16px"
                    fontWeight="400"
                    color="rgba(0,0,0,1)"
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
                    children="$"
                    {...getOverrideProps(overrides, "$2441457")}
                  ></Text>
                  <Flex
                    gap="10px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    border="1px SOLID rgba(141,143,155,1)"
                    borderRadius="3px"
                    padding="2px 5px 2px 5px"
                    {...getOverrideProps(overrides, "price box2441459")}
                  >
                    <Text
                      fontFamily="Roboto"
                      fontSize="16px"
                      fontWeight="400"
                      color="rgba(141,143,155,1)"
                      lineHeight="18.75px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="60px"
                      height="19px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="1"
                      {...getOverrideProps(overrides, "1")}
                    ></Text>
                  </Flex>
                </Flex>
              </Flex>
              <Icon
                width="20px"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 20, height: 1 }}
                paths={[
                  {
                    d: "M0 -1.5C-0.828427 -1.5 -1.5 -0.828427 -1.5 0C-1.5 0.828427 -0.828427 1.5 0 1.5L0 -1.5ZM20 1.5C20.8284 1.5 21.5 0.828427 21.5 0C21.5 -0.828427 20.8284 -1.5 20 -1.5L20 1.5ZM0 1.5L20 1.5L20 -1.5L0 -1.5L0 1.5Z",
                    stroke: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                    strokeWidth: 3,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="42px"
                left="128px"
                {...getOverrideProps(overrides, "Line 42441468")}
              ></Icon>
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                position="absolute"
                top="0px"
                left="177.5px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 57")}
              >
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(0,0,0,1)"
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
                  children="max"
                  {...getOverrideProps(overrides, "max")}
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
                  {...getOverrideProps(overrides, "Frame 552441464")}
                >
                  <Text
                    fontFamily="Roboto"
                    fontSize="16px"
                    fontWeight="400"
                    color="rgba(0,0,0,1)"
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
                    children="$"
                    {...getOverrideProps(overrides, "$2441465")}
                  ></Text>
                  <Flex
                    gap="10px"
                    direction="row"
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    position="relative"
                    border="1px SOLID rgba(141,143,155,1)"
                    borderRadius="3px"
                    padding="2px 5px 2px 5px"
                    {...getOverrideProps(overrides, "price box2441466")}
                  >
                    <Text
                      fontFamily="Roboto"
                      fontSize="16px"
                      fontWeight="400"
                      color="rgba(141,143,155,1)"
                      lineHeight="18.75px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="60px"
                      height="19px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="10"
                      {...getOverrideProps(overrides, "10")}
                    ></Text>
                  </Flex>
                </Flex>
              </Flex>
            </View>
            <Icon
              width="300px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 300, height: 1 }}
              paths={[
                {
                  d: "M0 0L300 0L300 -1L0 -1L0 0Z",
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
              {...getOverrideProps(overrides, "Line 32441474")}
            ></Icon>
          </Flex>
          <Flex
            gap="15px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 66")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="20px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="23.4375px"
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
              children="Category"
              {...getOverrideProps(overrides, "Category")}
            ></Text>
            <Flex
              gap="20px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 642441495")}
            >
              <Flex
                gap="20px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 62")}
              >
                <AcademicFilter
                  display="flex"
                  gap="6px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  border="1px SOLID rgba(207,21,21,1)"
                  borderRadius="7px"
                  padding="3px 6px 3px 6px"
                  property1="Academic default"
                  {...getOverrideProps(overrides, "Academic Filter")}
                ></AcademicFilter>
                <Flex
                  width="unset"
                  height="unset"
                  {...getOverrideProps(overrides, "Type Filter Button2441481")}
                ></Flex>
              </Flex>
              <Flex
                gap="20px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 63")}
              >
                <Flex
                  width="unset"
                  height="unset"
                  {...getOverrideProps(overrides, "Type Filter Button2441487")}
                ></Flex>
                <Flex
                  width="unset"
                  height="unset"
                  {...getOverrideProps(overrides, "Type Filter Button2441488")}
                ></Flex>
              </Flex>
              <Flex
                gap="20px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 642441496")}
              >
                <Flex
                  width="unset"
                  height="unset"
                  {...getOverrideProps(overrides, "Type Filter Button2441497")}
                ></Flex>
                <Flex
                  width="unset"
                  height="unset"
                  {...getOverrideProps(overrides, "Type Filter Button2441498")}
                ></Flex>
              </Flex>
              <Flex
                gap="20px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 65")}
              >
                <Flex
                  width="unset"
                  height="unset"
                  {...getOverrideProps(overrides, "Type Filter Button2441506")}
                ></Flex>
              </Flex>
            </Flex>
            <Icon
              width="300px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 300, height: 1 }}
              paths={[
                {
                  d: "M0 0L300 0L300 -1L0 -1L0 0Z",
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
              {...getOverrideProps(overrides, "Line 42441541")}
            ></Icon>
          </Flex>
          <Flex
            gap="15px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 70")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="20px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="23.4375px"
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
              children="Rating"
              {...getOverrideProps(overrides, "Rating")}
            ></Text>
            <Ratingfilter4stars
              display="flex"
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="6px"
              padding="3px 6px 3px 6px"
              property1="Default"
              {...getOverrideProps(overrides, "rating filter 4 stars")}
            ></Ratingfilter4stars>
            <Ratingfilter3stars
              display="flex"
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="6px"
              padding="3px 6px 3px 6px"
              property1="Default"
              {...getOverrideProps(overrides, "rating filter 3 stars")}
            ></Ratingfilter3stars>
            <Ratingfilter2stars
              display="flex"
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="6px"
              padding="3px 6px 3px 6px"
              property1="Default"
              {...getOverrideProps(overrides, "rating filter 2 stars")}
            ></Ratingfilter2stars>
            <Ratingfilter1stars
              display="flex"
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="6px"
              padding="3px 6px 3px 6px"
              property1="Default"
              {...getOverrideProps(overrides, "rating filter 1 stars")}
            ></Ratingfilter1stars>
            <Icon
              width="300px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 300, height: 1 }}
              paths={[
                {
                  d: "M0 0L300 0L300 -1L0 -1L0 0Z",
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
              {...getOverrideProps(overrides, "Line 5")}
            ></Icon>
          </Flex>
        </Flex>
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
      </Flex>
    </Flex>
  );
}
