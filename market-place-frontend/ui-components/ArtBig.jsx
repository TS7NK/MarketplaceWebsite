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
export default function ArtBig(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "default" },
      overrides: { Vector: {}, "mdi:art": {}, Art: {}, ArtBig: {} },
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
      border="1px SOLID rgba(148,128,99,1)"
      borderRadius="7px"
      padding="3px 6px 3px 6px"
      backgroundColor="rgba(148,128,99,1)"
      display="flex"
      {...getOverrideProps(overrides, "ArtBig")}
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
        {...getOverrideProps(overrides, "mdi:art")}
      >
        <Icon
          width="15px"
          height="15px"
          viewBox={{ minX: 0, minY: 0, width: 15, height: 15 }}
          paths={[
            {
              d: "M12.0833 7.5C11.7518 7.5 11.4339 7.3683 11.1995 7.13388C10.965 6.89946 10.8333 6.58152 10.8333 6.25C10.8333 5.91848 10.965 5.60054 11.1995 5.36612C11.4339 5.1317 11.7518 5 12.0833 5C12.4149 5 12.7328 5.1317 12.9672 5.36612C13.2016 5.60054 13.3333 5.91848 13.3333 6.25C13.3333 6.58152 13.2016 6.89946 12.9672 7.13388C12.7328 7.3683 12.4149 7.5 12.0833 7.5ZM9.58333 4.16667C9.25181 4.16667 8.93387 4.03497 8.69945 3.80055C8.46503 3.56613 8.33333 3.24819 8.33333 2.91667C8.33333 2.58515 8.46503 2.2672 8.69945 2.03278C8.93387 1.79836 9.25181 1.66667 9.58333 1.66667C9.91485 1.66667 10.2328 1.79836 10.4672 2.03278C10.7016 2.2672 10.8333 2.58515 10.8333 2.91667C10.8333 3.24819 10.7016 3.56613 10.4672 3.80055C10.2328 4.03497 9.91485 4.16667 9.58333 4.16667ZM5.41667 4.16667C5.08515 4.16667 4.7672 4.03497 4.53278 3.80055C4.29836 3.56613 4.16667 3.24819 4.16667 2.91667C4.16667 2.58515 4.29836 2.2672 4.53278 2.03278C4.7672 1.79836 5.08515 1.66667 5.41667 1.66667C5.74819 1.66667 6.06613 1.79836 6.30055 2.03278C6.53497 2.2672 6.66667 2.58515 6.66667 2.91667C6.66667 3.24819 6.53497 3.56613 6.30055 3.80055C6.06613 4.03497 5.74819 4.16667 5.41667 4.16667ZM2.91667 7.5C2.58515 7.5 2.2672 7.3683 2.03278 7.13388C1.79836 6.89946 1.66667 6.58152 1.66667 6.25C1.66667 5.91848 1.79836 5.60054 2.03278 5.36612C2.2672 5.1317 2.58515 5 2.91667 5C3.24819 5 3.56613 5.1317 3.80055 5.36612C4.03497 5.60054 4.16667 5.91848 4.16667 6.25C4.16667 6.58152 4.03497 6.89946 3.80055 7.13388C3.56613 7.3683 3.24819 7.5 2.91667 7.5ZM7.5 0C5.51088 2.22045e-15 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 2.22045e-15 5.51088 0 7.5C2.96059e-15 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15C7.83152 15 8.14946 14.8683 8.38388 14.6339C8.6183 14.3995 8.75 14.0815 8.75 13.75C8.75 13.425 8.625 13.1333 8.425 12.9167C8.23333 12.6917 8.10833 12.4 8.10833 12.0833C8.10833 11.7518 8.24003 11.4339 8.47445 11.1995C8.70887 10.965 9.02681 10.8333 9.35833 10.8333L10.8333 10.8333C11.9384 10.8333 12.9982 10.3943 13.7796 9.61294C14.561 8.83154 15 7.77174 15 6.66667C15 2.98333 11.6417 0 7.5 0Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="12.5%"
          right="12.5%"
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
        children="Art"
        {...getOverrideProps(overrides, "Art")}
      ></Text>
    </Flex>
  );
}
