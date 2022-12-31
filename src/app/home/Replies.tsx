import React from "react";
import type { FC } from "react";

import { useGetRepliesQuery } from "../../api";
import { AsyncData } from "../../components/AsyncData";

export const Replies: FC = () => {
  const { data, isLoading } = useGetRepliesQuery({ delay: 2500 });

  return (
    <>
      <h3 className="self-start text-2xl font-bold text-gray-700">Replies (lazy)</h3>
      <AsyncData loading={isLoading} height={100} response={data?.payload} />
    </>
  );
};
