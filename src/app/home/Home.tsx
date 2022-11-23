import React from "react";
import { useLoaderData, defer, Await, useAsyncValue, useAsyncError, Link } from "react-router-dom";

import { useGetCriticalOneQuery } from "../../api/mswApi";

export const loader = async () => {
  const critical1Promise = fetch("/test?text=critical1&delay=250").then((res) => res.json());
  const critical2Promise = fetch("/test?text=critical2&delay=500").then((res) => res.json());
  const lazyResolvedPromise = fetch("/test?text=lazyResolved&delay=100").then((res) => res.json());
  const lazy1Promise = fetch("/test?text=lazy1&delay=500").then((res) => res.json());
  const lazy2Promise = fetch("/test?text=lazy2&delay=1500").then((res) => res.json());
  const lazy3Promise = fetch("/test?text=lazy3&delay=2500").then((res) => res.json());
  const lazyErrorPromise = fetch("/test?text=lazy3&delay=3000").then((res) => {
    throw Error("Oh noo!");
  });

  // parallel fetch
  return defer({
    critical1: await critical1Promise,
    critical2: await critical2Promise,
    lazyResolved: lazyResolvedPromise,
    lazy1: lazy1Promise,
    lazy2: lazy2Promise,
    lazy3: lazy3Promise,
    lazyError: lazyErrorPromise,
  });
};

function RenderAwaitedData() {
  let data = useAsyncValue();
  return <p>{data.text}</p>;
}

function RenderAwaitedError() {
  let error = useAsyncError();
  return (
    <p style={{ color: "red" }}>
      Error (errorElement)!
      <br />
      {error.message} {error.stack}
    </p>
  );
}

export function Home() {
  const data = useLoaderData();

  const { data: criticalOne } = useGetCriticalOneQuery({
    delay: 1000,
  });

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-red-700 p-12">{criticalOne!.payload}</div>
        <div className="bg-red-700 p-12" />
        <div className="bg-red-700 p-12" />
        <div className="bg-red-700 p-12" />
      </div>
      <Link to="page">Link to page</Link>
    </div>
  );
}
