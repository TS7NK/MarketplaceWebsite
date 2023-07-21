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
export default function Searchbarmain(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        Vector1241353: {},
        "Search prompt...": {},
        Vector1241358: {},
        "search button": {},
        Searchbarmain: {},
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Vector1241353: {},
        "Search prompt...": {},
        Vector1241358: {},
        "search button": {},
        Searchbarmain: {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.20000000298023224)",
        },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="570px"
      height="57px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="30px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Searchbarmain")}
      {...rest}
    >
      <Icon
        width="18px"
        height="18px"
        viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
        paths={[
          {
            d: "M18 17.0586L12.972 12.0306C14.1803 10.58 14.7828 8.71952 14.6542 6.83605C14.5256 4.95259 13.6759 3.19121 12.2817 1.91831C10.8876 0.645413 9.05634 -0.0409893 7.16898 0.00189494C5.28163 0.0447792 3.48346 0.813648 2.14855 2.14855C0.813648 3.48346 0.0447792 5.28163 0.00189494 7.16898C-0.0409893 9.05634 0.645413 10.8876 1.91831 12.2817C3.19121 13.6759 4.95259 14.5256 6.83605 14.6542C8.71952 14.7828 10.58 14.1803 12.0306 12.972L17.0586 18L18 17.0586ZM1.35538 7.34744C1.35538 6.16232 1.70681 5.00382 2.36522 4.01843C3.02364 3.03304 3.95947 2.26502 5.05438 1.8115C6.14928 1.35797 7.35409 1.23931 8.51643 1.47051C9.67878 1.70172 10.7465 2.27241 11.5845 3.11041C12.4225 3.94842 12.9932 5.0161 13.2244 6.17845C13.4556 7.34079 13.3369 8.5456 12.8834 9.6405C12.4299 10.7354 11.6618 11.6712 10.6765 12.3297C9.69106 12.9881 8.53256 13.3395 7.34744 13.3395C5.75879 13.3377 4.23571 12.7059 3.11236 11.5825C1.98901 10.4592 1.35714 8.9361 1.35538 7.34744Z",
            fill: "rgba(141,143,155,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="20px"
        left="62px"
        {...getOverrideProps(overrides, "Vector1241353")}
      ></Icon>
      <Text
        fontFamily="Poppins"
        fontSize="16px"
        fontWeight="400"
        color="rgba(141,143,155,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="377px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="17px"
        left="93px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Search prompt..."
        {...getOverrideProps(overrides, "Search prompt...")}
      ></Text>
      <Flex
        gap="10px"
        direction="row"
        width="100px"
        height="57px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="470px"
        boxShadow="4px 4px 20px rgba(0, 0, 0, 0.20000000298023224)"
        borderRadius="0px 30px 30px 0px"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(255,215,0,1)"
        display="flex"
        {...getOverrideProps(overrides, "search button")}
      >
        <Icon
          width="25px"
          height="25px"
          viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
          paths={[
            {
              d: "M25 23.6925L18.0167 16.7091C19.6948 14.6945 20.5316 12.1104 20.3531 9.49452C20.1745 6.8786 18.9943 4.43223 17.058 2.66432C15.1216 0.896406 12.5782 -0.0569296 9.95692 0.00263186C7.33559 0.0621934 4.83814 1.13007 2.9841 2.9841C1.13007 4.83814 0.0621934 7.33559 0.00263186 9.95692C-0.0569296 12.5782 0.896406 15.1216 2.66432 17.058C4.43223 18.9943 6.8786 20.1745 9.49452 20.3531C12.1104 20.5316 14.6945 19.6948 16.7091 18.0167L23.6925 25L25 23.6925ZM1.88247 10.2048C1.88247 8.55878 2.37056 6.94975 3.28503 5.58115C4.1995 4.21256 5.49927 3.14586 7.01997 2.51597C8.54067 1.88607 10.214 1.72126 11.8284 2.04238C13.4428 2.3635 14.9256 3.15612 16.0895 4.32002C17.2534 5.48391 18.0461 6.96681 18.3672 8.58118C18.6883 10.1955 18.5235 11.8689 17.8936 13.3896C17.2637 14.9103 16.197 16.2101 14.8284 17.1245C13.4598 18.039 11.8508 18.5271 10.2048 18.5271C7.99832 18.5246 5.88293 17.647 4.32272 16.0868C2.76252 14.5266 1.88492 12.4112 1.88247 10.2048Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Vector1241358")}
        ></Icon>
      </Flex>
    </View>
  );
}
