/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckBoxbuttonProps } from "./CheckBoxbutton";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { DeletebuttonProps } from "./Deletebutton";
import { SavefolaterbuttonProps } from "./Savefolaterbutton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartItemListOverridesProps = {
    CartItemList?: PrimitiveOverrideProps<FlexProps>;
    "Frame 121"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 120"?: PrimitiveOverrideProps<FlexProps>;
    "Check Box button"?: CheckBoxbuttonProps;
    "Prompt Thumbnial (Tiny)"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    "Prompt Intro (Tiny)"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 35"?: PrimitiveOverrideProps<FlexProps>;
    "CatGPT Nitro Code Generator"?: PrimitiveOverrideProps<TextProps>;
    "Frame 36"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32"?: PrimitiveOverrideProps<FlexProps>;
    "tabler:star-filled"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector3135045?: PrimitiveOverrideProps<IconProps>;
    Vector3135046?: PrimitiveOverrideProps<IconProps>;
    "4.3"?: PrimitiveOverrideProps<TextProps>;
    "AI Models Tag"?: PrimitiveOverrideProps<FlexProps>;
    "Tiny Category Tag"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 119"?: PrimitiveOverrideProps<FlexProps>;
    "delete button"?: DeletebuttonProps;
    "Line 14"?: PrimitiveOverrideProps<IconProps>;
    "Save fo later button"?: SavefolaterbuttonProps;
    "$ 2.99"?: PrimitiveOverrideProps<TextProps>;
    "Line 16"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CartItemListProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default";
} & {
    overrides?: CartItemListOverridesProps | undefined | null;
}>;
export default function CartItemList(props: CartItemListProps): React.ReactElement;
