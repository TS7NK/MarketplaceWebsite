/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SavedforLaterPromptsProps } from "./SavedforLaterPrompts";
import { OnsaleSavedforLaterPromptsProps } from "./OnsaleSavedforLaterPrompts";
import { PageselectionProps } from "./Pageselection";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SavedforLaterOverridesProps = {
    SavedforLater?: PrimitiveOverrideProps<ViewProps>;
    "Headings with Lines"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 133"?: PrimitiveOverrideProps<FlexProps>;
    "Saved for Later"?: PrimitiveOverrideProps<TextProps>;
    "(12 items)"?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Frame 84"?: PrimitiveOverrideProps<FlexProps>;
    "Vertical Prompt List"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 78"?: PrimitiveOverrideProps<FlexProps>;
    "Saved for Later Prompts43115463"?: SavedforLaterPromptsProps;
    "Onsale Saved for Later Prompts43115464"?: OnsaleSavedforLaterPromptsProps;
    "Saved for Later Prompts43115465"?: SavedforLaterPromptsProps;
    "Frame 79"?: PrimitiveOverrideProps<FlexProps>;
    "Saved for Later Prompts43115467"?: SavedforLaterPromptsProps;
    "Onsale Saved for Later Prompts43115468"?: OnsaleSavedforLaterPromptsProps;
    "Onsale Saved for Later Prompts43115469"?: OnsaleSavedforLaterPromptsProps;
    "page selection"?: PageselectionProps;
} & EscapeHatchProps;
export declare type SavedforLaterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SavedforLaterOverridesProps | undefined | null;
}>;
export default function SavedforLater(props: SavedforLaterProps): React.ReactElement;
