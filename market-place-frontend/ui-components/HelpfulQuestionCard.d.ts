/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { PromptSellerProps } from "./PromptSeller";
import { HelpfulbuttonProps } from "./Helpfulbutton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HelpfulQuestionCardOverridesProps = {
    HelpfulQuestionCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 109"?: PrimitiveOverrideProps<FlexProps>;
    question?: PrimitiveOverrideProps<FlexProps>;
    Vector3877582?: PrimitiveOverrideProps<IconProps>;
    Question?: PrimitiveOverrideProps<TextProps>;
    "Frame 1113877584"?: PrimitiveOverrideProps<FlexProps>;
    "Review Details3877585"?: PrimitiveOverrideProps<TextProps>;
    "Posted Date3877586"?: PrimitiveOverrideProps<TextProps>;
    "Frame 110"?: PrimitiveOverrideProps<FlexProps>;
    answer?: PrimitiveOverrideProps<FlexProps>;
    Vector3877589?: PrimitiveOverrideProps<IconProps>;
    Answer?: PrimitiveOverrideProps<TextProps>;
    "Frame 1113877591"?: PrimitiveOverrideProps<FlexProps>;
    "Review Details3877592"?: PrimitiveOverrideProps<TextProps>;
    "Frame 112"?: PrimitiveOverrideProps<FlexProps>;
    "Posted Date3877594"?: PrimitiveOverrideProps<TextProps>;
    "Prompt Seller"?: PromptSellerProps;
    "Posted Date3877596"?: PrimitiveOverrideProps<TextProps>;
    "Frame 108"?: PrimitiveOverrideProps<FlexProps>;
    "helpful button"?: HelpfulbuttonProps;
} & EscapeHatchProps;
export declare type HelpfulQuestionCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "helpful";
} & {
    overrides?: HelpfulQuestionCardOverridesProps | undefined | null;
}>;
export default function HelpfulQuestionCard(props: HelpfulQuestionCardProps): React.ReactElement;
