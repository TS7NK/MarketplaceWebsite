/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SortbyReviewbuttonProps } from "./SortbyReviewbutton";
import { SortbyQAbuttonProps } from "./SortbyQAbutton";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { StarProps } from "./Star";
import { ReviewRatingButtonProps } from "./ReviewRatingButton";
import { WriteaCustomerReviewButtonProps } from "./WriteaCustomerReviewButton";
import { HelpfulReviewCardProps } from "./HelpfulReviewCard";
import { ReviewCardProps } from "./ReviewCard";
import { PageselectionProps } from "./Pageselection";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewsOverridesProps = {
    Reviews?: PrimitiveOverrideProps<FlexProps>;
    "Headings with Lines"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 73"?: PrimitiveOverrideProps<FlexProps>;
    "Sort by Review button"?: SortbyReviewbuttonProps;
    "Sort by Q&A button"?: SortbyQAbuttonProps;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Frame 110"?: PrimitiveOverrideProps<FlexProps>;
    "Review left side"?: PrimitiveOverrideProps<FlexProps>;
    "Review filter"?: PrimitiveOverrideProps<FlexProps>;
    "Customer Review"?: PrimitiveOverrideProps<TextProps>;
    "Frame 106"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 105"?: PrimitiveOverrideProps<FlexProps>;
    star?: StarProps;
    "4.5"?: PrimitiveOverrideProps<TextProps>;
    "based on 16 global ratings"?: PrimitiveOverrideProps<TextProps>;
    "Frame 107"?: PrimitiveOverrideProps<FlexProps>;
    "Review Rating Button43122759"?: ReviewRatingButtonProps;
    "Review Rating Button43122760"?: ReviewRatingButtonProps;
    "Review Rating Button43122761"?: ReviewRatingButtonProps;
    "Line 11"?: PrimitiveOverrideProps<IconProps>;
    "Write a review"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 108"?: PrimitiveOverrideProps<FlexProps>;
    "Review this product"?: PrimitiveOverrideProps<TextProps>;
    "Share your thoughts with other customers"?: PrimitiveOverrideProps<TextProps>;
    "Write a Customer Review Button"?: WriteaCustomerReviewButtonProps;
    "Frame 115"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 111"?: PrimitiveOverrideProps<FlexProps>;
    "Helpful Review Card43122770"?: HelpfulReviewCardProps;
    "Review Card43122771"?: ReviewCardProps;
    "Review Card43122772"?: ReviewCardProps;
    "Helpful Review Card43122773"?: HelpfulReviewCardProps;
    "Helpful Review Card43122774"?: HelpfulReviewCardProps;
    "page selection"?: PageselectionProps;
} & EscapeHatchProps;
export declare type ReviewsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ReviewsOverridesProps | undefined | null;
}>;
export default function Reviews(props: ReviewsProps): React.ReactElement;
