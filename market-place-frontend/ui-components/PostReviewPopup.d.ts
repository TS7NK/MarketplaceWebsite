/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { StarProps } from "./Star";
import { AddPhotoButtonProps } from "./AddPhotoButton";
import { ToggleSwitchProps } from "./ToggleSwitch";
import { PostReviewButtonProps } from "./PostReviewButton";
import { ClosebuttonProps } from "./Closebutton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostReviewPopupOverridesProps = {
    PostReviewPopup?: PrimitiveOverrideProps<ViewProps>;
    "Line 13"?: PrimitiveOverrideProps<IconProps>;
    "Frame 179"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 196"?: PrimitiveOverrideProps<FlexProps>;
    "Overall Rating"?: PrimitiveOverrideProps<TextProps>;
    "rating filter 1 stars"?: PrimitiveOverrideProps<FlexProps>;
    "5 stars"?: PrimitiveOverrideProps<FlexProps>;
    star52425962?: StarProps;
    star52425963?: StarProps;
    star52425964?: StarProps;
    star52425965?: StarProps;
    star52425966?: StarProps;
    "Frame 268"?: PrimitiveOverrideProps<FlexProps>;
    "Add a Headline"?: PrimitiveOverrideProps<TextProps>;
    "What\u2019s the most important to know?"?: PrimitiveOverrideProps<TextProps>;
    "Frame 18252425930"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 173"?: PrimitiveOverrideProps<FlexProps>;
    "List Title52425932"?: PrimitiveOverrideProps<TextProps>;
    "0/20 words"?: PrimitiveOverrideProps<TextProps>;
    "Frame 267"?: PrimitiveOverrideProps<FlexProps>;
    "Add a Written Review"?: PrimitiveOverrideProps<TextProps>;
    "Frame 207"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 204"?: PrimitiveOverrideProps<ViewProps>;
    "List Title52425909"?: PrimitiveOverrideProps<TextProps>;
    "Frame 269"?: PrimitiveOverrideProps<FlexProps>;
    "Add a Photo/ Video"?: PrimitiveOverrideProps<TextProps>;
    "Make your review engaging for other shoppers"?: PrimitiveOverrideProps<TextProps>;
    "Frame 18252425979"?: PrimitiveOverrideProps<FlexProps>;
    "Add Photo Button"?: AddPhotoButtonProps;
    "0/5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 220"?: PrimitiveOverrideProps<FlexProps>;
    "Post Anonymously (Hide my user name)"?: PrimitiveOverrideProps<TextProps>;
    "Toggle Switch"?: ToggleSwitchProps;
    "Post Review Button"?: PostReviewButtonProps;
    "Frame 172"?: PrimitiveOverrideProps<FlexProps>;
    "Close button"?: ClosebuttonProps;
    "Customer Review"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PostReviewPopupProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PostReviewPopupOverridesProps | undefined | null;
}>;
export default function PostReviewPopup(props: PostReviewPopupProps): React.ReactElement;
