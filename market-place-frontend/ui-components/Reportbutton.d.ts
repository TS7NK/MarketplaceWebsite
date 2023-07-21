/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReportbuttonOverridesProps = {
    Reportbutton?: PrimitiveOverrideProps<FlexProps>;
    "Frame 101"?: PrimitiveOverrideProps<FlexProps>;
    "ic:round-report-problem"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Report?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ReportbuttonProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "hover";
} & {
    overrides?: ReportbuttonOverridesProps | undefined | null;
}>;
export default function Reportbutton(props: ReportbuttonProps): React.ReactElement;
