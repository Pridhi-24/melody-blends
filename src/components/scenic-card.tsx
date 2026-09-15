import { Heart, Pause, Play, Plus, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useMelody } from "@/lib/melody-store";
import type { ScenicPlaylist } from "@/lib/melody-data";
import { devanagariNumber } from "@/lib/melody-data";

export function ScenicCard({ playlist, priority = false }: { playlist: ScenicPlaylist; priority?: boolean }) {
  const { currentSong, setCurrentSong, playing, setPlaying, liked, toggleLike } = useMelody();
  const active = currentSong.id === playlist.song.id && playing;
  const play = () => { setCurrentSong(playlist.song); setPlaying(!active); };
  return <motion.article whileHover={{y:-4}} transition={{duration:.22}} className="group relative min-h-[420px] overflow-hidden rounded-lg bg-indigo shadow-2xl md:min-h-[500px]">
    <img src={playlist.image} alt={`${playlist.title} illustrated Indian music scene`} width={1536} height={900} loading={priority?"eager":"lazy"} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.16_0.055_255/88%)_0%,oklch(0.16_0.055_255/25%)_60%,transparent_100%),linear-gradient(0deg,oklch(0.12_0.05_255/85%)_0%,transparent_50%)]" />
    <div className="relative flex min-h-[420px] flex-col justify-between p-6 text-cream md:min-h-[500px] md:p-10">
      <div className="max-w-xl pt-8"><span className="inline-flex rounded-sm border border-marigold/60 bg-indigo/55 px-3 py-1 text-xs uppercase text-marigold backdrop-blur">{playlist.match}</span><h2 className="mt-4 font-display text-5xl font-bold leading-none md:text-7xl">{playlist.hindi}</h2><p className="mt-2 text-xl font-semibold">{playlist.title}</p><p className="mt-2 text-cream/70">{playlist.subtitle}</p></div>
      <div className="rounded-lg border border-surface-line bg-surface-glass p-3 backdrop-blur-xl md:p-4"><div className="flex items-center gap-3"><div className="grid size-11 shrink-0 place-items-center rounded-md bg-terracotta font-display text-xl">♪</div><div className="min-w-0 flex-1"><p className="truncate font-semibold">{playlist.song.hindi}</p><p className="truncate text-xs text-cream/60">{playlist.song.artist} · {devanagariNumber(playlist.song.duration)}</p></div><Button variant="glass" size="icon" onClick={()=>toggleLike(playlist.song.id)} aria-label="Like song"><Heart className={liked.includes(playlist.song.id)?"fill-marigold text-marigold":""}/></Button><Button variant="warm" size="icon" onClick={play} aria-label={active?"Pause":"Play"}>{active?<Pause/>:<Play/>}</Button><Button variant="glass" size="icon" className="hidden sm:inline-flex" aria-label="Add to playlist"><Plus/></Button><Button variant="glass" size="icon" className="hidden sm:inline-flex" aria-label="Share"><Share2/></Button></div><div className="mt-3 h-1 overflow-hidden rounded-full bg-cream/20"><motion.div className="h-full bg-marigold" animate={{width:active?["10%","80%"]:"22%"}} transition={{duration:16,repeat:Infinity,ease:"linear"}} /></div></div>
    </div>
  </motion.article>;
}
