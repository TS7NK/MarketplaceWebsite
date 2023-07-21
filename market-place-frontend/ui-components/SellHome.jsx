/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import SellaPrompt from "./SellaPrompt";
export default function SellHome(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="800px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,246,255,1)"
      {...getOverrideProps(overrides, "SellHome")}
      {...rest}
    >
      <Flex
        gap="100px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="80px"
        left="calc(50% - 616.5px - 0.5px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 23")}
      >
        <Flex
          gap="40px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 22")}
        >
          <Flex
            gap="60px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 20")}
          >
            <Flex
              gap="60px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 19")}
            >
              <Text
                fontFamily="Roboto"
                fontSize="40px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
                lineHeight="46.875px"
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
                children="Sell a Prompt!"
                {...getOverrideProps(overrides, "Sell a Prompt!")}
              ></Text>
              <Text
                fontFamily="Roboto"
                fontSize="20px"
                fontWeight="500"
                color="rgba(141,143,155,1)"
                lineHeight="23.4375px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="627px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Sell your prompt for DALL·E, Midjourney, Stable Diffusion or ChatGPT on Parazon, keep 80% of revenue from every sale.&#xA;&#xA;Get Selling in 2 Minutes."
                {...getOverrideProps(
                  overrides,
                  "Sell your prompt for DALL\u00B7E, Midjourney, Stable Diffusion or ChatGPT on Parazon, keep 80% of revenue from every sale. Get Selling in 2 Minutes."
                )}
              ></Text>
            </Flex>
            <SellaPrompt
              display="flex"
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="6px"
              padding="10px 20px 10px 20px"
              backgroundColor="rgba(255,215,0,1)"
              property1="Default"
              {...getOverrideProps(overrides, "Sell a Prompt")}
            ></SellaPrompt>
            <Text
              fontFamily="Roboto"
              fontSize="16px"
              fontWeight="500"
              color="rgba(141,143,155,1)"
              lineHeight="18.75px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="627px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Please read our prompt submission guidelines before submitting your prompt on Parazon. Payouts occur when reaching a minimum balance threshold on monthly/week payout cycles. Learn more."
              {...getOverrideProps(
                overrides,
                "Please read our prompt submission guidelines before submitting your prompt on Parazon. Payouts occur when reaching a minimum balance threshold on monthly/week payout cycles. Learn more."
              )}
            ></Text>
          </Flex>
        </Flex>
        <View
          width="506px"
          height="364px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Cashback")}
        >
          <Icon
            width="506px"
            height="300.94px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 505.99951171875,
              height: 300.93701171875,
            }}
            paths={[
              {
                d: "M471.092 300.937C475.806 300.937 480.471 299.981 484.807 298.128C489.142 296.274 493.057 293.561 496.316 290.152C499.574 286.743 502.11 282.709 503.768 278.292C505.427 273.876 506.174 269.17 505.965 264.456C504.817 238.462 491.535 201.756 439.179 165.075C375.333 120.342 404.13 -8.44963 268.476 0.43806C132.823 9.32575 145.757 104.503 62.5777 148.128C9.63018 175.897 0.0034593 230.231 0 266.058C0.0086468 275.315 3.69081 284.19 10.2368 290.731C16.7827 297.271 25.6565 300.943 34.9068 300.937L471.092 300.937Z",
                fill: "rgba(0,163,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="17.33%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector43713469")}
          ></Icon>
          <Icon
            width="265.68px"
            height="181.14px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 265.681640625,
              height: 181.13720703125,
            }}
            paths={[
              {
                d: "M245.773 0L19.9087 0C8.91344 0 0 8.92016 0 19.9237L0 161.213C0 172.217 8.91344 181.137 19.9087 181.137L245.773 181.137C256.768 181.137 265.682 172.217 265.682 161.213L265.682 19.9237C265.682 8.92016 256.768 0 245.773 0Z",
                fill: "rgba(193,216,237,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="24.83%"
            bottom="25.41%"
            left="16.99%"
            right="30.51%"
            {...getOverrideProps(overrides, "Vector43713470")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="116.24px"
            height="260.73px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="28.37%"
            bottom="0%"
            left="72.65%"
            right="4.37%"
            {...getOverrideProps(overrides, "Group43713471")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="27.57px"
              height="38.03px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="11.23%"
              bottom="74.18%"
              left="26.75%"
              right="49.53%"
              {...getOverrideProps(overrides, "Group43713472")}
            >
              <Icon
                width="27.57px"
                height="26.76px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 27.5673828125,
                  height: 26.7646484375,
                }}
                paths={[
                  {
                    d: "M3.10475 9.29301C3.10475 9.29301 -1.01875 6.39788 0.238454 3.33756C1.49566 0.277237 4.38271 -0.933442 8.68904 0.787617C11.7505 2.01165 12.2442 1.31729 15.0853 0.361807C16.7126 -0.185173 21.7049 0.782673 22.5257 4.34991C23.4054 8.17086 27.9074 5.72924 27.5471 11.7302C27.2457 16.7524 25.4715 23.105 19.397 26.7647",
                    fill: "rgba(15,16,17,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="29.62%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector43713473")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="24.33px"
                height="36.04px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="5.22%"
                bottom="0%"
                left="4.96%"
                right="6.78%"
                {...getOverrideProps(overrides, "Group43713474")}
              >
                <Icon
                  width="13.66px"
                  height="15.15px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 13.6630859375,
                    height: 15.1484375,
                  }}
                  paths={[
                    {
                      d: "M13.6632 15.1483C13.6632 15.1483 10.1229 12.6617 12.2612 2.43471L4.60876 0C4.60876 0 4.33104 9.37433 0 11.8199L13.6632 15.1483Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="57.97%"
                  bottom="0%"
                  left="10.43%"
                  right="33.41%"
                  {...getOverrideProps(overrides, "Vector43713475")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="7.13px"
                  height="4.86px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="72.47%"
                  bottom="14.04%"
                  left="18.02%"
                  right="52.67%"
                  {...getOverrideProps(overrides, "Group43713476")}
                >
                  <Icon
                    width="7.13px"
                    height="4.86px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 7.13134765625,
                      height: 4.85986328125,
                    }}
                    paths={[
                      {
                        d: "M0 4.86003L7.13112 0.692392L2.02618 0C1.65931 1.7322 0.972107 3.38053 0 4.86003Z",
                        fill: "rgba(0,0,0,1)",
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
                    {...getOverrideProps(overrides, "Vector43713477")}
                  ></Icon>
                </View>
                <Icon
                  width="21.31px"
                  height="25.98px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 21.30908203125,
                    height: 25.9755859375,
                  }}
                  paths={[
                    {
                      d: "M19.7448 18.9639C18.8103 22.0301 16.7303 24.7858 13.8398 25.4524C10.4091 26.2437 7.96936 26.0212 4.18736 25.5474C-0.973907 24.9015 -0.129842 19.536 0.403878 14.0895C0.939574 8.62167 2.10338 2.82991 4.38058 1.186C8.92709 -2.09489 20.576 1.80223 21.2373 8.32445C21.5792 11.6973 20.6338 16.0445 19.7448 18.9639Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="2.54%"
                  bottom="25.39%"
                  left="0%"
                  right="12.41%"
                  {...getOverrideProps(overrides, "Vector43713478")}
                ></Icon>
                <Icon
                  width="23.56px"
                  height="26.74px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 23.5576171875,
                    height: 26.7421875,
                  }}
                  paths={[
                    {
                      d: "M13.3119 26.0978C13.4107 26.6418 13.4948 26.8806 13.9988 26.6606C15.9756 25.7961 20.4232 23.9321 22.9495 15.1804C25.2149 7.3387 20.696 3.42182 16.9106 1.7517C13.649 0.312536 5.76225 -0.886766 1.76923 0.888199C-1.67178 2.41737 0.966693 7.30706 0.966693 7.30706C2.98791 9.17945 9.33126 9.4203 11.7335 9.82435C13.9321 10.1943 13.9257 11.5553 13.7394 12.4084C12.6067 17.5929 12.966 24.1823 13.3119 26.0978Z",
                      fill: "rgba(15,16,17,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="25.81%"
                  left="3.17%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector43713479")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="8.96px"
                  height="4.22px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="32.5%"
                  bottom="55.79%"
                  left="4.05%"
                  right="59.14%"
                  {...getOverrideProps(overrides, "Group43713480")}
                >
                  <Icon
                    width="1.43px"
                    height="1.43px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.43212890625,
                      height: 1.43310546875,
                    }}
                    paths={[
                      {
                        d: "M0.716092 1.43322C1.11157 1.43322 1.43215 1.11238 1.43215 0.716601C1.43215 0.320826 1.11157 0 0.716092 0C0.320615 0 0 0.320826 0 0.716601C0 1.11238 0.320615 1.43322 0.716092 1.43322Z",
                        fill: "rgba(15,16,17,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="66.04%"
                    bottom="0%"
                    left="68.86%"
                    right="15.14%"
                    {...getOverrideProps(overrides, "Vector43713481")}
                  ></Icon>
                  <Icon
                    width="1.43px"
                    height="1.43px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 1.43212890625,
                      height: 1.43310546875,
                    }}
                    paths={[
                      {
                        d: "M0.716092 1.43322C1.11157 1.43322 1.43215 1.11238 1.43215 0.716601C1.43215 0.320826 1.11157 0 0.716092 0C0.320615 0 0 0.320826 0 0.716601C0 1.11238 0.320615 1.43322 0.716092 1.43322Z",
                        fill: "rgba(15,16,17,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="38.51%"
                    bottom="27.53%"
                    left="6.91%"
                    right="77.1%"
                    {...getOverrideProps(overrides, "Vector43713482")}
                  ></Icon>
                  <Icon
                    width="2.56px"
                    height="0.89px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 2.55517578125,
                      height: 0.88720703125,
                    }}
                    paths={[
                      {
                        d: "M2.2205 0.886865C2.20783 0.887591 2.19511 0.887591 2.18244 0.886865L0.299112 0.671734C0.255177 0.666798 0.212641 0.653246 0.173937 0.631859C0.135234 0.610473 0.101105 0.581665 0.0735256 0.547084C0.0459461 0.512503 0.0254569 0.472822 0.0132003 0.430312C0.000943687 0.387801 -0.00283174 0.343291 0.00210045 0.299322C0.00703265 0.255354 0.0205752 0.212801 0.0419453 0.174068C0.0633155 0.135335 0.0920874 0.101181 0.126642 0.073581C0.161197 0.0459807 0.200863 0.0254761 0.243341 0.0132103C0.28582 0.000944397 0.330282 -0.00283388 0.374217 0.00210203L2.25905 0.214758C2.34387 0.225062 2.42159 0.267259 2.47646 0.332798C2.53133 0.398337 2.55924 0.482314 2.55453 0.567685C2.54981 0.653057 2.51282 0.733433 2.45107 0.792521C2.38932 0.85161 2.30741 0.884982 2.22198 0.885869L2.2205 0.886865Z",
                        fill: "rgba(15,16,17,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="78.97%"
                    left="0%"
                    right="71.47%"
                    {...getOverrideProps(overrides, "Vector43713483")}
                  ></Icon>
                  <Icon
                    width="2.47px"
                    height="1.35px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 2.47265625,
                      height: 1.35302734375,
                    }}
                    paths={[
                      {
                        d: "M2.13647 1.35296C2.09594 1.35298 2.05575 1.34561 2.01787 1.33119L0.218032 0.652156C0.134478 0.620677 0.0668376 0.557275 0.0299982 0.475889C-0.00684114 0.394503 -0.009873 0.301799 0.0215828 0.218181C0.0530387 0.134564 0.116408 0.0668879 0.197733 0.0300208C0.279057 -0.00684631 0.371677 -0.00988042 0.455231 0.0215991L2.25507 0.701117C2.32871 0.728978 2.39026 0.7818 2.42902 0.850384C2.46777 0.918968 2.48125 0.998973 2.46714 1.07649C2.45304 1.154 2.41225 1.22411 2.35183 1.27462C2.29141 1.32514 2.2152 1.35286 2.13647 1.35296Z",
                        fill: "rgba(15,16,17,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="25.04%"
                    bottom="42.9%"
                    left="72.39%"
                    right="0%"
                    {...getOverrideProps(overrides, "Vector43713484")}
                  ></Icon>
                </View>
                <Icon
                  width="6.07px"
                  height="6.05px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 6.07470703125,
                    height: 6.0458984375,
                  }}
                  paths={[
                    {
                      d: "M0.0583223 2.41522C-0.0977054 3.20035 0.0622233 4.01539 0.503342 4.68318C0.944461 5.35097 1.6311 5.81754 2.41406 5.98148C3.19701 6.14542 4.013 5.99348 4.68464 5.55869C5.35628 5.1239 5.82929 4.4414 6.00088 3.65952C6.08952 3.26856 6.09866 2.86375 6.02772 2.46919C5.95679 2.07462 5.80724 1.69837 5.58798 1.36285C5.36873 1.02733 5.08425 0.739389 4.75148 0.516179C4.41872 0.29297 4.04447 0.139052 3.65103 0.063595C1.51318 -0.275177 0.401781 0.772792 0.0583223 2.41522Z",
                      fill: "rgba(233,136,98,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="41.63%"
                  bottom="41.59%"
                  left="46.4%"
                  right="28.63%"
                  {...getOverrideProps(overrides, "Vector43713485")}
                ></Icon>
                <View
                  padding="0px 0px 0px 0px"
                  width="2.14px"
                  height="3.61px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="42.07%"
                  bottom="47.93%"
                  left="9.7%"
                  right="81.51%"
                  {...getOverrideProps(overrides, "Group43713486")}
                >
                  <Icon
                    width="2.14px"
                    height="3.61px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 2.13916015625,
                      height: 3.60546875,
                    }}
                    paths={[
                      {
                        d: "M1.88972 3.60543C1.85559 3.60541 1.82187 3.59798 1.79088 3.58367L0.145749 2.84183C0.113798 2.82745 0.0852631 2.80643 0.0620471 2.78018C0.0388312 2.75392 0.0214471 2.72303 0.0110722 2.68955C0.000697334 2.65606 -0.00242877 2.62074 0.00187262 2.58595C0.00617401 2.55116 0.0178 2.51767 0.0360168 2.48773L1.47411 0.122265C1.4907 0.0939461 1.51273 0.0692055 1.53896 0.0495034C1.5652 0.0298013 1.59511 0.0155222 1.62692 0.00750047C1.65872 -0.000521231 1.69179 -0.00212948 1.72422 0.00277646C1.75665 0.00768239 1.78778 0.0190152 1.81579 0.036086C1.84381 0.0531568 1.86816 0.0756256 1.8874 0.102207C1.90664 0.128789 1.9204 0.158948 1.92788 0.190907C1.93536 0.222866 1.9364 0.255992 1.93096 0.28836C1.92551 0.320728 1.91368 0.351686 1.89615 0.37943L0.603859 2.50602L1.99348 3.13064C2.04507 3.15387 2.08717 3.1941 2.11269 3.24462C2.1382 3.29515 2.1456 3.35292 2.13368 3.40826C2.12176 3.4636 2.09125 3.51317 2.0472 3.5487C2.00316 3.58422 1.94825 3.60356 1.89168 3.60345L1.88972 3.60543Z",
                        fill: "rgba(0,0,0,1)",
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
                    {...getOverrideProps(overrides, "Vector43713487")}
                  ></Icon>
                </View>
                <Icon
                  width="4.42px"
                  height="2.23px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 4.4208984375,
                    height: 2.2314453125,
                  }}
                  paths={[
                    {
                      d: "M4.42097 0.924819C4.42097 0.924819 1.76324 0.875366 0.00542783 0C0.00542783 0 -0.196188 1.73094 1.85814 2.16071C3.91247 2.59048 4.42097 0.924819 4.42097 0.924819Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="55.08%"
                  bottom="38.73%"
                  left="9.94%"
                  right="71.89%"
                  {...getOverrideProps(overrides, "Vector43713488")}
                ></Icon>
              </View>
            </View>
            <Icon
              width="8.97px"
              height="13.96px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.96484375,
                height: 13.96240234375,
              }}
              paths={[
                {
                  d: "M5.51117 13.9624L0.0222587 11.9303C0.0222587 11.9303 -0.669584 4.38531 5.66093 0.395714C7.75924 -0.926237 9.29021 1.4239 8.90574 2.19145C7.63519 4.72853 6.1284 7.06333 6.15855 9.50149C6.97 8.74334 8.14024 7.77352 8.48518 8.12712C9.3925 9.05739 5.51117 13.9624 5.51117 13.9624Z",
                  fill: "rgba(233,136,98,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="94.64%"
              left="10.68%"
              right="81.61%"
              {...getOverrideProps(overrides, "Vector43713489")}
            ></Icon>
            <Icon
              width="12.21px"
              height="13.01px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 12.21044921875,
                height: 13.01171875,
              }}
              paths={[
                {
                  d: "M2.17491 13.0118L0.118117 2.8348C0.0874775 2.84123 0.0474418 2.84913 0 2.861C0.745725 2.67257 5.23391 1.22897 8.96501 0L12.2103 9.86543C3.41037 12.762 2.4813 12.95 2.17491 13.0118Z",
                  fill: "rgba(233,136,98,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="64.62%"
              bottom="30.39%"
              left="83.49%"
              right="6%"
              {...getOverrideProps(overrides, "Vector43713490")}
            ></Icon>
            <Icon
              width="13.33px"
              height="25.64px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 13.3330078125,
                height: 25.64306640625,
              }}
              paths={[
                {
                  d: "M13.2761 23.1348C13.3417 23.4063 13.3506 23.6884 13.3023 23.9634C13.2541 24.2385 13.1497 24.5006 12.9956 24.7335C12.8415 24.9663 12.6411 25.1649 12.4069 25.3167C12.1727 25.4686 11.9098 25.5705 11.6344 25.616C11.2528 25.6792 10.861 25.6319 10.5053 25.4797C10.1496 25.3275 9.84468 25.0767 9.62658 24.757L2.80683 13.9895C2.67558 13.7806 2.59096 13.5458 2.5588 13.3012C2.52665 13.0565 2.54771 12.8078 2.62051 12.5721C3.34206 10.6827 3.43855 8.61147 2.89578 6.66312C2.41074 5.16099 1.51361 3.82551 0.306736 2.80902C0.190583 2.72218 0.101531 2.60408 0.0499617 2.46847C-0.00160796 2.33286 -0.0135563 2.18534 0.015516 2.04319C0.0445882 1.90103 0.113476 1.77012 0.214137 1.66569C0.314799 1.56126 0.443055 1.48764 0.583961 1.45345L6.31653 0.0385154C6.48569 -0.00323513 6.66144 -0.0111381 6.83366 0.0152726C7.00589 0.0416834 7.17121 0.101902 7.32013 0.192431C7.46904 0.282959 7.59861 0.402038 7.70141 0.542822C7.80422 0.683607 7.87821 0.843324 7.91916 1.01281L13.2761 23.1348Z",
                  fill: "rgba(193,216,237,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="64%"
              bottom="26.16%"
              left="88.53%"
              right="0%"
              {...getOverrideProps(overrides, "Vector43713491")}
            ></Icon>
            <Icon
              width="13.56px"
              height="12.8px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 13.56103515625,
                height: 12.79833984375,
              }}
              paths={[
                {
                  d: "M4.03453 12.7982C0.359273 4.28635 0.0889533 3.37785 0 3.07963L9.94644 0.115248C9.93754 0.0850798 9.92619 0.0464884 9.90988 0C10.1644 0.726504 12.0033 5.0707 13.5609 8.67899L4.03453 12.7982Z",
                  fill: "rgba(233,136,98,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="92%"
              bottom="3.09%"
              left="16.1%"
              right="72.23%"
              {...getOverrideProps(overrides, "Vector43713492")}
            ></Icon>
            <Icon
              width="25.12px"
              height="15.22px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 25.115234375,
                height: 15.22119140625,
              }}
              paths={[
                {
                  d: "M2.6814 15.1136C2.41711 15.2033 2.13719 15.2374 1.85911 15.2139C1.58103 15.1905 1.31078 15.1099 1.06523 14.9772C0.819674 14.8445 0.604082 14.6626 0.431933 14.4428C0.259785 14.223 0.134782 13.97 0.0647029 13.6997C-0.0321074 13.3251 -0.0200749 12.9307 0.0994202 12.5627C0.218915 12.1947 0.440901 11.8686 0.739261 11.6225L10.8444 3.85799C11.0404 3.70836 11.2664 3.6029 11.5069 3.54886C11.7475 3.49483 11.9969 3.4935 12.238 3.54494C14.183 4.09482 16.253 4.00537 18.1434 3.28975C19.5948 2.67133 20.8434 1.6574 21.7471 0.363463C21.8232 0.239974 21.9328 0.140689 22.0631 0.0771847C22.1935 0.0136805 22.3392 -0.0114267 22.4833 0.00480022C22.6273 0.0210271 22.7638 0.0779152 22.8768 0.168828C22.9898 0.25974 23.0746 0.380925 23.1214 0.518253L25.0433 6.10674C25.1 6.27165 25.1237 6.44614 25.1129 6.62023C25.1021 6.79431 25.057 6.96455 24.9803 7.12115C24.9035 7.27776 24.7967 7.41767 24.6658 7.53282C24.5349 7.64798 24.3825 7.73613 24.2175 7.7922L2.6814 15.1136Z",
                  fill: "rgba(193,216,237,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="94.16%"
              bottom="0%"
              left="7.8%"
              right="70.59%"
              {...getOverrideProps(overrides, "Vector43713493")}
            ></Icon>
            <Icon
              width="101.91px"
              height="129.19px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 101.91064453125,
                height: 129.19287109375,
              }}
              paths={[
                {
                  d: "M0.00205627 68.0135C0.511561 56.7539 10.928 5.5247 12.0315 0L49.4107 1.69335C49.4107 1.69335 61.8029 49.9221 62.3089 51.2658L98.2278 48.7188L101.91 66.6425L57.4867 74.1385C55.1207 74.7188 52.6264 74.4491 50.4389 73.3764C48.2515 72.3037 46.51 70.4963 45.5185 68.2696C45.5185 68.2696 31.3937 26.7175 31.1085 25.9514L19.4843 64.5036L32.6074 123.757L15.1478 129.193C15.1478 129.193 -0.204019 72.5669 0.00205627 68.0135Z",
                  fill: "rgba(38,38,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="45.41%"
              bottom="5.04%"
              left="0.68%"
              right="11.64%"
              {...getOverrideProps(overrides, "Vector43713494")}
            ></Icon>
            <Icon
              width="7.74px"
              height="14.78px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.74462890625,
                height: 14.77490234375,
              }}
              paths={[
                {
                  d: "M0.820041 14.415L6.66131 14.775C6.66131 14.775 9.72527 7.23302 5.54644 1.02633C4.16272 -1.03152 1.81138 0.499134 1.85338 1.35719C1.99126 4.1915 3.03943 7.85616 2.02833 10.0743C1.59246 9.05299 0.913454 7.69246 0.455345 7.87644C-0.750467 8.35863 0.820041 14.415 0.820041 14.415Z",
                  fill: "rgba(233,136,98,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5.55%"
              bottom="88.78%"
              left="72.01%"
              right="21.33%"
              {...getOverrideProps(overrides, "Vector43713495")}
            ></Icon>
            <Icon
              width="93.8px"
              height="116.7px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 93.8017578125,
                height: 116.6953125,
              }}
              paths={[
                {
                  d: "M83.2149 16.6265L77.6133 46.0398L56.18 58.3963C54.2971 57.3902 52.262 56.7002 50.1559 56.3538L49.8307 56.2885L50.5082 52.5126L34.7576 50.0027L33.9041 53.5828C32.5777 53.3746 31.7203 53.243 31.6437 53.2336C30.2256 53.0283 28.7856 53.0247 27.3665 53.2227L11.3866 32.888L20.7944 3.26407L10.5247 0L0.253073 32.344C-0.0131988 33.1824 -0.0704079 34.0733 0.0864543 34.9389C0.243317 35.8045 0.609475 36.6185 1.15298 37.3099L19.6133 60.8013C17.6311 67.3127 18.3002 76.7473 17.0801 84.2928C14.5202 100.148 9.73154 102.384 10.9967 107.586C12.2222 112.631 51.9646 121.558 53.9364 113.393C55.1867 108.2 51.3617 102.809 53.1408 92.5766C54.5739 84.3378 62.4127 75.321 62.1186 67.4195L85.1348 54.1515C85.8064 53.7644 86.3867 53.2367 86.8359 52.6046C87.2851 51.9725 87.5927 51.2508 87.7377 50.4888L93.8018 18.6468L83.2149 16.6265Z",
                  fill: "rgba(255,215,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="3.48%"
              bottom="51.77%"
              left="0%"
              right="19.3%"
              {...getOverrideProps(overrides, "Vector43713496")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="51.63px"
            height="51.67px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="16.43%"
            bottom="69.38%"
            left="30.48%"
            right="59.31%"
            {...getOverrideProps(overrides, "Group43713497")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="51.63px"
              height="51.67px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group43713498")}
            >
              <Icon
                width="51.63px"
                height="51.67px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 51.63134765625,
                  height: 51.67041015625,
                }}
                paths={[
                  {
                    d: "M25.8157 51.6703C40.0734 51.6703 51.6315 40.1035 51.6315 25.8352C51.6315 11.5668 40.0734 0 25.8157 0C11.5581 0 0 11.5668 0 25.8352C0 40.1035 11.5581 51.6703 25.8157 51.6703Z",
                    fill: "rgba(12,188,139,1)",
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
                {...getOverrideProps(overrides, "Vector43713499")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="33.47px"
                height="33.5px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="17.59%"
                bottom="17.59%"
                left="17.59%"
                right="17.59%"
                {...getOverrideProps(overrides, "Group43713500")}
              >
                <Icon
                  width="33.47px"
                  height="33.5px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 33.47021484375,
                    height: 33.49560546875,
                  }}
                  paths={[
                    {
                      d: "M16.7351 33.4954C25.9776 33.4954 33.4702 25.9972 33.4702 16.7477C33.4702 7.49819 25.9776 0 16.7351 0C7.49254 0 0 7.49819 0 16.7477C0 25.9972 7.49254 33.4954 16.7351 33.4954Z",
                      fill: "rgba(255,255,255,1)",
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
                  {...getOverrideProps(overrides, "Vector43713501")}
                ></Icon>
              </View>
            </View>
            <Icon
              width="10.45px"
              height="20.83px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.4453125,
                height: 20.82861328125,
              }}
              paths={[
                {
                  d: "M0 16.5414L1.56113 14.1181C2.79659 15.0672 3.88084 15.5523 5.0318 15.5523C6.41156 15.5523 7.01841 14.9796 7.01841 13.8708C7.01841 11.3644 0.594008 11.4099 0.594008 7.0138C0.594008 4.18791 2.55 2.38772 5.6347 2.38772C6.51071 2.37499 7.37899 2.55326 8.17922 2.91016C8.97945 3.26707 9.69244 3.79404 10.2687 4.45448L8.47824 6.50689C7.59365 5.70175 6.84299 5.27791 5.82694 5.27791C4.65572 5.27791 4.0207 5.75021 4.0207 6.84467C4.0207 9.16909 10.4451 8.96483 10.4451 13.6201C10.4451 16.4173 8.59537 18.4406 5.03229 18.4406C3.18769 18.3996 1.41233 17.7296 0 16.5414ZM4.28112 0L6.65617 0L6.65617 3.50839L4.28112 3.50839L4.28112 0ZM4.28112 16.9796L6.65617 16.9796L6.65617 20.8288L4.28112 20.8288L4.28112 16.9796Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="29.72%"
              bottom="29.97%"
              left="39.39%"
              right="40.38%"
              {...getOverrideProps(overrides, "Vector43713502")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="51.63px"
            height="51.67px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="85.8%"
            left="44.15%"
            right="45.65%"
            {...getOverrideProps(overrides, "Group43713503")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="51.63px"
              height="51.67px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group43713504")}
            >
              <Icon
                width="51.63px"
                height="51.67px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 51.63134765625,
                  height: 51.67041015625,
                }}
                paths={[
                  {
                    d: "M25.8157 51.6703C40.0734 51.6703 51.6315 40.1035 51.6315 25.8352C51.6315 11.5668 40.0734 0 25.8157 0C11.5581 0 0 11.5668 0 25.8352C0 40.1035 11.5581 51.6703 25.8157 51.6703Z",
                    fill: "rgba(12,188,139,1)",
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
                {...getOverrideProps(overrides, "Vector43713505")}
              ></Icon>
              <View
                padding="0px 0px 0px 0px"
                width="33.47px"
                height="33.5px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="17.59%"
                bottom="17.59%"
                left="17.59%"
                right="17.59%"
                {...getOverrideProps(overrides, "Group43713506")}
              >
                <Icon
                  width="33.47px"
                  height="33.5px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 33.47021484375,
                    height: 33.49560546875,
                  }}
                  paths={[
                    {
                      d: "M16.7351 33.4954C25.9776 33.4954 33.4702 25.9972 33.4702 16.7477C33.4702 7.49819 25.9776 0 16.7351 0C7.49254 0 0 7.49819 0 16.7477C0 25.9972 7.49254 33.4954 16.7351 33.4954Z",
                      fill: "rgba(255,255,255,1)",
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
                  {...getOverrideProps(overrides, "Vector43713507")}
                ></Icon>
              </View>
            </View>
            <Icon
              width="10.45px"
              height="20.83px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.4453125,
                height: 20.82666015625,
              }}
              paths={[
                {
                  d: "M0 16.5415L1.56113 14.1181C2.79659 15.0667 3.88082 15.5523 5.03178 15.5523C6.41154 15.5523 7.01841 14.9796 7.01841 13.8708C7.01841 11.3644 0.594008 11.4094 0.594008 7.01381C0.594008 4.18791 2.54998 2.38772 5.63469 2.38772C6.5107 2.37495 7.379 2.55322 8.17924 2.91012C8.97947 3.26703 9.69246 3.79402 10.2687 4.45448L8.47823 6.50689C7.59363 5.70175 6.84347 5.27742 5.82693 5.27742C4.65571 5.27742 4.02068 5.75022 4.02068 6.84467C4.02068 9.16909 10.4451 8.96484 10.4451 13.6201C10.4451 16.4178 8.59535 18.441 5.03228 18.441C3.18763 18.3999 1.4123 17.7297 0 16.5415ZM4.28162 0L6.65617 0L6.65617 3.50839L4.28162 3.50839L4.28162 0ZM4.28162 16.9791L6.65617 16.9791L6.65617 20.8268L4.28162 20.8268L4.28162 16.9791Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="29.56%"
              bottom="30.13%"
              left="39.39%"
              right="40.38%"
              {...getOverrideProps(overrides, "Vector43713508")}
            ></Icon>
          </View>
          <Icon
            width="104.81px"
            height="130.24px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 104.81201171875,
              height: 130.2373046875,
            }}
            paths={[
              {
                d: "M36.2761 127.097C26.4883 124.062 16.992 120.093 8.33935 108.992C6.56375 106.717 4.89488 103.802 5.86843 101.079C6.60081 99.0301 8.71938 97.716 10.8716 97.3817C11.6734 97.2649 12.4861 97.2427 13.2931 97.3154C13.297 97.3154 13.301 97.3154 13.3025 97.3154C14.543 97.4425 15.7693 97.6832 16.9658 98.0345L17.3078 98.1335C23.0186 99.7576 28.4585 102.216 33.4519 105.43C33.9044 105.719 34.4411 105.846 34.9748 105.79C35.5084 105.735 36.0077 105.5 36.3913 105.125C36.775 104.749 37.0205 104.255 37.088 103.723C37.1554 103.19 37.0409 102.65 36.7629 102.191C36.2534 101.358 35.6606 100.579 34.9937 99.8664C34.0098 98.837 32.9321 97.9017 31.7746 97.0726C30.2357 95.9495 28.594 94.946 26.9874 93.9208C21.0146 90.1133 15.356 85.8333 10.066 81.1217C6.29046 77.7557 2.59841 74.0203 0.803526 69.2879C-0.0207744 67.1118 -0.395861 64.603 0.587567 62.4942C2.21047 59.0323 6.80738 58.0615 10.5671 58.7801C17.1556 60.0432 22.4167 64.8755 27.0833 69.6925C30.9533 73.6949 35.2922 78.1266 40.8498 78.3724C41.7975 78.4612 42.7503 78.27 43.5906 77.8225C45.1769 76.8611 45.5846 74.6336 45.0192 72.8651C44.4539 71.0965 43.1458 69.6831 41.8831 68.326C34.544 60.4492 27.322 52.2494 22.5561 42.5957C17.7901 32.9419 15.68 21.5419 18.9915 11.2902C19.9621 8.29319 21.4209 5.37728 23.6971 3.20024C25.9734 1.0232 29.1643 -0.341785 32.2885 0.0746324C36.545 0.635955 39.7507 4.23138 41.9074 7.94254C49.3201 20.6789 48.867 36.2846 50.9549 50.8741C51.539 54.9586 52.388 59.1475 54.8194 62.5095C55.0434 62.833 55.3343 63.1046 55.6724 63.3058C57.6729 64.465 59.4677 62.1272 60.2189 60.1435C63.184 52.2959 63.9253 43.3207 69.2338 36.8252C71.26 34.3524 74.1263 32.2856 77.3212 32.3059C81.2227 32.3326 84.5634 35.5937 85.702 39.3286C86.8406 43.0635 86.1592 47.1209 84.9395 50.8301C82.6752 57.7074 78.6139 63.8839 73.8342 69.3161C71.3138 72.1845 68.4619 75.0802 67.7063 78.821C67.4748 80.0923 67.5718 81.4018 67.988 82.6251C68.4043 83.8484 69.1261 84.9449 70.0848 85.8106C70.5332 86.201 71.0553 86.4975 71.6202 86.6823C72.1851 86.8672 72.7814 86.9367 73.3736 86.8867C74.6545 86.7695 75.8129 86.1157 76.9293 85.4802C77.3978 85.2132 77.8682 84.9421 78.3411 84.6766C80.2055 83.6143 82.0704 82.5505 83.9358 81.4852C88.6775 78.778 94.4036 76.0119 99.3425 78.3432C101.863 79.5351 103.514 81.8789 104.291 84.5678C104.986 87.0084 104.986 89.5949 104.291 92.0356C102.82 97.1112 93.5467 111.235 89.7217 114.878C85.2543 119.132 69.7661 137.484 36.2761 127.097Z",
                fill: "rgba(141,219,224,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="64.22%"
            bottom="0%"
            left="0.74%"
            right="78.55%"
            {...getOverrideProps(overrides, "Vector43713509")}
          ></Icon>
          <Icon
            width="265.68px"
            height="181.14px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 265.681640625,
              height: 181.13720703125,
            }}
            paths={[
              {
                d: "M245.773 0L19.9087 0C8.91344 0 0 8.92016 0 19.9237L0 161.213C0 172.217 8.91344 181.137 19.9087 181.137L245.773 181.137C256.768 181.137 265.682 172.217 265.682 161.213L265.682 19.9237C265.682 8.92016 256.768 0 245.773 0Z",
                fill: "rgba(222,232,245,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="28.9%"
            bottom="21.33%"
            left="16.99%"
            right="30.51%"
            {...getOverrideProps(overrides, "Vector43713510")}
          ></Icon>
          <Icon
            width="70.6px"
            height="52.64px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 70.595703125,
              height: 52.63818359375,
            }}
            paths={[
              {
                d: "M70.5958 0L0 0L0 52.6382L70.5958 52.6382L70.5958 0Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="47.62%"
            bottom="37.92%"
            left="55.54%"
            right="30.51%"
            {...getOverrideProps(overrides, "Vector43713511")}
          ></Icon>
          <Icon
            width="33.67px"
            height="33.7px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 33.6728515625,
              height: 33.6982421875,
            }}
            paths={[
              {
                d: "M16.8364 33.6981C26.1349 33.6981 33.6728 26.1546 33.6728 16.8491C33.6728 7.54358 26.1349 0 16.8364 0C7.53789 0 0 7.54358 0 16.8491C0 26.1546 7.53789 33.6981 16.8364 33.6981Z",
                fill: "rgba(222,232,245,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="50.22%"
            bottom="40.52%"
            left="57.33%"
            right="36.02%"
            {...getOverrideProps(overrides, "Vector43713512")}
          ></Icon>
        </View>
      </Flex>
    </View>
  );
}
