/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { ManageCartButtonProps } from "./ManageCartButton";
import { PrimaryActionButtonProps } from "./PrimaryActionButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartCheckoutBarOverridesProps = {
    CartCheckoutBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 117"?: PrimitiveOverrideProps<FlexProps>;
    "$ 9.97"?: PrimitiveOverrideProps<TextProps>;
    "Line 12"?: PrimitiveOverrideProps<IconProps>;
    "Manage Cart Button"?: ManageCartButtonProps;
    "Primary Action Button"?: PrimaryActionButtonProps;
} & EscapeHatchProps;
export declare type CartCheckoutBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CartCheckoutBarOverridesProps | undefined | null;
}>;
export default function CartCheckoutBar(props: CartCheckoutBarProps): React.ReactElement;
