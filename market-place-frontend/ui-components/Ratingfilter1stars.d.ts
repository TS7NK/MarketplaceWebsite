/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StarProps } from "./Star";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Ratingfilter1starsOverridesProps = {
    Ratingfilter1stars?: PrimitiveOverrideProps<FlexProps>;
    "5 stars"?: PrimitiveOverrideProps<FlexProps>;
    star3847179?: StarProps;
    star3847180?: StarProps;
    star3847181?: StarProps;
    star3847182?: StarProps;
    star3847183?: StarProps;
    "& Up"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Ratingfilter1starsProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "active" | "hover";
} & {
    overrides?: Ratingfilter1starsOverridesProps | undefined | null;
}>;
export default function Ratingfilter1stars(props: Ratingfilter1starsProps): React.ReactElement;
