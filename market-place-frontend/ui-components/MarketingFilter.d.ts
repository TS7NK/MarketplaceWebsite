/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingFilterOverridesProps = {
    MarketingFilter?: PrimitiveOverrideProps<FlexProps>;
    "gridicons:speaker"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Marketing?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MarketingFilterProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Marketing active" | "Marketing default";
} & {
    overrides?: MarketingFilterOverridesProps | undefined | null;
}>;
export default function MarketingFilter(props: MarketingFilterProps): React.ReactElement;
