/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
//import PurchasedPromptThumbnailsmall2 from "./PurchasedPromptThumbnailsmall2";
import Deletebutton from "./Deletebutton";
import { Flex } from "@aws-amplify/ui-react";
export default function FavoritePurchasedPrompt2(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(217,217,217,1)"
      borderRadius="11px"
      padding="0px 0px 10px 0px"
      {...getOverrideProps(overrides, "FavoritePurchasedPrompt2")}
      {...rest}
    >
      <PurchasedPromptThumbnailsmall2
        display="flex"
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 3px 0px"
        {...getOverrideProps(overrides, "Purchased Prompt Thumbnail (small) 2")}
      ></PurchasedPromptThumbnailsmall2>
      <Flex
        gap="5px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 20px 0px 20px"
        {...getOverrideProps(overrides, "Frame 119")}
      >
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
    </Flex>
  );
}
