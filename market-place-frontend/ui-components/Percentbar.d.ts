/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PercentbarOverridesProps = {
    Percentbar?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 13"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 12"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PercentbarProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "10%" | "8%" | "80%";
} & {
    overrides?: PercentbarOverridesProps | undefined | null;
}>;
export default function Percentbar(props: PercentbarProps): React.ReactElement;
