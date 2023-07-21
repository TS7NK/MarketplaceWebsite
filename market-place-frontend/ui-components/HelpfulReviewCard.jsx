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
import UsersProfile from "./UsersProfile";
import Star from "./Star";
import { Flex, Text } from "@aws-amplify/ui-react";
import Verificationtag from "./Verificationtag";
import Helpfulbutton from "./Helpfulbutton";
export default function HelpfulReviewCard(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "helpful" },
      overrides: {
        "User's Profile": {},
        star3877515: {},
        star3877516: {},
        star3877517: {},
        star3877518: {},
        star3877519: {},
        "5 stars": {},
        "Simple, very useful": {},
        "rating filter": {},
        "verification tag": {},
        "Posted Date": {},
        "Review Details": {},
        "4 people find this helpful": {},
        "helpful button": {},
        "Frame 108": {},
        HelpfulReviewCard: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "HelpfulReviewCard")}
      {...rest}
    >
      <UsersProfile
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
        padding="0px 0px 0px 0px"
        property1="Default"
        {...getOverrideProps(overrides, "User's Profile")}
      ></UsersProfile>
      <Flex
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
        display="flex"
        {...getOverrideProps(overrides, "rating filter")}
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
          display="flex"
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
            {...getOverrideProps(overrides, "star3877515")}
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
            {...getOverrideProps(overrides, "star3877516")}
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
            {...getOverrideProps(overrides, "star3877517")}
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
            {...getOverrideProps(overrides, "star3877518")}
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
            {...getOverrideProps(overrides, "star3877519")}
          ></Star>
        </Flex>
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="500"
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
          children="Simple, very useful"
          {...getOverrideProps(overrides, "Simple, very useful")}
        ></Text>
      </Flex>
      <Verificationtag
        display="flex"
        gap="3px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "verification tag")}
      ></Verificationtag>
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(141,143,155,1)"
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
        children="Posted on June 22, 2023"
        {...getOverrideProps(overrides, "Posted Date")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(76,76,76,1)"
        lineHeight="15.59999942779541px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="450px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="It has the best performing prompts! Solid frameworks and clear instructions. It has the best performing prompts! It has solid frameworks and clear instructions. It has the best performing prompts! Solid frameworks and clear instructions."
        {...getOverrideProps(overrides, "Review Details")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(141,143,155,1)"
        lineHeight="14.0625px"
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
        children="4 people find this helpful"
        {...getOverrideProps(overrides, "4 people find this helpful")}
      ></Text>
      <Flex
        gap="15px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 108")}
      >
        <Helpfulbutton
          display="flex"
          gap="15px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          property1="Default"
          {...getOverrideProps(overrides, "helpful button")}
        ></Helpfulbutton>
      </Flex>
    </Flex>
  );
}
