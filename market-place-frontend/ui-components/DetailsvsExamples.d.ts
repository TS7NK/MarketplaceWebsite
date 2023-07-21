/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DetailsSwitcherProps } from "./DetailsSwitcher";
import { FlexProps, IconProps } from "@aws-amplify/ui-react";
import { ExampleSwitcherProps } from "./ExampleSwitcher";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DetailsvsExamplesOverridesProps = {
    DetailsvsExamples?: PrimitiveOverrideProps<FlexProps>;
    "Details Switcher"?: DetailsSwitcherProps;
    "Line 9"?: PrimitiveOverrideProps<IconProps>;
    "Example Switcher"?: ExampleSwitcherProps;
} & EscapeHatchProps;
export declare type DetailsvsExamplesProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Details selected" | "Examples selected";
} & {
    overrides?: DetailsvsExamplesOverridesProps | undefined | null;
}>;
export default function DetailsvsExamples(props: DetailsvsExamplesProps): React.ReactElement;
