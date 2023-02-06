import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SchoolManagementApi = createApi({
  reducerPath: "schoolManagementApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    prepareHeaders: (header, { getState }) => {
      const states = getState();
      console.log(states);
      const {
        auth: { token },
      } = states;
      token && header.set("x-access-token", token);
      return header;
    },
  }),
  tagTypes: ["getClass"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `login`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `signup`,
        method: "POST",
        body: data,
      }),
    }),

    verifyEmail: builder.query({
      query: (data) => ({
        url: `/api/verify/${data}`,
        method: "GET",
      }),
    }),

    addClass: builder.mutation({
      query: (data) => ({
        url: `/add-class`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getClass"],
    }),

    getClass: builder.query({
      query: (data) => ({
        url: `/school/class`,
        method: "GET",
      }),
      providesTags: ["getClass"],
    }),

    removeClass: builder.mutation({
      query: (id) => ({
        url: `/school/class/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getClass"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyEmailQuery,
  useAddClassMutation,
  useGetClassQuery,
  useRemoveClassMutation,
} = SchoolManagementApi;
// https://dummyjson.com/
