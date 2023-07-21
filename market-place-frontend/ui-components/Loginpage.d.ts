/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoProfileProps } from "./LogoProfile";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { GoogleloginbuttonProps } from "./Googleloginbutton";
import { ResetPasswordProps } from "./ResetPassword";
import { ButtonProps } from "./Button";
import { CreateAccountProps } from "./CreateAccount";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginpageOverridesProps = {
    Loginpage?: PrimitiveOverrideProps<FlexProps>;
    "Logo Profile"?: LogoProfileProps;
    "Log in"?: PrimitiveOverrideProps<TextProps>;
    "google login button"?: GoogleloginbuttonProps;
    "Frame 122"?: PrimitiveOverrideProps<FlexProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    Or?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Email Address3406738"?: PrimitiveOverrideProps<FlexProps>;
    "email address"?: PrimitiveOverrideProps<FlexProps>;
    "Email Address3406740"?: PrimitiveOverrideProps<TextProps>;
    bg3406741?: PrimitiveOverrideProps<FlexProps>;
    bg3406742?: PrimitiveOverrideProps<IconProps>;
    Password3406745?: PrimitiveOverrideProps<FlexProps>;
    pawssword3406746?: PrimitiveOverrideProps<FlexProps>;
    "Frame 126"?: PrimitiveOverrideProps<FlexProps>;
    pawssword3957076?: PrimitiveOverrideProps<FlexProps>;
    Password3957077?: PrimitiveOverrideProps<TextProps>;
    Hide3957078?: PrimitiveOverrideProps<FlexProps>;
    Hide3957079?: PrimitiveOverrideProps<IconProps>;
    "Fill 1"?: PrimitiveOverrideProps<IconProps>;
    "Fill 4"?: PrimitiveOverrideProps<IconProps>;
    Path3957082?: PrimitiveOverrideProps<IconProps>;
    Path3957083?: PrimitiveOverrideProps<IconProps>;
    bg3406748?: PrimitiveOverrideProps<FlexProps>;
    bg3406749?: PrimitiveOverrideProps<IconProps>;
    "Frame 123"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 125"?: PrimitiveOverrideProps<FlexProps>;
    "Check Box button"?: PrimitiveOverrideProps<ViewProps>;
    "Remember me"?: PrimitiveOverrideProps<TextProps>;
    "Reset Password"?: ResetPasswordProps;
    Button?: ButtonProps;
    "Frame 124"?: PrimitiveOverrideProps<FlexProps>;
    "Don\u2019t have account yet?"?: PrimitiveOverrideProps<TextProps>;
    CreateAccountWord?: CreateAccountProps;
} & EscapeHatchProps;
export declare type LoginpageProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Log in";
} & {
    overrides?: LoginpageOverridesProps | undefined | null;
}>;
export default function Loginpage(props: LoginpageProps): React.ReactElement;
