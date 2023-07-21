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
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import Searchbar from "./Searchbar";
import AskaQuestionButton from "./AskaQuestionButton";
import QuestionCard from "./QuestionCard";
import HelpfulQuestionCard from "./HelpfulQuestionCard";
import Pageselection from "./Pageselection";
export default function QA(props) {
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
      {...getOverrideProps(overrides, "QA")}
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
            property1="Default"
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
            property1="active"
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
              children="Search Questions"
              {...getOverrideProps(overrides, "Search Questions")}
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
                children="Search to find specific info"
                {...getOverrideProps(overrides, "Search to find specific info")}
              ></Text>
            </Flex>
            <Searchbar
              display="flex"
              gap="7px"
              direction="row"
              width="300px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="20px"
              padding="8px 15px 8px 15px"
              backgroundColor="rgba(83,84,92,0.12)"
              searchBar="Default"
              {...getOverrideProps(overrides, "Search bar")}
            ></Searchbar>
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
                children="Ask a Question"
                {...getOverrideProps(overrides, "Ask a Question")}
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
                children="Receive specific answers from other users"
                {...getOverrideProps(
                  overrides,
                  "Receive specific answers from other users"
                )}
              ></Text>
            </Flex>
            <AskaQuestionButton
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
              {...getOverrideProps(overrides, "Ask a Question Button")}
            ></AskaQuestionButton>
          </Flex>
        </Flex>
        <Flex
          gap="60px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 115")}
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
            {...getOverrideProps(overrides, "Frame 111")}
          >
            <QuestionCard
              display="flex"
              gap="15px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              property1="Default"
              {...getOverrideProps(overrides, "Question Card43123005")}
            ></QuestionCard>
            <QuestionCard
              display="flex"
              gap="15px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              property1="Default"
              {...getOverrideProps(overrides, "Question Card43123006")}
            ></QuestionCard>
            <QuestionCard
              display="flex"
              gap="15px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              property1="Default"
              {...getOverrideProps(overrides, "Question Card43123007")}
            ></QuestionCard>
            <HelpfulQuestionCard
              display="flex"
              gap="15px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              property1="helpful"
              {...getOverrideProps(overrides, "Helpful Question Card43123008")}
            ></HelpfulQuestionCard>
            <HelpfulQuestionCard
              display="flex"
              gap="15px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              property1="helpful"
              {...getOverrideProps(overrides, "Helpful Question Card43123009")}
            ></HelpfulQuestionCard>
          </Flex>
          <Pageselection
            display="flex"
            gap="30px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "page selection")}
          ></Pageselection>
        </Flex>
      </Flex>
    </Flex>
  );
}
