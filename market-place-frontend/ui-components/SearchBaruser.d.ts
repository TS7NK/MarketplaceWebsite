/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchBaruserOverridesProps = {
    SearchBaruser?: PrimitiveOverrideProps<ViewProps>;
    Vector50226758?: PrimitiveOverrideProps<IconProps>;
    "Search @Bob\u2019s prompts..."?: PrimitiveOverrideProps<TextProps>;
    "search button"?: PrimitiveOverrideProps<FlexProps>;
    Vector50226761?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SearchBaruserProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchBaruserOverridesProps | undefined | null;
}>;
export default function SearchBaruser(props: SearchBaruserProps): React.ReactElement;
