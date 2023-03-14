import type { FC } from "react";
import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

import { AsyncData } from "../../components/AsyncData";

export const Projects: FC = () => {
  const data = useLoaderData() as any;

  return (
    <Suspense fallback={<AsyncData loading height={100} />}>
      <Await resolve={data.projects} errorElement={<p>Error loading package location!</p>}>
        {(projects) => <AsyncData loading={false} height={100} response={projects.payload} />}
      </Await>
    </Suspense>
  );
};
