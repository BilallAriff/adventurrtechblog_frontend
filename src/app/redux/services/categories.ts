import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Category = {
  data: {
    id: number | string;
    data: Array<any>;
  };
  meta: Object;
};

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_LOCAL_STRAPI_BASE_URL}`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_BACKEND_PUBLIC_KEY}`,
    },
  }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    getCategories: builder.query<any, null>({
      query: () => "categories",
      providesTags: ["Categories"],
    }),
    // getCategoryBySlug: builder.query<any, { slug: string }>({
    //   query: ({ slug }) => `category/${slug}`,
    // }),
    getAllDataByCategorySlug: builder.query({
      query: (slug) => ({
        url: `categories?populate=%2A&[slug][$eq]=${slug}`,
      }),
    }),
    getAllDataByCategoryId: builder.query<any, { id: number | string }>({
      query: ({ id }) => `categories/${id}?populate=%2A`,
    }),
    getCategoryById: builder.query<any, { id: string }>({
      query: ({ id }) => `categories/${id}`,
    }),
    addNewCategory: builder.mutation({
      query: (payload) => ({
        url: "/categories",
        method: "POST",
        body: payload,
        // headers: {
        //   "Content-type": "application/json; charset=UTF-8",
        // },
        formData: true,
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteCategoryById: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
    updateCategory: builder.mutation({
      query: (payload) => ({
        url: `/categories`,
        method: "PUT",
        body: payload,
        // headers: {
        //   "Content-type": "application/json; charset=UTF-8",
        // },
        formData: true,
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  // useGetCategoryBySlugQuery,
  useGetAllDataByCategorySlugQuery,
  useGetAllDataByCategoryIdQuery,
  useGetCategoryByIdQuery,
  useAddNewCategoryMutation,
  useDeleteCategoryByIdMutation,
  useUpdateCategoryMutation,
} = categoryApi;
