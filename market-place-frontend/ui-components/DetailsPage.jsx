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
import DetailsvsExamples from "./DetailsvsExamples";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import AcademicSmall from "./AcademicSmall";
import AIModelsSmall from "./AIModelsSmall";
import Tagsbutton from "./Tagsbutton";
export default function DetailsPage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Details Selected" },
      overrides: {
        "Details vs. Examples": {},
        "Published Date:": {},
        "6/17/2023": {},
        "Frame 99": {},
        "Category:": {},
        "Academic Small": {},
        "Frame 96": {},
        "AI Models:": {},
        "AI Models Small": {},
        "Frame 97": {},
        "Featured Tags:": {},
        "tags button2655037": {},
        "tags button2655038": {},
        "tags button2655039": {},
        "Frame 93": {},
        "Frame 98": {},
        "Instructions:": {},
        "Detailed Description": {},
        Description: {},
        "Frame 100": {},
        "vertical scroll frame": {},
        DetailsPage: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="40px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "DetailsPage")}
      {...rest}
    >
      <DetailsvsExamples
        display="flex"
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(217,217,217,1)"
        borderRadius="30px"
        padding="5px 5px 5px 5px"
        property1="Details selected"
        {...getOverrideProps(overrides, "Details vs. Examples")}
      ></DetailsvsExamples>
      <View
        width="500px"
        height="600px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="2px SOLID rgba(217,217,217,1)"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,250,223,1)"
        {...getOverrideProps(overrides, "vertical scroll frame")}
      >
        <Flex
          gap="20px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="33px"
          left="calc(50% - 215px - 0px)"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 100")}
        >
          <Flex
            gap="15px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 99")}
          >
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
              children="Published Date:"
              {...getOverrideProps(overrides, "Published Date:")}
            ></Text>
            <Text
              fontFamily="Roboto"
              fontSize="16px"
              fontWeight="400"
              color="rgba(76,76,76,1)"
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
              children="6/17/2023"
              {...getOverrideProps(overrides, "6/17/2023")}
            ></Text>
          </Flex>
          <Flex
            gap="15px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 96")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="16px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
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
              children="Category: "
              {...getOverrideProps(overrides, "Category:")}
            ></Text>
            <AcademicSmall
              display="flex"
              gap="6px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              border="1px SOLID rgba(255,255,255,1)"
              borderRadius="7px"
              padding="3px 6px 3px 6px"
              backgroundColor="rgba(207,21,21,1)"
              property1="default"
              {...getOverrideProps(overrides, "Academic Small")}
            ></AcademicSmall>
          </Flex>
          <Flex
            gap="15px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 97")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="16px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
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
              children="AI Models:"
              {...getOverrideProps(overrides, "AI Models:")}
            ></Text>
            <AIModelsSmall
              display="flex"
              gap="6px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="6px"
              padding="3px 6px 3px 6px"
              backgroundColor="rgba(116,170,156,1)"
              aIModelsTag="ChatGPT (Small)"
              {...getOverrideProps(overrides, "AI Models Small")}
            ></AIModelsSmall>
          </Flex>
          <Flex
            gap="15px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 98")}
          >
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
              children="Featured Tags:"
              {...getOverrideProps(overrides, "Featured Tags:")}
            ></Text>
            <Flex
              gap="15px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 93")}
            >
              <Tagsbutton
                display="flex"
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="6px"
                padding="6px 15px 6px 15px"
                tag="active"
                {...getOverrideProps(overrides, "tags button2655037")}
              ></Tagsbutton>
              <Tagsbutton
                display="flex"
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="6px"
                padding="6px 15px 6px 15px"
                tag="active"
                {...getOverrideProps(overrides, "tags button2655038")}
              ></Tagsbutton>
              <Tagsbutton
                display="flex"
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="6px"
                padding="6px 15px 6px 15px"
                tag="active"
                {...getOverrideProps(overrides, "tags button2655039")}
              ></Tagsbutton>
            </Flex>
          </Flex>
          <Flex
            gap="15px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,250,223,1)"
            display="flex"
            {...getOverrideProps(overrides, "Description")}
          >
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
              children="Instructions:"
              {...getOverrideProps(overrides, "Instructions:")}
            ></Text>
            <Text
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="400"
              color="rgba(76,76,76,1)"
              lineHeight="18.19999885559082px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="430px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Key Demographic Characteristics of the Target Market:&#x2028;1. Gender: Both men and women&#x2028;2. Age: Primarily 25-45 years old&#x2028;3. Income: Middle to high income earners&#x2028;4. Interests: Fashion, craftsmanship, unique accessories&#x2028;5. Online Behavior: Active users of social media platforms, frequent online shoppers&#x2028;&#x2028;Value Proposition:&#x2028;Our handcrafted watches offer a blend of timeless elegance and artisanal craftsmanship, providing individuals with a truly unique accessory that reflects their personal style. Each watch is meticulously crafted using high-quality materials, ensuring durability and longevity. Our collection caters to diverse tastes, offering a range of designs from classic to contemporary, making it easy for customers to find a watch that perfectly complements their individuality. By wearing our handcrafted watch, customers can make a bold fashion statement while supporting independent artisans.&#x2028;&#x2028;Marketing Approach:&#x2028;To maximize reach and engagement, we will leverage both traditional and digital platforms through a multichannel marketing approach. Here's a breakdown of the proposed marketing tactics:&#x2028;&#x2028;1. Social Media Campaigns:&#x2028;   - Create visually appealing content showcasing the beauty and craftsmanship of the watches.&#x2028;   - Run targeted ads on platforms such as Instagram, Facebook, and Pinterest to reach potential customers.&#x2028;   - Collaborate with micro-influencers in the fashion and accessories niche to promote the watches through sponsored posts and giveaways.&#x2028;   - Encourage user-generated content by hosting contests or campaigns that encourage customers to share photos of themselves wearing the watches.&#x2028;&#x2028;2. Content Marketing:&#x2028;   - Develop a blog on your Etsy Shop's website to provide engaging and informative content related to watches, fashion trends, and styling tips.&#x2028;   - Create videos featuring behind-the-scenes footage of the watch-making process, interviews with artisans, and customer testimonials.&#x2028;   - Optimize the content for relevant keywords to improve search engine visibility.&#x2028;&#x2028;3. Email Marketing:&#x2028;   - Offer a discount or exclusive promotions to incentivize newsletter sign-ups.&#x2028;   - Send regular newsletters featuring new product launches, limited edition collections, and special offers.&#x2028;   - Personalize emails based on customer preferences and purchase history to increase engagement and conversions.&#x2028;&#x2028;4. Targeted Advertising:&#x2028;   - Utilize platforms like Google Ads to target users actively searching for handcrafted watches or related keywords.&#x2028;   - Retarget website visitors with display ads to keep your products top-of-mind.&#x2028;   - Leverage data-driven insights to refine and optimize advertising campaigns for maximum ROI.&#x2028;&#x2028;5. Collaborations and Partnerships:&#x2028;   - Partner with fashion bloggers, influencers, or lifestyle brands that align with your target audience's interests and values.&#x2028;   - Collaborate on limited edition watch designs or co-branded campaigns to expand brand reach and tap into new customer segments.&#x2028;&#x2028;"
              {...getOverrideProps(overrides, "Detailed Description")}
            ></Text>
          </Flex>
        </Flex>
      </View>
    </Flex>
  );
}
