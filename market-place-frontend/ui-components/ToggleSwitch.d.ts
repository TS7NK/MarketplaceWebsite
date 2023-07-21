/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToggleSwitchOverridesProps = {
    ToggleSwitch?: PrimitiveOverrideProps<ViewProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 143714563"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 243714564"?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 143714566"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 243714567"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ToggleSwitchProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "Active" | "Default";
} & {
    overrides?: ToggleSwitchOverridesProps | undefined | null;
}>;
export default function ToggleSwitch(props: ToggleSwitchProps): React.ReactElement;
