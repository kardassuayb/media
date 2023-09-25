import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
  reducerPath: "albums", // required
  baseQuery: fetchBaseQuery({
    // required
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    // required
    return {
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export { albumsApi };
