/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchbarmainOverridesProps = {
    Searchbarmain?: PrimitiveOverrideProps<ViewProps>;
    Vector1241353?: PrimitiveOverrideProps<IconProps>;
    "Search prompt..."?: PrimitiveOverrideProps<TextProps>;
    "search button"?: PrimitiveOverrideProps<FlexProps>;
    Vector1241358?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SearchbarmainProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "Default" | "hover";
} & {
    overrides?: SearchbarmainOverridesProps | undefined | null;
}>;
export default function Searchbarmain(props: SearchbarmainProps): React.ReactElement;
