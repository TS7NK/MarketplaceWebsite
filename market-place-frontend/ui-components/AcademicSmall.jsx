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
export default function AcademicSmall(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: {
        Vector: {},
        "heroicons:academic-cap-20-solid": {},
        Academic: {},
        AcademicSmall: {},
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
      {...getOverrideProps(overrides, "AcademicSmall")}
      {...rest}
    >
      <View
        width="16px"
        height="16px"
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
          width="14.08px"
          height="13.64px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.07757568359375,
            height: 13.6416015625,
          }}
          paths={[
            {
              d: "M6.76998 0.0635798C6.85341 0.0217701 6.94545 0 7.03878 0C7.1321 0 7.22414 0.0217701 7.30758 0.0635798C9.65959 1.24213 11.8615 2.69896 13.866 4.40278C13.9474 4.47193 14.0089 4.56155 14.0441 4.66239C14.0792 4.76324 14.0869 4.87165 14.0662 4.97643C14.0455 5.08121 13.9971 5.17857 13.9262 5.25844C13.8553 5.33831 13.7644 5.39781 13.6628 5.43078C11.434 6.15359 9.31748 7.18494 7.37478 8.49478C7.27556 8.56185 7.15854 8.59768 7.03878 8.59768C6.91902 8.59768 6.802 8.56185 6.70278 8.49478C6.16165 8.13017 5.60656 7.78671 5.03878 7.46518L5.03878 6.52358C5.03878 6.32838 5.13158 6.15318 5.28038 6.04998C6.13141 5.46006 7.01406 4.91711 7.92438 4.42358C8.06197 4.34658 8.16373 4.21852 8.20764 4.06709C8.25155 3.91565 8.23409 3.75302 8.15903 3.61436C8.08397 3.4757 7.95734 3.37216 7.80654 3.32613C7.65574 3.2801 7.49288 3.29527 7.35318 3.36838C6.404 3.88301 5.48369 4.44919 4.59638 5.06438C4.36176 5.22827 4.1703 5.44652 4.03837 5.70049C3.90644 5.95446 3.83796 6.23659 3.83878 6.52278L3.83878 6.82678C2.73344 6.27741 1.58899 5.81053 0.414778 5.42998C0.313185 5.39701 0.222235 5.33751 0.151322 5.25764C0.0804078 5.17777 0.0321007 5.08042 0.0113889 4.97563C-0.00932289 4.87085 -0.00168852 4.76244 0.0335037 4.66159C0.0686959 4.56075 0.13017 4.47113 0.211578 4.40198C2.21606 2.69816 4.41797 1.24133 6.76998 0.0627798L6.76998 0.0635798ZM3.83878 8.17558C3.1985 7.83716 2.54315 7.52804 1.87478 7.24918C1.73905 8.0753 1.63497 8.90631 1.56278 9.74038C1.55215 9.86139 1.57851 9.98277 1.63836 10.0885C1.69822 10.1942 1.78875 10.2792 1.89798 10.3324C2.32038 10.5372 2.73478 10.7564 3.14118 10.9884C2.97318 11.2476 2.77718 11.4924 2.54998 11.7196C2.49103 11.7745 2.44375 11.8407 2.41095 11.9143C2.37816 11.9879 2.36053 12.0674 2.3591 12.148C2.35768 12.2285 2.3725 12.3085 2.40268 12.3833C2.43286 12.458 2.47777 12.5258 2.53475 12.5828C2.59172 12.6398 2.65959 12.6847 2.7343 12.7149C2.80901 12.7451 2.88903 12.7599 2.9696 12.7585C3.05016 12.757 3.12961 12.7394 3.20321 12.7066C3.27681 12.6738 3.34305 12.6265 3.39798 12.5676C3.69398 12.2724 3.94998 11.9516 4.16598 11.6132C5.03597 12.1782 5.86351 12.806 6.64198 13.4916C6.75157 13.5882 6.89267 13.6415 7.03878 13.6415C7.18489 13.6415 7.32598 13.5882 7.43558 13.4916C8.86773 12.2299 10.4634 11.167 12.1796 10.3316C12.2888 10.2786 12.3794 10.1937 12.4394 10.0882C12.4994 9.98262 12.526 9.86135 12.5156 9.74038C12.4434 8.90631 12.3393 8.0753 12.2036 7.24918C10.7467 7.85715 9.35351 8.60774 8.04438 9.48998C7.74721 9.69015 7.39707 9.79707 7.03878 9.79707C6.68048 9.79707 6.33034 9.69015 6.03318 9.48998C5.70518 9.26998 5.37238 9.05718 5.03318 8.85238C4.9914 9.83255 4.69231 10.7853 4.16598 11.6132C3.83033 11.3956 3.4886 11.1867 3.14118 10.9884C3.59765 10.2786 3.83986 9.45228 3.83878 8.60838L3.83878 8.17638L3.83878 8.17558Z",
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
        fontSize="12px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
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
        children="Academic"
        {...getOverrideProps(overrides, "Academic")}
      ></Text>
    </Flex>
  );
}
