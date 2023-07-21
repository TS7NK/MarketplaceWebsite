/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WriteaCustomerReviewButtonOverridesProps = {
    WriteaCustomerReviewButton?: PrimitiveOverrideProps<FlexProps>;
    "Write a Customer Review"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type WriteaCustomerReviewButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    primaryActionButton?: "Default" | "Hover";
} & {
    overrides?: WriteaCustomerReviewButtonOverridesProps | undefined | null;
}>;
export default function WriteaCustomerReviewButton(props: WriteaCustomerReviewButtonProps): React.ReactElement;
