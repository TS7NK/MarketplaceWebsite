/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AIModelsSmallOverridesProps = {
    AIModelsSmall?: PrimitiveOverrideProps<FlexProps>;
    "OpenAI - png 0"?: PrimitiveOverrideProps<IconProps>;
    ChatGPT?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AIModelsSmallProps = React.PropsWithChildren<Partial<FlexProps> & {
    aIModelsTag?: "ChatGPT (Small)";
} & {
    overrides?: AIModelsSmallOverridesProps | undefined | null;
}>;
export default function AIModelsSmall(props: AIModelsSmallProps): React.ReactElement;
