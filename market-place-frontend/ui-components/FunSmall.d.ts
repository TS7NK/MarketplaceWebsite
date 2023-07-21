/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FunSmallOverridesProps = {
    FunSmall?: PrimitiveOverrideProps<FlexProps>;
    "mingcute:celebrate-fill"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector3839282?: PrimitiveOverrideProps<IconProps>;
    Vector3839283?: PrimitiveOverrideProps<IconProps>;
    Fun?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FunSmallProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "default";
} & {
    overrides?: FunSmallOverridesProps | undefined | null;
}>;
export default function FunSmall(props: FunSmallProps): React.ReactElement;
