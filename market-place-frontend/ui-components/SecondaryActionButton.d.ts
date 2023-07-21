/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SecondaryActionButtonOverridesProps = {
    SecondaryActionButton?: PrimitiveOverrideProps<FlexProps>;
    "Frame 25"?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Add to Wishlist"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SecondaryActionButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    secondaryActionButton?: "Default" | "Hover";
} & {
    overrides?: SecondaryActionButtonOverridesProps | undefined | null;
}>;
export default function SecondaryActionButton(props: SecondaryActionButtonProps): React.ReactElement;
