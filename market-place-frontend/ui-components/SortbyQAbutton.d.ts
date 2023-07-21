/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SortbyQAbuttonOverridesProps = {
    SortbyQAbutton?: PrimitiveOverrideProps<FlexProps>;
    "Q&A"?: PrimitiveOverrideProps<TextProps>;
    "Line 6"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SortbyQAbuttonProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "active" | "hover";
} & {
    overrides?: SortbyQAbuttonOverridesProps | undefined | null;
}>;
export default function SortbyQAbutton(props: SortbyQAbuttonProps): React.ReactElement;
