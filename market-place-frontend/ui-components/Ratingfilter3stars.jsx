/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Ratingfilter3stars(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Default" },
      overrides: {
        Vector3847832: {},
        star3847831: {},
        Vector3847820: {},
        star3847819: {},
        Vector3847844: {},
        star3847843: {},
        Vector3847808: {},
        star3847807: {},
        Vector3847856: {},
        star3847855: {},
        "5 stars": {},
        "& Up": {},
        Ratingfilter3stars: {},
      },
    },
    {
      variantValues: { property1: "hover" },
      overrides: {
        Vector3847832: {},
        star3847831: {},
        Vector3847820: {},
        star3847819: {},
        Vector3847844: {},
        star3847843: {},
        Vector3847808: {},
        star3847807: {},
        Vector3847856: {},
        star3847855: {},
        "5 stars": {},
        "& Up": {},
        Ratingfilter3stars: { backgroundColor: "rgba(255,241,167,1)" },
      },
    },
    {
      variantValues: { property1: "active" },
      overrides: {
        Vector3847832: {},
        star3847831: {},
        Vector3847820: {},
        star3847819: {},
        Vector3847844: {},
        star3847843: {},
        Vector3847808: {},
        star3847807: {},
        Vector3847856: {},
        star3847855: {},
        "5 stars": {},
        "& Up": { color: "rgba(255,255,255,1)" },
        Ratingfilter3stars: { backgroundColor: "rgba(0,0,0,1)" },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="6px"
      padding="3px 6px 3px 6px"
      display="flex"
      {...getOverrideProps(overrides, "Ratingfilter3stars")}
      {...rest}
    >
      <Flex
        gap="3px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "5 stars")}
      >
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "star3847831")}
        >
          <Icon
            width="21.97px"
            height="20.99px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 21.97210693359375,
              height: 20.99365234375,
            }}
            paths={[
              {
                d: "M7.23642 6.33797L0.856418 7.26297L0.743418 7.28597C0.572357 7.33138 0.416413 7.42138 0.29151 7.54677C0.166608 7.67216 0.0772217 7.82846 0.0324804 7.9997C-0.0122609 8.17093 -0.0107545 8.35098 0.0368458 8.52144C0.0844462 8.69191 0.176435 8.84668 0.303418 8.96997L4.92542 13.469L3.83542 19.824L3.82242 19.934C3.81195 20.1109 3.84868 20.2874 3.92887 20.4455C4.00905 20.6035 4.1298 20.7374 4.27875 20.8335C4.42771 20.9295 4.59951 20.9843 4.77657 20.9921C4.95363 20.9999 5.12958 20.9605 5.28642 20.878L10.9924 17.878L16.6854 20.878L16.7854 20.924C16.9505 20.989 17.1299 21.0089 17.3052 20.9817C17.4805 20.9545 17.6454 20.8812 17.783 20.7692C17.9206 20.6573 18.026 20.5107 18.0883 20.3446C18.1505 20.1785 18.1675 19.9988 18.1374 19.824L17.0464 13.469L21.6704 8.96897L21.7484 8.88397C21.8598 8.74674 21.9329 8.58242 21.9601 8.40776C21.9874 8.23311 21.9678 8.05435 21.9035 7.8897C21.8392 7.72505 21.7323 7.5804 21.5939 7.47048C21.4555 7.36056 21.2904 7.28931 21.1154 7.26397L14.7354 6.33797L11.8834 0.557969C11.8009 0.390504 11.6731 0.249484 11.5146 0.150874C11.3561 0.0522634 11.1731 2.22045e-16 10.9864 0C10.7997 2.22045e-16 10.6168 0.0522634 10.4582 0.150874C10.2997 0.249484 10.1719 0.390504 10.0894 0.557969L7.23642 6.33797Z",
                fill: "rgba(255,215,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="4.18%"
            bottom="8.35%"
            left="4.19%"
            right="4.26%"
            {...getOverrideProps(overrides, "Vector3847832")}
          ></Icon>
        </View>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "star3847819")}
        >
          <Icon
            width="21.97px"
            height="20.99px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 21.97210693359375,
              height: 20.99365234375,
            }}
            paths={[
              {
                d: "M7.23642 6.33797L0.856418 7.26297L0.743418 7.28597C0.572357 7.33138 0.416413 7.42138 0.29151 7.54677C0.166608 7.67216 0.0772217 7.82846 0.0324804 7.9997C-0.0122609 8.17093 -0.0107545 8.35098 0.0368458 8.52144C0.0844462 8.69191 0.176435 8.84668 0.303418 8.96997L4.92542 13.469L3.83542 19.824L3.82242 19.934C3.81195 20.1109 3.84868 20.2874 3.92887 20.4455C4.00905 20.6035 4.1298 20.7374 4.27875 20.8335C4.42771 20.9295 4.59951 20.9843 4.77657 20.9921C4.95363 20.9999 5.12958 20.9605 5.28642 20.878L10.9924 17.878L16.6854 20.878L16.7854 20.924C16.9505 20.989 17.1299 21.0089 17.3052 20.9817C17.4805 20.9545 17.6454 20.8812 17.783 20.7692C17.9206 20.6573 18.026 20.5107 18.0883 20.3446C18.1505 20.1785 18.1675 19.9988 18.1374 19.824L17.0464 13.469L21.6704 8.96897L21.7484 8.88397C21.8598 8.74674 21.9329 8.58242 21.9601 8.40776C21.9874 8.23311 21.9678 8.05435 21.9035 7.8897C21.8392 7.72505 21.7323 7.5804 21.5939 7.47048C21.4555 7.36056 21.2904 7.28931 21.1154 7.26397L14.7354 6.33797L11.8834 0.557969C11.8009 0.390504 11.6731 0.249484 11.5146 0.150874C11.3561 0.0522634 11.1731 2.22045e-16 10.9864 0C10.7997 2.22045e-16 10.6168 0.0522634 10.4582 0.150874C10.2997 0.249484 10.1719 0.390504 10.0894 0.557969L7.23642 6.33797Z",
                fill: "rgba(255,215,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="4.18%"
            bottom="8.35%"
            left="4.19%"
            right="4.26%"
            {...getOverrideProps(overrides, "Vector3847820")}
          ></Icon>
        </View>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "star3847843")}
        >
          <Icon
            width="21.97px"
            height="20.99px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 21.97210693359375,
              height: 20.99365234375,
            }}
            paths={[
              {
                d: "M7.23642 6.33797L0.856418 7.26297L0.743418 7.28597C0.572357 7.33138 0.416413 7.42138 0.29151 7.54677C0.166608 7.67216 0.0772217 7.82846 0.0324804 7.9997C-0.0122609 8.17093 -0.0107545 8.35098 0.0368458 8.52144C0.0844462 8.69191 0.176435 8.84668 0.303418 8.96997L4.92542 13.469L3.83542 19.824L3.82242 19.934C3.81195 20.1109 3.84868 20.2874 3.92887 20.4455C4.00905 20.6035 4.1298 20.7374 4.27875 20.8335C4.42771 20.9295 4.59951 20.9843 4.77657 20.9921C4.95363 20.9999 5.12958 20.9605 5.28642 20.878L10.9924 17.878L16.6854 20.878L16.7854 20.924C16.9505 20.989 17.1299 21.0089 17.3052 20.9817C17.4805 20.9545 17.6454 20.8812 17.783 20.7692C17.9206 20.6573 18.026 20.5107 18.0883 20.3446C18.1505 20.1785 18.1675 19.9988 18.1374 19.824L17.0464 13.469L21.6704 8.96897L21.7484 8.88397C21.8598 8.74674 21.9329 8.58242 21.9601 8.40776C21.9874 8.23311 21.9678 8.05435 21.9035 7.8897C21.8392 7.72505 21.7323 7.5804 21.5939 7.47048C21.4555 7.36056 21.2904 7.28931 21.1154 7.26397L14.7354 6.33797L11.8834 0.557969C11.8009 0.390504 11.6731 0.249484 11.5146 0.150874C11.3561 0.0522634 11.1731 2.22045e-16 10.9864 0C10.7997 2.22045e-16 10.6168 0.0522634 10.4582 0.150874C10.2997 0.249484 10.1719 0.390504 10.0894 0.557969L7.23642 6.33797Z",
                fill: "rgba(255,215,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="4.18%"
            bottom="8.35%"
            left="4.19%"
            right="4.26%"
            {...getOverrideProps(overrides, "Vector3847844")}
          ></Icon>
        </View>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "star3847807")}
        >
          <Icon
            width="21.97px"
            height="20.99px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 21.97210693359375,
              height: 20.99365234375,
            }}
            paths={[
              {
                d: "M7.23642 6.33797L7.3799 7.32762L7.90036 7.25216L8.13313 6.78059L7.23642 6.33797ZM0.856418 7.26297L0.712934 6.27332L0.684814 6.27739L0.65697 6.28306L0.856418 7.26297ZM0.743418 7.28597L0.54397 6.30606L0.515207 6.31192L0.486837 6.31945L0.743418 7.28597ZM0.303418 8.96997L1.00093 8.25339L1 8.25249L0.303418 8.96997ZM4.92542 13.469L5.91103 13.638L5.99998 13.1194L5.62293 12.7524L4.92542 13.469ZM3.83542 19.824L2.84981 19.6549L2.8454 19.6807L2.84233 19.7066L3.83542 19.824ZM3.82242 19.934L2.82933 19.8166L2.82589 19.8457L2.82417 19.8749L3.82242 19.934ZM5.28642 20.878L4.82106 19.9928L4.82067 19.993L5.28642 20.878ZM10.9924 17.878L11.4586 16.9933L10.9929 16.7479L10.5271 16.9928L10.9924 17.878ZM16.6854 20.878L16.2192 21.7626L16.243 21.7752L16.2675 21.7865L16.6854 20.878ZM16.7854 20.924L16.3675 21.8325L16.3929 21.8441L16.4189 21.8544L16.7854 20.924ZM18.1374 19.824L17.1518 19.9932L17.1519 19.9935L18.1374 19.824ZM17.0464 13.469L16.349 12.7523L15.9718 13.1194L16.0608 13.6382L17.0464 13.469ZM21.6704 8.96897L22.3678 9.68562L22.3881 9.66591L22.4072 9.64508L21.6704 8.96897ZM21.7484 8.88397L22.4852 9.56008L22.5057 9.53779L22.5247 9.51429L21.7484 8.88397ZM21.1154 7.26397L20.9718 8.2536L20.9721 8.25364L21.1154 7.26397ZM14.7354 6.33797L13.8386 6.78046L14.0713 7.25206L14.5918 7.3276L14.7354 6.33797ZM11.8834 0.557969L10.9864 1L10.9866 1.00046L11.8834 0.557969ZM10.9864 0L10.9864 -1L10.9864 0ZM10.0894 0.557969L10.9861 1.00059L10.9864 1L10.0894 0.557969ZM7.09293 5.34832L0.712934 6.27332L0.999902 8.25262L7.3799 7.32762L7.09293 5.34832ZM0.65697 6.28306L0.54397 6.30606L0.942867 8.26588L1.05587 8.24288L0.65697 6.28306ZM0.486837 6.31945C0.144714 6.41027 -0.167174 6.59026 -0.416979 6.84105L1 8.25249L1 8.25249L0.486837 6.31945ZM-0.416979 6.84105C-0.666784 7.09183 -0.845556 7.40442 -0.935039 7.7469L1 8.25249L1 8.25249L-0.416979 6.84105ZM-0.935039 7.7469C-1.02452 8.08937 -1.02151 8.44946 -0.926308 8.79039L1 8.25249L1 8.25249L-0.935039 7.7469ZM-0.926308 8.79039C-0.831108 9.13132 -0.64713 9.44088 -0.393164 9.68745L1 8.25249L1 8.25249L-0.926308 8.79039ZM-0.39409 9.68655L4.22791 14.1855L5.62293 12.7524L1.00093 8.25339L-0.39409 9.68655ZM3.93981 13.2999L2.84981 19.6549L4.82103 19.993L5.91103 13.638L3.93981 13.2999ZM2.84233 19.7066L2.82933 19.8166L4.81551 20.0513L4.82851 19.9413L2.84233 19.7066ZM2.82417 19.8749C2.80322 20.2287 2.8767 20.5818 3.03707 20.8979L4.82067 19.9931L4.82067 19.9931L2.82417 19.8749ZM3.03707 20.8979C3.19743 21.214 3.43893 21.4818 3.73684 21.6739L4.82067 19.9931L4.82067 19.9931L3.03707 20.8979ZM3.73684 21.6739C4.03474 21.866 4.37835 21.9755 4.73246 21.9911L4.82067 19.993L4.82067 19.9931L3.73684 21.6739ZM4.73246 21.9911C5.08658 22.0067 5.43849 21.928 5.75217 21.7629L4.82067 19.993L4.82067 19.993L4.73246 21.9911ZM5.75178 21.7631L11.4578 18.7631L10.5271 16.9928L4.82106 19.9928L5.75178 21.7631ZM10.5262 18.7626L16.2192 21.7626L17.1516 19.9933L11.4586 16.9933L10.5262 18.7626ZM16.2675 21.7865L16.3675 21.8325L17.2033 20.0155L17.1033 19.9695L16.2675 21.7865ZM16.4189 21.8544C16.7491 21.9844 17.1078 22.0243 17.4584 21.9699L17.1519 19.9935L17.1519 19.9935L16.4189 21.8544ZM17.4584 21.9699C17.8091 21.9155 18.1389 21.7688 18.4141 21.5449L17.1519 19.9935L17.1519 19.9935L17.4584 21.9699ZM18.4141 21.5449C18.6893 21.321 18.9 21.0279 19.0246 20.6957L17.1519 19.9935L17.1519 19.9935L18.4141 21.5449ZM19.0246 20.6957C19.1492 20.3634 19.1831 20.0041 19.1229 19.6544L17.1519 19.9935L17.1519 19.9935L19.0246 20.6957ZM19.123 19.6548L18.032 13.2998L16.0608 13.6382L17.1518 19.9932L19.123 19.6548ZM17.7438 14.1856L22.3678 9.68562L20.973 8.25232L16.349 12.7523L17.7438 14.1856ZM22.4072 9.64508L22.4852 9.56008L21.0116 8.20786L20.9336 8.29286L22.4072 9.64508ZM22.5247 9.51429C22.7476 9.23983 22.8937 8.9112 22.9482 8.56188L20.9721 8.25364L20.9721 8.25364L22.5247 9.51429ZM22.9482 8.56188C23.0027 8.21257 22.9636 7.85505 22.8349 7.52576L20.9721 8.25364L20.9721 8.25364L22.9482 8.56188ZM22.8349 7.52576C22.7063 7.19646 22.4926 6.90716 22.2157 6.68732L20.9721 8.25364L20.9721 8.25364L22.8349 7.52576ZM22.2157 6.68732C21.9388 6.46748 21.6086 6.32497 21.2587 6.27429L20.9721 8.25364L20.9721 8.25364L22.2157 6.68732ZM21.2591 6.27434L14.8791 5.34834L14.5918 7.3276L20.9718 8.2536L21.2591 6.27434ZM15.6322 5.89548L12.7802 0.115479L10.9866 1.00046L13.8386 6.78046L15.6322 5.89548ZM12.7804 0.115939C12.6154 -0.218994 12.3599 -0.501032 12.0428 -0.698252L10.9864 1L10.9864 1L12.7804 0.115939ZM12.0428 -0.698252C11.7257 -0.895473 11.3598 -1 10.9864 -1L10.9864 1L10.9864 1L12.0428 -0.698252ZM10.9864 -1C10.613 -1 10.2471 -0.895473 9.93004 -0.698252L10.9864 1L10.9864 1L10.9864 -1ZM9.93004 -0.698252C9.61299 -0.501032 9.35747 -0.218994 9.19242 0.115939L10.9864 1L10.9864 1L9.93004 -0.698252ZM9.19271 0.115354L6.33971 5.89535L8.13313 6.78059L10.9861 1.00058L9.19271 0.115354Z",
                stroke: "rgba(255,215,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="4.18%"
            bottom="8.35%"
            left="4.19%"
            right="4.26%"
            {...getOverrideProps(overrides, "Vector3847808")}
          ></Icon>
        </View>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "star3847855")}
        >
          <Icon
            width="21.97px"
            height="20.99px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 21.97210693359375,
              height: 20.99365234375,
            }}
            paths={[
              {
                d: "M7.23642 6.33797L7.3799 7.32762L7.90036 7.25216L8.13313 6.78059L7.23642 6.33797ZM0.856418 7.26297L0.712934 6.27332L0.684814 6.27739L0.65697 6.28306L0.856418 7.26297ZM0.743418 7.28597L0.54397 6.30606L0.515207 6.31192L0.486837 6.31945L0.743418 7.28597ZM0.303418 8.96997L1.00093 8.25339L1 8.25249L0.303418 8.96997ZM4.92542 13.469L5.91103 13.638L5.99998 13.1194L5.62293 12.7524L4.92542 13.469ZM3.83542 19.824L2.84981 19.6549L2.8454 19.6807L2.84233 19.7066L3.83542 19.824ZM3.82242 19.934L2.82933 19.8166L2.82589 19.8457L2.82417 19.8749L3.82242 19.934ZM5.28642 20.878L4.82106 19.9928L4.82067 19.993L5.28642 20.878ZM10.9924 17.878L11.4586 16.9933L10.9929 16.7479L10.5271 16.9928L10.9924 17.878ZM16.6854 20.878L16.2192 21.7626L16.243 21.7752L16.2675 21.7865L16.6854 20.878ZM16.7854 20.924L16.3675 21.8325L16.3929 21.8441L16.4189 21.8544L16.7854 20.924ZM18.1374 19.824L17.1518 19.9932L17.1519 19.9935L18.1374 19.824ZM17.0464 13.469L16.349 12.7523L15.9718 13.1194L16.0608 13.6382L17.0464 13.469ZM21.6704 8.96897L22.3678 9.68562L22.3881 9.66591L22.4072 9.64508L21.6704 8.96897ZM21.7484 8.88397L22.4852 9.56008L22.5057 9.53779L22.5247 9.51429L21.7484 8.88397ZM21.1154 7.26397L20.9718 8.2536L20.9721 8.25364L21.1154 7.26397ZM14.7354 6.33797L13.8386 6.78046L14.0713 7.25206L14.5918 7.3276L14.7354 6.33797ZM11.8834 0.557969L10.9864 1L10.9866 1.00046L11.8834 0.557969ZM10.9864 0L10.9864 -1L10.9864 0ZM10.0894 0.557969L10.9861 1.00059L10.9864 1L10.0894 0.557969ZM7.09293 5.34832L0.712934 6.27332L0.999902 8.25262L7.3799 7.32762L7.09293 5.34832ZM0.65697 6.28306L0.54397 6.30606L0.942867 8.26588L1.05587 8.24288L0.65697 6.28306ZM0.486837 6.31945C0.144714 6.41027 -0.167174 6.59026 -0.416979 6.84105L1 8.25249L1 8.25249L0.486837 6.31945ZM-0.416979 6.84105C-0.666784 7.09183 -0.845556 7.40442 -0.935039 7.7469L1 8.25249L1 8.25249L-0.416979 6.84105ZM-0.935039 7.7469C-1.02452 8.08937 -1.02151 8.44946 -0.926308 8.79039L1 8.25249L1 8.25249L-0.935039 7.7469ZM-0.926308 8.79039C-0.831108 9.13132 -0.64713 9.44088 -0.393164 9.68745L1 8.25249L1 8.25249L-0.926308 8.79039ZM-0.39409 9.68655L4.22791 14.1855L5.62293 12.7524L1.00093 8.25339L-0.39409 9.68655ZM3.93981 13.2999L2.84981 19.6549L4.82103 19.993L5.91103 13.638L3.93981 13.2999ZM2.84233 19.7066L2.82933 19.8166L4.81551 20.0513L4.82851 19.9413L2.84233 19.7066ZM2.82417 19.8749C2.80322 20.2287 2.8767 20.5818 3.03707 20.8979L4.82067 19.9931L4.82067 19.9931L2.82417 19.8749ZM3.03707 20.8979C3.19743 21.214 3.43893 21.4818 3.73684 21.6739L4.82067 19.9931L4.82067 19.9931L3.03707 20.8979ZM3.73684 21.6739C4.03474 21.866 4.37835 21.9755 4.73246 21.9911L4.82067 19.993L4.82067 19.9931L3.73684 21.6739ZM4.73246 21.9911C5.08658 22.0067 5.43849 21.928 5.75217 21.7629L4.82067 19.993L4.82067 19.993L4.73246 21.9911ZM5.75178 21.7631L11.4578 18.7631L10.5271 16.9928L4.82106 19.9928L5.75178 21.7631ZM10.5262 18.7626L16.2192 21.7626L17.1516 19.9933L11.4586 16.9933L10.5262 18.7626ZM16.2675 21.7865L16.3675 21.8325L17.2033 20.0155L17.1033 19.9695L16.2675 21.7865ZM16.4189 21.8544C16.7491 21.9844 17.1078 22.0243 17.4584 21.9699L17.1519 19.9935L17.1519 19.9935L16.4189 21.8544ZM17.4584 21.9699C17.8091 21.9155 18.1389 21.7688 18.4141 21.5449L17.1519 19.9935L17.1519 19.9935L17.4584 21.9699ZM18.4141 21.5449C18.6893 21.321 18.9 21.0279 19.0246 20.6957L17.1519 19.9935L17.1519 19.9935L18.4141 21.5449ZM19.0246 20.6957C19.1492 20.3634 19.1831 20.0041 19.1229 19.6544L17.1519 19.9935L17.1519 19.9935L19.0246 20.6957ZM19.123 19.6548L18.032 13.2998L16.0608 13.6382L17.1518 19.9932L19.123 19.6548ZM17.7438 14.1856L22.3678 9.68562L20.973 8.25232L16.349 12.7523L17.7438 14.1856ZM22.4072 9.64508L22.4852 9.56008L21.0116 8.20786L20.9336 8.29286L22.4072 9.64508ZM22.5247 9.51429C22.7476 9.23983 22.8937 8.9112 22.9482 8.56188L20.9721 8.25364L20.9721 8.25364L22.5247 9.51429ZM22.9482 8.56188C23.0027 8.21257 22.9636 7.85505 22.8349 7.52576L20.9721 8.25364L20.9721 8.25364L22.9482 8.56188ZM22.8349 7.52576C22.7063 7.19646 22.4926 6.90716 22.2157 6.68732L20.9721 8.25364L20.9721 8.25364L22.8349 7.52576ZM22.2157 6.68732C21.9388 6.46748 21.6086 6.32497 21.2587 6.27429L20.9721 8.25364L20.9721 8.25364L22.2157 6.68732ZM21.2591 6.27434L14.8791 5.34834L14.5918 7.3276L20.9718 8.2536L21.2591 6.27434ZM15.6322 5.89548L12.7802 0.115479L10.9866 1.00046L13.8386 6.78046L15.6322 5.89548ZM12.7804 0.115939C12.6154 -0.218994 12.3599 -0.501032 12.0428 -0.698252L10.9864 1L10.9864 1L12.7804 0.115939ZM12.0428 -0.698252C11.7257 -0.895473 11.3598 -1 10.9864 -1L10.9864 1L10.9864 1L12.0428 -0.698252ZM10.9864 -1C10.613 -1 10.2471 -0.895473 9.93004 -0.698252L10.9864 1L10.9864 1L10.9864 -1ZM9.93004 -0.698252C9.61299 -0.501032 9.35747 -0.218994 9.19242 0.115939L10.9864 1L10.9864 1L9.93004 -0.698252ZM9.19271 0.115354L6.33971 5.89535L8.13313 6.78059L10.9861 1.00058L9.19271 0.115354Z",
                stroke: "rgba(255,215,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="4.18%"
            bottom="8.35%"
            left="4.19%"
            right="4.26%"
            {...getOverrideProps(overrides, "Vector3847856")}
          ></Icon>
        </View>
      </Flex>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="& Up"
        {...getOverrideProps(overrides, "& Up")}
      ></Text>
    </Flex>
  );
}
