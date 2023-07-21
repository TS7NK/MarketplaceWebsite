/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import CopyPromptButton from "./CopyPromptButton";
import Closebutton from "./Closebutton";
export default function ViewPromptPopup(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="500px"
      height="550px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="30px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ViewPromptPopup")}
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
        top="80px"
        left="calc(50% - 190px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 179")}
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
          children="Marketing to Boost Sales"
          {...getOverrideProps(overrides, "Marketing to Boost Sales")}
        ></Text>
        <View
          width="382px"
          height="302px"
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
            height="290px"
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
              height="280px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="10px"
              left="10px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="I want you to act as a cover letter writer. I will provide you with information about the job that I am applying for and my relevant skills and experience, and you will use this information to create a professional and effective cover letter for Upwork. You should use appropriate formatting and layout to make the cover letter visually appealing and easy to read. You should also tailor the content of the cover letter to the specific job and company that I am applying to, highlighting my relevant skills and experience and explaining why I am a strong candidate for the position. Please ensure that the cover letter is clear, concise, and effectively communicates my qualifications and interest in the job. The cover letter should also open strong and and convey enthusiasm. Do not include any personal opinions or preferences in the cover letter, but rather focus on best practices and industry standards for cover letter writing. Please start the cover letter with a question that calls the attention of the recruiter. The job description is {[Job description]:Software Development Engineer, X company Job posting category Software Development Job display language English (US) Job summary Want to change the way people watch Live Sports? Passionate about building, owning and operating massively scalable systems? Looking forward to work with a team of highly competent software engineers ranging from new graduates to seasoned architects building software using the latest technologies? Are you looking for an inclusive team, where you feel safe to be yourself, to share your ideas openly, to experiment, fail and learn, and where you help make decisions that shape the team’s path forward? If so, here is an opportunity tailored for you. Key job responsibilities • Collaborate with experienced cross-disciplinary people to develop, design, and bring to market innovative devices and services. • Design and build innovative technologies in a large distributed computing environment and help lead fundamental changes in the industry • Design and develop large scale highly distributed, high performance and low latency systems with exposure to cutting edge technologies at incredible scale and speed • Build distributed systems that are scalable, fault-tolerant, low cost, and easy to manage/use. Have a lot of fun, mentor and grow new and junior team members while you are technically delivering results.}My relevant skills and experience are {[Relevant skills and experience]: Familiar with Java, C++, Python, 1 software development internship at a startup}."
              {...getOverrideProps(overrides, "List Title")}
            ></Text>
          </View>
        </View>
        <CopyPromptButton
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
          {...getOverrideProps(overrides, "Copy Prompt Button")}
        ></CopyPromptButton>
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
          children="View Prompt"
          {...getOverrideProps(overrides, "View Prompt")}
        ></Text>
      </Flex>
    </View>
  );
}
