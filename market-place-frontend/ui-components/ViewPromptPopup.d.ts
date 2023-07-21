/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { CopyPromptButtonProps } from "./CopyPromptButton";
import { ClosebuttonProps } from "./Closebutton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ViewPromptPopupOverridesProps = {
    ViewPromptPopup?: PrimitiveOverrideProps<ViewProps>;
    "Line 13"?: PrimitiveOverrideProps<IconProps>;
    "Frame 179"?: PrimitiveOverrideProps<FlexProps>;
    "Marketing to Boost Sales"?: PrimitiveOverrideProps<TextProps>;
    "Frame 207"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 204"?: PrimitiveOverrideProps<ViewProps>;
    "List Title"?: PrimitiveOverrideProps<TextProps>;
    "Copy Prompt Button"?: CopyPromptButtonProps;
    "Frame 172"?: PrimitiveOverrideProps<FlexProps>;
    "Close button"?: ClosebuttonProps;
    "View Prompt"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ViewPromptPopupProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ViewPromptPopupOverridesProps | undefined | null;
}>;
export default function ViewPromptPopup(props: ViewPromptPopupProps): React.ReactElement;
