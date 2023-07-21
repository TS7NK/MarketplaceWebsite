/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { PercentbarProps } from "./Percentbar";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewRatingButtonOverridesProps = {
    ReviewRatingButton?: PrimitiveOverrideProps<FlexProps>;
    "5 star"?: PrimitiveOverrideProps<TextProps>;
    "percent bar"?: PercentbarProps;
    "80%"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ReviewRatingButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    reviewRatingButton?: "Default" | "active" | "hover";
} & {
    overrides?: ReviewRatingButtonOverridesProps | undefined | null;
}>;
export default function ReviewRatingButton(props: ReviewRatingButtonProps): React.ReactElement;
