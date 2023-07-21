/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GoogleloginbuttonOverridesProps = {
    Googleloginbutton?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    Vector3406691?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector3406693?: PrimitiveOverrideProps<IconProps>;
    Vector3406694?: PrimitiveOverrideProps<IconProps>;
    Vector3406695?: PrimitiveOverrideProps<IconProps>;
    Vector3406696?: PrimitiveOverrideProps<IconProps>;
    Vector3406697?: PrimitiveOverrideProps<IconProps>;
    Vector3406698?: PrimitiveOverrideProps<IconProps>;
    Vector3406699?: PrimitiveOverrideProps<IconProps>;
    Vector3406700?: PrimitiveOverrideProps<IconProps>;
    Vector3406701?: PrimitiveOverrideProps<IconProps>;
    text?: PrimitiveOverrideProps<FlexProps>;
    Google?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type GoogleloginbuttonProps = React.PropsWithChildren<Partial<FlexProps> & {
    googleLogIn?: "Default";
} & {
    overrides?: GoogleloginbuttonOverridesProps | undefined | null;
}>;
export default function Googleloginbutton(props: GoogleloginbuttonProps): React.ReactElement;
