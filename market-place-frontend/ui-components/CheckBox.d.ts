/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CheckBoxOverridesProps = {
    CheckBox?: PrimitiveOverrideProps<FlexProps>;
    "CheckBox/Variant14"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Interface, Essential/Done, Check"?: PrimitiveOverrideProps<ViewProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CheckBoxProps = React.PropsWithChildren<Partial<FlexProps> & {
    label?: "True";
    state?: "Default" | "Hover";
    toggle?: "False" | "True";
} & {
    overrides?: CheckBoxOverridesProps | undefined | null;
}>;
export default function CheckBox(props: CheckBoxProps): React.ReactElement;
