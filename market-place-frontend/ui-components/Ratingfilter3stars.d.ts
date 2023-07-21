/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Ratingfilter3starsOverridesProps = {
    Ratingfilter3stars?: PrimitiveOverrideProps<FlexProps>;
    "5 stars"?: PrimitiveOverrideProps<FlexProps>;
    star3847831?: PrimitiveOverrideProps<ViewProps>;
    Vector3847832?: PrimitiveOverrideProps<IconProps>;
    star3847819?: PrimitiveOverrideProps<ViewProps>;
    Vector3847820?: PrimitiveOverrideProps<IconProps>;
    star3847843?: PrimitiveOverrideProps<ViewProps>;
    Vector3847844?: PrimitiveOverrideProps<IconProps>;
    star3847807?: PrimitiveOverrideProps<ViewProps>;
    Vector3847808?: PrimitiveOverrideProps<IconProps>;
    star3847855?: PrimitiveOverrideProps<ViewProps>;
    Vector3847856?: PrimitiveOverrideProps<IconProps>;
    "& Up"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Ratingfilter3starsProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "active" | "hover";
} & {
    overrides?: Ratingfilter3starsOverridesProps | undefined | null;
}>;
export default function Ratingfilter3stars(props: Ratingfilter3starsProps): React.ReactElement;
