/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AnonymousProfileProps } from "./AnonymousProfile";
import { StarProps } from "./Star";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { VerificationtagProps } from "./Verificationtag";
import { TagsbuttonProps } from "./Tagsbutton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewCardOverridesProps = {
    ReviewCard?: PrimitiveOverrideProps<FlexProps>;
    "Anonymous Profile"?: AnonymousProfileProps;
    "rating filter"?: PrimitiveOverrideProps<FlexProps>;
    "5 stars"?: PrimitiveOverrideProps<FlexProps>;
    star2823595?: StarProps;
    star2823596?: StarProps;
    star2823597?: StarProps;
    star2823598?: StarProps;
    star2823599?: StarProps;
    "Simple, very useful"?: PrimitiveOverrideProps<TextProps>;
    "verification tag"?: VerificationtagProps;
    "Posted Date"?: PrimitiveOverrideProps<TextProps>;
    "Review Details"?: PrimitiveOverrideProps<TextProps>;
    "Frame 108"?: PrimitiveOverrideProps<FlexProps>;
    "tags button"?: TagsbuttonProps;
} & EscapeHatchProps;
export declare type ReviewCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "default";
} & {
    overrides?: ReviewCardOverridesProps | undefined | null;
}>;
export default function ReviewCard(props: ReviewCardProps): React.ReactElement;
