/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import DashboardDropdown from "./DashboardDropdown";
import SettingsDropdown from "./SettingsDropdown";
import LogOutDropdown from "./LogOutDropdown";
import { Flex } from "@aws-amplify/ui-react";
export default function AccountDropdown(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(217,217,217,1)"
      borderRadius="7px"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AccountDropdown")}
      {...rest}
    >
      <DashboardDropdown
        display="flex"
        gap="1px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        property1="Default"
        {...getOverrideProps(overrides, "Dashboard Dropdown")}
      ></DashboardDropdown>
      <SettingsDropdown
        display="flex"
        gap="1px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        property1="Default"
        {...getOverrideProps(overrides, "Settings Dropdown")}
      ></SettingsDropdown>
      <LogOutDropdown
        display="flex"
        gap="1px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        property1="Default"
        {...getOverrideProps(overrides, "Log Out Dropdown")}
      ></LogOutDropdown>
    </Flex>
  );
}
