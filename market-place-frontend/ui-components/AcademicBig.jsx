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
export default function AcademicBig(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: {
        Vector: {},
        "heroicons:academic-cap-20-solid": {},
        Academic: {},
        AcademicBig: {},
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
      border="1px SOLID rgba(255,255,255,1)"
      borderRadius="7px"
      padding="3px 6px 3px 6px"
      backgroundColor="rgba(207,21,21,1)"
      display="flex"
      {...getOverrideProps(overrides, "AcademicBig")}
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
        {...getOverrideProps(overrides, "heroicons:academic-cap-20-solid")}
      >
        <Icon
          width="17.6px"
          height="17.05px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 17.596923828125,
            height: 17.052001953125,
          }}
          paths={[
            {
              d: "M8.46247 0.0794748C8.56677 0.0272126 8.68182 0 8.79847 0C8.91513 0 9.03018 0.0272126 9.13447 0.0794748C12.0745 1.55266 14.8269 3.37371 17.3325 5.50347C17.4342 5.58991 17.5111 5.70194 17.5551 5.82799C17.5991 5.95405 17.6086 6.08956 17.5827 6.22054C17.5568 6.35152 17.4964 6.47321 17.4078 6.57305C17.3191 6.67289 17.2055 6.74726 17.0785 6.78847C14.2925 7.69199 11.6469 8.98118 9.21847 10.6185C9.09445 10.7023 8.94817 10.7471 8.79847 10.7471C8.64877 10.7471 8.5025 10.7023 8.37847 10.6185C7.70206 10.1627 7.0082 9.73339 6.29847 9.33148L6.29847 8.15448C6.29847 7.91048 6.41447 7.69147 6.60047 7.56247C7.66426 6.82507 8.76757 6.14639 9.90547 5.52947C10.0775 5.43323 10.2047 5.27315 10.2595 5.08386C10.3144 4.89456 10.2926 4.69127 10.1988 4.51795C10.105 4.34462 9.94668 4.2152 9.75818 4.15766C9.56967 4.10012 9.3661 4.11909 9.19147 4.21047C8.005 4.85376 6.85461 5.56149 5.74547 6.33047C5.4522 6.53533 5.21288 6.80815 5.04797 7.12561C4.88305 7.44307 4.79745 7.79574 4.79847 8.15347L4.79847 8.53347C3.4168 7.84676 1.98623 7.26317 0.518472 6.78748C0.391481 6.74626 0.277794 6.67189 0.189152 6.57205C0.10051 6.47221 0.0401259 6.35052 0.0142361 6.21954C-0.0116536 6.08856 -0.00211065 5.95305 0.0418796 5.82699C0.0858698 5.70094 0.162712 5.58891 0.264472 5.50247C2.77007 3.37271 5.52246 1.55166 8.46247 0.0784748L8.46247 0.0794748ZM4.79847 10.2195C3.99812 9.79644 3.17894 9.41005 2.34347 9.06147C2.17381 10.0941 2.04371 11.1329 1.95347 12.1755C1.94019 12.3267 1.97314 12.4785 2.04796 12.6106C2.12277 12.7427 2.23593 12.849 2.37247 12.9155C2.90047 13.1715 3.41847 13.4455 3.92647 13.7355C3.71647 14.0595 3.47147 14.3655 3.18747 14.6495C3.11379 14.7181 3.05468 14.8009 3.01369 14.8929C2.9727 14.9849 2.95066 15.0842 2.94888 15.185C2.9471 15.2857 2.96563 15.3857 3.00335 15.4791C3.04107 15.5725 3.09721 15.6573 3.16843 15.7285C3.23965 15.7997 3.32449 15.8559 3.41787 15.8936C3.51126 15.9313 3.61129 15.9498 3.71199 15.9481C3.8127 15.9463 3.91201 15.9242 4.00401 15.8833C4.09601 15.8423 4.17881 15.7832 4.24747 15.7095C4.61747 15.3405 4.93747 14.9395 5.20747 14.5165C6.29497 15.2227 7.32939 16.0074 8.30247 16.8645C8.43947 16.9853 8.61583 17.0519 8.79847 17.0519C8.98111 17.0519 9.15748 16.9853 9.29447 16.8645C11.0847 15.2873 13.0793 13.9587 15.2245 12.9145C15.361 12.8483 15.4743 12.7422 15.5493 12.6102C15.6243 12.4783 15.6575 12.3267 15.6445 12.1755C15.5542 11.1329 15.4241 10.0941 15.2545 9.06147C13.4334 9.82144 11.6919 10.7597 10.0555 11.8625C9.68402 12.1127 9.24634 12.2463 8.79847 12.2463C8.35061 12.2463 7.91293 12.1127 7.54147 11.8625C7.13147 11.5875 6.71547 11.3215 6.29147 11.0655C6.23926 12.2907 5.86539 13.4816 5.20747 14.5165C4.78792 14.2444 4.36074 13.9833 3.92647 13.7355C4.49707 12.8482 4.79982 11.8153 4.79847 10.7605L4.79847 10.2205L4.79847 10.2195Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="6.2%"
          bottom="8.54%"
          left="6.01%"
          right="6.01%"
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
        children="Academic"
        {...getOverrideProps(overrides, "Academic")}
      ></Text>
    </Flex>
  );
}
