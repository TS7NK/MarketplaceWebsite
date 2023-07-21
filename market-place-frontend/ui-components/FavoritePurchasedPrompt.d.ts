/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PurchasedpromptThumbnailsmallProps } from "./PurchasedpromptThumbnailsmall";
import { DeletebuttonProps } from "./Deletebutton";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FavoritePurchasedPromptOverridesProps = {
    FavoritePurchasedPrompt?: PrimitiveOverrideProps<FlexProps>;
    "Purchased prompt Thumbnail (small)"?: PurchasedpromptThumbnailsmallProps;
    "Frame 118"?: PrimitiveOverrideProps<FlexProps>;
    "delete button"?: DeletebuttonProps;
} & EscapeHatchProps;
export declare type FavoritePurchasedPromptProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FavoritePurchasedPromptOverridesProps | undefined | null;
}>;
export default function FavoritePurchasedPrompt(props: FavoritePurchasedPromptProps): React.ReactElement;
