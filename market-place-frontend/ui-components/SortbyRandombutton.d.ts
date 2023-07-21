/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SortbyRandombuttonOverridesProps = {
    SortbyRandombutton?: PrimitiveOverrideProps<FlexProps>;
    Random?: PrimitiveOverrideProps<TextProps>;
    "Line 6"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SortbyRandombuttonProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "active" | "hover";
} & {
    overrides?: SortbyRandombuttonOverridesProps | undefined | null;
}>;
export default function SortbyRandombutton(props: SortbyRandombuttonProps): React.ReactElement;
