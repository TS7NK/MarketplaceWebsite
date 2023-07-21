/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArtSmallOverridesProps = {
    ArtSmall?: PrimitiveOverrideProps<FlexProps>;
    "mdi:art"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Art?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ArtSmallProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "default";
} & {
    overrides?: ArtSmallOverridesProps | undefined | null;
}>;
export default function ArtSmall(props: ArtSmallProps): React.ReactElement;
