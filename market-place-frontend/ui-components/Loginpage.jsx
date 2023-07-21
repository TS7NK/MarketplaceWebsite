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
import LogoProfile from "./LogoProfile";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import Googleloginbutton from "./Googleloginbutton";
import ResetPassword from "./ResetPassword";
import { Button as ButtonCustom } from "./Button";
import CreateAccount from "./CreateAccount";
export default function Loginpage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Log in" },
      overrides: {
        "Logo Profile": {},
        "Log in": {},
        "google login button": {},
        "Line 1": {},
        Or: {},
        "Line 2": {},
        "Frame 122": {},
        "Email Address3406740": {},
        "email address": {},
        bg3406742: {},
        bg3406741: {},
        "Email Address3406738": {},
        Password3957077: {},
        pawssword3957076: {},
        "Fill 1": {},
        Path3957082: {},
        Path3957083: {},
        "Fill 4": {},
        Hide3957079: {},
        Hide3957078: {},
        "Frame 126": {},
        pawssword3406746: {},
        bg3406749: {},
        bg3406748: {},
        Password3406745: {},
        "Check Box button": {},
        "Remember me": {},
        "Frame 125": {},
        "Reset Password": {},
        "Frame 123": {},
        Button: {},
        "Don\u2019t have account yet?": {},
        CreateAccountWord: {},
        "Frame 124": {},
        Loginpage: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="20px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.20000000298023224)"
      borderRadius="30px"
      padding="60px 30px 60px 30px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Loginpage")}
      {...rest}
    >
      <LogoProfile
        width="50px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo Profile")}
      ></LogoProfile>
      <Text
        fontFamily="Roboto"
        fontSize="30px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="35.15625px"
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
        children="Log in"
        {...getOverrideProps(overrides, "Log in")}
      ></Text>
      <Googleloginbutton
        display="flex"
        gap="10px"
        direction="row"
        width="200px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="6px"
        padding="6px 10px 6px 10px"
        backgroundColor="rgba(255,241,167,1)"
        googleLogIn="Default"
        {...getOverrideProps(overrides, "google login button")}
      ></Googleloginbutton>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 122")}
      >
        <Icon
          width="151px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 151, height: 1 }}
          paths={[
            {
              d: "M0 0L151 0L151 -1L0 -1L0 0Z",
              stroke: "rgba(217,217,217,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Line 1")}
        ></Icon>
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="19px"
          height="20.26px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Or"
          {...getOverrideProps(overrides, "Or")}
        ></Text>
        <Icon
          width="151px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 151, height: 1 }}
          paths={[
            {
              d: "M0 0L151 0L151 -1L0 -1L0 0Z",
              stroke: "rgba(217,217,217,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Line 2")}
        ></Icon>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Email Address3406738")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="103px"
          height="19px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "email address")}
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
            children="Email Address"
            {...getOverrideProps(overrides, "Email Address3406740")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="348px"
          height="46.04px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "bg3406741")}
        >
          <Icon
            width="348px"
            height="46.04px"
            viewBox={{ minX: 0, minY: 0, width: 348, height: 46.04296875 }}
            paths={[
              {
                d: "M0 9.99999C0 4.47714 4.47715 0 10 0L338 0C343.523 0 348 4.47715 348 10L348 36.0432C348 41.566 343.523 46.0432 338 46.0432L10 46.0432C4.47715 46.0432 0 41.566 0 36.0432L0 9.99999Z",
                fill: "rgba(247,247,248,1)",
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
            {...getOverrideProps(overrides, "bg3406742")}
          ></Icon>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Password3406745")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="94px"
          height="19px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "pawssword3406746")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 126")}
          >
            <Flex
              padding="0px 0px 0px 0px"
              width="71px"
              height="19px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "pawssword3957076")}
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
                children="Password"
                {...getOverrideProps(overrides, "Password3957077")}
              ></Text>
            </Flex>
            <Flex
              padding="0px 0px 0px 0px"
              width="13px"
              height="10.32px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Hide3957078")}
            >
              <Icon
                width="13px"
                height="10.32px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 12.999954223632812,
                  height: 10.318359375,
                }}
                paths={[
                  {
                    d: "M5.07227 7.13267C5.47818 7.38962 5.97288 7.54499 6.49928 7.54499C7.89459 7.54499 9.02985 6.47535 9.02985 5.16071C9.02985 4.66473 8.86495 4.19863 8.59224 3.81619L7.90093 4.46753C8.01509 4.67071 8.07851 4.90973 8.07851 5.16071C8.07851 5.97937 7.36818 6.64864 6.49928 6.64864C6.23291 6.64864 5.97922 6.58888 5.76358 6.48132L5.07227 7.13267ZM10.6789 1.85095C11.5985 2.63974 12.3786 3.7034 12.9621 4.98218C13.0129 5.09572 13.0129 5.22719 12.9621 5.33475C11.6049 8.31061 9.18848 10.0914 6.49936 10.0914L6.49302 10.0914C5.26896 10.0914 4.09564 9.71489 3.06184 9.02769L1.83144 10.187C1.73631 10.2766 1.6158 10.3184 1.4953 10.3184C1.3748 10.3184 1.24795 10.2766 1.15916 10.187C1.0006 10.0376 0.975235 9.79854 1.10208 9.62525L1.12111 9.60135L10.5013 0.763387C10.514 0.751436 10.5267 0.739485 10.533 0.727533C10.5457 0.715582 10.5584 0.703631 10.5648 0.69168L11.1609 0.12997C11.3512 -0.0433233 11.6493 -0.0433233 11.8332 0.12997C12.0235 0.303263 12.0235 0.590094 11.8332 0.763387L10.6789 1.85095ZM3.96392 5.1633C3.96392 5.31866 3.98295 5.47403 4.00832 5.61744L1.66168 7.82843C1.02745 7.13525 0.475671 6.29867 0.0380537 5.33659C-0.0126846 5.22903 -0.0126846 5.09756 0.0380537 4.98403C1.3953 2.00816 3.81171 0.233398 6.49449 0.233398L6.50083 0.233398C7.40778 0.233398 8.28936 0.43657 9.10117 0.81901L6.98285 2.81487C6.83063 2.79097 6.66573 2.77304 6.50083 2.77304C5.09919 2.77304 3.96392 3.84268 3.96392 5.1633Z",
                    fill: "rgba(3,2,41,1)",
                    fillRule: "evenodd",
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
                {...getOverrideProps(overrides, "Hide3957079")}
              >
                <Icon
                  width="9.1px"
                  height="7.6px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 9.101165771484375,
                    height: 7.5947265625,
                  }}
                  paths={[
                    {
                      d: "M4.00832 5.38405C3.98295 5.24063 3.96392 5.08526 3.96392 4.9299C3.96392 3.60928 5.09919 2.53964 6.50083 2.53964C6.66573 2.53964 6.83063 2.55757 6.98285 2.58147L9.10117 0.585612C8.28936 0.203172 7.40778 0 6.50083 0L6.49449 0C3.81171 0 1.3953 1.77476 0.0380537 4.75063C-0.0126846 4.86417 -0.0126846 4.99563 0.0380537 5.10319C0.475671 6.06527 1.02745 6.90186 1.66168 7.59503L4.00832 5.38405Z",
                      fill: "rgba(35,11,52,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="2.26%"
                  bottom="24.13%"
                  left="0%"
                  right="29.99%"
                  {...getOverrideProps(overrides, "Fill 1")}
                ></Icon>
                <Icon
                  width="11.98px"
                  height="10.32px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 11.97882080078125,
                    height: 10.318359375,
                  }}
                  paths={[
                    {
                      d: "M5.47792 7.54499C4.95151 7.54499 4.45681 7.38962 4.0509 7.13267L4.74221 6.48132C4.95785 6.58888 5.21154 6.64864 5.47792 6.64864C6.34681 6.64864 7.05714 5.97937 7.05714 5.16071C7.05714 4.90973 6.99372 4.67071 6.87956 4.46753L7.57087 3.81619C7.84359 4.19863 8.00848 4.66473 8.00848 5.16071C8.00848 6.47535 6.87322 7.54499 5.47792 7.54499M11.9408 4.98218C11.3573 3.7034 10.5772 2.63974 9.65755 1.85095L10.8118 0.763387C11.0021 0.590094 11.0021 0.303263 10.8118 0.12997C10.6279 -0.0433233 10.3298 -0.0433233 10.1396 0.12997L9.54339 0.69168C9.53705 0.703631 9.52436 0.715582 9.51168 0.727533C9.50534 0.739485 9.49265 0.751436 9.47997 0.763387L0.0997384 9.60135L0.0807116 9.62525C-0.046134 9.79854 -0.0207649 10.0376 0.137792 10.187C0.226584 10.2766 0.353429 10.3184 0.473933 10.3184C0.594436 10.3184 0.714939 10.2766 0.810074 10.187L2.04048 9.02769C3.07427 9.71489 4.24759 10.0914 5.47165 10.0914L5.47799 10.0914C8.16712 10.0914 10.5835 8.31061 11.9408 5.33475C11.9915 5.22719 11.9915 5.09572 11.9408 4.98218",
                      fill: "rgba(35,11,52,1)",
                      fillRule: "evenodd",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="7.86%"
                  right="0%"
                  {...getOverrideProps(overrides, "Fill 4")}
                >
                  <Icon
                    width="3.96px"
                    height="3.73px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 3.95758056640625,
                      height: 3.728515625,
                    }}
                    paths={[]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="36.98%"
                    bottom="26.88%"
                    left="31.16%"
                    right="38.4%"
                    {...getOverrideProps(overrides, "Path3957082")}
                  ></Icon>
                  <Icon
                    width="11.98px"
                    height="10.32px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 11.97882080078125,
                      height: 10.318359375,
                    }}
                    paths={[]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="7.86%"
                    {...getOverrideProps(overrides, "Path3957083")}
                  ></Icon>
                </Icon>
              </Icon>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="348px"
          height="46.04px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "bg3406748")}
        >
          <Icon
            width="348px"
            height="46.04px"
            viewBox={{ minX: 0, minY: 0, width: 348, height: 46.04296875 }}
            paths={[
              {
                d: "M0 9.99999C0 4.47714 4.47715 0 10 0L338 0C343.523 0 348 4.47715 348 10L348 36.0432C348 41.566 343.523 46.0432 338 46.0432L10 46.0432C4.47715 46.0432 0 41.566 0 36.0432L0 9.99999Z",
                fill: "rgba(247,247,248,1)",
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
            {...getOverrideProps(overrides, "bg3406749")}
          ></Icon>
        </Flex>
      </Flex>
      <Flex
        gap="120px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 123")}
      >
        <Flex
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 125")}
        >
          <View
            width="14px"
            height="14px"
            {...getOverrideProps(overrides, "Check Box button")}
          ></View>
          <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="400"
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
            children="Remember me"
            {...getOverrideProps(overrides, "Remember me")}
          ></Text>
        </Flex>
        <ResetPassword
          display="flex"
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          property1="Default"
          {...getOverrideProps(overrides, "Reset Password")}
        ></ResetPassword>
      </Flex>
      <ButtonCustom
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        size="default"
        isDisabled={false}
        variation="primary"
        {...getOverrideProps(overrides, "Button")}
      ></ButtonCustom>
      <Flex
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 124")}
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Don’t have account yet?"
          {...getOverrideProps(overrides, "Don\u2019t have account yet?")}
        ></Text>
        <CreateAccount
          display="flex"
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          property1="Default"
          {...getOverrideProps(overrides, "CreateAccountWord")}
        ></CreateAccount>
      </Flex>
    </Flex>
  );
}
