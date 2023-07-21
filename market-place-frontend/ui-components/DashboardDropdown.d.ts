/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DashboardDropdownOverridesProps = {
    DashboardDropdown?: PrimitiveOverrideProps<FlexProps>;
    "Frame 150"?: PrimitiveOverrideProps<FlexProps>;
    Dashboard?: PrimitiveOverrideProps<TextProps>;
    "Line 74"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type DashboardDropdownProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "hover";
} & {
    overrides?: DashboardDropdownOverridesProps | undefined | null;
}>;
export default function DashboardDropdown(props: DashboardDropdownProps): React.ReactElement;
