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
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import PromptSeller from "./PromptSeller";
import Helpfulbutton from "./Helpfulbutton";
export default function QuestionCard(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        Vector2974247: {},
        Question: {},
        question: {},
        "Review Details2974215": {},
        "Posted Date2974250": {},
        "Frame 1112974252": {},
        "Frame 109": {},
        Vector2974242: {},
        Answer: {},
        answer: {},
        "Review Details2974254": {},
        "Posted Date2974255": {},
        "Prompt Seller": {},
        "Frame 112": {},
        "Frame 1112974253": {},
        "Frame 110": {},
        "helpful button": {},
        "Frame 108": {},
        QuestionCard: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="15px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "QuestionCard")}
      {...rest}
    >
      <Flex
        gap="30px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 109")}
      >
        <Flex
          gap="6px"
          direction="row"
          width="80px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "question")}
        >
          <Icon
            width="16px"
            height="16px"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
            paths={[
              {
                d: "M8 0C10.1217 -2.53765e-16 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 6.34413e-16 10.1217 0 8C-2.53765e-16 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 1.77636e-15 8 0ZM8.424 3.41943C7.49371 3.41943 6.76457 3.68343 6.224 4.21143C5.67086 4.73943 5.40686 5.46857 5.40686 6.39886L6.84 6.39886C6.84 5.87086 6.94057 5.456 7.15429 5.16686C7.39314 4.81486 7.78286 4.65143 8.336 4.65143C8.76343 4.65143 9.10286 4.76457 9.34171 5.00343C9.568 5.24229 9.69372 5.56914 9.69372 5.984C9.69372 6.29829 9.58057 6.6 9.35429 6.87657L9.20343 7.05257C8.38629 7.78171 7.896 8.30971 7.73257 8.64914C7.55657 8.98857 7.48114 9.40343 7.48114 9.88114L7.48114 10.0571L8.92686 10.0571L8.92686 9.88114C8.92686 9.57943 8.98971 9.31543 9.11543 9.064C9.22857 8.83771 9.392 8.624 9.61829 8.43543C10.2217 7.90743 10.5863 7.568 10.6994 7.44229C11.0011 7.04 11.1646 6.52457 11.1646 5.896C11.1646 5.12914 10.9131 4.52571 10.4103 4.08571C9.90743 3.63314 9.24114 3.41943 8.424 3.41943ZM8.19771 10.6731C7.94139 10.6662 7.69276 10.7611 7.50629 10.9371C7.41422 11.0239 7.34188 11.1294 7.29416 11.2465C7.24644 11.3636 7.22446 11.4896 7.22971 11.616C7.22971 11.8926 7.31771 12.1189 7.50629 12.2949C7.69136 12.4745 7.93981 12.5739 8.19771 12.5714C8.47429 12.5714 8.70057 12.4834 8.88914 12.3074C8.98316 12.2189 9.0575 12.1116 9.10731 11.9925C9.15713 11.8734 9.18131 11.7451 9.17829 11.616C9.1807 11.49 9.15742 11.3648 9.10987 11.2481C9.06232 11.1314 8.9915 11.0256 8.90171 10.9371C8.71039 10.7608 8.45781 10.6661 8.19771 10.6731Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector2974247")}
          ></Icon>
          <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
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
            children="Question:"
            {...getOverrideProps(overrides, "Question")}
          ></Text>
        </Flex>
        <Flex
          gap="6px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 1112974252")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,131,252,1)"
            lineHeight="18.19999885559082px"
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
            children="I have canceled my purchase and my money isnt bacj on my card. What should i do?"
            {...getOverrideProps(overrides, "Review Details2974215")}
          ></Text>
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
            children="Posted on June 19, 2023 by @Anonymous"
            {...getOverrideProps(overrides, "Posted Date2974250")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="30px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 110")}
      >
        <Flex
          gap="6px"
          direction="row"
          width="80px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "answer")}
        >
          <Icon
            width="16px"
            height="16px"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
            paths={[
              {
                d: "M8 0C8.73438 0 9.44271 0.09375 10.125 0.28125C10.8073 0.46875 11.4427 0.739583 12.0312 1.09375C12.6198 1.44792 13.1589 1.86458 13.6484 2.34375C14.138 2.82292 14.5573 3.36198 14.9062 3.96094C15.2552 4.5599 15.5234 5.19792 15.7109 5.875C15.8984 6.55208 15.9948 7.26042 16 8C16 8.73438 15.9062 9.44271 15.7188 10.125C15.5312 10.8073 15.2604 11.4427 14.9062 12.0312C14.5521 12.6198 14.1354 13.1589 13.6562 13.6484C13.1771 14.138 12.638 14.5573 12.0391 14.9062C11.4401 15.2552 10.8021 15.5234 10.125 15.7109C9.44792 15.8984 8.73958 15.9948 8 16C7.26562 16 6.55729 15.9062 5.875 15.7188C5.19271 15.5312 4.55729 15.2604 3.96875 14.9062C3.38021 14.5521 2.84115 14.1354 2.35156 13.6562C1.86198 13.1771 1.44271 12.638 1.09375 12.0391C0.744792 11.4401 0.476562 10.8021 0.289062 10.125C0.101562 9.44792 0.00520833 8.73958 0 8C0 7.26562 0.09375 6.55729 0.28125 5.875C0.46875 5.19271 0.739583 4.55729 1.09375 3.96875C1.44792 3.38021 1.86458 2.84115 2.34375 2.35156C2.82292 1.86198 3.36198 1.44271 3.96094 1.09375C4.5599 0.744792 5.19792 0.476562 5.875 0.289062C6.55208 0.101562 7.26042 0.00520833 8 0ZM12.7109 5.35156L11.6484 4.28906L6.5 9.4375L4.35156 7.28906L3.28906 8.35156L6.5 11.5625L12.7109 5.35156Z",
                fill: "rgba(12,188,139,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector2974242")}
          ></Icon>
          <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
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
            children="Answer:"
            {...getOverrideProps(overrides, "Answer")}
          ></Text>
        </Flex>
        <Flex
          gap="6px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 1112974253")}
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
            width="450px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Have you given it at least 10 days. Have you given it at least 10 days.Have you given it at least 10 days."
            {...getOverrideProps(overrides, "Review Details2974254")}
          ></Text>
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
            {...getOverrideProps(overrides, "Frame 112")}
          >
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
              children="Posted on June 21, 2023 by"
              {...getOverrideProps(overrides, "Posted Date2974255")}
            ></Text>
            <PromptSeller
              width="73px"
              height="14px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              property1="Default"
              {...getOverrideProps(overrides, "Prompt Seller")}
            ></PromptSeller>
          </Flex>
        </Flex>
      </Flex>
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
          backgroundColor="rgba(255,241,167,1)"
          property1="Default"
          {...getOverrideProps(overrides, "helpful button")}
        ></Helpfulbutton>
      </Flex>
    </Flex>
  );
}
