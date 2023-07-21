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
export default function Searchbar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { searchBar: "Default" },
      overrides: { Vector: {}, "Search question": {}, Searchbar: {} },
    },
    {
      variantValues: { searchBar: "hover" },
      overrides: {
        Vector: {},
        "Search question": {},
        Searchbar: {
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.05000000074505806)",
        },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="7px"
      direction="row"
      width="300px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="20px"
      padding="8px 15px 8px 15px"
      backgroundColor="rgba(83,84,92,0.12)"
      display="flex"
      {...getOverrideProps(overrides, "Searchbar")}
      {...rest}
    >
      <Icon
        width="14px"
        height="14px"
        viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
        paths={[
          {
            d: "M14 13.2678L10.0893 9.35711C11.0291 8.22892 11.4977 6.78185 11.3977 5.31693C11.2977 3.85202 10.6368 2.48205 9.55246 1.49202C8.46811 0.501988 7.04382 -0.0318806 5.57588 0.00147384C4.10793 0.0348283 2.70936 0.632837 1.6711 1.6711C0.632837 2.70936 0.0348283 4.10793 0.00147384 5.57588C-0.0318806 7.04382 0.501988 8.46811 1.49202 9.55246C2.48205 10.6368 3.85202 11.2977 5.31693 11.3977C6.78185 11.4977 8.22892 11.0291 9.35711 10.0893L13.2678 14L14 13.2678ZM1.05418 5.71468C1.05418 4.79292 1.32752 3.89186 1.83962 3.12545C2.35172 2.35903 3.07959 1.76168 3.93118 1.40894C4.78278 1.0562 5.71985 0.963907 6.62389 1.14373C7.52794 1.32356 8.35836 1.76743 9.01014 2.41921C9.66193 3.07099 10.1058 3.90141 10.2856 4.80546C10.4654 5.70951 10.3732 6.64658 10.0204 7.49817C9.66767 8.34976 9.07032 9.07763 8.30391 9.58974C7.53749 10.1018 6.63644 10.3752 5.71468 10.3752C4.47906 10.3738 3.29444 9.88235 2.42072 9.00863C1.54701 8.13492 1.05555 6.9503 1.05418 5.71468Z",
            fill: "rgba(76,76,76,1)",
            fillRule: "nonzero",
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
      <Text
        fontFamily="Poppins"
        fontSize="12px"
        fontWeight="400"
        color="rgba(141,143,155,1)"
        lineHeight="18px"
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
        children="Search question"
        {...getOverrideProps(overrides, "Search question")}
      ></Text>
    </Flex>
  );
}
