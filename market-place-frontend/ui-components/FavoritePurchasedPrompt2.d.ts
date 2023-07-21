/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PurchasedPromptThumbnailsmall2Props } from "./PurchasedPromptThumbnailsmall2";
import { DeletebuttonProps } from "./Deletebutton";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FavoritePurchasedPrompt2OverridesProps = {
    FavoritePurchasedPrompt2?: PrimitiveOverrideProps<FlexProps>;
    "Purchased Prompt Thumbnail (small) 2"?: PurchasedPromptThumbnailsmall2Props;
    "Frame 119"?: PrimitiveOverrideProps<FlexProps>;
    "delete button"?: DeletebuttonProps;
} & EscapeHatchProps;
export declare type FavoritePurchasedPrompt2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FavoritePurchasedPrompt2OverridesProps | undefined | null;
}>;
export default function FavoritePurchasedPrompt2(props: FavoritePurchasedPrompt2Props): React.ReactElement;
