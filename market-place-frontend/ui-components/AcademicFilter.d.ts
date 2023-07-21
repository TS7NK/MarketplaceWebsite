/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AcademicFilterOverridesProps = {
    AcademicFilter?: PrimitiveOverrideProps<FlexProps>;
    "heroicons:academic-cap-20-solid"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Academic?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AcademicFilterProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Academic active" | "Academic default";
} & {
    overrides?: AcademicFilterOverridesProps | undefined | null;
}>;
export default function AcademicFilter(props: AcademicFilterProps): React.ReactElement;
