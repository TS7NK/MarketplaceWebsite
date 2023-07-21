/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClosebuttonOverridesProps = {
    Closebutton?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ClosebuttonProps = React.PropsWithChildren<Partial<IconProps> & {
    property1?: "Default" | "hover";
} & {
    overrides?: ClosebuttonOverridesProps | undefined | null;
}>;
export default function Closebutton(props: ClosebuttonProps): React.ReactElement;
