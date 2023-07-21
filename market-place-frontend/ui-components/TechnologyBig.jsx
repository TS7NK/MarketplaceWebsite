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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function TechnologyBig(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: {
        Vector: {},
        "ph:code-fill": {},
        Technology: {},
        TechnologyBig: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="6px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(148,66,255,1)"
      borderRadius="7px"
      padding="3px 6px 3px 6px"
      backgroundColor="rgba(148,66,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "TechnologyBig")}
      {...rest}
    >
      <View
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ph:code-fill")}
      >
        <Icon
          width="16.25px"
          height="13.75px"
          viewBox={{ minX: 0, minY: 0, width: 16.25, height: 13.75 }}
          paths={[
            {
              d: "M15 0L1.25 0C0.918479 5.55112e-16 0.600537 0.131696 0.366116 0.366116C0.131696 0.600537 2.77556e-16 0.918479 0 1.25L0 12.5C2.77556e-16 12.8315 0.131696 13.1495 0.366116 13.3839C0.600537 13.6183 0.918479 13.75 1.25 13.75L15 13.75C15.3315 13.75 15.6495 13.6183 15.8839 13.3839C16.1183 13.1495 16.25 12.8315 16.25 12.5L16.25 1.25C16.25 0.918479 16.1183 0.600537 15.8839 0.366116C15.6495 0.131696 15.3315 1.11022e-15 15 0ZM5.375 8.25C5.50761 8.34946 5.59528 8.49752 5.61872 8.66161C5.64216 8.82571 5.59946 8.99239 5.5 9.125C5.40054 9.25761 5.25248 9.34528 5.08839 9.36872C4.92429 9.39216 4.75761 9.34946 4.625 9.25L2.125 7.375C2.04738 7.31678 1.98438 7.24129 1.94098 7.15451C1.89759 7.06772 1.875 6.97203 1.875 6.875C1.875 6.77797 1.89759 6.68228 1.94098 6.59549C1.98438 6.50871 2.04738 6.43322 2.125 6.375L4.625 4.5C4.75761 4.40054 4.92429 4.35784 5.08839 4.38128C5.25248 4.40472 5.40054 4.49239 5.5 4.625C5.59946 4.75761 5.64216 4.92429 5.61872 5.08839C5.59528 5.25248 5.50761 5.40054 5.375 5.5L3.54141 6.875L5.375 8.25ZM9.97578 2.67187L7.47578 11.4219C7.45447 11.5022 7.41737 11.5774 7.36663 11.6433C7.31589 11.7091 7.25254 11.7641 7.18028 11.8051C7.10803 11.8461 7.02831 11.8723 6.94581 11.8822C6.8633 11.8921 6.77966 11.8854 6.69977 11.8625C6.61988 11.8397 6.54535 11.8011 6.48055 11.7491C6.41573 11.6971 6.36194 11.6327 6.32232 11.5597C6.2827 11.4866 6.25803 11.4064 6.24977 11.3237C6.24151 11.2411 6.24982 11.1576 6.27422 11.0781L8.77422 2.32813C8.82227 2.17167 8.92977 2.0403 9.07363 1.96225C9.21749 1.88421 9.38623 1.8657 9.54358 1.91072C9.70094 1.95574 9.83436 2.06068 9.91517 2.20301C9.99599 2.34533 10.0177 2.51368 9.97578 2.67187ZM14.125 7.375L11.625 9.25C11.4924 9.34946 11.3257 9.39216 11.1616 9.36872C10.9975 9.34528 10.8495 9.25761 10.75 9.125C10.6505 8.99239 10.6078 8.82571 10.6313 8.66161C10.6547 8.49752 10.7424 8.34946 10.875 8.25L12.7086 6.875L10.875 5.5C10.8093 5.45075 10.754 5.38906 10.7122 5.31843C10.6704 5.24781 10.6429 5.16964 10.6313 5.08839C10.6197 5.00714 10.6242 4.9244 10.6446 4.84489C10.6649 4.76538 10.7008 4.69066 10.75 4.625C10.7992 4.55934 10.8609 4.50402 10.9316 4.4622C11.0022 4.42039 11.0804 4.39289 11.1616 4.38128C11.2429 4.36967 11.3256 4.37418 11.4051 4.39455C11.4846 4.41492 11.5593 4.45075 11.625 4.5L14.125 6.375C14.2026 6.43322 14.2656 6.50871 14.309 6.59549C14.3524 6.68228 14.375 6.77797 14.375 6.875C14.375 6.97203 14.3524 7.06772 14.309 7.15451C14.2656 7.24129 14.2026 7.31678 14.125 7.375Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="15.63%"
          bottom="15.63%"
          left="9.38%"
          right="9.38%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
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
        children="Technology"
        {...getOverrideProps(overrides, "Technology")}
      ></Text>
    </Flex>
  );
}
