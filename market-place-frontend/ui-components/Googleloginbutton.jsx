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
export default function Googleloginbutton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { googleLogIn: "Default" },
      overrides: {
        Vector3406691: {},
        Vector3406693: {},
        Group: {},
        Vector3406694: {},
        Vector3406695: {},
        Vector3406696: {},
        Vector3406697: {},
        Vector3406698: {},
        Vector3406699: {},
        Vector3406700: {},
        Vector3406701: {},
        Logo: {},
        Google: {},
        text: {},
        Googleloginbutton: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="200px"
      height="40px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="6px"
      padding="6px 10px 6px 10px"
      backgroundColor="rgba(255,241,167,1)"
      display="flex"
      {...getOverrideProps(overrides, "Googleloginbutton")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="18px"
        height="16.58px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Icon
          width="18px"
          height="16.58px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 17.9998779296875,
            height: 16.5751953125,
          }}
          paths={[
            {
              d: "M17.855 6.75359C17.935 6.75359 17.9999 6.81332 17.9999 6.887L17.9999 8.28772C17.9999 8.81199 17.947 9.32459 17.8456 9.82186C17.061 13.6844 13.3658 16.6033 8.93648 16.5752C3.9665 16.5437 -0.0109811 12.8458 2.27767e-05 8.26904C0.0109563 3.70053 4.03625 0 8.99994 0C11.4318 0 13.6382 0.888405 15.2582 2.3315C15.3167 2.38359 15.3182 2.46945 15.2607 2.52241L13.1087 4.50405C13.0533 4.55507 12.9638 4.5564 12.907 4.50664C11.8903 3.61542 10.5146 3.06827 8.99994 3.06827C5.87207 3.06827 3.35331 5.37122 3.33208 8.2515C3.31074 11.1507 5.8566 13.5071 8.99994 13.5071C11.5503 13.5071 13.7074 11.9557 14.4187 9.82186L9.14481 9.82186C9.0648 9.82186 8.99994 9.76213 8.99994 9.68844L8.99994 6.88697C8.99994 6.81328 9.0648 6.75355 9.14481 6.75355L17.855 6.75355L17.855 6.75359Z",
              fill: "rgba(33,150,243,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector3406691")}
        ></Icon>
        <View
          padding="0px 0px 0px 0px"
          width="9.54px"
          height="9.82px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="40.75%"
          bottom="0%"
          left="46.98%"
          right="0%"
          {...getOverrideProps(overrides, "Group")}
        >
          <Icon
            width="9.54px"
            height="9.82px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.5438232421875,
              height: 9.822265625,
            }}
            paths={[
              {
                d: "M9.3989 0L8.3124 0C8.39242 0 8.45728 0.0597299 8.45728 0.133413L8.45728 1.53413C8.45728 2.0584 8.4044 2.57101 8.30298 3.06827C7.55447 6.75313 4.15682 9.57921 0 9.8069C0.159046 9.81554 0.319147 9.82059 0.480372 9.82163C4.90968 9.84976 8.6049 6.93074 9.38948 3.06827C9.4909 2.57101 9.54378 2.0584 9.54378 1.53413L9.54378 0.13338C9.54378 0.0597297 9.47891 0 9.3989 0L9.3989 0Z",
                fill: "rgba(30,136,229,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector3406693")}
          ></Icon>
        </View>
        <Icon
          width="14.18px"
          height="6.1px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.1845703125,
            height: 6.1015625,
          }}
          paths={[
            {
              d: "M2.73331 6.1019L0 4.28326C1.53344 1.72925 4.48837 0 7.88156 0C10.3134 0 12.5199 0.888405 14.1398 2.3315C14.1983 2.38359 14.1998 2.46945 14.1423 2.52241L11.9904 4.50405C11.9351 4.55498 11.8455 4.55656 11.7889 4.5069C10.7722 3.61552 9.3964 3.0683 7.88156 3.0683C5.59881 3.0683 3.63113 4.31094 2.73331 6.1019L2.73331 6.1019Z",
              fill: "rgba(244,67,54,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="63.19%"
          left="6.21%"
          right="14.98%"
          {...getOverrideProps(overrides, "Vector3406694")}
        ></Icon>
        <Icon
          width="5.39px"
          height="3.03px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 5.3931884765625,
            height: 3.033203125,
          }}
          paths={[
            {
              d: "M0 2.50859L0.789078 3.0336C1.60856 1.39891 3.31954 0.221599 5.34769 0.028489C5.36295 0.0269674 5.37761 0.0251222 5.39315 0.0237625C5.21466 0.00815826 5.03378 0 4.85083 0C2.78868 0 0.991506 1.0011 0 2.50859L0 2.50859Z",
              fill: "rgba(229,57,53,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="18.51%"
          bottom="63.19%"
          left="17.02%"
          right="53.02%"
          {...getOverrideProps(overrides, "Vector3406695")}
        ></Icon>
        <Icon
          width="6.85px"
          height="4.54px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 6.8463134765625,
            height: 4.54296875,
          }}
          paths={[
            {
              d: "M5.71511 2.3315C5.77361 2.38359 5.77512 2.46945 5.71757 2.52245L3.97091 4.13088C4.13825 4.24807 4.29842 4.37342 4.45044 4.50668C4.50718 4.55643 4.59672 4.55511 4.65213 4.50409L6.80407 2.52245C6.86162 2.46945 6.86007 2.38363 6.80161 2.3315C5.18165 0.888405 2.97519 0 0.543337 0C0.360842 0 0.179788 0.00560069 0 0.0154747C2.21624 0.137039 4.21665 0.996663 5.71511 2.3315L5.71511 2.3315Z",
              fill: "rgba(229,57,53,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="72.59%"
          left="46.98%"
          right="14.98%"
          {...getOverrideProps(overrides, "Vector3406696")}
        ></Icon>
        <Icon
          width="14.65px"
          height="6.34px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.6534423828125,
            height: 6.341796875,
          }}
          paths={[
            {
              d: "M14.6535 3.68664C13.0099 5.31984 10.6602 6.34205 8.05144 6.34205C4.52789 6.34205 1.47733 4.47741 0 1.76095L2.79051 0C3.62789 1.9187 5.668 3.27375 8.05144 3.27375C9.54719 3.27375 10.9075 2.74013 11.9201 1.86833L14.6535 3.68664Z",
              fill: "rgba(76,175,80,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="61.74%"
          bottom="0%"
          left="5.27%"
          right="13.32%"
          {...getOverrideProps(overrides, "Vector3406697")}
        ></Icon>
        <Icon
          width="5.54px"
          height="3.27px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 5.539306640625,
            height: 3.2734375,
          }}
          paths={[
            {
              d: "M0.822863 0L0 0.519245C0.955717 2.15879 2.83512 3.27371 4.99726 3.27371C5.1801 3.27371 5.36084 3.26546 5.53926 3.24989C3.39302 3.06147 1.59566 1.77082 0.822863 0Z",
              fill: "rgba(67,160,71,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="61.74%"
          bottom="18.51%"
          left="16.2%"
          right="53.02%"
          {...getOverrideProps(overrides, "Vector3406698")}
        ></Icon>
        <Icon
          width="7.14px"
          height="3.1px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 7.1439208984375,
            height: 3.1005859375,
          }}
          paths={[
            {
              d: "M0.541895 3.10077C3.15061 3.10077 5.50037 2.07857 7.14392 0.445368L6.47444 0C4.93123 1.76859 2.61621 2.94185 0 3.08569C0.179296 3.09553 0.359928 3.10077 0.541895 3.10077Z",
              fill: "rgba(67,160,71,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="81.29%"
          bottom="0%"
          left="46.99%"
          right="13.32%"
          {...getOverrideProps(overrides, "Vector3406699")}
        ></Icon>
        <Icon
          width="3.85px"
          height="7.71px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 3.8516845703125,
            height: 7.7109375,
          }}
          paths={[
            {
              d: "M3.33198 4.00446C3.33198 4.69215 3.47648 5.34885 3.73906 5.95016L0.94851 7.71108C0.341541 6.59583 0 5.33684 0 4.00446C0 2.55204 0.40563 1.18696 1.11838 0L3.8517 1.81864C3.51814 2.48331 3.33198 3.22405 3.33198 4.00446L3.33198 4.00446Z",
              fill: "rgba(255,193,7,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="25.85%"
          bottom="27.63%"
          left="0%"
          right="78.6%"
          {...getOverrideProps(overrides, "Vector3406700")}
        ></Icon>
        <Icon
          width="1.61px"
          height="5.18px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 1.606201171875,
            height: 5.17578125,
          }}
          paths={[
            {
              d: "M0.670735 5.17578L1.4936 4.65654C1.23102 4.05522 1.08653 3.39852 1.08653 2.71083C1.08653 1.93042 1.27268 1.18968 1.60624 0.525008L0.81716 0C0.304761 0.779078 0.00737603 1.69329 0.000133886 2.67464C-0.00654576 3.57962 0.23698 4.43173 0.670735 5.17578L0.670735 5.17578Z",
              fill: "rgba(255,179,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="33.65%"
          bottom="35.13%"
          left="12.48%"
          right="78.6%"
          {...getOverrideProps(overrides, "Vector3406701")}
        ></Icon>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="51px"
        height="19px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "text")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Google"
          {...getOverrideProps(overrides, "Google")}
        ></Text>
      </Flex>
    </Flex>
  );
}
