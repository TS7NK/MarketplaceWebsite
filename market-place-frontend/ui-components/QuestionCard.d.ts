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
export declare type QuestionCardOverridesProps = {
    QuestionCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 109"?: PrimitiveOverrideProps<FlexProps>;
    question?: PrimitiveOverrideProps<FlexProps>;
    Vector2974247?: PrimitiveOverrideProps<IconProps>;
    Question?: PrimitiveOverrideProps<TextProps>;
    "Frame 1112974252"?: PrimitiveOverrideProps<FlexProps>;
    "Review Details2974215"?: PrimitiveOverrideProps<TextProps>;
    "Posted Date2974250"?: PrimitiveOverrideProps<TextProps>;
    "Frame 110"?: PrimitiveOverrideProps<FlexProps>;
    answer?: PrimitiveOverrideProps<FlexProps>;
    Vector2974242?: PrimitiveOverrideProps<IconProps>;
    Answer?: PrimitiveOverrideProps<TextProps>;
    "Frame 1112974253"?: PrimitiveOverrideProps<FlexProps>;
    "Review Details2974254"?: PrimitiveOverrideProps<TextProps>;
    "Frame 112"?: PrimitiveOverrideProps<FlexProps>;
    "Posted Date2974255"?: PrimitiveOverrideProps<TextProps>;
    "Prompt Seller"?: PromptSellerProps;
    "Frame 108"?: PrimitiveOverrideProps<FlexProps>;
    "helpful button"?: HelpfulbuttonProps;
} & EscapeHatchProps;
export declare type QuestionCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default";
} & {
    overrides?: QuestionCardOverridesProps | undefined | null;
}>;
export default function QuestionCard(props: QuestionCardProps): React.ReactElement;
