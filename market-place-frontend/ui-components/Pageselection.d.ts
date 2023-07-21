/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ScrollbuttonbigProps } from "./Scrollbuttonbig";
import { PageNumberButtonProps } from "./PageNumberButton";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PageselectionOverridesProps = {
    Pageselection?: PrimitiveOverrideProps<FlexProps>;
    "scroll button big2825647"?: ScrollbuttonbigProps;
    "Frame 82"?: PrimitiveOverrideProps<FlexProps>;
    "Page Number Button2825649"?: PageNumberButtonProps;
    "...2825650"?: PrimitiveOverrideProps<TextProps>;
    "Page Number Button2825651"?: PageNumberButtonProps;
    "Page Number Button2825652"?: PageNumberButtonProps;
    "Page Number Button2825653"?: PageNumberButtonProps;
    "Page Number Button2825654"?: PageNumberButtonProps;
    "Page Number Button2825655"?: PageNumberButtonProps;
    "...2825656"?: PrimitiveOverrideProps<TextProps>;
    "Page Number Button2825657"?: PageNumberButtonProps;
    "scroll button big2825658"?: ScrollbuttonbigProps;
} & EscapeHatchProps;
export declare type PageselectionProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PageselectionOverridesProps | undefined | null;
}>;
export default function Pageselection(props: PageselectionProps): React.ReactElement;
