/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoProfileProps } from "./LogoProfile";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ExamplesButtonProps } from "./ExamplesButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatsOverridesProps = {
    Chats?: PrimitiveOverrideProps<ViewProps>;
    "User Chat2753306"?: PrimitiveOverrideProps<ViewProps>;
    "Logo Profile2753307"?: LogoProfileProps;
    "Frame 1012753308"?: PrimitiveOverrideProps<FlexProps>;
    "User Chat2753309"?: PrimitiveOverrideProps<TextProps>;
    "AI Chat"?: PrimitiveOverrideProps<ViewProps>;
    "OpenAI - jpeg 0"?: PrimitiveOverrideProps<IconProps>;
    "Frame 1012753312"?: PrimitiveOverrideProps<FlexProps>;
    "User Chat2753313"?: PrimitiveOverrideProps<TextProps>;
    "User Chat Selection"?: PrimitiveOverrideProps<ViewProps>;
    "Logo Profile2753315"?: LogoProfileProps;
    "Frame 102"?: PrimitiveOverrideProps<FlexProps>;
    "Examples Button2825335"?: ExamplesButtonProps;
    "Examples Button2825333"?: ExamplesButtonProps;
    "Examples Button2825337"?: ExamplesButtonProps;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ChatsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ChatsOverridesProps | undefined | null;
}>;
export default function Chats(props: ChatsProps): React.ReactElement;
