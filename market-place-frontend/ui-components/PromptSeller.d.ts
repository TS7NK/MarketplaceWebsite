/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromptSellerOverridesProps = {
    PromptSeller?: PrimitiveOverrideProps<ViewProps>;
    "Prompt Seller"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PromptSellerProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "Default" | "hover";
} & {
    overrides?: PromptSellerOverridesProps | undefined | null;
}>;
export default function PromptSeller(props: PromptSellerProps): React.ReactElement;
