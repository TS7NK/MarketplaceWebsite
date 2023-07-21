/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import Searchbarmain from "./Searchbarmain";
import Tagsbutton from "./Tagsbutton";
import AddButton from "./AddButton";
import Logoyellow from "./Logoyellow";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <View
        width="1440px"
        height="980px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Bottom Primary Frame")}
      >
        <View
          width="1440px"
          height="980px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,250,223,1)"
          {...getOverrideProps(overrides, "Rectangle 7")}
        ></View>
        <Flex
          gap="80px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="42px"
          left="124px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 50")}
        >
          <Flex
            gap="100px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 47")}
          >
            <Flex
              gap="50px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 45")}
            >
              <Text
                fontFamily="Roboto"
                fontSize="30px"
                fontWeight="700"
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
                children="Search your favorite prompts!"
                {...getOverrideProps(
                  overrides,
                  "Search your favorite prompts!"
                )}
              ></Text>
              <Flex
                gap="40px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 44")}
              >
                <Searchbarmain
                  width="570px"
                  height="57px"
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
                  property1="Default"
                  {...getOverrideProps(overrides, "search bar (main)")}
                ></Searchbarmain>
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
                    {...getOverrideProps(overrides, "tags button2582383")}
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
                    {...getOverrideProps(overrides, "tags button2582384")}
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
                    {...getOverrideProps(overrides, "tags button2582385")}
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
                    {...getOverrideProps(overrides, "tags button2582386")}
                  ></Tagsbutton>
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
                </Flex>
              </Flex>
            </Flex>
            <Flex
              gap="200px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 46")}
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
                {...getOverrideProps(overrides, "About is")}
              >
                <Text
                  fontFamily="Roboto"
                  fontSize="20px"
                  fontWeight="600"
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
                  children="About Us"
                  {...getOverrideProps(overrides, "About Us")}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582391"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582392"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582393"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582394"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582395"
                  )}
                ></Text>
              </Flex>
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
                {...getOverrideProps(overrides, "Help2582396")}
              >
                <Text
                  fontFamily="Roboto"
                  fontSize="20px"
                  fontWeight="600"
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
                  children="Help"
                  {...getOverrideProps(overrides, "Help2582397")}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582398"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582399"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582400"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582401"
                  )}
                ></Text>
              </Flex>
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
                {...getOverrideProps(overrides, "Shop prompt")}
              >
                <Text
                  fontFamily="Roboto"
                  fontSize="20px"
                  fontWeight="600"
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
                  children="Shop Prompts"
                  {...getOverrideProps(overrides, "Shop Prompts")}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582404"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582405"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582406"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582407"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582408"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582409"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582410"
                  )}
                ></Text>
              </Flex>
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
                {...getOverrideProps(overrides, "Services")}
              >
                <Text
                  fontFamily="Roboto"
                  fontSize="20px"
                  fontWeight="600"
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
                  children="Account & Services"
                  {...getOverrideProps(overrides, "Account & Services")}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582413"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582414"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582415"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582416"
                  )}
                ></Text>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="500"
                  color="rgba(141,143,155,1)"
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
                  children="Text with links here"
                  {...getOverrideProps(
                    overrides,
                    "Text with links here2582417"
                  )}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="36px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 48")}
          >
            <Logoyellow
              display="flex"
              gap="-1px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              logo-Yellow="huge"
              {...getOverrideProps(overrides, "logo-yellow")}
            ></Logoyellow>
            <Text
              fontFamily="Oswald"
              fontSize="24px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="35.56800079345703px"
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
              children="Get Best Prompts with Parazon."
              {...getOverrideProps(overrides, "Get Best Prompts with Parazon.")}
            ></Text>
          </Flex>
        </Flex>
        <View
          width="350px"
          height="212.16px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="768px"
          left="104px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Online test")}
        >
          <Icon
            width="350px"
            height="207.9px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 349.99951171875,
              height: 207.9044189453125,
            }}
            paths={[
              {
                d: "M325.854 207.904C329.115 207.904 332.342 207.244 335.34 205.963C338.339 204.683 341.047 202.809 343.301 200.453C345.555 198.098 347.309 195.311 348.456 192.26C349.603 189.209 350.12 185.958 349.976 182.702C349.183 164.743 339.994 139.385 303.78 114.043C259.618 83.1397 279.535 -5.83692 185.705 0.302578C91.8753 6.44208 100.82 72.1974 43.2851 102.336C6.66315 121.52 0.00237969 159.057 0 183.808C0.0059933 190.203 2.55291 196.334 7.0807 200.853C11.6085 205.372 17.7464 207.908 24.1448 207.904L325.854 207.904Z",
                fill: "rgba(255,241,167,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1.86%"
            bottom="0.14%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector2582422")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="82.23px"
            height="104.08px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1.23%"
            bottom="49.71%"
            left="60.91%"
            right="15.6%"
            {...getOverrideProps(overrides, "Group2582423")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="82.23px"
              height="104.08px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group2582424")}
            >
              <Icon
                width="82.23px"
                height="98.94px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 82.2294921875,
                  height: 98.9423828125,
                }}
                paths={[
                  {
                    d: "M76.082 0L6.14755 0C2.75235 0 0 2.75106 0 6.14466L0 92.7978C0 96.1914 2.75235 98.9424 6.14755 98.9424L76.082 98.9424C79.4772 98.9424 82.2296 96.1914 82.2296 92.7978L82.2296 6.14466C82.2296 2.75106 79.4772 0 76.082 0Z",
                    fill: "rgba(128,128,128,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="4.93%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector2582425")}
              ></Icon>
              <Icon
                width="72.12px"
                height="88.36px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 72.1181640625,
                  height: 88.361328125,
                }}
                paths={[
                  {
                    d: "M70.4473 0L1.67095 0C0.748112 0 0 0.747754 0 1.67016L0 86.6912C0 87.6136 0.748112 88.3613 1.67095 88.3613L70.4473 88.3613C71.3701 88.3613 72.1182 87.6136 72.1182 86.6912L72.1182 1.67016C72.1182 0.747754 71.3701 0 70.4473 0Z",
                    fill: "rgba(183,183,183,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="10.02%"
                bottom="5.08%"
                left="6.15%"
                right="6.15%"
                {...getOverrideProps(overrides, "Vector2582426")}
              ></Icon>
              <Icon
                width="44.2px"
                height="15.81px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 44.20166015625,
                  height: 15.81201171875,
                }}
                paths={[
                  {
                    d: "M40.7122 0L3.48944 0C1.56228 0 0 1.56154 0 3.48779L0 12.3242C0 14.2504 1.56228 15.812 3.48944 15.812L40.7122 15.812C42.6394 15.812 44.2017 14.2504 44.2017 12.3242L44.2017 3.48779C44.2017 1.56154 42.6394 0 40.7122 0Z",
                    fill: "rgba(128,128,128,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="84.81%"
                left="23.12%"
                right="23.12%"
                {...getOverrideProps(overrides, "Vector2582427")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="63.86px"
                height="6.27px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="30.87%"
                bottom="63.11%"
                left="11.09%"
                right="11.24%"
                {...getOverrideProps(overrides, "Group2582428")}
              >
                <Icon
                  width="63.86px"
                  height="2.11px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 63.86474609375,
                    height: 2.1109619140625,
                  }}
                  paths={[
                    {
                      d: "M63.8647 0L0 0L0 2.11099L63.8647 2.11099L63.8647 0Z",
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
                  bottom="66.31%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector2582429")}
                ></Icon>
                <Icon
                  width="35.34px"
                  height="2.11px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 35.340087890625,
                    height: 2.1109619140625,
                  }}
                  paths={[
                    {
                      d: "M35.3401 0L0 0L0 2.11099L35.3401 2.11099L35.3401 0Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="66.31%"
                  bottom="0%"
                  left="0%"
                  right="44.66%"
                  {...getOverrideProps(overrides, "Vector2582430")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="52.27px"
                height="9.97px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="53.78%"
                bottom="36.64%"
                left="11.12%"
                right="25.31%"
                {...getOverrideProps(overrides, "Group2582431")}
              >
                <Icon
                  width="9.98px"
                  height="9.97px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 9.976806640625,
                    height: 9.9718017578125,
                  }}
                  paths={[
                    {
                      d: "M9.23717 9.97178L0.739297 9.97178C0.543225 9.97178 0.35518 9.89393 0.216536 9.75535C0.0778921 9.61677 4.509e-14 9.42882 0 9.23284L0 0.738944C4.509e-14 0.542964 0.0778921 0.355007 0.216536 0.216428C0.35518 0.0778495 0.543225 1.06348e-07 0.739297 1.06348e-07L9.23717 1.06348e-07C9.33429 -5.19714e-05 9.43047 0.019023 9.52021 0.0561351C9.60995 0.0932472 9.69151 0.147667 9.7602 0.216289C9.82889 0.284912 9.88338 0.366388 9.92055 0.456067C9.95773 0.545746 9.97686 0.641871 9.97686 0.738944L9.97686 9.23284C9.97686 9.32991 9.95773 9.42604 9.92055 9.51571C9.88338 9.60539 9.82889 9.68687 9.7602 9.75549C9.69151 9.82411 9.60995 9.87853 9.52021 9.91565C9.43047 9.95276 9.33429 9.97183 9.23717 9.97178ZM1.47898 8.49389L8.49906 8.49389L8.49906 1.4771L1.47898 1.4771L1.47898 8.49389Z",
                      fill: "rgba(128,128,128,1)",
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
                  right="80.91%"
                  {...getOverrideProps(overrides, "Vector2582432")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="39.52px"
                  height="7.14px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="14.19%"
                  bottom="14.18%"
                  left="24.4%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group2582433")}
                >
                  <Icon
                    width="39.52px"
                    height="2.27px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 39.518310546875,
                      height: 2.268798828125,
                    }}
                    paths={[
                      {
                        d: "M39.5184 0L0 0L0 2.26876L39.5184 2.26876L39.5184 0Z",
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
                    bottom="68.24%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector2582434")}
                  ></Icon>
                  <Icon
                    width="33.11px"
                    height="2.27px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 33.11279296875,
                      height: 2.268798828125,
                    }}
                    paths={[
                      {
                        d: "M33.1127 0L0 0L0 2.26876L33.1127 2.26876L33.1127 0Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="68.24%"
                    bottom="0%"
                    left="0%"
                    right="16.21%"
                    {...getOverrideProps(overrides, "Vector2582435")}
                  ></Icon>
                </View>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="52.27px"
                height="9.97px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="81.1%"
                bottom="9.32%"
                left="11.12%"
                right="25.31%"
                {...getOverrideProps(overrides, "Group2582436")}
              >
                <Icon
                  width="9.98px"
                  height="9.97px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 9.976806640625,
                    height: 9.9718017578125,
                  }}
                  paths={[
                    {
                      d: "M9.23717 9.97179L0.739297 9.97179C0.543225 9.97179 0.35518 9.89393 0.216536 9.75535C0.0778921 9.61677 4.509e-14 9.42882 0 9.23284L0 0.738944C0.000105087 0.542996 0.0780116 0.355106 0.216633 0.216549C0.355254 0.0779931 0.543257 0.000105038 0.739297 1.12672e-14L9.23717 1.12672e-14C9.43328 -2.81777e-08 9.62137 0.0778426 9.76008 0.21641C9.89879 0.354978 9.97675 0.542927 9.97686 0.738944L9.97686 9.23284C9.97686 9.32992 9.95773 9.42604 9.92055 9.51571C9.88338 9.60539 9.82889 9.68688 9.7602 9.7555C9.69151 9.82412 9.60995 9.87854 9.52021 9.91565C9.43047 9.95276 9.33429 9.97184 9.23717 9.97179ZM1.47898 8.4939L8.49906 8.4939L8.49906 1.4771L1.47898 1.4771L1.47898 8.4939Z",
                      fill: "rgba(128,128,128,1)",
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
                  right="80.91%"
                  {...getOverrideProps(overrides, "Vector2582437")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="39.52px"
                  height="7.14px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="14.18%"
                  bottom="14.18%"
                  left="24.4%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group2582438")}
                >
                  <Icon
                    width="39.52px"
                    height="2.27px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 39.518310546875,
                      height: 2.268798828125,
                    }}
                    paths={[
                      {
                        d: "M39.5184 0L0 0L0 2.26876L39.5184 2.26876L39.5184 0Z",
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
                    bottom="68.24%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector2582439")}
                  ></Icon>
                  <Icon
                    width="33.11px"
                    height="2.27px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 33.11279296875,
                      height: 2.268798828125,
                    }}
                    paths={[
                      {
                        d: "M33.1127 0L0 0L0 2.26876L33.1127 2.26876L33.1127 0Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="68.24%"
                    bottom="0%"
                    left="0%"
                    right="16.21%"
                    {...getOverrideProps(overrides, "Vector2582440")}
                  ></Icon>
                </View>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="52.27px"
                height="9.97px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="40.12%"
                bottom="50.3%"
                left="11.12%"
                right="25.31%"
                {...getOverrideProps(overrides, "Group2582441")}
              >
                <Icon
                  width="9.98px"
                  height="9.97px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 9.976806640625,
                    height: 9.971435546875,
                  }}
                  paths={[
                    {
                      d: "M9.23717 9.97139L0.739297 9.97139C0.543225 9.97139 0.35518 9.89354 0.216536 9.75496C0.0778921 9.61638 4.509e-14 9.42842 0 9.23244L0 0.738548C0.000105152 0.542636 0.0780245 0.354783 0.216657 0.216289C0.35529 0.0777961 0.543294 7.82198e-08 0.739297 1.06413e-07L9.23717 1.06413e-07C9.33426 -5.19674e-05 9.4304 0.0190085 9.52011 0.0560958C9.60983 0.0931831 9.69137 0.14757 9.76006 0.21615C9.82874 0.284731 9.88323 0.366162 9.92043 0.455795C9.95763 0.545428 9.97681 0.641508 9.97686 0.738548L9.97686 9.23244C9.97686 9.32952 9.95773 9.42564 9.92055 9.51532C9.88338 9.605 9.82889 9.68647 9.7602 9.7551C9.69151 9.82372 9.60995 9.87814 9.52021 9.91525C9.43047 9.95236 9.33429 9.97144 9.23717 9.97139ZM1.47898 8.4935L8.49906 8.4935L8.49906 1.4767L1.47898 1.4767L1.47898 8.4935Z",
                      fill: "rgba(128,128,128,1)",
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
                  right="80.91%"
                  {...getOverrideProps(overrides, "Vector2582442")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="39.52px"
                  height="7.14px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="14.18%"
                  bottom="14.19%"
                  left="24.4%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group2582443")}
                >
                  <Icon
                    width="39.52px"
                    height="2.27px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 39.518310546875,
                      height: 2.268798828125,
                    }}
                    paths={[
                      {
                        d: "M39.5184 0L0 0L0 2.26877L39.5184 2.26877L39.5184 0Z",
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
                    bottom="68.24%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector2582444")}
                  ></Icon>
                  <Icon
                    width="33.11px"
                    height="2.27px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 33.11279296875,
                      height: 2.268798828125,
                    }}
                    paths={[
                      {
                        d: "M33.1127 0L0 0L0 2.26877L33.1127 2.26877L33.1127 0Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="68.24%"
                    bottom="0%"
                    left="0%"
                    right="16.21%"
                    {...getOverrideProps(overrides, "Vector2582445")}
                  ></Icon>
                </View>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="52.27px"
                height="9.97px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="67.44%"
                bottom="22.98%"
                left="11.12%"
                right="25.31%"
                {...getOverrideProps(overrides, "Group2582446")}
              >
                <Icon
                  width="9.98px"
                  height="9.97px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 9.976806640625,
                    height: 9.970947265625,
                  }}
                  paths={[
                    {
                      d: "M9.23717 9.971L0.739297 9.971C0.543257 9.97089 0.355254 9.893 0.216633 9.75445C0.0780116 9.61589 0.000105087 9.428 0 9.23205L0 0.738944C4.509e-14 0.542964 0.0778921 0.355013 0.216536 0.216435C0.35518 0.0778556 0.543225 1.06348e-07 0.739297 1.06348e-07L9.23717 1.06348e-07C9.33429 -5.19714e-05 9.43047 0.019023 9.52021 0.0561351C9.60995 0.0932473 9.69151 0.147673 9.7602 0.216295C9.82889 0.284918 9.88338 0.366394 9.92055 0.456073C9.95773 0.545752 9.97686 0.641871 9.97686 0.738944L9.97686 9.23285C9.97654 9.42872 9.89847 9.61647 9.75979 9.75487C9.62111 9.89327 9.43315 9.971 9.23717 9.971ZM1.47898 8.49311L8.49906 8.49311L8.49906 1.4763L1.47898 1.4763L1.47898 8.49311Z",
                      fill: "rgba(128,128,128,1)",
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
                  right="80.91%"
                  {...getOverrideProps(overrides, "Vector2582447")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="39.52px"
                  height="7.14px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="14.19%"
                  bottom="14.18%"
                  left="24.4%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group2582448")}
                >
                  <Icon
                    width="39.52px"
                    height="2.27px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 39.518310546875,
                      height: 2.268798828125,
                    }}
                    paths={[
                      {
                        d: "M39.5184 0L0 0L0 2.26876L39.5184 2.26876L39.5184 0Z",
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
                    bottom="68.24%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector2582449")}
                  ></Icon>
                  <Icon
                    width="33.11px"
                    height="2.27px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 33.11279296875,
                      height: 2.268798828125,
                    }}
                    paths={[
                      {
                        d: "M33.1127 0L0 0L0 2.26876L33.1127 2.26876L33.1127 0Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="68.24%"
                    bottom="0%"
                    left="0%"
                    right="16.21%"
                    {...getOverrideProps(overrides, "Vector2582450")}
                  ></Icon>
                </View>
              </View>
            </View>
            <Icon
              width="9.83px"
              height="7.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 9.83349609375,
                height: 7.5927734375,
              }}
              paths={[
                {
                  d: "M2.52211 7.59272C2.50307 7.59272 2.48482 7.59272 2.46578 7.59272C2.35774 7.58505 2.25244 7.55534 2.15633 7.50544C2.06022 7.45553 1.97534 7.38648 1.90695 7.30254L0.178507 5.18283C0.045548 5.01987 -0.017205 4.81078 0.00406765 4.60157C0.0253403 4.39237 0.1289 4.20017 0.291943 4.06728C0.454986 3.93438 0.664151 3.87167 0.873456 3.89293C1.08276 3.91419 1.27505 4.01769 1.40801 4.18066L2.6042 5.64745L8.50228 0.210019C8.57887 0.139426 8.66862 0.0846028 8.76641 0.0486792C8.8642 0.0127556 8.9681 -0.0035651 9.0722 0.000649856C9.1763 0.00486482 9.27854 0.0295324 9.3731 0.0732443C9.46766 0.116956 9.55268 0.178857 9.62331 0.255411C9.69393 0.331965 9.74878 0.421673 9.78472 0.519415C9.82066 0.617156 9.83699 0.721018 9.83278 0.825067C9.82856 0.929115 9.80389 1.03132 9.76015 1.12583C9.71642 1.22035 9.65448 1.30533 9.5779 1.37592L3.05993 7.38262C2.91343 7.5177 2.72142 7.59271 2.52211 7.59272Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="53.67%"
              bottom="39.03%"
              left="13.54%"
              right="74.5%"
              {...getOverrideProps(overrides, "Vector2582451")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="15.85px"
            height="6.22px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="51.92%"
            bottom="45.14%"
            left="46.61%"
            right="48.86%"
            {...getOverrideProps(overrides, "Group2582452")}
          >
            <Icon
              width="8.61px"
              height="2.13px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.609130859375,
                height: 2.13427734375,
              }}
              paths={[
                {
                  d: "M0 1.28324C1.15336 1.50049 8.13063 2.71752 8.58951 1.79027C8.86715 1.23527 6.12296 0 6.12296 0",
                  fill: "rgba(233,136,98,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="65.71%"
              bottom="0%"
              left="0%"
              right="45.68%"
              {...getOverrideProps(overrides, "Vector2582453")}
            ></Icon>
            <Icon
              width="14.86px"
              height="6.06px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 14.859375,
                height: 6.0614013671875,
              }}
              paths={[
                {
                  d: "M0.894371 0.214284C0.894371 0.214284 10.899 -1.2085 14.6847 3.27829C14.781 3.39267 14.8406 3.53345 14.8556 3.68222C14.8707 3.83099 14.8404 3.98082 14.7688 4.11212C14.6973 4.24343 14.5878 4.35011 14.4546 4.41819C14.3214 4.48628 14.1708 4.51261 14.0224 4.49374C10.9736 4.10287 6.42558 4.04181 5.01442 5.66677C4.19223 6.61345 0 5.55974 0 5.55974",
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
              bottom="2.62%"
              left="6.25%"
              right="0%"
              {...getOverrideProps(overrides, "Vector2582454")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="63.96px"
            height="120.51px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="43.2%"
            bottom="0%"
            left="23.58%"
            right="58.15%"
            {...getOverrideProps(overrides, "Group2582455")}
          >
            <Icon
              width="63.43px"
              height="2.38px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 18.4443359375,
                height: 61.9476318359375,
              }}
              paths={[
                {
                  d: "M63.431 0L0 0L0 2.37962L63.431 2.37962L63.431 0Z",
                  fill: "rgba(128,128,128,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="99.5%"
              bottom="-1.47%"
              left="8.87%"
              right="-8.04%"
              transformOrigin="top left"
              transform="rotate(-75.26deg)"
              {...getOverrideProps(overrides, "Vector2582456")}
            ></Icon>
            <Icon
              width="2.38px"
              height="62.09px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 11.9736328125,
                height: 61.711669921875,
              }}
              paths={[
                {
                  d: "M2.37967 0L0 0L0 62.0934L2.37967 62.0934L2.37967 0Z",
                  fill: "rgba(128,128,128,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="49%"
              bottom="-0.52%"
              left="75.16%"
              right="21.12%"
              transformOrigin="top left"
              transform="rotate(-8.91deg)"
              {...getOverrideProps(overrides, "Vector2582457")}
            ></Icon>
            <Icon
              width="63.96px"
              height="61.64px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 63.962158203125,
                height: 61.6378173828125,
              }}
              paths={[
                {
                  d: "M19.6583 0.0198103C19.6583 0.0198103 0 -1.22141 0 15.946C0 33.1133 2.8953 57.1056 17.3821 59.7942C31.8689 62.4828 53.2683 61.6725 58.2367 60.8309C64.341 59.7966 67.0019 45.6433 58.8713 44.6962C35.7985 42.0072 46.9728 1.88144 19.6583 0.0198103Z",
                  fill: "rgba(128,128,128,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="48.85%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector2582458")}
            ></Icon>
          </View>
          <Icon
            width="9.72px"
            height="8.33px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.05224609375,
              height: 10.3360595703125,
            }}
            paths={[
              {
                d: "M9.72484 0L0 0L0 8.32891L9.72484 8.32891L9.72484 0Z",
                fill: "rgba(233,136,98,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="98.83%"
            bottom="-2.76%"
            left="39.72%"
            right="57.51%"
            transformOrigin="top left"
            transform="rotate(-85.59deg)"
            {...getOverrideProps(overrides, "Vector2582459")}
          ></Icon>
          <Icon
            width="20.94px"
            height="6.54px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 20.942138671875,
              height: 6.5419921875,
            }}
            paths={[
              {
                d: "M19.3207 6.46912C19.5347 6.46813 19.7463 6.42504 19.9435 6.34231C20.1408 6.25957 20.3198 6.1388 20.4703 5.98691C20.6209 5.83503 20.7401 5.65501 20.821 5.45709C20.9019 5.25918 20.9431 5.04725 20.9421 4.83344C20.9421 4.79379 20.9421 4.75416 20.9373 4.71451C20.9132 4.40517 20.8012 4.10916 20.6144 3.86131C20.4277 3.61346 20.1739 3.4241 19.8831 3.31552L10.1883 0.0695562C10.0005 0.00738667 9.80145 -0.0134593 9.60484 0.00843673C9.40823 0.0303328 9.21868 0.0944561 9.04918 0.196416C7.71636 1.12051 6.12215 1.59293 4.5008 1.54426C3.23795 1.45467 2.02575 1.01194 1.00264 0.266585C0.912686 0.192846 0.803612 0.146189 0.688137 0.132055C0.572662 0.117921 0.455552 0.136897 0.350454 0.186762C0.245356 0.236627 0.156606 0.315311 0.0945564 0.413674C0.0325067 0.512036 -0.000285644 0.626023 1.87457e-06 0.742305L1.87457e-06 5.48042C1.87457e-06 5.76198 0.111903 6.03201 0.311093 6.2311C0.510282 6.4302 0.780434 6.54205 1.06213 6.54205L1.0661 6.54205L19.3207 6.46912Z",
                fill: "rgba(128,128,128,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="96.77%"
            bottom="0.14%"
            left="39.58%"
            right="54.43%"
            {...getOverrideProps(overrides, "Vector2582460")}
          ></Icon>
          <Icon
            width="8.33px"
            height="9.83px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.84521484375,
              height: 11.0771484375,
            }}
            paths={[
              {
                d: "M8.32882 0L0 0L0 9.83277L8.32882 9.83277L8.32882 0Z",
                fill: "rgba(233,136,98,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="94.74%"
            bottom="0.63%"
            left="49.38%"
            right="48.24%"
            transformOrigin="top left"
            transform="rotate(-9.54deg)"
            {...getOverrideProps(overrides, "Vector2582461")}
          ></Icon>
          <Icon
            width="87.92px"
            height="79.5px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 87.917724609375,
              height: 79.4979248046875,
            }}
            paths={[
              {
                d: "M87.9178 75.808L69.6287 5.48857C69.22 3.91732 68.3013 2.52604 67.0165 1.53278C65.7317 0.539514 64.1535 0.000419064 62.5293 0L22.452 0L22.452 0.0257689L5.20731e-09 0.0257689L5.20731e-09 6.90302C-5.20798e-05 8.88583 0.390623 10.8492 1.14972 12.6811C1.90881 14.513 3.02146 16.1775 4.42414 17.5796C5.82682 18.9817 7.49204 20.0939 9.32476 20.8527C11.1575 21.6116 13.1218 22.0022 15.1055 22.0022L26.0561 22.0022L26.0561 22.0454L45.173 22.0454L39.9091 77.986L54.5196 79.3592L59.6094 25.2645L73.713 79.498L87.9178 75.808Z",
                fill: "rgba(38,38,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="59.36%"
            bottom="3.17%"
            left="27.82%"
            right="47.06%"
            {...getOverrideProps(overrides, "Vector2582462")}
          ></Icon>
          <Icon
            width="71.58px"
            height="49.13px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 71.58349609375,
              height: 49.1336669921875,
            }}
            paths={[
              {
                d: "M44.0394 34.8501L70.0998 36.5393L71.5835 28.7225L46.0042 26.3523L34.8867 6.47964C34.5119 5.80967 34.1934 5.11077 33.8753 4.41226C32.7334 1.90247 30.4644 0.259666 26.2753 0.0792907C26.0255 0.0713621 25.6249 0.0594663 25.1093 0.0515378C25.0062 2.2319 11.4935 2.22397 11.2079 0C7.39246 0.00396429 4.25919 1.1774 2.45062 2.98512C-3.79607 9.22888 3.87051 19.869 3.87051 28.1941C3.87051 36.5191 0.102659 40.2534 0.38029 44.5269C0.816567 51.2425 33.47 49.6568 35.1318 45.8391C36.2463 43.2814 35.1663 41.3595 34.3163 36.7859L48.723 36.7859L48.723 32.7724M33.5235 26.6083C33.5398 25.2078 33.648 23.7422 33.7968 22.2508L37.0887 28.1417L33.5235 28.1417C33.5183 27.6458 33.5164 27.1392 33.5235 26.6083Z",
                fill: "rgba(255,215,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="37.93%"
            bottom="38.91%"
            left="27.5%"
            right="52.05%"
            {...getOverrideProps(overrides, "Vector2582463")}
          ></Icon>
          <Icon
            width="13.9px"
            height="5.7px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 13.9013671875,
              height: 5.696533203125,
            }}
            paths={[
              {
                d: "M13.9014 0.0515378C13.7983 2.2319 12.6084 5.43901 8.95162 5.67687C4.06928 6.00194 0.285563 2.22397 0 0L0.015868 0C4.81492 0.000396429 11.0973 0.00832695 13.9014 0.0515378Z",
                fill: "rgba(233,136,98,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="37.93%"
            bottom="59.39%"
            left="30.7%"
            right="65.33%"
            {...getOverrideProps(overrides, "Vector2582464")}
          ></Icon>
          <Icon
            width="20.94px"
            height="6.54px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 20.941650390625,
              height: 6.5421142578125,
            }}
            paths={[
              {
                d: "M19.3203 6.46957C19.5343 6.46854 19.746 6.42537 19.9432 6.34257C20.1405 6.25977 20.3196 6.13894 20.4701 5.98698C20.6207 5.83502 20.7398 5.6549 20.8207 5.45692C20.9017 5.25894 20.9428 5.04698 20.9417 4.83312C20.9417 4.79348 20.9417 4.75381 20.937 4.71417C20.9128 4.40479 20.8006 4.10879 20.6138 3.86094C20.427 3.6131 20.1732 3.42374 19.8824 3.31517L10.1883 0.0696016C10.0004 0.00739852 9.80132 -0.0134624 9.60465 0.00843376C9.40797 0.0303299 9.21835 0.0944682 9.04879 0.196462C7.71615 1.1206 6.12203 1.59305 4.50079 1.54433C3.23782 1.45475 2.0255 1.012 1.00225 0.266631C0.912291 0.193012 0.803244 0.146459 0.687833 0.132391C0.572422 0.118322 0.455394 0.13732 0.350369 0.187171C0.245343 0.237021 0.156646 0.315671 0.0946162 0.413961C0.032586 0.512251 -0.000224491 0.62614 1.15608e-06 0.742351L1.15608e-06 5.48049C1.15608e-06 5.76205 0.111902 6.03207 0.311092 6.23117C0.510281 6.43027 0.780446 6.54211 1.06214 6.54211L1.0665 6.54211L19.3203 6.46957Z",
                fill: "rgba(128,128,128,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="96.77%"
            bottom="0.14%"
            left="49.36%"
            right="44.65%"
            {...getOverrideProps(overrides, "Vector2582465")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="193.68px"
            height="94.51px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="55.31%"
            bottom="0.14%"
            left="19.86%"
            right="24.8%"
            {...getOverrideProps(overrides, "Group2582466")}
          >
            <Icon
              width="3.72px"
              height="90.77px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.724609375,
                height: 90.7652587890625,
              }}
              paths={[
                {
                  d: "M3.72462 0L0 0L0 90.7653L3.72462 90.7653L3.72462 0Z",
                  fill: "rgba(183,183,183,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="3.97%"
              bottom="0%"
              left="2.66%"
              right="95.42%"
              {...getOverrideProps(overrides, "Vector2582467")}
            ></Icon>
            <Icon
              width="3.72px"
              height="90.77px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.724609375,
                height: 90.7652587890625,
              }}
              paths={[
                {
                  d: "M3.72462 0L0 0L0 90.7653L3.72462 90.7653L3.72462 0Z",
                  fill: "rgba(128,128,128,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="3.97%"
              bottom="0%"
              left="95.42%"
              right="2.66%"
              {...getOverrideProps(overrides, "Vector2582468")}
            ></Icon>
            <Icon
              width="33.59px"
              height="85.7px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 33.59130859375,
                height: 85.696533203125,
              }}
              paths={[
                {
                  d: "M33.5914 0L0 0L0 85.6965L33.5914 85.6965L33.5914 0Z",
                  fill: "rgba(128,128,128,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="2.76%"
              bottom="6.57%"
              left="80%"
              right="2.66%"
              {...getOverrideProps(overrides, "Vector2582469")}
            ></Icon>
            <Icon
              width="3.72px"
              height="12.41px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.724609375,
                height: 12.41259765625,
              }}
              paths={[
                {
                  d: "M3.72462 0L0 0L0 12.4126L3.72462 12.4126L3.72462 0Z",
                  fill: "rgba(128,128,128,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="86.87%"
              bottom="0%"
              left="76.54%"
              right="21.54%"
              {...getOverrideProps(overrides, "Vector2582470")}
            ></Icon>
            <Icon
              width="193.68px"
              height="5.12px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 193.68017578125,
                height: 5.119140625,
              }}
              paths={[
                {
                  d: "M193.68 0L0 0L0 5.11909L193.68 5.11909L193.68 0Z",
                  fill: "rgba(183,183,183,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="94.58%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector2582471")}
            ></Icon>
            <Icon
              width="3.72px"
              height="90.77px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.724609375,
                height: 90.7652587890625,
              }}
              paths={[
                {
                  d: "M3.72462 0L0 0L0 90.7653L3.72462 90.7653L3.72462 0Z",
                  fill: "rgba(183,183,183,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="3.97%"
              bottom="0%"
              left="79.04%"
              right="19.04%"
              {...getOverrideProps(overrides, "Vector2582472")}
            ></Icon>
            <Icon
              width="3.72px"
              height="90.77px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.724609375,
                height: 90.7652587890625,
              }}
              paths={[
                {
                  d: "M3.72462 0L0 0L0 90.7653L3.72462 90.7653L3.72462 0Z",
                  fill: "rgba(183,183,183,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="3.97%"
              bottom="0%"
              left="60.15%"
              right="37.92%"
              {...getOverrideProps(overrides, "Vector2582473")}
            ></Icon>
            <Icon
              width="36.57px"
              height="83.18px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 36.5732421875,
                height: 83.181640625,
              }}
              paths={[
                {
                  d: "M36.5731 0L0 0L0 83.1816L36.5731 83.1816L36.5731 0Z",
                  fill: "rgba(183,183,183,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5.42%"
              bottom="6.57%"
              left="61.11%"
              right="20%"
              {...getOverrideProps(overrides, "Vector2582474")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="49.53px"
            height="24.49px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="43.73%"
            bottom="44.72%"
            left="48.53%"
            right="37.32%"
            {...getOverrideProps(overrides, "Group2582475")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="49.53px"
              height="24.49px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group2582476")}
            >
              <Icon
                width="38.22px"
                height="24.49px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 38.22216796875,
                  height: 24.4866943359375,
                }}
                paths={[
                  {
                    d: "M4.87378 1.64399L0.0580734 21.8508C-0.0167036 22.1652 -0.0192985 22.4924 0.0504723 22.8079C0.120243 23.1235 0.260565 23.4191 0.460935 23.6727C0.661305 23.9263 0.916522 24.1313 1.20743 24.2722C1.49835 24.4132 1.81741 24.4865 2.14071 24.4867L30.532 24.4867C31.0011 24.4866 31.4572 24.3326 31.8302 24.0483C32.2032 23.7641 32.4725 23.3653 32.5968 22.9132L38.1459 2.70682C38.233 2.38919 38.2457 2.05575 38.1828 1.73244C38.12 1.40913 37.9833 1.10468 37.7836 0.842769C37.5838 0.580859 37.3262 0.368553 37.0309 0.222381C36.7357 0.0762083 36.4106 0.000107649 36.0811 5.37334e-09L6.9572 5.37334e-09C6.47557 -3.40904e-05 6.00799 0.162195 5.62996 0.460489C5.25194 0.758783 4.98554 1.17573 4.87378 1.64399Z",
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
                bottom="0.01%"
                left="22.83%"
                right="0%"
                {...getOverrideProps(overrides, "Vector2582477")}
              ></Icon>
              <Icon
                width="36.83px"
                height="2.51px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 36.8310546875,
                  height: 2.5150146484375,
                }}
                paths={[
                  {
                    d: "M1.25806 2.51496L35.5729 2.51496C35.9065 2.51496 36.2265 2.38247 36.4625 2.14664C36.6984 1.91082 36.8309 1.59099 36.8309 1.25748C36.8309 0.923982 36.6984 0.604136 36.4625 0.368313C36.2265 0.132491 35.9065 0 35.5729 2.25344e-14L1.25806 2.25344e-14C0.924405 0 0.60442 0.132491 0.368487 0.368313C0.132554 0.604136 -2.2545e-14 0.923982 0 1.25748C-4.509e-14 1.59099 0.132554 1.91082 0.368487 2.14664C0.60442 2.38247 0.924405 2.51496 1.25806 2.51496Z",
                    fill: "rgba(0,0,0,1)",
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
                {...getOverrideProps(overrides, "Vector2582478")}
              ></Icon>
            </View>
            <Icon
              width="6.72px"
              height="6.71px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 6.715576171875,
                height: 6.7122802734375,
              }}
              paths={[
                {
                  d: "M3.35775 6.71234C5.21219 6.71234 6.7155 5.20973 6.7155 3.35617C6.7155 1.5026 5.21219 0 3.35775 0C1.50332 0 0 1.5026 0 3.35617C0 5.20973 1.50332 6.71234 3.35775 6.71234Z",
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
              left="56.96%"
              right="29.48%"
              {...getOverrideProps(overrides, "Vector2582479")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="18.37px"
            height="7.15px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="51.97%"
            bottom="44.66%"
            left="40.64%"
            right="54.11%"
            {...getOverrideProps(overrides, "Group2582480")}
          >
            <Icon
              width="8.54px"
              height="2.39px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.541748046875,
                height: 2.394775390625,
              }}
              paths={[
                {
                  d: "M0 2.39482C1.17359 2.39482 8.25477 2.29889 8.53478 1.30266C8.70295 0.70524 5.7791 0 5.7791 0",
                  fill: "rgba(233,136,98,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="60.72%"
              bottom="5.79%"
              left="0%"
              right="53.49%"
              {...getOverrideProps(overrides, "Vector2582481")}
            ></Icon>
            <Icon
              width="11.82px"
              height="4.91px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 11.819091796875,
                height: 4.9085693359375,
              }}
              paths={[
                {
                  d: "M0 4.9086C0 2.19742 2.64543 0 5.90957 0C9.17372 0 11.8191 2.19742 11.8191 4.9086",
                  fill: "rgba(183,183,183,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="31.35%"
              bottom="0%"
              left="35.65%"
              right="0%"
              {...getOverrideProps(overrides, "Vector2582482")}
            ></Icon>
            <Icon
              width="14.39px"
              height="6.76px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 14.392578125,
                height: 6.7637939453125,
              }}
              paths={[
                {
                  d: "M0 1.31819C0 1.31819 9.56796 -1.93253 14.1195 1.77567C14.2354 1.87024 14.32 1.99754 14.3623 2.14093C14.4046 2.28432 14.4026 2.43712 14.3566 2.57938C14.3106 2.72164 14.2228 2.84673 14.1046 2.93829C13.9864 3.02986 13.8433 3.08364 13.694 3.09262C10.6253 3.27299 6.14476 4.05515 5.05922 5.91361C4.42702 6.99586 0.111839 6.73659 0.111839 6.73659",
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
              bottom="5.41%"
              left="4.87%"
              right="16.77%"
              {...getOverrideProps(overrides, "Vector2582483")}
            ></Icon>
          </View>
          <Icon
            width="11.77px"
            height="6.98px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 11.76611328125,
              height: 6.983154296875,
            }}
            paths={[
              {
                d: "M11.766 0L0 0L0 6.98311L11.766 6.98311L11.766 0Z",
                fill: "rgba(255,215,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="51.97%"
            bottom="44.73%"
            left="38.06%"
            right="58.58%"
            {...getOverrideProps(overrides, "Vector2582484")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="45.01px"
            height="82.26px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="61.08%"
            bottom="0.14%"
            left="77.97%"
            right="9.17%"
            {...getOverrideProps(overrides, "Group2582485")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="45.01px"
              height="50.4px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="38.73%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group2582486")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="44.59px"
                height="47.11px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="6.53%"
                bottom="0%"
                left="0.47%"
                right="0.47%"
                {...getOverrideProps(overrides, "Group2582487")}
              >
                <Icon
                  width="11.41px"
                  height="47.04px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 11.413818359375,
                    height: 47.040771484375,
                  }}
                  paths={[
                    {
                      d: "M11.4138 1.05291L2.15008 46.2153C2.09093 46.4512 1.95462 46.6605 1.76283 46.81C1.57104 46.9596 1.33475 47.0408 1.09151 47.0407C0.925515 47.0407 0.761724 47.0029 0.612564 46.9301C0.463403 46.8573 0.332808 46.7514 0.230739 46.6206C0.128669 46.4897 0.0577966 46.3373 0.0235222 46.175C-0.0107522 46.0127 -0.00753433 45.8446 0.0329389 45.6837L9.42838 0L11.4138 1.05291Z",
                      fill: "rgba(128,128,128,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0.15%"
                  bottom="0%"
                  left="0%"
                  right="74.4%"
                  {...getOverrideProps(overrides, "Vector2582488")}
                ></Icon>
                <Icon
                  width="11.41px"
                  height="47.04px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 11.41259765625,
                    height: 47.040771484375,
                  }}
                  paths={[
                    {
                      d: "M0 1.05292L9.26257 46.2153C9.32172 46.4512 9.45802 46.6605 9.64982 46.81C9.84161 46.9596 10.0779 47.0408 10.3211 47.0407C10.4871 47.0407 10.6509 47.0029 10.8001 46.9301C10.9493 46.8573 11.0799 46.7514 11.1819 46.6206C11.284 46.4897 11.3549 46.3373 11.3891 46.175C11.4234 46.0127 11.4202 45.8446 11.3797 45.6837L1.98548 0L0 1.05292Z",
                      fill: "rgba(128,128,128,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0.15%"
                  left="74.41%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector2582489")}
                ></Icon>
              </View>
              <Icon
                width="45.01px"
                height="7.93px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 45.014404296875,
                  height: 7.92822265625,
                }}
                paths={[
                  {
                    d: "M43.1264 0L1.88787 0C0.845217 0 0 0.844844 0 1.88701L0 6.04119C0 7.08336 0.845217 7.9282 1.88787 7.9282L43.1264 7.9282C44.1691 7.9282 45.0143 7.08336 45.0143 6.04119L45.0143 1.88701C45.0143 0.844844 44.1691 0 43.1264 0Z",
                    fill: "rgba(183,183,183,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="84.27%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector2582490")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="21.25px"
              height="31.63px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="61.55%"
              left="26.39%"
              right="26.4%"
              {...getOverrideProps(overrides, "Group2582491")}
            >
              <Icon
                width="21.25px"
                height="24.81px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 21.2509765625,
                  height: 24.8133544921875,
                }}
                paths={[
                  {
                    d: "M20.0881 9.6571C18.7769 9.22816 17.4308 9.70943 16.1442 10.6878C17.8397 6.40638 18.5397 2.54158 15.6409 2.36755C13.6122 2.24585 12.0582 3.80144 10.8779 6.01272C10.4627 2.12454 9.3914 -0.775342 6.99108 0.185206C4.35676 1.2405 3.95616 4.85831 4.35595 8.64303C3.19505 6.71004 1.94572 5.63215 0.810998 6.76594C-2.57491 10.1503 5.73619 19.6895 5.73619 19.6895L7.79857 19.6895L8.97653 20.968C8.73856 21.4715 8.60768 21.7716 8.60768 21.7716L10.1077 24.8134C10.1077 24.8134 25.5293 11.4371 20.0881 9.6571Z",
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
                bottom="21.55%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector2582492")}
              ></Icon>
              <Icon
                width="15.59px"
                height="13.63px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 15.592041015625,
                  height: 13.6304931640625,
                }}
                paths={[
                  {
                    d: "M13.6372 13.6304L1.95531 13.6304L0 0L15.5922 0L13.6372 13.6304Z",
                    fill: "rgba(128,128,128,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="56.91%"
                bottom="0%"
                left="12.94%"
                right="13.69%"
                {...getOverrideProps(overrides, "Vector2582493")}
              ></Icon>
            </View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="51.16px"
            height="79.02px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="62.61%"
            bottom="0.14%"
            left="5.21%"
            right="80.18%"
            {...getOverrideProps(overrides, "Group2582494")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="51.16px"
              height="67.23px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="14.91%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group2582495")}
            >
              <Icon
                width="17.28px"
                height="61.52px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.283935546875,
                  height: 61.5159912109375,
                }}
                paths={[
                  {
                    d: "M6.97937 61.516C4.44817 60.7897 2.54283 58.5261 1.78569 56.0056C1.02855 53.4851 1.29547 50.749 2.03516 48.2225C2.63841 46.1611 3.55301 44.1683 3.77829 42.0323C4.52869 34.9192 -2.37362 27.6518 0.874264 21.2788C1.9249 19.2174 3.95716 17.6075 4.32007 15.3229C4.6203 13.4339 3.68905 11.5964 3.2262 9.74192C2.58923 7.18773 2.91208 4.28944 4.56993 2.24426C6.22779 0.199078 9.36066 -0.694876 11.6452 0.614926C14.6333 2.32829 14.8923 6.5578 14.1244 9.91397C13.3566 13.2701 11.9331 16.7234 12.8715 20.036C13.7659 23.1936 16.6762 25.5713 17.1978 28.8114C17.6317 31.5047 16.3165 34.1307 15.7382 36.797C14.83 40.9877 15.7545 45.3314 15.7942 49.6188C15.8338 53.9061 14.623 58.7152 6.97937 61.516Z",
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
                left="33.2%"
                right="33.01%"
                {...getOverrideProps(overrides, "Vector2582496")}
              ></Icon>
              <Icon
                width="29.73px"
                height="49.31px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 29.72998046875,
                  height: 49.306396484375,
                }}
                paths={[
                  {
                    d: "M20.0568 45.3314C18.5507 44.8529 17.199 43.9824 16.1407 42.8092C15.0824 41.636 14.3555 40.2024 14.0346 38.6556C13.5393 36.1041 14.1477 33.2388 12.7508 31.0469C10.8577 28.0769 8.9163 27.7411 6.56 25.1234C2.93612 21.0981 2.80881 19.3154 3.04797 11.8605C3.14911 8.7081 -1.20613 5.15015 0.327582 2.12103C1.67885 -0.547732 5.7866 -0.561207 8.11593 1.31668C10.4453 3.19457 11.4685 6.20465 12.4839 9.0185C13.4992 11.8324 14.7783 14.8096 17.3511 16.337C18.8944 17.2528 20.9143 17.6761 21.7667 19.2547C22.4516 20.5233 22.1066 22.0713 21.8313 23.4862C21.1392 27.0426 21.3129 31.3811 24.2986 33.4366C25.6471 34.3634 27.4101 34.6826 28.5178 35.8853C29.6129 37.0746 29.7894 38.8363 29.7152 40.451C29.5695 43.5551 28.7139 46.5844 27.2142 49.3064",
                    fill: "rgba(183,183,183,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="24.68%"
                bottom="1.98%"
                left="0%"
                right="41.88%"
                {...getOverrideProps(overrides, "Vector2582497")}
              ></Icon>
              <Icon
                width="29.8px"
                height="56.02px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 29.79833984375,
                  height: 56.017333984375,
                }}
                paths={[
                  {
                    d: "M2.30006 53.1849C0.98316 51.6166 0.189445 49.6763 0.0298721 47.6351C-0.129701 45.5939 0.352848 43.5539 1.41005 41.8002C3.23806 38.9063 6.64538 36.9115 7.35929 33.5636C7.99626 30.5817 6.22933 27.4982 6.75842 24.4977C7.33351 21.2319 10.3514 19.0896 12.7473 16.7978C13.3713 16.2406 13.908 15.5929 14.3393 14.8763C15.3935 12.9798 15.0996 10.6528 15.4574 8.51244C16.1431 4.41376 19.5215 0.778507 23.6233 0.101009C27.221 -0.493635 29.7982 1.57215 29.7982 5.37668C29.7982 9.88329 26.4203 11.8147 24.6974 13.8547C22.2223 16.8086 20.9088 20.5626 21.0025 24.4144C21.1238 28.7169 22.9566 33.2976 20.9985 37.1311C19.5616 39.9457 16.4922 41.4442 14.0807 43.4854C12.2584 45.0461 10.775 46.963 9.72176 49.1182C8.66853 51.2734 8.06781 53.6214 7.95659 56.0174",
                    fill: "rgba(255,255,255,1)",
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
                {...getOverrideProps(overrides, "Vector2582498")}
              ></Icon>
            </View>
            <Icon
              width="21.69px"
              height="21.68px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 21.694091796875,
                height: 21.6839599609375,
              }}
              paths={[
                {
                  d: "M21.6941 0L0 0L0 21.6839L21.6941 21.6839L21.6941 0Z",
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
              right="31.07%"
              {...getOverrideProps(overrides, "Vector2582499")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="21.69px"
              height="4.23px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="77.91%"
              bottom="16.73%"
              left="26.52%"
              right="31.07%"
              {...getOverrideProps(overrides, "Group2582500")}
            >
              <Icon
                width="21.69px"
                height="4.23px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 21.694091796875,
                  height: 4.232666015625,
                }}
                paths={[
                  {
                    d: "M21.6941 0L0 0L0 4.23268L21.6941 4.23268L21.6941 0Z",
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
                {...getOverrideProps(overrides, "Vector2582501")}
              ></Icon>
            </View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="22.99px"
            height="29.21px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="25.22%"
            bottom="61.01%"
            left="29.78%"
            right="63.65%"
            {...getOverrideProps(overrides, "Group2582502")}
          >
            <Icon
              width="11.21px"
              height="11.15px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 11.21240234375,
                height: 11.147216796875,
              }}
              paths={[
                {
                  d: "M0 11.1472C0 11.1472 3.06664 9.52184 2.38208 1.17462L8.71841 0C8.71841 0 8.0045 7.48419 11.2123 9.86039L0 11.1472Z",
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
              {...getOverrideProps(overrides, "Vector2582503")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="5.26px"
              height="4.07px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="76.31%"
              bottom="9.76%"
              left="39.37%"
              right="37.74%"
              {...getOverrideProps(overrides, "Group2582504")}
            >
              <Icon
                width="5.26px"
                height="4.07px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.263427734375,
                  height: 4.068115234375,
                }}
                paths={[
                  {
                    d: "M5.26349 4.06816L0 0.0428151L4.13432 0C4.25382 1.41453 4.63679 2.79428 5.26349 4.06816Z",
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
                {...getOverrideProps(overrides, "Vector2582505")}
              ></Icon>
            </View>
            <Icon
              width="16.38px"
              height="20.86px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16.37548828125,
                height: 20.8592529296875,
              }}
              paths={[
                {
                  d: "M0.466732 14.0743C0.905389 16.6067 2.28799 19.0051 4.52332 19.8225C7.17628 20.7934 9.14151 20.8592 12.2006 20.8592C16.375 20.8592 16.237 16.5076 16.3544 12.1227C16.4733 7.71995 16.1219 2.99729 14.472 1.4631C11.1801 -1.59892 1.51339 0.340416 0.337428 5.46228C-0.270584 8.11202 0.0490957 11.6636 0.466732 14.0743Z",
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
              {...getOverrideProps(overrides, "Vector2582506")}
            ></Icon>
            <Icon
              width="22.99px"
              height="21.92px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.99462890625,
                height: 21.91943359375,
              }}
              paths={[
                {
                  d: "M21.3154 5.93154C21.3154 5.93154 23.0252 5.54978 22.5568 3.84593C22.2466 2.71571 20.7982 2.96665 20.7982 2.96665C20.7982 2.96665 22.1697 2.7157 22.1697 1.51888C22.1697 0.765667 21.5898 -0.512421 19.8411 0.217802C17.789 1.07449 15.449 0.964278 13.6694 0.66537C12.6628 0.445054 11.641 0.300875 10.6127 0.234056L10.6075 0.234056C9.42539 0.213365 8.24689 0.370932 7.11175 0.701446C3.93089 1.65288 -0.88323 4.50321 0.140039 10.9662C1.28229 18.1788 4.6686 20.9372 6.15829 21.822C6.24644 21.8751 6.3455 21.9075 6.448 21.9167C6.55049 21.9259 6.65375 21.9116 6.74995 21.8751C6.84615 21.8386 6.93277 21.7806 7.00328 21.7057C7.07379 21.6308 7.12634 21.5408 7.15696 21.4426C7.57936 20.0908 8.30715 16.6894 8.10408 9.67582C17.8815 9.19653 20.6943 9.05104 20.6943 9.05104C20.6943 9.05104 22.9946 9.13746 22.9946 7.4566C22.9946 5.77574 21.3154 5.93154 21.3154 5.93154Z",
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
              {...getOverrideProps(overrides, "Vector2582507")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="7.31px"
              height="2.73px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="38.75%"
              bottom="51.91%"
              left="50.46%"
              right="17.74%"
              {...getOverrideProps(overrides, "Group2582508")}
            >
              <Icon
                width="1.15px"
                height="1.15px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 1.1494140625,
                  height: 1.1488037109375,
                }}
                paths={[
                  {
                    d: "M0.574698 1.14885C0.892095 1.14885 1.1494 0.891675 1.1494 0.574428C1.1494 0.257181 0.892095 0 0.574698 0C0.257302 0 0 0.257181 0 0.574428C0 0.891675 0.257302 1.14885 0.574698 1.14885Z",
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
                bottom="0%"
                left="12.79%"
                right="71.49%"
                {...getOverrideProps(overrides, "Vector2582509")}
              ></Icon>
              <Icon
                width="1.15px"
                height="1.15px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 1.1494140625,
                  height: 1.1488037109375,
                }}
                paths={[
                  {
                    d: "M0.574698 1.14885C0.892095 1.14885 1.1494 0.891669 1.1494 0.574422C1.1494 0.257175 0.892095 0 0.574698 0C0.257302 0 0 0.257175 0 0.574422C0 0.891669 0.257302 1.14885 0.574698 1.14885Z",
                    fill: "rgba(15,16,17,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="44.29%"
                bottom="13.61%"
                left="74.8%"
                right="9.48%"
                {...getOverrideProps(overrides, "Vector2582510")}
              ></Icon>
              <Icon
                width="2.06px"
                height="0.56px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 2.064453125,
                  height: 0.5589599609375,
                }}
                paths={[
                  {
                    d: "M1.79273 0.558961L1.78916 0.558961L0.266939 0.539937C0.195301 0.538892 0.126995 0.509521 0.0769702 0.458257C0.026945 0.406992 -0.000727369 0.338007 1.45423e-05 0.266399C0.00187428 0.195165 0.0314772 0.127466 0.0825137 0.0777119C0.13355 0.027958 0.202001 7.90231e-05 0.273293 0L1.7959 0.0190242C1.86753 0.0194448 1.93607 0.04829 1.98642 0.0992162C2.03678 0.150143 2.06483 0.218977 2.06441 0.290577C2.06399 0.362177 2.03512 0.430682 1.98417 0.481013C1.93322 0.531345 1.86436 0.559381 1.79273 0.558961Z",
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
                bottom="79.52%"
                left="71.76%"
                right="0%"
                {...getOverrideProps(overrides, "Vector2582511")}
              ></Icon>
              <Icon
                width="2.04px"
                height="0.9px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 2.03759765625,
                  height: 0.89990234375,
                }}
                paths={[
                  {
                    d: "M0.269404 0.899872C0.203354 0.899704 0.139656 0.875349 0.0903534 0.831415C0.0410512 0.787482 0.00956815 0.727017 0.00185072 0.661449C-0.00586672 0.595882 0.0107193 0.529758 0.0484744 0.475587C0.0862294 0.421416 0.142535 0.382952 0.206743 0.367467L1.70754 0.00672036C1.7768 -0.00902057 1.84947 0.00314045 1.90983 0.0405768C1.97018 0.0780131 2.01335 0.137708 2.02999 0.206732C2.04663 0.275755 2.0354 0.348553 1.99873 0.409356C1.96205 0.470159 1.90289 0.514072 1.83406 0.531589L0.332864 0.892341C0.312085 0.89736 0.290781 0.899888 0.269404 0.899872Z",
                    fill: "rgba(15,16,17,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="7.83%"
                bottom="59.2%"
                left="0%"
                right="72.13%"
                {...getOverrideProps(overrides, "Vector2582512")}
              ></Icon>
            </View>
            <Icon
              width="4.88px"
              height="4.9px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 4.87890625,
                height: 4.9000244140625,
              }}
              paths={[
                {
                  d: "M4.86788 2.23218C4.89871 2.55341 4.86537 2.87756 4.76978 3.18579C4.67418 3.49403 4.51825 3.7802 4.31104 4.02768C4.10384 4.27516 3.8495 4.47901 3.56279 4.62738C3.27608 4.77574 2.96272 4.86567 2.64093 4.89194C2.31915 4.91821 1.99535 4.88029 1.68835 4.78039C1.38136 4.68049 1.09728 4.5206 0.85265 4.31001C0.608015 4.09942 0.407694 3.84233 0.26333 3.55368C0.118966 3.26503 0.0334399 2.95058 0.0117175 2.62861C-0.02004 2.30881 0.0129161 1.98591 0.108632 1.67911C0.204348 1.37232 0.360866 1.08792 0.568853 0.842852C0.77684 0.597787 1.03205 0.397068 1.31927 0.252654C1.6065 0.10824 1.91986 0.0230848 2.2407 0.00226032C3.97589 -0.0524469 4.75682 0.891452 4.86788 2.23218Z",
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
              {...getOverrideProps(overrides, "Vector2582513")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="1.78px"
              height="2.85px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="47.29%"
              bottom="42.97%"
              left="67.26%"
              right="25%"
              {...getOverrideProps(overrides, "Group2582514")}
            >
              <Icon
                width="1.78px"
                height="2.85px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 1.780029296875,
                  height: 2.845703125,
                }}
                paths={[
                  {
                    d: "M0.19843 2.84574C0.150921 2.84577 0.104982 2.82874 0.0689682 2.79777C0.0329546 2.7668 0.00926538 2.72394 0.00220385 2.67698C-0.00485767 2.63002 0.00517682 2.58209 0.0304903 2.54191C0.0558038 2.50172 0.094708 2.47196 0.140126 2.45802L1.30895 2.09926L0.491135 0.279647C0.469571 0.23165 0.467962 0.177055 0.486669 0.127876C0.505375 0.0786971 0.542863 0.0389625 0.590882 0.0174089C0.638901 -0.00414476 0.693521 -0.00574703 0.742724 0.0129507C0.791926 0.0316485 0.831679 0.0691128 0.853243 0.117109L1.76268 2.14168C1.77422 2.16731 1.78017 2.1951 1.78014 2.2232C1.78011 2.2513 1.77409 2.27908 1.7625 2.30469C1.75091 2.33029 1.73401 2.35314 1.71291 2.37172C1.69181 2.39029 1.66701 2.40418 1.64013 2.41244L0.256734 2.83701C0.237831 2.84276 0.218186 2.8457 0.19843 2.84574Z",
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
                {...getOverrideProps(overrides, "Vector2582515")}
              ></Icon>
            </View>
            <Icon
              width="3.61px"
              height="1.54px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.609130859375,
                height: 1.5439453125,
              }}
              paths={[
                {
                  d: "M0 0.295737C0 0.295737 2.1215 0.519322 3.60921 0C3.60921 0 3.5973 1.39622 1.91882 1.53418C0.240342 1.67214 0 0.295737 0 0.295737Z",
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
              bottom="34.11%"
              left="58.18%"
              right="26.12%"
              {...getOverrideProps(overrides, "Vector2582516")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="61.2px"
            height="8.44px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="10.24%"
            bottom="85.78%"
            left="63.95%"
            right="18.56%"
            {...getOverrideProps(overrides, "Group2582517")}
          >
            <Icon
              width="7.45px"
              height="8.05px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.451904296875,
                height: 8.05419921875,
              }}
              paths={[
                {
                  d: "M7.45202 4.02535C7.45202 5.32035 7.13076 6.31552 6.48824 7.01085C5.84572 7.70619 4.92493 8.05399 3.72583 8.05426C2.52646 8.05426 1.60564 7.70646 0.963386 7.01085C0.321133 6.31525 -4.509e-14 5.31638 0 4.01425C0 2.71237 0.322066 1.71786 0.96617 1.03072C1.61027 0.343573 2.53372 2.8168e-15 3.73653 0C4.93907 0 5.85895 0.345951 6.49618 1.03785C7.13341 1.72975 7.45202 2.72559 7.45202 4.02535ZM1.74076 4.02535C1.69214 4.71973 1.86652 5.4115 2.23852 5.99996C2.41364 6.22343 2.64078 6.40069 2.90016 6.51629C3.15953 6.63189 3.44325 6.68232 3.7266 6.66319C5.05103 6.66319 5.71312 5.78391 5.71285 4.02535C5.71259 2.26678 5.05409 1.38565 3.73732 1.38195C3.4527 1.36309 3.16775 1.41388 2.9072 1.52994C2.64665 1.64599 2.41835 1.8238 2.24208 2.04795C1.86701 2.63627 1.691 3.32946 1.73996 4.02535L1.74076 4.02535Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="4.49%"
              bottom="0.09%"
              left="0%"
              right="87.82%"
              {...getOverrideProps(overrides, "Vector2582518")}
            ></Icon>
            <Icon
              width="5.53px"
              height="6.1px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.532958984375,
                height: 6.10009765625,
              }}
              paths={[
                {
                  d: "M5.52524 6.10015L3.89279 6.10015L3.89279 2.60563C3.91629 2.26614 3.8359 1.92753 3.66233 1.63477C3.57698 1.52375 3.46513 1.43592 3.33701 1.37934C3.20888 1.32275 3.06858 1.29921 2.92899 1.31089C2.73819 1.2944 2.54639 1.32792 2.37251 1.40814C2.19862 1.48837 2.04867 1.61253 1.93745 1.76837C1.69695 2.23602 1.59123 2.76127 1.63207 3.2855L1.63207 6.10015L0 6.10015L0 0.117635L1.24734 0.117635L1.46668 0.88314L1.55751 0.88314C1.73843 0.595008 2.00062 0.366858 2.31107 0.227446C2.65355 0.0744734 3.02551 -0.00131696 3.40057 0.00544657C3.68971 -0.0154522 3.98004 0.0239361 4.25314 0.121115C4.52624 0.218293 4.77616 0.371141 4.98704 0.569962C5.37415 1.02113 5.5683 1.60632 5.52762 2.19929L5.52524 6.10015Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="26.37%"
              bottom="1.36%"
              left="14.62%"
              right="76.34%"
              {...getOverrideProps(overrides, "Vector2582519")}
            ></Icon>
            <Icon
              width="1.63px"
              height="8.33px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 1.6328125,
                height: 8.3250732421875,
              }}
              paths={[
                {
                  d: "M1.63287 8.32502L0 8.32502L0 0L1.63287 0L1.63287 8.32502Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0.01%"
              bottom="1.36%"
              left="26.39%"
              right="70.94%"
              {...getOverrideProps(overrides, "Vector2582520")}
            ></Icon>
            <Icon
              width="1.78px"
              height="8.33px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 1.778564453125,
                height: 8.326171875,
              }}
              paths={[
                {
                  d: "M1.76905e-07 0.79722C1.76905e-07 0.266005 0.296136 0.000264483 0.888416 1.96934e-07C1.4807 -0.000264089 1.77698 0.265476 1.77724 0.79722C1.78363 0.905849 1.76716 1.01461 1.7289 1.11649C1.69064 1.21836 1.63146 1.31109 1.55514 1.38869C1.36859 1.54263 1.12962 1.61836 0.888416 1.59999C0.295872 1.59999 -0.000264234 1.3324 1.76905e-07 0.79722ZM1.70227 8.32621L0.0694031 8.32621L0.0694031 2.34369L1.70227 2.34369L1.70227 8.32621Z",
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
              bottom="1.36%"
              left="31.74%"
              right="65.35%"
              {...getOverrideProps(overrides, "Vector2582521")}
            ></Icon>
            <Icon
              width="5.53px"
              height="6.1px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.53369140625,
                height: 6.1002197265625,
              }}
              paths={[
                {
                  d: "M5.52604 6.10019L3.89317 6.10019L3.89317 2.60566C3.91667 2.26617 3.83631 1.92756 3.66274 1.6348C3.57742 1.52376 3.46555 1.43591 3.33742 1.37932C3.20928 1.32273 3.06899 1.29921 2.9294 1.31092C2.73861 1.29455 2.54685 1.32813 2.37299 1.40834C2.19913 1.48856 2.04916 1.61265 1.93786 1.7684C1.69772 2.23617 1.59214 2.76136 1.63287 3.28554L1.63287 6.10019L0 6.10019L0 0.11767L1.24734 0.11767L1.46668 0.883175L1.5579 0.883175C1.73876 0.594996 2.00099 0.366832 2.31148 0.227481C2.65396 0.0745081 3.0259 -0.00128233 3.40096 0.00548119C3.6901 -0.0154907 3.98046 0.0238641 4.25357 0.121046C4.52669 0.218229 4.77659 0.371115 4.98742 0.569997C5.37468 1.0211 5.56899 1.6063 5.52841 2.19932L5.52604 6.10019Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="26.37%"
              bottom="1.36%"
              left="37.32%"
              right="53.64%"
              {...getOverrideProps(overrides, "Vector2582522")}
            ></Icon>
            <Icon
              width="5.53px"
              height="6.21px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.52880859375,
                height: 6.213134765625,
              }}
              paths={[
                {
                  d: "M3.08131 6.20763C2.67035 6.23209 2.25864 6.17415 1.87041 6.03724C1.48217 5.90033 1.12523 5.68721 0.820598 5.41041C0.537423 5.10951 0.319069 4.75369 0.179075 4.365C0.0390819 3.97632 -0.0195698 3.56303 0.00674202 3.15077C-0.0470372 2.30828 0.22245 1.47698 0.760322 0.826104C1.02726 0.547414 1.35133 0.329717 1.71032 0.187939C2.06932 0.0461599 2.45473 -0.0163468 2.84016 0.00470279C3.20136 -0.0169 3.56315 0.0360828 3.90297 0.16035C4.24278 0.284618 4.55335 0.477507 4.81532 0.726997C5.06041 0.995749 5.24938 1.31069 5.37115 1.65336C5.49292 1.99604 5.54503 2.35956 5.52446 2.72262L5.52446 3.51548L1.66459 3.51548C1.65813 3.91694 1.80575 4.30563 2.07709 4.6017C2.22104 4.7372 2.39124 4.8418 2.57719 4.90902C2.76314 4.97625 2.96088 5.00468 3.15825 4.99258C3.50224 4.99427 3.84529 4.95663 4.18072 4.88039C4.52779 4.79599 4.86515 4.67575 5.18734 4.52162L5.18734 5.78464C4.89673 5.92831 4.58919 6.03486 4.27196 6.10179C3.87979 6.17801 3.48078 6.21348 3.08131 6.20763ZM2.85127 1.16703C2.69979 1.15903 2.54841 1.18435 2.40779 1.2412C2.26717 1.29805 2.14073 1.38505 2.03741 1.49607C1.82371 1.76096 1.70502 2.08981 1.7003 2.43006L3.99154 2.43006C4.00611 2.09006 3.89294 1.75691 3.67425 1.49607C3.56853 1.38568 3.44038 1.2992 3.29843 1.24245C3.15648 1.18569 3.004 1.15998 2.85127 1.16703Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="26.36%"
              bottom="0.03%"
              left="48.49%"
              right="42.48%"
              {...getOverrideProps(overrides, "Vector2582523")}
            ></Icon>
            <Icon
              width="5.91px"
              height="7.82px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.90966796875,
                height: 7.823486328125,
              }}
              paths={[
                {
                  d: "M3.78489 7.82353L2.12544 7.82353L2.12544 1.38116L0 1.38116L0 0L5.90956 0L5.90956 1.38116L3.78489 1.38116L3.78489 7.82353Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5.96%"
              bottom="1.36%"
              left="63.3%"
              right="27.05%"
              {...getOverrideProps(overrides, "Vector2582524")}
            ></Icon>
            <Icon
              width="5.53px"
              height="6.21px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 5.526611328125,
                height: 6.213134765625,
              }}
              paths={[
                {
                  d: "M3.08129 6.20763C2.67033 6.23209 2.25862 6.17415 1.87038 6.03724C1.48214 5.90033 1.12523 5.68721 0.820599 5.41041C0.537423 5.10951 0.319069 4.75369 0.179076 4.365C0.0390824 3.97632 -0.0195693 3.56303 0.0067425 3.15077C-0.0470367 2.30828 0.222426 1.47698 0.760298 0.826104C1.02724 0.547414 1.35133 0.329717 1.71032 0.187939C2.06932 0.0461599 2.45473 -0.0163468 2.84016 0.00470279C3.20136 -0.0169 3.56313 0.0360828 3.90294 0.16035C4.24276 0.284618 4.55333 0.477507 4.8153 0.726997C5.05996 0.995939 5.24851 1.31097 5.36987 1.65363C5.49123 1.9963 5.54297 2.35972 5.52208 2.72262L5.52208 3.51548L1.6622 3.51548C1.65579 3.91686 1.80322 4.30549 2.07428 4.6017C2.21833 4.73718 2.38862 4.84174 2.57463 4.90897C2.76063 4.97619 2.95845 5.00465 3.15587 4.99258C3.49986 4.99427 3.84292 4.95663 4.17835 4.88039C4.52542 4.79599 4.86276 4.67575 5.18495 4.52162L5.18495 5.78464C4.89433 5.92831 4.58679 6.03486 4.26956 6.10179C3.87818 6.17785 3.47997 6.21332 3.08129 6.20763ZM2.85127 1.16703C2.69979 1.15903 2.54839 1.18435 2.40776 1.2412C2.26714 1.29805 2.14073 1.38505 2.03741 1.49607C1.82371 1.76096 1.705 2.08981 1.70028 2.43006L3.99154 2.43006C4.00611 2.09006 3.89291 1.75691 3.67423 1.49607C3.5685 1.38568 3.44036 1.2992 3.29841 1.24245C3.15645 1.18569 3.004 1.15998 2.85127 1.16703Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="26.36%"
              bottom="0.03%"
              left="74.1%"
              right="16.87%"
              {...getOverrideProps(overrides, "Vector2582525")}
            ></Icon>
            <Icon
              width="4.54px"
              height="6.22px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 4.544921875,
                height: 6.2196044921875,
              }}
              paths={[
                {
                  d: "M4.54212 4.32821C4.55795 4.59629 4.50795 4.86418 4.39644 5.10851C4.28493 5.35284 4.11531 5.5662 3.90239 5.72998C3.33222 6.09078 2.66144 6.25958 1.98832 6.21164C1.6153 6.2168 1.2426 6.18734 0.875019 6.12364C0.579302 6.06802 0.290365 5.98097 0.0131587 5.86397L0.0131587 4.51612C0.34263 4.66739 0.685826 4.78686 1.03803 4.8729C1.36549 4.9618 1.70262 5.01027 2.04187 5.0172C2.63441 5.0172 2.93067 4.84541 2.93067 4.50184C2.93289 4.44439 2.9235 4.38708 2.90305 4.33334C2.88261 4.2796 2.85154 4.23053 2.81169 4.18906C2.6901 4.07866 2.55301 3.98664 2.40476 3.91592C2.21201 3.81391 1.95514 3.69498 1.63414 3.55913C1.27597 3.42133 0.935413 3.24155 0.619605 3.02356C0.418073 2.87742 0.256118 2.68341 0.148406 2.45904C0.0432013 2.21151 -0.00699112 1.94411 0.00127278 1.6753C-0.00894124 1.43411 0.0424539 1.19428 0.150633 0.978444C0.258812 0.762604 0.42022 0.577854 0.619605 0.441612C1.14555 0.120392 1.75742 -0.0318134 2.37264 0.00554043C3.09995 0.00700099 3.81811 0.167616 4.47669 0.476102L3.98409 1.6535C3.68424 1.52505 3.40409 1.41934 3.14365 1.33635C2.88568 1.25465 2.61668 1.21307 2.34606 1.21306C1.8643 1.21306 1.6233 1.34336 1.62303 1.60394C1.62644 1.68183 1.64965 1.75757 1.69045 1.82401C1.73125 1.89046 1.78831 1.94542 1.85625 1.98372C2.18132 2.17227 2.52257 2.33147 2.87594 2.45944C3.23884 2.59354 3.58395 2.77154 3.90357 2.98946C4.10753 3.13705 4.27285 3.33166 4.38547 3.55675C4.49595 3.79857 4.54953 4.06247 4.54212 4.32821Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="26.31%"
              bottom="0%"
              left="84.7%"
              right="7.88%"
              {...getOverrideProps(overrides, "Vector2582526")}
            ></Icon>
            <Icon
              width="4.15px"
              height="7.37px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 4.154052734375,
                height: 7.368408203125,
              }}
              paths={[
                {
                  d: "M3.12652 6.06259C3.47648 6.05144 3.82283 5.98825 4.15415 5.87508L4.15415 7.08855C3.6791 7.28311 3.16851 7.37589 2.65535 7.3609C2.39585 7.38453 2.13429 7.35263 1.88809 7.26732C1.64189 7.18201 1.41672 7.04525 1.22754 6.86616C0.899167 6.44383 0.739821 5.91445 0.780547 5.38113L0.780547 2.49869L0 2.49869L0 1.80811L0.89914 1.26302L1.37031 0L2.4146 0L2.4146 1.27333L4.08991 1.27333L4.08991 2.49869L2.4146 2.49869L2.4146 5.38391C2.40646 5.47893 2.41975 5.57457 2.45353 5.66377C2.4873 5.75296 2.54069 5.83344 2.60974 5.89927C2.75658 6.01437 2.94017 6.07239 3.12652 6.06259Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.68%"
              bottom="0.02%"
              left="93.21%"
              right="0%"
              {...getOverrideProps(overrides, "Vector2582527")}
            ></Icon>
          </View>
        </View>
      </View>
      <View
        width="1440px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Bottom Secondary Frame")}
      >
        <Flex
          gap="30px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="calc(50% - 10.5px - -0.5px)"
          left="850px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 51")}
        >
          <Text
            fontFamily="Oswald"
            fontSize="14px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="20.74799919128418px"
            textAlign="right"
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
            children="Terms"
            {...getOverrideProps(overrides, "Terms")}
          ></Text>
          <Text
            fontFamily="Oswald"
            fontSize="14px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="20.74799919128418px"
            textAlign="right"
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
            children="Privacy"
            {...getOverrideProps(overrides, "Privacy")}
          ></Text>
          <Text
            fontFamily="Oswald"
            fontSize="14px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="20.74799919128418px"
            textAlign="right"
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
            children="CA Privacy Rights"
            {...getOverrideProps(overrides, "CA Privacy Rights")}
          ></Text>
          <Text
            fontFamily="Oswald"
            fontSize="14px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="20.74799919128418px"
            textAlign="right"
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
            children="Your Privacy Choices"
            {...getOverrideProps(overrides, "Your Privacy Choices")}
          ></Text>
          <Text
            fontFamily="Oswald"
            fontSize="14px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="20.74799919128418px"
            textAlign="right"
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
            children="© 2023 Parazon"
            {...getOverrideProps(overrides, "\u00A9 2023 Parazon")}
          ></Text>
        </Flex>
      </View>
    </Flex>
  );
}
