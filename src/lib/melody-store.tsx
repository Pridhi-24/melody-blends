import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { initialSongs, type Song } from "./melody-data";

type Store = {
  songs: Song[];
  setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
  currentSong: Song;
  setCurrentSong: (song: Song) => void;
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  liked: number[];
  toggleLike: (id: number) => void;
  notificationsOpen: boolean;
  setNotificationsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MelodyContext = createContext<Store | undefined>(undefined);

export function MelodyProvider({ children }: { children: ReactNode }) {
  const [songs, setSongs] = useState(initialSongs);
  const [currentSong, setCurrentSong] = useState(initialSongs[0] ?? initialSongs[1]);
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState<number[]>([2, 4]);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  if (!currentSong) return null;
  const value = useMemo(() => ({ songs, setSongs, currentSong, setCurrentSong, playing, setPlaying, liked, toggleLike: (id: number) => setLiked((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]), notificationsOpen, setNotificationsOpen }), [songs, currentSong, playing, liked, notificationsOpen]);
  return <MelodyContext.Provider value={value}>{children}</MelodyContext.Provider>;
}

export function useMelody() {
  const context = useContext(MelodyContext);
  if (!context) throw new Error("useMelody must be used inside MelodyProvider");
  return context;
}
