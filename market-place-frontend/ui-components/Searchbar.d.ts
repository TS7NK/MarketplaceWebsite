/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchbarOverridesProps = {
    Searchbar?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Search question"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SearchbarProps = React.PropsWithChildren<Partial<FlexProps> & {
    searchBar?: "Default" | "hover";
} & {
    overrides?: SearchbarOverridesProps | undefined | null;
}>;
export default function Searchbar(props: SearchbarProps): React.ReactElement;
