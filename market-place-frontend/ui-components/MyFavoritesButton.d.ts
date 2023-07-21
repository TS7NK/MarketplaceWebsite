/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyFavoritesButtonOverridesProps = {
    MyFavoritesButton?: PrimitiveOverrideProps<FlexProps>;
    "Frame 245"?: PrimitiveOverrideProps<FlexProps>;
    "Like icon"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MyFavoritesButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "active" | "hover";
} & {
    overrides?: MyFavoritesButtonOverridesProps | undefined | null;
}>;
export default function MyFavoritesButton(props: MyFavoritesButtonProps): React.ReactElement;
