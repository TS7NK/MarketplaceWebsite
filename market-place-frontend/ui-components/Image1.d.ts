/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Image1OverridesProps = {
    Image1?: PrimitiveOverrideProps<ViewProps>;
    "image 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Image1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Image1OverridesProps | undefined | null;
}>;
export default function Image1(props: Image1Props): React.ReactElement;
