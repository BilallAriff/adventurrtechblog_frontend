import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type SubCategory = {
  data: {
    id: number | string;
    data: Array<any>;
  };
  meta: Object;
};

export const subCategoryApi = createApi({
  reducerPath: "subCategoryApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_LOCAL_STRAPI_BASE_URL}`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_BACKEND_PUBLIC_KEY}`,
    },
  }),
  tagTypes: ["SubCategories"],
  endpoints: (builder) => ({
    getSubCategories: builder.query<SubCategory, null>({
      query: () => "sub-categories",
      providesTags: ["SubCategories"],
    }),
  }),
});

export const { useGetSubCategoriesQuery } = subCategoryApi;
