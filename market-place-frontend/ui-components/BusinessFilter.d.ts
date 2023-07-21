/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessFilterOverridesProps = {
    BusinessFilter?: PrimitiveOverrideProps<FlexProps>;
    "ic:round-business-center"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Business?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BusinessFilterProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Business active" | "Business default";
} & {
    overrides?: BusinessFilterOverridesProps | undefined | null;
}>;
export default function BusinessFilter(props: BusinessFilterProps): React.ReactElement;
