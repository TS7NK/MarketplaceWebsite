/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScrollbuttonsmallOverridesProps = {
    Scrollbuttonsmall?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 50"?: PrimitiveOverrideProps<IconProps>;
    "mdi:filter"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ScrollbuttonsmallProps = React.PropsWithChildren<Partial<ViewProps> & {
    scrollButton?: "Default" | "hover";
} & {
    overrides?: ScrollbuttonsmallOverridesProps | undefined | null;
}>;
export default function Scrollbuttonsmall(props: ScrollbuttonsmallProps): React.ReactElement;
