import { axiosInstance } from "@/lib/axios";
import { Album, Song } from "@/types";
import { create } from "zustand";

interface MusicStore {
    albums: Song[];
    songs: Album[];
    isLoading: boolean;
    error: string | null;
    fetchAlbums: () => Promise<void>;
    fetchSongs: () => Promise<void>;
}

export const useMusicStore = create<MusicStore>((set) => ({
    albums: [],
    songs: [],
    isLoading: false,
    error: null,
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
}));