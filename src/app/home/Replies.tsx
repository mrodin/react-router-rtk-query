import React, { Suspense } from "react";
import type { FC } from "react";

import { AsyncData } from "../../components/AsyncData";
import { Await, useLoaderData } from "react-router-dom";
import { Comments } from "./Comments";

export const Replies: FC = () => {
  const data = useLoaderData() as any;

  return (
    <>
      <h3 className="self-start text-2xl font-bold text-gray-700">Replies (lazy)</h3>

      <Suspense fallback={<AsyncData loading height={100} />}>
        <Await resolve={data.replies} errorElement={<p>Error loading package location!</p>}>
          {(replies) => <AsyncData loading={false} height={100} response={replies.payload} />}
        </Await>
      </Suspense>
    </>
  );
};
