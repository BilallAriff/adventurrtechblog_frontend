import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Blog = {
  data: Array<any>;
  meta: Object;
};

export const blogApi = createApi({
  reducerPath: "blogApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_BACKEND_PUBLIC_KEY}`,
    },
  }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    getBlogs: builder.query<Blog, null>({
      query: () => "blogs?populate=%2A",
      providesTags: ["Blogs"],
    }),
    getBlogBySlug: builder.query({
      query: (slug) => ({
        url: `blogs?populate=%2A&[slug][$eq]=${slug}`,
      }),
    }),
    getFeaturedBlogs: builder.query({
      query: () => ({
        url: `blogs?filters%5Bfeatured%5D=true&fields[0]=title&fields[1]=shortDescription&populate=featuredCoverImage`,
      }),
    }),
    getCategoryById: builder.query<Blog, { id: string }>({
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
      invalidatesTags: ["Blogs"],
    }),
    deleteCategoryById: builder.mutation<Blog, { id: string }>({
      query: ({ id }) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blogs"],
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
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogBySlugQuery,
  useGetFeaturedBlogsQuery,
  // useGetCategoryByIdQuery,
  // useAddNewCategoryMutation,
  // useDeleteCategoryByIdMutation,
  // useUpdateCategoryMutation,
} = blogApi;
