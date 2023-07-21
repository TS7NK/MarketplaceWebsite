/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SubmitButtonProps } from "./SubmitButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsOverridesProps = {
    ContactUs?: PrimitiveOverrideProps<FlexProps>;
    "Frame 238"?: PrimitiveOverrideProps<FlexProps>;
    "Contact Us"?: PrimitiveOverrideProps<TextProps>;
    "If you can not find your answers in the previous page, please leave a message here. Replies may take 1 to 3 business days. For emergency, contact our customer service phone number at 1-000-000-0000"?: PrimitiveOverrideProps<TextProps>;
    "Frame 235"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 237"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 236"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 234"?: PrimitiveOverrideProps<FlexProps>;
    "Leave Us A Message"?: PrimitiveOverrideProps<TextProps>;
    "Please enter your issue in detail. Response may take 1 to 3 business days."?: PrimitiveOverrideProps<TextProps>;
    "Frame 19746418625"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 196"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Suggest a title for your issue"?: PrimitiveOverrideProps<TextProps>;
    "Frame 18246418629"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 17346418630"?: PrimitiveOverrideProps<FlexProps>;
    "List Title46418631"?: PrimitiveOverrideProps<TextProps>;
    "0/20 words"?: PrimitiveOverrideProps<TextProps>;
    "Frame 19746418633"?: PrimitiveOverrideProps<FlexProps>;
    Issue?: PrimitiveOverrideProps<TextProps>;
    "What is your issue?"?: PrimitiveOverrideProps<TextProps>;
    "Frame 207"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 204"?: PrimitiveOverrideProps<ViewProps>;
    "List Title46418638"?: PrimitiveOverrideProps<TextProps>;
    "Frame 199"?: PrimitiveOverrideProps<FlexProps>;
    "Contact Email"?: PrimitiveOverrideProps<TextProps>;
    "We will send our replies to this email"?: PrimitiveOverrideProps<TextProps>;
    "Frame 18246418642"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 17346418643"?: PrimitiveOverrideProps<FlexProps>;
    "List Title46418644"?: PrimitiveOverrideProps<TextProps>;
    "Submit Button"?: SubmitButtonProps;
} & EscapeHatchProps;
export declare type ContactUsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContactUsOverridesProps | undefined | null;
}>;
export default function ContactUs(props: ContactUsProps): React.ReactElement;
