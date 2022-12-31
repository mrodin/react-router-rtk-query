import React from "react";
import type { FC } from "react";

import { useGetDashboardQuery } from "../../api";
import { AsyncData } from "../../components/AsyncData";
import { Comments } from "./Comments";

export const Dashboard: FC = () => {
  const { data, isLoading } = useGetDashboardQuery({ delay: 1000 });

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-700">Dashboard (critical)</h1>
      <AsyncData loading={isLoading} height={200} response={data?.payload}>
        <Comments />
      </AsyncData>
    </>
  );
};
