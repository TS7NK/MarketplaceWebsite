/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SortbyReviewbutton from "./SortbyReviewbutton";
import SortbyQAbutton from "./SortbyQAbutton";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import Star from "./Star";
import ReviewRatingButton from "./ReviewRatingButton";
import CancelandReturnButton from "./CancelandReturnButton";
import AddPhotoButton from "./AddPhotoButton";
import ToggleSwitch from "./ToggleSwitch";
import PostReviewButton from "./PostReviewButton";
export default function WriteaReviewPage(props) {
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
      {...getOverrideProps(overrides, "WriteaReviewPage")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Headings with Lines")}
      >
        <Flex
          gap="50px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 73")}
        >
          <SortbyReviewbutton
            display="flex"
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            property1="active"
            {...getOverrideProps(overrides, "Sort by Review button")}
          ></SortbyReviewbutton>
          <SortbyQAbutton
            display="flex"
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            property1="Default"
            {...getOverrideProps(overrides, "Sort by Q&A button")}
          ></SortbyQAbutton>
        </Flex>
        <Icon
          width="1200px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 1200, height: 1 }}
          paths={[
            {
              d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM1200 1C1200.55 1 1201 0.552285 1201 0C1201 -0.552285 1200.55 -1 1200 -1L1200 1ZM0 1L1200 1L1200 -1L0 -1L0 1Z",
              stroke: "rgba(255,215,0,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Line 2")}
        ></Icon>
      </Flex>
      <Flex
        gap="120px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 110")}
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
          {...getOverrideProps(overrides, "Review left side")}
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
            {...getOverrideProps(overrides, "Review filter")}
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
              children="Customer Review"
              {...getOverrideProps(overrides, "Customer Review")}
            ></Text>
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
              {...getOverrideProps(overrides, "Frame 106")}
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
                {...getOverrideProps(overrides, "Frame 105")}
              >
                <Star
                  width="30px"
                  height="30px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  property1="fill"
                  {...getOverrideProps(overrides, "star52427722")}
                ></Star>
                <Text
                  fontFamily="Roboto"
                  fontSize="30px"
                  fontWeight="400"
                  color="rgba(0,0,0,1)"
                  lineHeight="35.15625px"
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
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="based on 16 global ratings"
                {...getOverrideProps(overrides, "based on 16 global ratings")}
              ></Text>
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
              {...getOverrideProps(overrides, "Frame 107")}
            >
              <ReviewRatingButton
                display="flex"
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                reviewRatingButton="active"
                {...getOverrideProps(overrides, "Review Rating Button52427726")}
              ></ReviewRatingButton>
              <ReviewRatingButton
                display="flex"
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                reviewRatingButton="Default"
                {...getOverrideProps(overrides, "Review Rating Button52427727")}
              ></ReviewRatingButton>
              <ReviewRatingButton
                display="flex"
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                reviewRatingButton="Default"
                {...getOverrideProps(overrides, "Review Rating Button52427728")}
              ></ReviewRatingButton>
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
            {...getOverrideProps(overrides, "Line 11")}
          ></Icon>
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
            {...getOverrideProps(overrides, "Write a review")}
          >
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
              {...getOverrideProps(overrides, "Frame 108")}
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
                children="Review this product"
                {...getOverrideProps(overrides, "Review this product")}
              ></Text>
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
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Share your thoughts with other customers"
                {...getOverrideProps(
                  overrides,
                  "Share your thoughts with other customers"
                )}
              ></Text>
            </Flex>
            <CancelandReturnButton
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
              backgroundColor="rgba(0,0,0,1)"
              primaryActionButton="Default"
              {...getOverrideProps(overrides, "Cancel and Return Button")}
            ></CancelandReturnButton>
          </Flex>
        </Flex>
        <View
          width="500px"
          height="860px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.10000000149011612)"
          borderRadius="30px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Post Review Pop up")}
        >
          <Icon
            width="500px"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 500, height: 1 }}
            paths={[
              {
                d: "M0 0L500 0L500 -1L0 -1L0 0Z",
                stroke: "rgba(217,217,217,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="61px"
            left="calc(50% - 250px - 0px)"
            {...getOverrideProps(overrides, "Line 13")}
          ></Icon>
          <Flex
            gap="30px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            position="absolute"
            top="100px"
            left="calc(50% - 190px - 0px)"
            padding="0px 0px 30px 0px"
            {...getOverrideProps(overrides, "Frame 179")}
          >
            <Flex
              gap="20px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
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
                children="Overall Rating"
                {...getOverrideProps(overrides, "Overall Rating")}
              ></Text>
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                borderRadius="6px"
                padding="3px 6px 3px 6px"
                {...getOverrideProps(overrides, "rating filter 1 stars")}
              >
                <Flex
                  gap="3px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "5 stars")}
                >
                  <Star
                    width="24px"
                    height="24px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    property1="fill"
                    {...getOverrideProps(overrides, "star52428018")}
                  ></Star>
                  <Star
                    width="24px"
                    height="24px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    property1="fill"
                    {...getOverrideProps(overrides, "star52428019")}
                  ></Star>
                  <Star
                    width="24px"
                    height="24px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    property1="fill"
                    {...getOverrideProps(overrides, "star52428020")}
                  ></Star>
                  <Star
                    width="24px"
                    height="24px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    property1="fill"
                    {...getOverrideProps(overrides, "star52428021")}
                  ></Star>
                  <Star
                    width="24px"
                    height="24px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    property1="fill"
                    {...getOverrideProps(overrides, "star52428022")}
                  ></Star>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 268")}
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
                children="Add a Headline"
                {...getOverrideProps(overrides, "Add a Headline")}
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
                children="What’s the most important to know?"
                {...getOverrideProps(
                  overrides,
                  "What\u2019s the most important to know?"
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
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 18252428026")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  alignSelf="stretch"
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
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Question about Purchasing Prompt"
                    {...getOverrideProps(overrides, "List Title52428028")}
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
              {...getOverrideProps(overrides, "Frame 267")}
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
                children="Add a Written Review"
                {...getOverrideProps(overrides, "Add a Written Review")}
              ></Text>
              <View
                width="382px"
                height="162px"
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
                {...getOverrideProps(overrides, "Frame 207")}
              >
                <View
                  width="380px"
                  height="155px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  position="absolute"
                  top="0px"
                  left="0px"
                  borderRadius="10px"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgba(255,250,223,1)"
                  {...getOverrideProps(overrides, "Frame 204")}
                >
                  <Text
                    fontFamily="Roboto"
                    fontSize="14px"
                    fontWeight="400"
                    color="rgba(76,76,76,1)"
                    lineHeight="18.19999885559082px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="360px"
                    height="140px"
                    gap="unset"
                    alignItems="unset"
                    position="absolute"
                    top="10px"
                    left="10px"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="It has the best performing prompts! Solid frameworks and clear instructions. It has the best performing prompts! Solid frameworks and clear instructions.It has the best performing prompts! Solid frameworks and clear instructions."
                    {...getOverrideProps(overrides, "List Title52428034")}
                  ></Text>
                </View>
              </View>
            </Flex>
            <Flex
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 269")}
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
                children="Add a Photo/ Video"
                {...getOverrideProps(overrides, "Add a Photo/ Video")}
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
                children="Make your review engaging for other shoppers"
                {...getOverrideProps(
                  overrides,
                  "Make your review engaging for other shoppers"
                )}
              ></Text>
              <Flex
                gap="15px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 18252428038")}
              >
                <AddPhotoButton
                  width="60px"
                  height="60px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  property1="Default"
                  {...getOverrideProps(overrides, "Add Photo Button")}
                ></AddPhotoButton>
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
                  children="0/5"
                  {...getOverrideProps(overrides, "0/5")}
                ></Text>
              </Flex>
            </Flex>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="space-between"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 220")}
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
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Post Anonymously (Hide my user name)"
                {...getOverrideProps(
                  overrides,
                  "Post Anonymously (Hide my user name)"
                )}
              ></Text>
              <ToggleSwitch
                width="50px"
                height="23.72px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                property1="Default"
                {...getOverrideProps(overrides, "Toggle Switch")}
              ></ToggleSwitch>
            </Flex>
            <PostReviewButton
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
              padding="10px 15px 10px 15px"
              backgroundColor="rgba(255,215,0,1)"
              property1="Default"
              {...getOverrideProps(overrides, "Post Review Button")}
            ></PostReviewButton>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            position="absolute"
            top="11px"
            left="14px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 172")}
          ></Flex>
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
            position="absolute"
            top="20px"
            left="40px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add a Review"
            {...getOverrideProps(overrides, "Add a Review")}
          ></Text>
        </View>
      </Flex>
    </Flex>
  );
}
