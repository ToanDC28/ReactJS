import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMusicStore } from "@/stores/useMusicStore";
import { Clock, Play, PlayIcon } from "lucide-react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
const AlbumPage = () => {
  // const params = useParams();
  // console.log(params)
  const { albumId } = useParams();
  const { currentAlbum, fetchAlbumById, isLoading } = useMusicStore();
  useEffect(() => {
    if (albumId) {
      fetchAlbumById(albumId);
    }
  }, [fetchAlbumById, albumId]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="h-full">
      <ScrollArea className="h-full rounded-md">
        {/* Main content */}
        <div className="relative min-h-full">
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#5038a0]/80 via-zinc-900/80 to-zinc-900 pointer-events-none"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10">
            <div className="flex p-6 gap-6 pb-8">
              <img
                src={currentAlbum?.imageUrl}
                alt="Album Image"
                className="w-[240px] h-[240px] shadow-xl rounded"
              />
              <div className="flex flex-col justify-end">
                <p className="text-sm font-medium">Album</p>
                <h1 className="text-7xl font-bold my-4">
                  {currentAlbum?.title}
                </h1>
                <div className="flex items-center gap-2 text-sm text-zinc-100">
                  <span className="font-medium text-white">
                    {currentAlbum?.artist} &middot;{" "}
                  </span>
                  <span>{currentAlbum?.songs.length} songs &middot; </span>
                  <span>{currentAlbum?.releaseYear}</span>
                </div>
              </div>
            </div>
            {/* Play button*/}
            <div className="px-6 pb-4 flex items-center gap-4">
              <Button
                size="icon"
                className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 hover:scale-105 transition-all"
              >
                <PlayIcon className="w-7 h-7 text-black" />
              </Button>
            </div>

            {/* Songs */}
            <div className="bg-black/20 backdrop-blur-sm">
              {/* Table header */}
              <div className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-10 py-2 text-sm text-zinc-400 border-b border-white/5">
                <div>#</div>
                <div>Title</div>
                <div>Released Date</div>
                <div>
                  <Clock className="h-4 w-4" />
                </div>
              </div>

              {/* Table body */}
              <div className="px-6">
                <div className="space-y-2 py-4">
                  {currentAlbum?.songs.map((song, index) => (
                    <div
                      key={song._id}
                      className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 py-2 text-sm text-zinc-400 hover:bg-white/5 rounded-md group cursor-pointer"
                    >
                      <div>
                        <span className="group-hover:hidden">{index + 1}</span>
                        <Play className="w-4 h-4 hidden group-hover:block" />
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src={song.imageUrl}
                          alt={song.title}
                          className="size-10"
                        />
                        <div className="">
                          <div className={"font-medium text-white"}>
                            {song.title}
                          </div>
                          <div>{song.artist}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {song.createdAt.split("T")[0]}
                      </div>
                      <div className="flex items-center">{formatDuration(song.duration)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default AlbumPage;
