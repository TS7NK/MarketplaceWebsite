/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AIModelsBigOverridesProps = {
    AIModelsBig?: PrimitiveOverrideProps<FlexProps>;
    "OpenAI - png 0"?: PrimitiveOverrideProps<IconProps>;
    ChatGPT?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AIModelsBigProps = React.PropsWithChildren<Partial<FlexProps> & {
    aIModelsTag?: "ChatGPT (Big)";
} & {
    overrides?: AIModelsBigOverridesProps | undefined | null;
}>;
export default function AIModelsBig(props: AIModelsBigProps): React.ReactElement;
