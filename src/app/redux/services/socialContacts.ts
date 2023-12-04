import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type SubCategory = {
  data: {
    id: number | string;
    data: Array<any>;
  };
  meta: Object;
};

export const socialContactsApi: any = createApi({
  reducerPath: "socialContactsApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_LOCAL_STRAPI_BASE_URL}`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_BACKEND_PUBLIC_KEY}`,
    },
  }),
  tagTypes: ["SocialContacts"],
  endpoints: (builder) => ({
    getSocialContacts: builder.query<any, null>({
      query: () => "social-contacts",
      providesTags: ["SocialContacts"],
    }),
  }),
});

export const { useGetSocialContactsQuery } = socialContactsApi;
