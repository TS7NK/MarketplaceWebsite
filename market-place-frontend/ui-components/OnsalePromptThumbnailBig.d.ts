/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { AcademicBigProps } from "./AcademicBig";
import { AIModelsBigProps } from "./AIModelsBig";
import { SalebigProps } from "./Salebig";
import { PrimaryActionButtonProps } from "./PrimaryActionButton";
import { SecondaryActionButtonProps } from "./SecondaryActionButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OnsalePromptThumbnailBigOverridesProps = {
    "16"?: PrimitiveOverrideProps<TextProps>;
    "350"?: PrimitiveOverrideProps<TextProps>;
    OnsalePromptThumbnailBig?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 34"?: PrimitiveOverrideProps<FlexProps>;
    "Academic Big"?: AcademicBigProps;
    "Prompt Intro"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 27"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 35"?: PrimitiveOverrideProps<FlexProps>;
    "High Quality Article Generation"?: PrimitiveOverrideProps<TextProps>;
    "AI Models Big"?: AIModelsBigProps;
    "Simply specify the topic and target readers to generate articles of surprisingly high quality. The output is written in markdown format, so it can be easily copied and pasted into blogs and other applications."?: PrimitiveOverrideProps<TextProps>;
    "Frame 33"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32"?: PrimitiveOverrideProps<FlexProps>;
    "tabler:star-filled"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector3838403?: PrimitiveOverrideProps<IconProps>;
    Vector3838404?: PrimitiveOverrideProps<IconProps>;
    "4.5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    "carbon:view-filled"?: PrimitiveOverrideProps<ViewProps>;
    Vector3838408?: PrimitiveOverrideProps<IconProps>;
    Vector3838409?: PrimitiveOverrideProps<IconProps>;
    "Frame 31"?: PrimitiveOverrideProps<FlexProps>;
    "bxs:purchase-tag"?: PrimitiveOverrideProps<ViewProps>;
    Vector3838413?: PrimitiveOverrideProps<IconProps>;
    "Frame 37"?: PrimitiveOverrideProps<FlexProps>;
    "sale big"?: SalebigProps;
    "$ 3.99"?: PrimitiveOverrideProps<TextProps>;
    "$ 1.99"?: PrimitiveOverrideProps<TextProps>;
    "Frame 26"?: PrimitiveOverrideProps<FlexProps>;
    "Primary Action Button"?: PrimaryActionButtonProps;
    "Secondary Action Button"?: SecondaryActionButtonProps;
} & EscapeHatchProps;
export declare type OnsalePromptThumbnailBigProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "hover (sale)" | "on sale";
} & {
    overrides?: OnsalePromptThumbnailBigOverridesProps | undefined | null;
}>;
export default function OnsalePromptThumbnailBig(props: OnsalePromptThumbnailBigProps): React.ReactElement;
