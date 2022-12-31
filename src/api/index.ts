import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type RequestParams = {
  delay: number;
};

type Response = {
  payload: string;
};

export const api = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5173/" }),
  endpoints: (builder) => ({
    getProjects: builder.query<Response, RequestParams>({
      query: ({ delay }) => {
        return {
          url: "projects",
          params: { delay },
        };
      },
    }),
    getDashboard: builder.query<Response, RequestParams>({
      query: ({ delay }) => {
        return {
          url: "dashboard",
          params: { delay },
        };
      },
    }),
    getComments: builder.query<Response, RequestParams>({
      query: ({ delay }) => {
        return {
          url: "comments",
          params: { delay },
        };
      },
    }),
    getReplies: builder.query<Response, RequestParams>({
      query: ({ delay }) => {
        return {
          url: "replies",
          params: { delay },
        };
      },
    }),
  }),
});

export const { useGetProjectsQuery, useGetDashboardQuery, useGetCommentsQuery, useGetRepliesQuery } = api;
