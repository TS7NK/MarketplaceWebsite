/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DashboardDropdownProps } from "./DashboardDropdown";
import { SettingsDropdownProps } from "./SettingsDropdown";
import { LogOutDropdownProps } from "./LogOutDropdown";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountDropdownOverridesProps = {
    AccountDropdown?: PrimitiveOverrideProps<FlexProps>;
    "Dashboard Dropdown"?: DashboardDropdownProps;
    "Settings Dropdown"?: SettingsDropdownProps;
    "Log Out Dropdown"?: LogOutDropdownProps;
} & EscapeHatchProps;
export declare type AccountDropdownProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AccountDropdownOverridesProps | undefined | null;
}>;
export default function AccountDropdown(props: AccountDropdownProps): React.ReactElement;
