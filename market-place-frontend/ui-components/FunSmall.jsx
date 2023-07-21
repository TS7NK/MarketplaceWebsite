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
export default function FunSmall(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: {
        Vector3839282: {},
        Vector3839283: {},
        Group: {},
        "mingcute:celebrate-fill": {},
        Fun: {},
        FunSmall: {},
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
      border="1px SOLID rgba(230,4,207,1)"
      borderRadius="7px"
      padding="3px 6px 3px 6px"
      backgroundColor="rgba(230,4,207,1)"
      display="flex"
      {...getOverrideProps(overrides, "FunSmall")}
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
        {...getOverrideProps(overrides, "mingcute:celebrate-fill")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="16px"
          height="16px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Group")}
        >
          <Icon
            width="16px"
            height="16px"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
            paths={[]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector3839282")}
          ></Icon>
          <Icon
            width="12.2px"
            height="12.91px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 12.2021484375,
              height: 12.91455078125,
            }}
            paths={[
              {
                d: "M3.69084 3.44804L3.75417 3.50338L9.41151 9.16004C9.48565 9.23412 9.54129 9.32463 9.57391 9.42423C9.60652 9.52384 9.6152 9.62973 9.59922 9.73331C9.58324 9.83689 9.54307 9.93525 9.48196 10.0204C9.42085 10.1055 9.34053 10.1751 9.24751 10.2234L9.17017 10.2567L2.24684 12.808C0.945507 13.288 -0.321826 12.0647 0.073507 10.7654L0.10684 10.668L2.65751 3.74471C2.69123 3.653 2.7447 3.56982 2.81413 3.50107C2.88356 3.43231 2.96726 3.37966 3.0593 3.34684C3.15133 3.31402 3.24946 3.30183 3.34673 3.31114C3.444 3.32045 3.53803 3.35103 3.62217 3.40071L3.69084 3.44738L3.69084 3.44804ZM9.71151 6.34404C10.3188 6.37604 11.1515 6.50404 11.8755 6.93871C12.0223 7.02573 12.1301 7.16571 12.1768 7.32983C12.2234 7.49395 12.2054 7.66972 12.1264 7.82095C12.0473 7.97217 11.9133 8.08734 11.752 8.14273C11.5906 8.19812 11.4141 8.18953 11.2588 8.11871L11.1895 8.08204C10.7348 7.80871 10.1535 7.70204 9.64151 7.67538C9.43054 7.66317 9.21903 7.66406 9.00817 7.67804L8.79751 7.69871C8.6236 7.72115 8.44785 7.67417 8.30833 7.56795C8.16882 7.46173 8.07677 7.30481 8.05213 7.1312C8.02749 6.95759 8.07225 6.78126 8.1767 6.64041C8.28115 6.49957 8.43689 6.40554 8.61017 6.37871C8.9753 6.33155 9.34411 6.31971 9.71151 6.34338L9.71151 6.34404ZM11.0615 4.48671C11.2314 4.48707 11.3947 4.55225 11.5181 4.66895C11.6416 4.78565 11.7158 4.94506 11.7256 5.11464C11.7355 5.28422 11.6803 5.45117 11.5712 5.5814C11.4622 5.71163 11.3075 5.79532 11.1388 5.81538L11.0615 5.82004L10.5895 5.82004C10.4196 5.81969 10.2563 5.75451 10.1329 5.63781C10.0095 5.52111 9.93523 5.36169 9.92536 5.19212C9.91549 5.02254 9.97073 4.85559 10.0798 4.72536C10.1888 4.59513 10.3435 4.51144 10.5122 4.49138L10.5895 4.48671L11.0615 4.48671ZM8.94017 3.97471C9.05496 4.08951 9.12391 4.24224 9.1341 4.40426C9.14429 4.56627 9.09501 4.72644 8.99551 4.85471L8.94017 4.91738L8.23284 5.62471C8.11287 5.74428 7.95188 5.81369 7.78258 5.81886C7.61329 5.82403 7.44837 5.76457 7.32132 5.65255C7.19428 5.54052 7.11464 5.38434 7.09857 5.21573C7.08251 5.04711 7.13123 4.87871 7.23484 4.74471L7.29017 4.68204L7.99684 3.97538C8.05876 3.91339 8.13228 3.86422 8.21321 3.83067C8.29415 3.79712 8.3809 3.77985 8.46851 3.77985C8.55612 3.77985 8.64287 3.79712 8.7238 3.83067C8.80473 3.86422 8.87826 3.91273 8.94017 3.97471ZM7.21551 0.464044C7.51417 1.36138 7.35417 2.34404 7.16751 3.03071C7.05532 3.45881 6.90124 3.87482 6.70751 4.27271C6.62856 4.43096 6.48998 4.55136 6.32227 4.60743C6.15455 4.66351 5.97142 4.65066 5.81317 4.57171C5.65493 4.49277 5.53452 4.35419 5.47845 4.18647C5.42238 4.01875 5.43523 3.83562 5.51417 3.67738C5.66877 3.35775 5.79158 3.0237 5.88084 2.68004C6.03217 2.12538 6.10817 1.52338 5.99151 1.03004L5.95084 0.886045C5.92179 0.802671 5.90958 0.714356 5.91494 0.626227C5.9203 0.538099 5.9431 0.451912 5.98204 0.37267C6.02097 0.293428 6.07526 0.222709 6.14175 0.164619C6.20824 0.106529 6.28561 0.0622245 6.36936 0.0342779C6.45311 0.00633129 6.54158 -0.00470087 6.62963 0.0018218C6.71768 0.00834448 6.80356 0.0322922 6.88228 0.0722745C6.961 0.112257 7.03099 0.167477 7.08819 0.234731C7.1454 0.301984 7.18867 0.37993 7.21551 0.464044ZM10.8255 2.08938C10.9505 2.2144 11.0207 2.38393 11.0207 2.56071C11.0207 2.73749 10.9505 2.90703 10.8255 3.03204L10.3542 3.50338C10.2927 3.56705 10.2191 3.61784 10.1378 3.65278C10.0564 3.68772 9.96896 3.70611 9.88044 3.70688C9.79192 3.70765 9.70413 3.69078 9.6222 3.65726C9.54027 3.62374 9.46584 3.57424 9.40324 3.51164C9.34065 3.44905 9.29115 3.37461 9.25763 3.29268C9.2241 3.21075 9.20724 3.12296 9.20801 3.03444C9.20878 2.94592 9.22717 2.85844 9.26211 2.77711C9.29705 2.69577 9.34783 2.62221 9.41151 2.56071L9.88284 2.08938C10.0079 1.9644 10.1774 1.89419 10.3542 1.89419C10.5309 1.89419 10.7005 1.9644 10.8255 2.08938Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.7%"
            bottom="10.58%"
            left="10.58%"
            right="13.15%"
            {...getOverrideProps(overrides, "Vector3839283")}
          ></Icon>
        </View>
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
        children="Fun"
        {...getOverrideProps(overrides, "Fun")}
      ></Text>
    </Flex>
  );
}
