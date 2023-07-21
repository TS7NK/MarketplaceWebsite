/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VerificationtagOverridesProps = {
    Verificationtag?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Tested?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type VerificationtagProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: VerificationtagOverridesProps | undefined | null;
}>;
export default function Verificationtag(props: VerificationtagProps): React.ReactElement;
