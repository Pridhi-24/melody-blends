import rickshawRain from "@/assets/rickshaw-rain.jpg";
import highwayDhaba from "@/assets/highway-dhaba.jpg";
import nh48Truck from "@/assets/nh48-truck.jpg";
import rooftopMehfil from "@/assets/rooftop-mehfil.jpg";

export type Song = { id: number; title: string; hindi: string; artist: string; album: string; duration: string; year: number; genre: string };
export type ScenicPlaylist = { id: string; hindi: string; title: string; subtitle: string; image: string; song: Song; match: string };

export const devanagariNumber = (value: number | string) => String(value).replace(/\d/g, (digit) => "०१२३४५६७८९"[Number(digit)] ?? digit);

export const initialSongs: Song[] = [
  { id: 1, title: "Aaj Jaane Ki Zid Na Karo", hindi: "आज जाने की ज़िद न करो", artist: "Farida Khanum", album: "Mehfil Classics", duration: "7:12", year: 1985, genre: "Ghazal" },
  { id: 2, title: "Gulabi Aankhen", hindi: "गुलाबी आँखें", artist: "Mohammed Rafi", album: "The Train", duration: "3:18", year: 1970, genre: "Bollywood" },
  { id: 3, title: "Iktara", hindi: "इकतारा", artist: "Kavita Seth", album: "Wake Up Sid", duration: "4:13", year: 2009, genre: "Indie" },
  { id: 4, title: "Chaudhary", hindi: "चौधरी", artist: "Mame Khan", album: "Coke Studio", duration: "7:02", year: 2012, genre: "Folk" },
  { id: 5, title: "Khaabon Ke Parinday", hindi: "ख़्वाबों के परिंदे", artist: "Alyssa Mendonsa", album: "Zindagi Na Milegi Dobara", duration: "4:11", year: 2011, genre: "Road Trip" },
  { id: 6, title: "Ranjish Hi Sahi", hindi: "रंजिश ही सही", artist: "Mehdi Hassan", album: "Ghazal Gold", duration: "9:36", year: 1975, genre: "Ghazal" },
  { id: 7, title: "Ilahi", hindi: "इलाही", artist: "Arijit Singh", album: "Yeh Jawaani Hai Deewani", duration: "3:48", year: 2013, genre: "Travel" },
  { id: 8, title: "Bade Achhe Lagte Hain", hindi: "बड़े अच्छे लगते हैं", artist: "Amit Kumar", album: "Balika Badhu", duration: "5:12", year: 1976, genre: "Retro" },
];

export const playlists: ScenicPlaylist[] = [
  { id: "rickshaw", hindi: "रिक्शा वाला", title: "Rickshaw Wala", subtitle: "Monsoon melodies for the long way home", image: rickshawRain, song: initialSongs[2]!, match: "Because you listened to Indie Safar" },
  { id: "dhaba", hindi: "कटिंग चाय", title: "Cutting Chai", subtitle: "Roadside warmth, old friends, endless stories", image: highwayDhaba, song: initialSongs[3]!, match: "Match: Indian Folk" },
  { id: "highway", hindi: "हाईवे के गाने", title: "Highway Ke Gaane", subtitle: "Windows down on NH48", image: nh48Truck, song: initialSongs[4]!, match: "Match: Road Trip Mood" },
  { id: "mehfil", hindi: "छत की महफ़िल", title: "Rooftop Mehfil", subtitle: "Ghazals under a Jaipur moon", image: rooftopMehfil, song: initialSongs[0]!, match: "Because you listened to Mehfil" },
];

export const friends = [
  { name: "Rahul", initials: "RS", activity: "is listening to Cutting Chai", time: "now", color: "bg-primary" },
  { name: "Meera", initials: "MK", activity: "added 3 songs to Monsoon Mood", time: "12m", color: "bg-indigo" },
  { name: "Kabir", initials: "KA", activity: "joined your Blend", time: "1h", color: "bg-terracotta" },
  { name: "Zoya", initials: "ZH", activity: "loved Rooftop Mehfil", time: "3h", color: "bg-teal" },
];
