import React, { Suspense } from "react";
import type { FC } from "react";

import { AsyncData } from "../../components/AsyncData";
import { Comments } from "./Comments";
import { Await, useLoaderData } from "react-router-dom";

export const Dashboard: FC = () => {
  const data = useLoaderData() as any;

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-700">Dashboard (critical)</h1>

      <Suspense fallback={<AsyncData loading height={200} />}>
        <Await resolve={data.dashboard} errorElement={<p>Error loading package location!</p>}>
          {(dashboard) => (
            <AsyncData loading={false} height={200} response={dashboard.payload}>
              <Comments />
            </AsyncData>
          )}
        </Await>
      </Suspense>
    </>
  );
};
