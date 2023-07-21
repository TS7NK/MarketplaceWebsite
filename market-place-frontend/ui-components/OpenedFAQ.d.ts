/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OpenedFAQOverridesProps = {
    OpenedFAQ?: PrimitiveOverrideProps<FlexProps>;
    "Opened FAQ"?: PrimitiveOverrideProps<FlexProps>;
    "How long does it take for my prompt to be approved?"?: PrimitiveOverrideProps<TextProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "We aim to review and approve a prompt within 1-3 working days. We aim to review and approve a prompt within 1-3 working days. We aim to review and approve a prompt within 1-3 working days. We aim to review and approve a prompt within 1-3 working days. We aim to review and approve a prompt within 1-3 working days."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type OpenedFAQProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: OpenedFAQOverridesProps | undefined | null;
}>;
export default function OpenedFAQ(props: OpenedFAQProps): React.ReactElement;
