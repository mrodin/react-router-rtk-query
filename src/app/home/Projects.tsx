import type { FC } from "react";
import React from "react";

import { useGetProjectsQuery } from "../../api";
import { AsyncData } from "../../components/AsyncData";

export const Projects: FC = () => {
  const { data, isLoading } = useGetProjectsQuery();

  return <AsyncData loading={isLoading} height={100} response={data?.payload} />;
};
