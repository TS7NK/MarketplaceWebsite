/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ItemphotoProps } from "./Itemphoto";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ScrollbuttonsmallProps } from "./Scrollbuttonsmall";
import { VerificationtagProps } from "./Verificationtag";
import { CreatersProfileProps } from "./CreatersProfile";
import { ReportbuttonProps } from "./Reportbutton";
import { LikeButtonProps } from "./LikeButton";
import { SalesmallProps } from "./Salesmall";
import { ViewPromptButtonProps } from "./ViewPromptButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PurchasedItemPageLeftOverridesProps = {
    "16"?: PrimitiveOverrideProps<TextProps>;
    "47"?: PrimitiveOverrideProps<TextProps>;
    "350"?: PrimitiveOverrideProps<TextProps>;
    PurchasedItemPageLeft?: PrimitiveOverrideProps<FlexProps>;
    "Item Photos Scroller"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 87"?: PrimitiveOverrideProps<FlexProps>;
    "item photo48117711"?: ItemphotoProps;
    "item photo48117712"?: ItemphotoProps;
    "item photo48117713"?: ItemphotoProps;
    "Frame 40"?: PrimitiveOverrideProps<FlexProps>;
    "scroll button small48117715"?: ScrollbuttonsmallProps;
    "Frame 38"?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 54"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 55"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 52"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 53"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 58"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 59"?: PrimitiveOverrideProps<IconProps>;
    "scroll button small48117723"?: ScrollbuttonsmallProps;
    "Frame 91"?: PrimitiveOverrideProps<FlexProps>;
    "Marketing to Boost Sales"?: PrimitiveOverrideProps<TextProps>;
    "verification tags frame"?: PrimitiveOverrideProps<FlexProps>;
    "verification tag48117727"?: VerificationtagProps;
    "verification tag48117728"?: VerificationtagProps;
    "Frame 90"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 89"?: PrimitiveOverrideProps<FlexProps>;
    "Creater's Profile"?: CreatersProfileProps;
    "Frame 3348117732"?: PrimitiveOverrideProps<FlexProps>;
    "bxs:purchase-tag"?: PrimitiveOverrideProps<ViewProps>;
    Vector48117734?: PrimitiveOverrideProps<IconProps>;
    "Report button"?: ReportbuttonProps;
    "Frame 3348117737"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32"?: PrimitiveOverrideProps<FlexProps>;
    Vector48117739?: PrimitiveOverrideProps<IconProps>;
    "4.5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    "carbon:view-filled"?: PrimitiveOverrideProps<ViewProps>;
    Vector48117743?: PrimitiveOverrideProps<IconProps>;
    Vector48117744?: PrimitiveOverrideProps<IconProps>;
    "Frame 31"?: PrimitiveOverrideProps<FlexProps>;
    "Like Button"?: LikeButtonProps;
    "Line 8"?: PrimitiveOverrideProps<IconProps>;
    "Item Description"?: PrimitiveOverrideProps<TextProps>;
    Price?: PrimitiveOverrideProps<FlexProps>;
    "sale small"?: SalesmallProps;
    "$ 3.99"?: PrimitiveOverrideProps<TextProps>;
    "$ 1.99"?: PrimitiveOverrideProps<TextProps>;
    "View Prompt Button"?: ViewPromptButtonProps;
    "After purchasing, you will gain access to the prompt file, which you can use with ChatGPT. You must already have access to ChatGPT to use this prompt. By purchasing this prompt, you agree to our Terms of Services. Updated June 6, 2023"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PurchasedItemPageLeftProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PurchasedItemPageLeftOverridesProps | undefined | null;
}>;
export default function PurchasedItemPageLeft(props: PurchasedItemPageLeftProps): React.ReactElement;
