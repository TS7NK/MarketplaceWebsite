/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UsersProfileProps } from "./UsersProfile";
import { StarProps } from "./Star";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { VerificationtagProps } from "./Verificationtag";
import { HelpfulbuttonProps } from "./Helpfulbutton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HelpfulReviewCardOverridesProps = {
    HelpfulReviewCard?: PrimitiveOverrideProps<FlexProps>;
    "User's Profile"?: UsersProfileProps;
    "rating filter"?: PrimitiveOverrideProps<FlexProps>;
    "5 stars"?: PrimitiveOverrideProps<FlexProps>;
    star3877515?: StarProps;
    star3877516?: StarProps;
    star3877517?: StarProps;
    star3877518?: StarProps;
    star3877519?: StarProps;
    "Simple, very useful"?: PrimitiveOverrideProps<TextProps>;
    "verification tag"?: VerificationtagProps;
    "Posted Date"?: PrimitiveOverrideProps<TextProps>;
    "Review Details"?: PrimitiveOverrideProps<TextProps>;
    "4 people find this helpful"?: PrimitiveOverrideProps<TextProps>;
    "Frame 108"?: PrimitiveOverrideProps<FlexProps>;
    "helpful button"?: HelpfulbuttonProps;
} & EscapeHatchProps;
export declare type HelpfulReviewCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "helpful";
} & {
    overrides?: HelpfulReviewCardOverridesProps | undefined | null;
}>;
export default function HelpfulReviewCard(props: HelpfulReviewCardProps): React.ReactElement;
