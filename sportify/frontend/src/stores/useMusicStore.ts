import { axiosInstance } from "@/lib/axios";
import { Album, Song } from "@/types";
import { create } from "zustand";

interface MusicStore {
    albums: Album[];
    songs: Song[];
    currentAlbum: Album | null;
    isLoading: boolean;
    error: string | null;
    featuredSong: Song[];
    madeForYou: Song[];
    trendingSongs: Song[];
    fetchAlbums: () => Promise<void>;
    fetchSongs: () => Promise<void>;
    fetchAlbumById: (id: string) => Promise<void>;
    fetchFeaturedSong: () => Promise<void>;
    fetchMadeForYou: () => Promise<void>;
    fetchTrendingSongs: () => Promise<void>;
}

export const useMusicStore = create<MusicStore>((set) => ({
    albums: [],
    songs: [],
    isLoading: false,
    error: null,
    currentAlbum: null,
    featuredSong: [],
    madeForYou: [],
    trendingSongs: [],
    fetchAlbums: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get("/albums");
            const data = await response.data;
            set({ albums: data });
        } catch (error:any) {
            set({ error: error.response.data.message });
            console.log("Error in fetchAlbums: ", error);
        }finally{
            set({ isLoading: false });
        }
    },
    fetchSongs: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get("/songs");
            const data = await response.data;
            set({ songs: data });
        } catch (error:any) {
            set({ error: error.response.data.message });
            console.log("Error in fetchSongs: ", error);
        }finally{
            set({ isLoading: false });
        }
    },
    fetchAlbumById: async (id: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get(`/albums/${id}`);
            const data = await response.data;
            set({ currentAlbum: data });
        } catch (error:any) {
            set({ error: error.response.data.message });
            console.log("Error in fetchAlbumById: ", error);
        }finally{
            set({ isLoading: false });
        }
    },
    fetchFeaturedSong: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get("/songs/feature");
            const data = await response.data;
            set({ featuredSong: data });
        } catch (error:any) {
            set({ error: error.response.data.message });
            console.log("Error in fetchFeaturedSong: ", error);
        }finally{
            set({ isLoading: false });
        }
    },
    fetchMadeForYou: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get("/songs/made-for-you");
            const data = await response.data;
            set({ madeForYou: data });
        } catch (error:any) {
            set({ error: error.response.data.message });
            console.log("Error in fetchMadeForYou: ", error);
        }finally{
            set({ isLoading: false });
        }
    },
    fetchTrendingSongs: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.get("/songs/trending");
            const data = await response.data;
            set({ trendingSongs: data });
        } catch (error:any) {
            set({ error: error.response.data.message });
            console.log("Error in fetchTrendingSongs: ", error);
        }finally{
            set({ isLoading: false });
        }
    },
}));