import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aboutMeApi: any = createApi({
  reducerPath: "aboutMeApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_LOCAL_STRAPI_BASE_URL}`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_BACKEND_PUBLIC_KEY}`,
    },
  }),
  tagTypes: ["AboutMe"],
  endpoints: (builder) => ({
    getAboutMe: builder.query<any, null>({
      query: () => "about-me",
      providesTags: ["AboutMe"],
    }),
  }),
});

export const { useGetAboutMeQuery } = aboutMeApi;
