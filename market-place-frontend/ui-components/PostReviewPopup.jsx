/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import Star from "./Star";
import AddPhotoButton from "./AddPhotoButton";
import ToggleSwitch from "./ToggleSwitch";
import PostReviewButton from "./PostReviewButton";
import Closebutton from "./Closebutton";
export default function PostReviewPopup(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="500px"
      height="900px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="30px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PostReviewPopup")}
      {...rest}
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
        padding="30px 0px 30px 0px"
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
                {...getOverrideProps(overrides, "star52425962")}
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
                {...getOverrideProps(overrides, "star52425963")}
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
                {...getOverrideProps(overrides, "star52425964")}
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
                {...getOverrideProps(overrides, "star52425965")}
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
                {...getOverrideProps(overrides, "star52425966")}
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
            {...getOverrideProps(overrides, "Frame 18252425930")}
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
                {...getOverrideProps(overrides, "List Title52425932")}
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
                {...getOverrideProps(overrides, "List Title52425909")}
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
            {...getOverrideProps(overrides, "Frame 18252425979")}
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
        gap="30px"
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
      >
        <Closebutton
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          property1="Default"
          {...getOverrideProps(overrides, "Close button")}
        ></Closebutton>
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
          children="Customer Review"
          {...getOverrideProps(overrides, "Customer Review")}
        ></Text>
      </Flex>
    </View>
  );
}
