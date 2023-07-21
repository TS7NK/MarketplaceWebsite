/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoWhiteProps } from "./LogoWhite";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Button2Props } from "./Button2";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavOverridesProps = {
    Nav?: PrimitiveOverrideProps<FlexProps>;
    "Logo (White)"?: LogoWhiteProps;
    Menu?: PrimitiveOverrideProps<FlexProps>;
    User63027845?: PrimitiveOverrideProps<FlexProps>;
    User63027846?: PrimitiveOverrideProps<FlexProps>;
    Avatar?: PrimitiveOverrideProps<ViewProps>;
    "Group 6027"?: PrimitiveOverrideProps<ViewProps>;
    Base?: PrimitiveOverrideProps<IconProps>;
    C?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Button2?: Button2Props;
} & EscapeHatchProps;
export declare type NavProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavOverridesProps | undefined | null;
}>;
export default function Nav(props: NavProps): React.ReactElement;
