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
import { SearchbarProps } from "./Searchbar";
import { AskaQuestionButtonProps } from "./AskaQuestionButton";
import { QuestionCardProps } from "./QuestionCard";
import { HelpfulQuestionCardProps } from "./HelpfulQuestionCard";
import { PageselectionProps } from "./Pageselection";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QAOverridesProps = {
    QA?: PrimitiveOverrideProps<FlexProps>;
    "Headings with Lines"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 73"?: PrimitiveOverrideProps<FlexProps>;
    "Sort by Review button"?: SortbyReviewbuttonProps;
    "Sort by Q&A button"?: SortbyQAbuttonProps;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Frame 110"?: PrimitiveOverrideProps<FlexProps>;
    "Review left side"?: PrimitiveOverrideProps<FlexProps>;
    "Review filter"?: PrimitiveOverrideProps<FlexProps>;
    "Search Questions"?: PrimitiveOverrideProps<TextProps>;
    "Frame 106"?: PrimitiveOverrideProps<FlexProps>;
    "Search to find specific info"?: PrimitiveOverrideProps<TextProps>;
    "Search bar"?: SearchbarProps;
    "Line 11"?: PrimitiveOverrideProps<IconProps>;
    "Write a review"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 108"?: PrimitiveOverrideProps<FlexProps>;
    "Ask a Question"?: PrimitiveOverrideProps<TextProps>;
    "Receive specific answers from other users"?: PrimitiveOverrideProps<TextProps>;
    "Ask a Question Button"?: AskaQuestionButtonProps;
    "Frame 115"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 111"?: PrimitiveOverrideProps<FlexProps>;
    "Question Card43123005"?: QuestionCardProps;
    "Question Card43123006"?: QuestionCardProps;
    "Question Card43123007"?: QuestionCardProps;
    "Helpful Question Card43123008"?: HelpfulQuestionCardProps;
    "Helpful Question Card43123009"?: HelpfulQuestionCardProps;
    "page selection"?: PageselectionProps;
} & EscapeHatchProps;
export declare type QAProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: QAOverridesProps | undefined | null;
}>;
export default function QA(props: QAProps): React.ReactElement;
