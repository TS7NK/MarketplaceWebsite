/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeletebuttonOverridesProps = {
    Deletebutton?: PrimitiveOverrideProps<FlexProps>;
    "_Nav menu button"?: PrimitiveOverrideProps<FlexProps>;
    trash?: PrimitiveOverrideProps<ViewProps>;
    Vector3135116?: PrimitiveOverrideProps<IconProps>;
    Vector3135117?: PrimitiveOverrideProps<IconProps>;
    Vector3135118?: PrimitiveOverrideProps<IconProps>;
    Vector3135119?: PrimitiveOverrideProps<IconProps>;
    Vector3135120?: PrimitiveOverrideProps<IconProps>;
    Vector3135121?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type DeletebuttonProps = React.PropsWithChildren<Partial<FlexProps> & {
    delete?: "Default" | "hover";
} & {
    overrides?: DeletebuttonOverridesProps | undefined | null;
}>;
export default function Deletebutton(props: DeletebuttonProps): React.ReactElement;
