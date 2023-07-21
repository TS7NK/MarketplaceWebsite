/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SearchbarmainProps } from "./Searchbarmain";
import { TagsbuttonProps } from "./Tagsbutton";
import { AddButtonProps } from "./AddButton";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { FilterProps } from "./Filter";
import { SortbyRandombuttonProps } from "./SortbyRandombutton";
import { SortbyOnSalebuttonProps } from "./SortbyOnSalebutton";
import { SortbyTopSellerbuttonProps } from "./SortbyTopSellerbutton";
import { SortbyHottestbuttonProps } from "./SortbyHottestbutton";
import { SortbyLatestbuttonProps } from "./SortbyLatestbutton";
import { SinglePageScrollProps } from "./SinglePageScroll";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchNoResultOverridesProps = {
    SearchNoResult?: PrimitiveOverrideProps<FlexProps>;
    "Top Search"?: PrimitiveOverrideProps<FlexProps>;
    "search bar (main)"?: SearchbarmainProps;
    "Frame 21"?: PrimitiveOverrideProps<FlexProps>;
    "tags button43119928"?: TagsbuttonProps;
    "tags button43119929"?: TagsbuttonProps;
    "tags button43119930"?: TagsbuttonProps;
    "tags button43119931"?: TagsbuttonProps;
    "tags button43119932"?: TagsbuttonProps;
    "Add Button"?: AddButtonProps;
    "Primary Frame"?: PrimitiveOverrideProps<FlexProps>;
    Filter?: FilterProps;
    "Prompt List"?: PrimitiveOverrideProps<FlexProps>;
    Sorting?: PrimitiveOverrideProps<FlexProps>;
    "Frame 7643119938"?: PrimitiveOverrideProps<FlexProps>;
    "0 Results for \u201CPrompts for SEO Marketing\u201D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 7643119940"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 74"?: PrimitiveOverrideProps<FlexProps>;
    Vector43119942?: PrimitiveOverrideProps<IconProps>;
    "Sort By"?: PrimitiveOverrideProps<TextProps>;
    "Frame 75"?: PrimitiveOverrideProps<FlexProps>;
    "Sort by Random button"?: SortbyRandombuttonProps;
    "Sort by On Sale button"?: SortbyOnSalebuttonProps;
    "Sort by Top Seller button"?: SortbyTopSellerbuttonProps;
    "Sort by Hottest button"?: SortbyHottestbuttonProps;
    "Sort by Latest button"?: SortbyLatestbuttonProps;
    "Line 7"?: PrimitiveOverrideProps<IconProps>;
    "Frame 84"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 223"?: PrimitiveOverrideProps<FlexProps>;
    "No Result Illustration"?: PrimitiveOverrideProps<FlexProps>;
    Vector43119954?: PrimitiveOverrideProps<IconProps>;
    Group43119955?: PrimitiveOverrideProps<ViewProps>;
    Group43119956?: PrimitiveOverrideProps<ViewProps>;
    Group43119957?: PrimitiveOverrideProps<ViewProps>;
    Vector43119958?: PrimitiveOverrideProps<IconProps>;
    Vector43119959?: PrimitiveOverrideProps<IconProps>;
    Group43119960?: PrimitiveOverrideProps<ViewProps>;
    Vector43119961?: PrimitiveOverrideProps<IconProps>;
    Vector43119962?: PrimitiveOverrideProps<IconProps>;
    Group43119963?: PrimitiveOverrideProps<ViewProps>;
    Group43119964?: PrimitiveOverrideProps<ViewProps>;
    Vector43119965?: PrimitiveOverrideProps<IconProps>;
    Vector43119966?: PrimitiveOverrideProps<IconProps>;
    Group43119967?: PrimitiveOverrideProps<ViewProps>;
    Vector43119968?: PrimitiveOverrideProps<IconProps>;
    Vector43119969?: PrimitiveOverrideProps<IconProps>;
    Group43119970?: PrimitiveOverrideProps<ViewProps>;
    Vector43119971?: PrimitiveOverrideProps<IconProps>;
    Vector43119972?: PrimitiveOverrideProps<IconProps>;
    Vector43119973?: PrimitiveOverrideProps<IconProps>;
    Vector43119974?: PrimitiveOverrideProps<IconProps>;
    Vector43119975?: PrimitiveOverrideProps<IconProps>;
    "No Result Match"?: PrimitiveOverrideProps<TextProps>;
    "Single Page Scroll"?: SinglePageScrollProps;
} & EscapeHatchProps;
export declare type SearchNoResultProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SearchNoResultOverridesProps | undefined | null;
}>;
export default function SearchNoResult(props: SearchNoResultProps): React.ReactElement;
