/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MySellingsButtonOverridesProps = {
    MySellingsButton?: PrimitiveOverrideProps<FlexProps>;
    "Frame 245"?: PrimitiveOverrideProps<FlexProps>;
    "ic:round-publish"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MySellingsButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "active" | "hover";
} & {
    overrides?: MySellingsButtonOverridesProps | undefined | null;
}>;
export default function MySellingsButton(props: MySellingsButtonProps): React.ReactElement;
