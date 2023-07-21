/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TagsbuttonOverridesProps = {
    Tagsbutton?: PrimitiveOverrideProps<FlexProps>;
    "UX design"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TagsbuttonProps = React.PropsWithChildren<Partial<FlexProps> & {
    tag?: "Default" | "active" | "hover";
} & {
    overrides?: TagsbuttonOverridesProps | undefined | null;
}>;
export default function Tagsbutton(props: TagsbuttonProps): React.ReactElement;
