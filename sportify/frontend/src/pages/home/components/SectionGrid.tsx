import SectionGridSkeleton from "@/components/skeletons/SectionGridSkeleton";
import { Button } from "@/components/ui/button";
import { Song } from "@/types";
import PlayButton from "./PlayButton";

type Props = {
  title: string;
  songs: Song[];
  isLoading: boolean;
};

const SectionGrid = ({ title, songs, isLoading }: Props) => {
  if (isLoading) return <SectionGridSkeleton />;
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
        <Button
          variant={"link"}
          className="text-sm text-zinc-400 hover:text-white"
        >
          Show All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {
            songs.map((song, index) => (
                <div key={index} className="bg-zinc-800/40 rounded-md hover:bg-zinc-700/40 group transition-colors cursor-pointer">
                    <div className="relative mb-4">
                        <div className="aspect-square rounded-md shadow-lg overflow-hidden">
                            <img src={song.imageUrl} alt={song.title} className="size-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            {/* TODO: Add play button*/}
                        </div>
                        <PlayButton songs={songs} index={index}/>
                    </div>
                    <h3 className="font-medium mb-2 truncate">
                        {song.title}
                    </h3>
                    <p className="text-sm text-zinc-400 truncate">
                        {song.artist}
                    </p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default SectionGrid;
