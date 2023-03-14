import React, { Suspense } from "react";
import type { FC } from "react";

import { AsyncData } from "../../components/AsyncData";
import { Replies } from "./Replies";
import { Await, useLoaderData } from "react-router-dom";

export const Comments: FC = () => {
  const data = useLoaderData() as any;

  return (
    <>
      <h2 className="self-start text-2xl font-bold text-gray-700">Comments (lazy)</h2>

      <Suspense fallback={<AsyncData loading height={200} />}>
        <Await resolve={data.comments} errorElement={<p>Error loading package location!</p>}>
          {(comments) => (
            <AsyncData loading={false} height={200} response={comments.payload}>
              <Replies />
            </AsyncData>
          )}
        </Await>
      </Suspense>
    </>
  );
};
