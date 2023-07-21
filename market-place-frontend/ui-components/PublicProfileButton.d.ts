/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PublicProfileButtonOverridesProps = {
    PublicProfileButton?: PrimitiveOverrideProps<FlexProps>;
    "Frame 249"?: PrimitiveOverrideProps<FlexProps>;
    "carbon:view-filled"?: PrimitiveOverrideProps<ViewProps>;
    Vector49925520?: PrimitiveOverrideProps<IconProps>;
    Vector49925521?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PublicProfileButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "active" | "hover";
} & {
    overrides?: PublicProfileButtonOverridesProps | undefined | null;
}>;
export default function PublicProfileButton(props: PublicProfileButtonProps): React.ReactElement;
