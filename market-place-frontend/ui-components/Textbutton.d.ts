/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TextbuttonOverridesProps = {
    Textbutton?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector43714542?: PrimitiveOverrideProps<IconProps>;
    Vector43714543?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TextbuttonProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "Default" | "hover";
} & {
    overrides?: TextbuttonOverridesProps | undefined | null;
}>;
export default function Textbutton(props: TextbuttonProps): React.ReactElement;
