/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Scrollbuttonbig from "./Scrollbuttonbig";
import PageNumberButton from "./PageNumberButton";
import { Flex } from "@aws-amplify/ui-react";
export default function SinglePageScroll(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="30px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SinglePageScroll")}
      {...rest}
    >
      <Scrollbuttonbig
        width="40px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        scrollButton="large"
        {...getOverrideProps(overrides, "scroll button big44014834")}
      ></Scrollbuttonbig>
      <PageNumberButton
        width="30px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        pageNumberButton="Default"
        {...getOverrideProps(overrides, "Page Number Button")}
      ></PageNumberButton>
      <Scrollbuttonbig
        width="40px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        scrollButton="large"
        {...getOverrideProps(overrides, "scroll button big44014831")}
      ></Scrollbuttonbig>
    </Flex>
  );
}
