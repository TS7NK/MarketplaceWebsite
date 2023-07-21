/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { PromptThumbnailBigProps } from "./PromptThumbnailBig";
import { ScrollbuttonsmallProps } from "./Scrollbuttonsmall";
import { PromptThumbnialTinyProps } from "./PromptThumbnialTiny";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturedPromptsOverridesProps = {
    FeaturedPrompts?: PrimitiveOverrideProps<ViewProps>;
    "Headings with Lines"?: PrimitiveOverrideProps<FlexProps>;
    Featured?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Frame 41"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 39"?: PrimitiveOverrideProps<FlexProps>;
    "Prompt Thumbnail (Big)"?: PromptThumbnailBigProps;
    "Frame 40"?: PrimitiveOverrideProps<FlexProps>;
    "scroll button small43120604"?: ScrollbuttonsmallProps;
    "Frame 38"?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 54"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 55"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 52"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 53"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 56"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 57"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 58"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 59"?: PrimitiveOverrideProps<IconProps>;
    "scroll button small43120614"?: ScrollbuttonsmallProps;
    "Frame 37"?: PrimitiveOverrideProps<FlexProps>;
    "Prompt Thumbnial (Tiny)43120616"?: PromptThumbnialTinyProps;
    "Prompt Thumbnial (Tiny)43120617"?: PromptThumbnialTinyProps;
    "Prompt Thumbnial (Tiny)43120618"?: PrimitiveOverrideProps<FlexProps>;
    "Prompt Thumbnial (Tiny)43120619"?: PromptThumbnialTinyProps;
} & EscapeHatchProps;
export declare type FeaturedPromptsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeaturedPromptsOverridesProps | undefined | null;
}>;
export default function FeaturedPrompts(props: FeaturedPromptsProps): React.ReactElement;
