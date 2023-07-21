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
import { ButtonProps } from "./Button";
import { ResetPasswordProps } from "./ResetPassword";
import { LoginProps } from "./Login";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateAccountpageOverridesProps = {
    CreateAccountpage?: PrimitiveOverrideProps<FlexProps>;
    "Logo Profile"?: LogoProfileProps;
    "Create Account"?: PrimitiveOverrideProps<TextProps>;
    "google login button"?: GoogleloginbuttonProps;
    "Frame 122"?: PrimitiveOverrideProps<FlexProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    Or?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Email Address3466976"?: PrimitiveOverrideProps<FlexProps>;
    "email address"?: PrimitiveOverrideProps<FlexProps>;
    "Email Address3466978"?: PrimitiveOverrideProps<TextProps>;
    bg3466979?: PrimitiveOverrideProps<FlexProps>;
    bg3466980?: PrimitiveOverrideProps<IconProps>;
    Password3466983?: PrimitiveOverrideProps<FlexProps>;
    "Frame 126"?: PrimitiveOverrideProps<FlexProps>;
    pawssword?: PrimitiveOverrideProps<FlexProps>;
    Password3466985?: PrimitiveOverrideProps<TextProps>;
    Hide3466988?: PrimitiveOverrideProps<FlexProps>;
    Hide3466989?: PrimitiveOverrideProps<IconProps>;
    "Fill 1"?: PrimitiveOverrideProps<IconProps>;
    "Fill 4"?: PrimitiveOverrideProps<IconProps>;
    Path3466992?: PrimitiveOverrideProps<IconProps>;
    Path3466993?: PrimitiveOverrideProps<IconProps>;
    bg3466986?: PrimitiveOverrideProps<FlexProps>;
    bg3466987?: PrimitiveOverrideProps<IconProps>;
    Button?: ButtonProps;
    "Frame 123"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 125"?: PrimitiveOverrideProps<FlexProps>;
    "Check Box button"?: PrimitiveOverrideProps<ViewProps>;
    "Remember me"?: PrimitiveOverrideProps<TextProps>;
    "Reset Password"?: ResetPasswordProps;
    "Frame 124"?: PrimitiveOverrideProps<FlexProps>;
    "Already have an account?"?: PrimitiveOverrideProps<TextProps>;
    "Log in"?: LoginProps;
} & EscapeHatchProps;
export declare type CreateAccountpageProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Create Account";
} & {
    overrides?: CreateAccountpageOverridesProps | undefined | null;
}>;
export default function CreateAccountpage(props: CreateAccountpageProps): React.ReactElement;
