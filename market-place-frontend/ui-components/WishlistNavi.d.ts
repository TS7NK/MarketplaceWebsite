/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WishlistNaviOverridesProps = {
    WishlistNavi?: PrimitiveOverrideProps<FlexProps>;
    Wishlist?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type WishlistNaviProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Sell" | "hover";
} & {
    overrides?: WishlistNaviOverridesProps | undefined | null;
}>;
export default function WishlistNavi(props: WishlistNaviProps): React.ReactElement;
