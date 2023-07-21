/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FunFilterOverridesProps = {
    FunFilter?: PrimitiveOverrideProps<FlexProps>;
    "mingcute:celebrate-fill"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector3839064?: PrimitiveOverrideProps<IconProps>;
    Vector3839065?: PrimitiveOverrideProps<IconProps>;
    Fun?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FunFilterProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Fun active" | "Fun default";
} & {
    overrides?: FunFilterOverridesProps | undefined | null;
}>;
export default function FunFilter(props: FunFilterProps): React.ReactElement;
