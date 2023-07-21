/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartTopNaviButtonOverridesProps = {
    "5"?: PrimitiveOverrideProps<TextProps>;
    CartTopNaviButton?: PrimitiveOverrideProps<FlexProps>;
    Cart?: PrimitiveOverrideProps<TextProps>;
    "number notification"?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 107"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CartTopNaviButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "hover";
} & {
    overrides?: CartTopNaviButtonOverridesProps | undefined | null;
}>;
export default function CartTopNaviButton(props: CartTopNaviButtonProps): React.ReactElement;
