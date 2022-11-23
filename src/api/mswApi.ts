import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type RequestParams = {
  delay: number;
};

type Response = {
  payload: string;
};

export const testApi = createApi({
  reducerPath: "successApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5173/" }),
  endpoints: (builder) => ({
    getCriticalOne: builder.query<Response, RequestParams>({
      query: ({ delay }) => {
        return {
          url: "success",
          params: { delay },
        };
      },
    }),
  }),
});

export const { useGetCriticalOneQuery } = testApi;
