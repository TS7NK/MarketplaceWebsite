/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PageNumberButtonOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    PageNumberButton?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PageNumberButtonProps = React.PropsWithChildren<Partial<ViewProps> & {
    pageNumberButton?: "Default" | "active" | "hover";
} & {
    overrides?: PageNumberButtonOverridesProps | undefined | null;
}>;
export default function PageNumberButton(props: PageNumberButtonProps): React.ReactElement;
