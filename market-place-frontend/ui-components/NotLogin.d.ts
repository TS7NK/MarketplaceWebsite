/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotLoginOverridesProps = {
    NotLogin?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "Log in"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NotLoginProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "hover";
} & {
    overrides?: NotLoginOverridesProps | undefined | null;
}>;
export default function NotLogin(props: NotLoginProps): React.ReactElement;
