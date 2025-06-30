import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getProjects: builder.query<SlidesDataModel[], void>({
      query: () => 'fetchData.php',
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApi;
