import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5173/" }),
  endpoints: (builder) => ({
    getTestData: builder.query<string, string>({
      query: ({ text, delay }) => {
        return {
          url: "test",
          params: { text, delay },
        };
      },
    }),
  }),
});

export const { useGetTestDataQuery } = testApi;
