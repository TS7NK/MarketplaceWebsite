/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import Deletebutton from "./Deletebutton";
import Savefolaterbutton from "./Savefolaterbutton";
import CartItemList from "./CartItemList";
import ApplyDiscountButton from "./ApplyDiscountButton";
import CheckoutButton from "./CheckoutButton";
export default function ShoppingCart(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ShoppingCart")}
      {...rest}
    >
      <Flex
        gap="6px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Headings with Lines")}
      >
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
          {...getOverrideProps(overrides, "Frame 133")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="24px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="28.125px"
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
            children="Shopping Cart"
            {...getOverrideProps(overrides, "Shopping Cart")}
          ></Text>
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="(3 items)"
            {...getOverrideProps(overrides, "(3 items)")}
          ></Text>
        </Flex>
        <Icon
          width="1200px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 1200, height: 1 }}
          paths={[
            {
              d: "M0 -1.5C-0.828427 -1.5 -1.5 -0.828427 -1.5 0C-1.5 0.828427 -0.828427 1.5 0 1.5L0 -1.5ZM1200 1.5C1200.83 1.5 1201.5 0.828427 1201.5 0C1201.5 -0.828427 1200.83 -1.5 1200 -1.5L1200 1.5ZM0 1.5L1200 1.5L1200 -1.5L0 -1.5L0 1.5Z",
              stroke: "rgba(255,215,0,1)",
              fillRule: "nonzero",
              strokeWidth: 3,
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
        gap="60px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 130")}
      >
        <Flex
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 129")}
        >
          <Flex
            gap="6px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 128")}
          >
            <Flex
              gap="5px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 118")}
            >
              <Deletebutton
                display="flex"
                gap="9px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="6px"
                padding="0px 0px 0px 0px"
                delete="Default"
                {...getOverrideProps(overrides, "delete button")}
              ></Deletebutton>
              <Icon
                width="10px"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 1, height: 10 }}
                paths={[
                  {
                    d: "M0 0L10 0L10 -1L0 -1L0 0Z",
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
                {...getOverrideProps(overrides, "Line 14")}
              ></Icon>
              <Savefolaterbutton
                display="flex"
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="3px 6px 3px 6px"
                property1="Default"
                {...getOverrideProps(overrides, "Save fo later button")}
              ></Savefolaterbutton>
            </Flex>
            <Icon
              width="300px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 300, height: 1 }}
              paths={[
                {
                  d: "M0 0L300 0L300 -1L0 -1L0 0Z",
                  stroke: "rgba(255,215,0,1)",
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
              {...getOverrideProps(overrides, "Line 69")}
            ></Icon>
          </Flex>
          <Flex
            gap="20px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 120")}
          >
            <CartItemList
              display="flex"
              gap="20px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              property1="Default"
              {...getOverrideProps(overrides, "Cart Item List43114024")}
            ></CartItemList>
            <CartItemList
              display="flex"
              gap="20px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              property1="Default"
              {...getOverrideProps(overrides, "Cart Item List43114025")}
            ></CartItemList>
            <CartItemList
              display="flex"
              gap="20px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              property1="Default"
              {...getOverrideProps(overrides, "Cart Item List43114026")}
            ></CartItemList>
          </Flex>
        </Flex>
        <Flex
          gap="34px"
          direction="column"
          width="369px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.10000000149011612)"
          borderRadius="30px"
          padding="30px 30px 30px 30px"
          backgroundColor="rgba(255,250,223,1)"
          {...getOverrideProps(overrides, "Order Summary")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="24px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="27.730262756347656px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="253px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Order Summary"
            {...getOverrideProps(overrides, "Heading43114028")}
          ></Text>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Discount code")}
          >
            <Icon
              width="unset"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 309, height: 1 }}
              paths={[
                {
                  d: "M0 0L309 0L309 -0.5L0 -0.5L0 0Z",
                  stroke: "rgba(228,231,236,1)",
                  fillRule: "nonzero",
                  strokeWidth: 0,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              {...getOverrideProps(overrides, "Seperator43114030")}
            ></Icon>
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-end"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Discount Code input")}
            >
              <Flex
                gap="6px"
                direction="column"
                width="225px"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "_Input field core")}
              >
                <Flex
                  gap="6px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Input with label")}
                >
                  <Text
                    fontFamily="Roboto"
                    fontSize="16px"
                    fontWeight="400"
                    color="rgba(76,76,76,1)"
                    lineHeight="24px"
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
                    children="Discount Code:"
                    {...getOverrideProps(overrides, "Label")}
                  ></Text>
                  <Flex
                    gap="8px"
                    direction="row"
                    width="unset"
                    height="40px"
                    justifyContent="flex-start"
                    alignItems="center"
                    overflow="hidden"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                    border="1px SOLID rgba(217,217,217,1)"
                    boxShadow="0px 1px 2px rgba(0.062745101749897, 0.0941176488995552, 0.1568627506494522, 0.05000000074505806)"
                    borderRadius="999px"
                    padding="9px 13px 9px 13px"
                    backgroundColor="rgba(255,255,255,1)"
                    {...getOverrideProps(overrides, "Input")}
                  >
                    <Flex
                      gap="8px"
                      direction="row"
                      width="291px"
                      height="unset"
                      justifyContent="flex-start"
                      alignItems="center"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      {...getOverrideProps(overrides, "Content")}
                    >
                      <Text
                        fontFamily="Roboto"
                        fontSize="12px"
                        fontWeight="400"
                        color="rgba(141,143,155,1)"
                        lineHeight="18px"
                        textAlign="left"
                        display="block"
                        direction="column"
                        justifyContent="unset"
                        width="unset"
                        height="unset"
                        gap="unset"
                        alignItems="unset"
                        grow="1"
                        shrink="1"
                        basis="0"
                        position="relative"
                        padding="0px 0px 0px 0px"
                        whiteSpace="pre-wrap"
                        children="SAVE 20%"
                        {...getOverrideProps(
                          overrides,
                          "linda@framcreative.com"
                        )}
                      ></Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <ApplyDiscountButton
                display="flex"
                gap="8px"
                direction="row"
                width="76px"
                height="40px"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(217,217,217,1)"
                boxShadow="0px 1px 2px rgba(0.7764706015586853, 0.8941176533699036, 0.9647058844566345, 0.05000000074505806)"
                borderRadius="999px"
                padding="9px 15px 9px 15px"
                backgroundColor="rgba(255,255,255,1)"
                property1="Default"
                {...getOverrideProps(overrides, "Apply Discount Button")}
              ></ApplyDiscountButton>
            </Flex>
            <Icon
              width="unset"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 309, height: 1 }}
              paths={[
                {
                  d: "M0 0L309 0L309 -0.5L0 -0.5L0 0Z",
                  stroke: "rgba(228,231,236,1)",
                  fillRule: "nonzero",
                  strokeWidth: 0,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              {...getOverrideProps(overrides, "Seperator43114039")}
            ></Icon>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 16px 0px 16px"
            {...getOverrideProps(overrides, "Sum Breakdown")}
          >
            <Flex
              gap="28px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="space-between"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Order Value")}
            >
              <Text
                fontFamily="Roboto"
                fontSize="16px"
                fontWeight="400"
                color="rgba(76,76,76,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="217px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Order Value"
                {...getOverrideProps(overrides, "Text43114042")}
              ></Text>
              <Text
                fontFamily="Roboto"
                fontSize="16px"
                fontWeight="400"
                color="rgba(76,76,76,1)"
                lineHeight="19.200000762939453px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="-0.17px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="$9.97"
                {...getOverrideProps(overrides, "\u20AC3543114043")}
              ></Text>
            </Flex>
            <Flex
              gap="28px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="space-between"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "VAT")}
            >
              <Text
                fontFamily="Roboto"
                fontSize="16px"
                fontWeight="400"
                color="rgba(76,76,76,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="217px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Discount"
                {...getOverrideProps(overrides, "Text43114045")}
              ></Text>
              <Text
                fontFamily="Roboto"
                fontSize="16px"
                fontWeight="400"
                color="rgba(76,76,76,1)"
                lineHeight="19.200000762939453px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="-0.17px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="$0.00"
                {...getOverrideProps(overrides, "\u20AC3543114046")}
              ></Text>
            </Flex>
            <Flex
              gap="28px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="space-between"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Total before discount")}
            >
              <Text
                fontFamily="Roboto"
                fontSize="16px"
                fontWeight="400"
                color="rgba(76,76,76,1)"
                lineHeight="24px"
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
                children="Total Before Discount"
                {...getOverrideProps(overrides, "Text43114048")}
              ></Text>
              <Text
                fontFamily="Roboto"
                fontSize="16px"
                fontWeight="400"
                color="rgba(76,76,76,1)"
                lineHeight="19.200000762939453px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                textDecoration="line-through"
                letterSpacing="-0.17px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="$9.97"
                {...getOverrideProps(overrides, "\u20AC3543114049")}
              ></Text>
            </Flex>
            <Icon
              width="unset"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 277, height: 1 }}
              paths={[
                {
                  d: "M0 0L277 0L277 -0.5L0 -0.5L0 0Z",
                  stroke: "rgba(228,231,236,1)",
                  fillRule: "nonzero",
                  strokeWidth: 0,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              {...getOverrideProps(overrides, "Line 68")}
            ></Icon>
            <Flex
              gap="28px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="space-between"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Total")}
            >
              <Text
                fontFamily="Roboto"
                fontSize="20px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="30px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="204px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="TOTAL"
                {...getOverrideProps(overrides, "Heading43114052")}
              ></Text>
              <Text
                fontFamily="Roboto"
                fontSize="30px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="36px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="-0.45px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="$9.97"
                {...getOverrideProps(overrides, "\u20AC3543114053")}
              ></Text>
            </Flex>
          </Flex>
          <CheckoutButton
            display="flex"
            gap="10px"
            direction="row"
            width="unset"
            height="44px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            boxShadow="0px 1px 2px rgba(0.7764706015586853, 0.8941176533699036, 0.9647058844566345, 0.05000000074505806)"
            borderRadius="30px"
            padding="10px 0px 10px 0px"
            backgroundColor="rgba(255,215,0,1)"
            property1="Default"
            {...getOverrideProps(overrides, "Checkout Button")}
          ></CheckoutButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
