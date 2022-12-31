import React from "react";
import type { FC } from "react";

import { useGetCommentsQuery } from "../../api";
import { AsyncData } from "../../components/AsyncData";
import { Replies } from "./Replies";

export const Comments: FC = () => {
  const { data, isLoading } = useGetCommentsQuery({ delay: 1500 });

  return (
    <>
      <h2 className="self-start text-2xl font-bold text-gray-700">Comments (lazy)</h2>
      <AsyncData loading={isLoading} height={200} response={data?.payload}>
        <Replies />
      </AsyncData>
    </>
  );
};
