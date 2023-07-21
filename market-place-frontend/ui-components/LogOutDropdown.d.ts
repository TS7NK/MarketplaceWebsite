/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogOutDropdownOverridesProps = {
    LogOutDropdown?: PrimitiveOverrideProps<FlexProps>;
    "Frame 150"?: PrimitiveOverrideProps<FlexProps>;
    "Log Out"?: PrimitiveOverrideProps<TextProps>;
    "Line 74"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type LogOutDropdownProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "hover";
} & {
    overrides?: LogOutDropdownOverridesProps | undefined | null;
}>;
export default function LogOutDropdown(props: LogOutDropdownProps): React.ReactElement;
