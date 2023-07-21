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
export default function FunBig(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: {
        Vector3839241: {},
        Vector3839242: {},
        Group: {},
        "mingcute:celebrate-fill": {},
        Fun: {},
        FunBig: {},
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
      {...getOverrideProps(overrides, "FunBig")}
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
        {...getOverrideProps(overrides, "mingcute:celebrate-fill")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="20px"
          height="20px"
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
            width="20px"
            height="20px"
            viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
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
            {...getOverrideProps(overrides, "Vector3839241")}
          ></Icon>
          <Icon
            width="15.25px"
            height="16.14px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 15.252685546875,
              height: 16.143310546875,
            }}
            paths={[
              {
                d: "M4.61355 4.31006L4.69272 4.37922L11.7644 11.4501C11.8571 11.5426 11.9266 11.6558 11.9674 11.7803C12.0082 11.9048 12.019 12.0372 11.999 12.1666C11.9791 12.2961 11.9288 12.4191 11.8525 12.5255C11.7761 12.6319 11.6757 12.7189 11.5594 12.7792L11.4627 12.8209L2.80855 16.0101C1.18188 16.6101 -0.402283 15.0809 0.0918837 13.4567L0.13355 13.3351L3.32188 4.68089C3.36404 4.56625 3.43087 4.46228 3.51766 4.37634C3.60445 4.29039 3.70907 4.22458 3.82412 4.18355C3.93917 4.14253 4.06182 4.12729 4.18341 4.13893C4.305 4.15057 4.42254 4.18879 4.52772 4.25089L4.61355 4.30922L4.61355 4.31006ZM12.1394 7.93006C12.8986 7.97006 13.9394 8.13006 14.8444 8.67339C15.0279 8.78216 15.1626 8.95714 15.221 9.16229C15.2793 9.36744 15.2568 9.58716 15.158 9.77619C15.0592 9.96522 14.8917 10.1092 14.6899 10.1784C14.4882 10.2477 14.2676 10.2369 14.0736 10.1484L13.9869 10.1026C13.4186 9.76089 12.6919 9.62756 12.0519 9.59422C11.7882 9.57897 11.5238 9.58008 11.2602 9.59756L10.9969 9.62339C10.7795 9.65144 10.5598 9.59272 10.3854 9.45994C10.211 9.32716 10.096 9.13102 10.0652 8.914C10.0344 8.69699 10.0903 8.47658 10.2209 8.30052C10.3514 8.12446 10.5461 8.00693 10.7627 7.97339C11.2191 7.91443 11.6801 7.89964 12.1394 7.92922L12.1394 7.93006ZM13.8269 5.60839C14.0392 5.60883 14.2434 5.69031 14.3977 5.83619C14.5519 5.98206 14.6447 6.18133 14.6571 6.3933C14.6694 6.60527 14.6004 6.81396 14.464 6.97675C14.3277 7.13953 14.1344 7.24415 13.9236 7.26922L13.8269 7.27506L13.2369 7.27506C13.0246 7.27461 12.8204 7.19313 12.6661 7.04726C12.5118 6.90138 12.419 6.70212 12.4067 6.49015C12.3944 6.27817 12.4634 6.06949 12.5997 5.9067C12.7361 5.74391 12.9294 5.6393 13.1402 5.61422L13.2369 5.60839L13.8269 5.60839ZM11.1752 4.96839C11.3187 5.11188 11.4049 5.3028 11.4176 5.50532C11.4304 5.70784 11.3688 5.90805 11.2444 6.06839L11.1752 6.14672L10.2911 7.03089C10.1411 7.18035 9.93986 7.26712 9.72823 7.27358C9.51661 7.28004 9.31046 7.20571 9.15165 7.06568C8.99285 6.92565 8.8933 6.73043 8.87322 6.51966C8.85314 6.30889 8.91404 6.09838 9.04355 5.93089L9.11272 5.85256L9.99605 4.96922C10.0734 4.89174 10.1654 4.83028 10.2665 4.78834C10.3677 4.7464 10.4761 4.72482 10.5856 4.72482C10.6951 4.72482 10.8036 4.7464 10.9048 4.78834C11.0059 4.83028 11.0978 4.89091 11.1752 4.96839ZM9.01938 0.580055C9.39272 1.70172 9.19272 2.93006 8.95938 3.78839C8.81915 4.32351 8.62655 4.84352 8.38438 5.34089C8.2857 5.5387 8.11248 5.6892 7.90283 5.75929C7.69318 5.82938 7.46427 5.81332 7.26647 5.71464C7.06866 5.61596 6.91816 5.44274 6.84806 5.23309C6.77797 5.02344 6.79403 4.79453 6.89272 4.59672C7.08596 4.19718 7.23948 3.77962 7.35105 3.35006C7.54022 2.65672 7.63522 1.90422 7.48938 1.28756L7.43855 1.10756C7.40223 1.00334 7.38698 0.892945 7.39367 0.782784C7.40037 0.672624 7.42888 0.56489 7.47755 0.465837C7.52622 0.366785 7.59408 0.278386 7.67719 0.205774C7.7603 0.133161 7.85701 0.0777806 7.9617 0.0428474C8.06639 0.00791411 8.17697 -0.00587609 8.28704 0.00227725C8.3971 0.0104306 8.50445 0.0403652 8.60285 0.0903431C8.70124 0.140321 8.78874 0.209347 8.86024 0.293413C8.93175 0.37748 8.98584 0.474913 9.01938 0.580055ZM13.5319 2.61172C13.6881 2.768 13.7759 2.97992 13.7759 3.20089C13.7759 3.42186 13.6881 3.63378 13.5319 3.79006L12.9427 4.37922C12.8658 4.45881 12.7739 4.5223 12.6722 4.56597C12.5706 4.60965 12.4612 4.63264 12.3506 4.6336C12.2399 4.63456 12.1302 4.61347 12.0278 4.57157C11.9253 4.52967 11.8323 4.4678 11.7541 4.38955C11.6758 4.31131 11.6139 4.21826 11.572 4.11585C11.5301 4.01344 11.509 3.9037 11.51 3.79305C11.511 3.68241 11.534 3.57306 11.5776 3.47139C11.6213 3.36971 11.6848 3.27776 11.7644 3.20089L12.3536 2.61172C12.5098 2.4555 12.7217 2.36773 12.9427 2.36773C13.1637 2.36773 13.3756 2.4555 13.5319 2.61172Z",
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
            {...getOverrideProps(overrides, "Vector3839242")}
          ></Icon>
        </View>
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
        children="Fun"
        {...getOverrideProps(overrides, "Fun")}
      ></Text>
    </Flex>
  );
}
