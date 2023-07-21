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
import { PrimaryActionButtonProps } from "./PrimaryActionButton";
import { SecondaryActionButtonProps } from "./SecondaryActionButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromptThumbnailBigOverridesProps = {
    "16"?: PrimitiveOverrideProps<TextProps>;
    "350"?: PrimitiveOverrideProps<TextProps>;
    PromptThumbnailBig?: PrimitiveOverrideProps<ViewProps>;
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
    Vector189218?: PrimitiveOverrideProps<IconProps>;
    Vector189219?: PrimitiveOverrideProps<IconProps>;
    "4.5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    "carbon:view-filled"?: PrimitiveOverrideProps<ViewProps>;
    Vector189223?: PrimitiveOverrideProps<IconProps>;
    Vector189224?: PrimitiveOverrideProps<IconProps>;
    "Frame 31"?: PrimitiveOverrideProps<FlexProps>;
    "bxs:purchase-tag"?: PrimitiveOverrideProps<ViewProps>;
    Vector189228?: PrimitiveOverrideProps<IconProps>;
    "$ 3.99"?: PrimitiveOverrideProps<TextProps>;
    "Frame 26"?: PrimitiveOverrideProps<FlexProps>;
    "Primary Action Button"?: PrimaryActionButtonProps;
    "Secondary Action Button"?: SecondaryActionButtonProps;
} & EscapeHatchProps;
export declare type PromptThumbnailBigProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "Default" | "hover";
} & {
    overrides?: PromptThumbnailBigOverridesProps | undefined | null;
}>;
export default function PromptThumbnailBig(props: PromptThumbnailBigProps): React.ReactElement;
