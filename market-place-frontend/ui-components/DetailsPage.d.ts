/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DetailsvsExamplesProps } from "./DetailsvsExamples";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { AcademicSmallProps } from "./AcademicSmall";
import { AIModelsSmallProps } from "./AIModelsSmall";
import { TagsbuttonProps } from "./Tagsbutton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DetailsPageOverridesProps = {
    DetailsPage?: PrimitiveOverrideProps<FlexProps>;
    "Details vs. Examples"?: DetailsvsExamplesProps;
    "vertical scroll frame"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 100"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 99"?: PrimitiveOverrideProps<FlexProps>;
    "Published Date:"?: PrimitiveOverrideProps<TextProps>;
    "6/17/2023"?: PrimitiveOverrideProps<TextProps>;
    "Frame 96"?: PrimitiveOverrideProps<FlexProps>;
    "Category:"?: PrimitiveOverrideProps<TextProps>;
    "Academic Small"?: AcademicSmallProps;
    "Frame 97"?: PrimitiveOverrideProps<FlexProps>;
    "AI Models:"?: PrimitiveOverrideProps<TextProps>;
    "AI Models Small"?: AIModelsSmallProps;
    "Frame 98"?: PrimitiveOverrideProps<FlexProps>;
    "Featured Tags:"?: PrimitiveOverrideProps<TextProps>;
    "Frame 93"?: PrimitiveOverrideProps<FlexProps>;
    "tags button2655037"?: TagsbuttonProps;
    "tags button2655038"?: TagsbuttonProps;
    "tags button2655039"?: TagsbuttonProps;
    Description?: PrimitiveOverrideProps<FlexProps>;
    "Instructions:"?: PrimitiveOverrideProps<TextProps>;
    "Detailed Description"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DetailsPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Details Selected";
} & {
    overrides?: DetailsPageOverridesProps | undefined | null;
}>;
export default function DetailsPage(props: DetailsPageProps): React.ReactElement;
