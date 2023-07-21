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
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function ClosedFAQ(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        "How long does it take for my prompt to be approved?": {},
        Vector: {},
        ClosedFAQ: {},
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        "How long does it take for my prompt to be approved?": {},
        Vector: {},
        ClosedFAQ: { backgroundColor: "rgba(217,217,217,1)" },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="30px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(217,217,217,1)"
      borderRadius="11px"
      padding="15px 30px 15px 30px"
      backgroundColor="rgba(217,217,217,0.5)"
      display="flex"
      {...getOverrideProps(overrides, "ClosedFAQ")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="20px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="700px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="How long does it take for my prompt to be approved?"
        {...getOverrideProps(
          overrides,
          "How long does it take for my prompt to be approved?"
        )}
      ></Text>
      <Icon
        width="20px"
        height="11.52px"
        viewBox={{ minX: 0, minY: 0, width: 20, height: 11.5205078125 }}
        paths={[
          {
            d: "M11.0805 11.0805C10.7988 11.3621 10.4168 11.5203 10.0185 11.5203C9.62014 11.5203 9.23812 11.3621 8.95642 11.0805L0.458598 2.58268C0.315124 2.44411 0.200685 2.27835 0.121957 2.09508C0.0432295 1.91181 0.00178995 1.71469 5.67168e-05 1.51523C-0.00167652 1.31577 0.0363315 1.11797 0.111862 0.933355C0.187393 0.748743 0.298935 0.581021 0.439978 0.439977C0.581022 0.298934 0.748742 0.187393 0.933355 0.111862C1.11797 0.0363308 1.31577 -0.00167652 1.51523 5.67178e-05C1.71469 0.00178996 1.91181 0.0432295 2.09508 0.121957C2.27835 0.200685 2.44411 0.315124 2.58268 0.458597L10.0185 7.89438L17.4542 0.458597C17.7376 0.184963 18.117 0.0335519 18.5109 0.0369745C18.9047 0.0403971 19.2815 0.198379 19.56 0.476895C19.8385 0.755411 19.9965 1.13218 19.9999 1.52604C20.0034 1.91991 19.852 2.29936 19.5783 2.58268L11.0805 11.0805Z",
            fill: "rgba(76,76,76,1)",
            fillRule: "evenodd",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </Flex>
  );
}
