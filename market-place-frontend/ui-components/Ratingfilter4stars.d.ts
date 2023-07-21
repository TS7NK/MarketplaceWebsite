/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Ratingfilter4starsOverridesProps = {
    Ratingfilter4stars?: PrimitiveOverrideProps<FlexProps>;
    "5 stars"?: PrimitiveOverrideProps<FlexProps>;
    star3847755?: PrimitiveOverrideProps<ViewProps>;
    Vector3847756?: PrimitiveOverrideProps<IconProps>;
    star3847627?: PrimitiveOverrideProps<ViewProps>;
    Vector3847628?: PrimitiveOverrideProps<IconProps>;
    star3847723?: PrimitiveOverrideProps<ViewProps>;
    Vector3847724?: PrimitiveOverrideProps<IconProps>;
    star3847659?: PrimitiveOverrideProps<ViewProps>;
    Vector3847660?: PrimitiveOverrideProps<IconProps>;
    star3847691?: PrimitiveOverrideProps<ViewProps>;
    Vector3847692?: PrimitiveOverrideProps<IconProps>;
    "& Up"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Ratingfilter4starsProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "active" | "hover";
} & {
    overrides?: Ratingfilter4starsOverridesProps | undefined | null;
}>;
export default function Ratingfilter4stars(props: Ratingfilter4starsProps): React.ReactElement;
