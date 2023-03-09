import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spotify.com/v1'
    }),
    endpoints: (builder) => ({
        getAlbums: builder.query({
            query: (args) => ({
                url: `/albums?ids=${args.albums}`,
                headers: {
                    Authorization: `Bearer ${args.token}`
                }
            })  
        }),
        getPlaylists: builder.query({
            query: (token) => ({
                url: '/me/playlists',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })  
        }),
        getPlaylist: builder.query({
            query: (args) => ({
                url: `playlists/${args.id}`,
                headers: {
                    Authorization: `Bearer ${args.token}`
                }
            })
        }),
        getInfoUser: builder.query({
            query: (token) => ({
                url: '/me',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        getTracksAlbums: builder.query({
            query: (args) => ({
                url: `albums/${args.id}/tracks?limit=50`,
                headers: {
                    Authorization: `Bearer ${args.token}`
                }
            })
        }),
        getTracksPlaylists: builder.query({
            query: (args) => ({
                url: `playlists/${args.id}/tracks?limit=100`,
                headers: {
                    Authorization: `Bearer ${args.token}`
                }
            })
        }),
        getTracksFavorites: builder.query({
            query: (token) => ({
                url: `me/tracks?limit=50&offset=0`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        putTracksFavorites: builder.mutation({
            query: (args) => ({
                url: `me/tracks?ids=${args.id}`,
                method:'PUT',
                headers: {
                    Authorization: `Bearer ${args.token}`
                }
            })
        }),
        deleteTracksFavorites: builder.mutation({
            query: (args) => ({
                url: `me/tracks?ids=${args.id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${args.token}`
                }
            })
        })
    })
})

export const { useGetAlbumsQuery, useGetPlaylistsQuery, useGetPlaylistQuery, useGetInfoUserQuery,
    useGetTracksAlbumsQuery, useGetTracksPlaylistsQuery, useGetTracksFavoritesQuery, 
    usePutTracksFavoritesMutation, useDeleteTracksFavoritesMutation} = spotifyApi;