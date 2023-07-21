/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { DeletebuttonProps } from "./Deletebutton";
import { SavefolaterbuttonProps } from "./Savefolaterbutton";
import { CartItemListProps } from "./CartItemList";
import { ApplyDiscountButtonProps } from "./ApplyDiscountButton";
import { CheckoutButtonProps } from "./CheckoutButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShoppingCartOverridesProps = {
    ShoppingCart?: PrimitiveOverrideProps<FlexProps>;
    "Headings with Lines"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 133"?: PrimitiveOverrideProps<FlexProps>;
    "Shopping Cart"?: PrimitiveOverrideProps<TextProps>;
    "(3 items)"?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Frame 130"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 129"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 128"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 118"?: PrimitiveOverrideProps<FlexProps>;
    "delete button"?: DeletebuttonProps;
    "Line 14"?: PrimitiveOverrideProps<IconProps>;
    "Save fo later button"?: SavefolaterbuttonProps;
    "Line 69"?: PrimitiveOverrideProps<IconProps>;
    "Frame 120"?: PrimitiveOverrideProps<FlexProps>;
    "Cart Item List43114024"?: CartItemListProps;
    "Cart Item List43114025"?: CartItemListProps;
    "Cart Item List43114026"?: CartItemListProps;
    "Order Summary"?: PrimitiveOverrideProps<FlexProps>;
    Heading43114028?: PrimitiveOverrideProps<TextProps>;
    "Discount code"?: PrimitiveOverrideProps<FlexProps>;
    Seperator43114030?: PrimitiveOverrideProps<IconProps>;
    "Discount Code input"?: PrimitiveOverrideProps<FlexProps>;
    "_Input field core"?: PrimitiveOverrideProps<FlexProps>;
    "Input with label"?: PrimitiveOverrideProps<FlexProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "linda@framcreative.com"?: PrimitiveOverrideProps<TextProps>;
    "Apply Discount Button"?: ApplyDiscountButtonProps;
    Seperator43114039?: PrimitiveOverrideProps<IconProps>;
    "Sum Breakdown"?: PrimitiveOverrideProps<FlexProps>;
    "Order Value"?: PrimitiveOverrideProps<FlexProps>;
    Text43114042?: PrimitiveOverrideProps<TextProps>;
    "\u20AC3543114043"?: PrimitiveOverrideProps<TextProps>;
    VAT?: PrimitiveOverrideProps<FlexProps>;
    Text43114045?: PrimitiveOverrideProps<TextProps>;
    "\u20AC3543114046"?: PrimitiveOverrideProps<TextProps>;
    "Total before discount"?: PrimitiveOverrideProps<FlexProps>;
    Text43114048?: PrimitiveOverrideProps<TextProps>;
    "\u20AC3543114049"?: PrimitiveOverrideProps<TextProps>;
    "Line 68"?: PrimitiveOverrideProps<IconProps>;
    Total?: PrimitiveOverrideProps<FlexProps>;
    Heading43114052?: PrimitiveOverrideProps<TextProps>;
    "\u20AC3543114053"?: PrimitiveOverrideProps<TextProps>;
    "Checkout Button"?: CheckoutButtonProps;
} & EscapeHatchProps;
export declare type ShoppingCartProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ShoppingCartOverridesProps | undefined | null;
}>;
export default function ShoppingCart(props: ShoppingCartProps): React.ReactElement;
