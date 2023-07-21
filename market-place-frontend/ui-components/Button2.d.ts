/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Button2OverridesProps = {
    Button2?: PrimitiveOverrideProps<FlexProps>;
    "Button Icon62928159"?: PrimitiveOverrideProps<ViewProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Button Icon62928161"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Button2Props = React.PropsWithChildren<Partial<FlexProps> & {
    isDisabled?: "false" | "true";
    size?: "default" | "large" | "small";
    variation?: "default" | "destructive" | "link" | "primary" | "warning";
} & {
    overrides?: Button2OverridesProps | undefined | null;
}>;
export default function Button2(props: Button2Props): React.ReactElement;
