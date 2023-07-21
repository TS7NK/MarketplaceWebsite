/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Ratingfilter2starsOverridesProps = {
    Ratingfilter2stars?: PrimitiveOverrideProps<FlexProps>;
    "5 stars"?: PrimitiveOverrideProps<FlexProps>;
    star3847909?: PrimitiveOverrideProps<ViewProps>;
    Vector3847910?: PrimitiveOverrideProps<IconProps>;
    star3847941?: PrimitiveOverrideProps<ViewProps>;
    Vector3847942?: PrimitiveOverrideProps<IconProps>;
    star3848005?: PrimitiveOverrideProps<ViewProps>;
    Vector3848006?: PrimitiveOverrideProps<IconProps>;
    star3847877?: PrimitiveOverrideProps<ViewProps>;
    Vector3847878?: PrimitiveOverrideProps<IconProps>;
    star3847973?: PrimitiveOverrideProps<ViewProps>;
    Vector3847974?: PrimitiveOverrideProps<IconProps>;
    "& Up"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Ratingfilter2starsProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "active" | "hover";
} & {
    overrides?: Ratingfilter2starsOverridesProps | undefined | null;
}>;
export default function Ratingfilter2stars(props: Ratingfilter2starsProps): React.ReactElement;
