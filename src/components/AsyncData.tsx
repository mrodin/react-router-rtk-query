import React, { FC, ReactNode } from "react";

import { Spinner } from "./Spinner";

type AsyncDataProps = {
  loading: boolean;
  children?: ReactNode;
  height?: number;
  response?: string;
};

export const AsyncData: FC<AsyncDataProps> = ({ children, loading, height, response }) => {
  if (loading) {
    return (
      <div
        className="flex w-full flex-grow flex-col items-center justify-center rounded border-4 border-dashed border-gray-400 bg-white"
        style={{ minHeight: height }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div
      className="flex w-full flex-grow flex-col items-center justify-center rounded border-4 border-dashed border-gray-400 bg-green-200 p-8"
      style={{ minHeight: height }}
    >
      {response && (
        <div className="flex flex-col justify-center text-xl" style={{ height: height }}>
          {response}
        </div>
      )}
      {children}
    </div>
  );
};
