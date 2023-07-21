/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechnologyBigOverridesProps = {
    TechnologyBig?: PrimitiveOverrideProps<FlexProps>;
    "ph:code-fill"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Technology?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TechnologyBigProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "default";
} & {
    overrides?: TechnologyBigOverridesProps | undefined | null;
}>;
export default function TechnologyBig(props: TechnologyBigProps): React.ReactElement;
