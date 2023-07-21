/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ScrollbuttonbigProps } from "./Scrollbuttonbig";
import { PageNumberButtonProps } from "./PageNumberButton";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SinglePageScrollOverridesProps = {
    SinglePageScroll?: PrimitiveOverrideProps<FlexProps>;
    "scroll button big44014834"?: ScrollbuttonbigProps;
    "Page Number Button"?: PageNumberButtonProps;
    "scroll button big44014831"?: ScrollbuttonbigProps;
} & EscapeHatchProps;
export declare type SinglePageScrollProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SinglePageScrollOverridesProps | undefined | null;
}>;
export default function SinglePageScroll(props: SinglePageScrollProps): React.ReactElement;
