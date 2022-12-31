import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Response = {
  payload: string;
};

export const api = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5173/" }),
  endpoints: (builder) => ({
    getProjects: builder.query<Response, void>({
      query: () => {
        return {
          url: "projects",
        };
      },
    }),
    getDashboard: builder.query<Response, void>({
      query: () => {
        return {
          url: "dashboard",
        };
      },
    }),
    getComments: builder.query<Response, void>({
      query: () => {
        return {
          url: "comments",
        };
      },
    }),
    getReplies: builder.query<Response, void>({
      query: () => {
        return {
          url: "replies",
        };
      },
    }),
  }),
});

export const { useGetProjectsQuery, useGetDashboardQuery, useGetCommentsQuery, useGetRepliesQuery } = api;
