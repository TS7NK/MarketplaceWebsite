/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationbuttonOverridesProps = {
    Notificationbutton?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 47"?: PrimitiveOverrideProps<IconProps>;
    Bell_pin?: PrimitiveOverrideProps<ViewProps>;
    Subtract?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 45"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 46"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NotificationbuttonProps = React.PropsWithChildren<Partial<ViewProps> & {
    notification?: "Default" | "hover";
} & {
    overrides?: NotificationbuttonOverridesProps | undefined | null;
}>;
export default function Notificationbutton(props: NotificationbuttonProps): React.ReactElement;
