import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, Heart, Home, ListMusic, MessageCircle, Music2, Pause, Play, Search, Share2, Sparkles, UserRound, Users, Volume2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { MelodyProvider, useMelody } from "@/lib/melody-store";
import { devanagariNumber } from "@/lib/melody-data";

const nav = [
  ["/", "Home", Home], ["/search", "Search", Search], ["/playlists", "Playlists", ListMusic],
  ["/blend", "Blend", Sparkles], ["/friends", "Friends", Users], ["/profile", "Profile", UserRound],
] as const;

export function MelodyApp({ children }: { children: ReactNode }) {
  return <MelodyProvider><Shell>{children}</Shell></MelodyProvider>;
}

function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { currentSong, playing, setPlaying, notificationsOpen, setNotificationsOpen } = useMelody();
  const authPage = pathname === "/auth" || pathname === "/onboarding";
  if (authPage) return <main>{children}</main>;
  return (
    <div className="min-h-screen bg-background text-foreground">
<header
  className="sticky top-0 z-50 border-b-4 border-marigold bg-cover bg-center text-cream shadow-xl"
  style={{ backgroundImage: "url('/nav.png')" }}
>
        <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-3 px-4 lg:px-8">
          <Link to="/" className="mr-auto flex items-center gap-2" aria-label="Melody Blends home">
            <img src="/logo.png" alt="Melody Blends logo" className="size-9 rounded-full object-cover" />
            <span className="font-display text-xl font-bold md:text-2xl">Melody Blends</span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {nav.map(([to, label, Icon]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-cream/70 transition hover:bg-cream/10 hover:text-cream" activeProps={{ className: "bg-cream/12 text-marigold" }}><Icon size={15}/>{label}</Link>)}
          </nav>
          <div className="ml-2 flex items-center gap-1 border-l border-cream/20 pl-2">
            {[Heart, MessageCircle, Share2].map((Icon, index) => <button key={index} aria-label={["Likes", "Comments", "Shares"][index]} className="hidden h-9 items-center gap-1 rounded-full px-2 text-xs text-cream/70 transition hover:bg-cream/10 hover:text-marigold sm:flex"><Icon size={16}/>{devanagariNumber([128, 42, 19][index] ?? 0)}</button>)}
            <div className="relative">
              <Button variant="ghost" size="icon" className="text-cream hover:bg-cream/10 hover:text-marigold" onClick={() => setNotificationsOpen((open) => !open)} aria-label="Notifications"><Bell/><span className="absolute right-2 top-1.5 size-2 rounded-full bg-marigold" /></Button>
              <AnimatePresence>{notificationsOpen && <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="absolute right-0 top-12 w-80 rounded-lg border border-border bg-card p-4 text-foreground shadow-2xl">
                <div className="mb-3 flex items-center justify-between"><strong>नई हलचल · Notifications</strong><Button variant="ghost" size="icon" onClick={() => setNotificationsOpen(false)}><X/></Button></div>
                {["Myra joined your Highway Blend", "Meera liked Rooftop Mehfil", "Your Monsoon Mix is ready"].map((item, i) => <div key={item} className="border-t border-border py-3 text-sm"><span className="mr-2 text-primary">●</span>{item}<small className="mt-1 block pl-4 text-muted-foreground">{devanagariNumber(i * 7 + 2)} min ago</small></div>)}
              </motion.div>}</AnimatePresence>
            </div>
          </div>
        </div>
        <div className="relative h-2 truck-border"><div className="absolute inset-x-0 -bottom-1 flex justify-around">{Array.from({length:18}).map((_,i)=><span key={i} className="size-2 rounded-full bg-marigold shadow-[0_0_8px_var(--marigold)] bulb-pulse" style={{animationDelay:`${i*0.13}s`}} />)}</div></div>
      </header>
      <div className="mx-auto min-h-[70vh] max-w-[1500px]">{children}</div>
      <div className="fixed bottom-20 left-1/2 z-40 flex w-[min(92%,680px)] -translate-x-1/2 items-center gap-3 rounded-lg border border-surface-line bg-surface-glass-strong p-2.5 text-cream shadow-2xl backdrop-blur-2xl md:bottom-5">
        <div className="grid size-10 shrink-0 place-items-center rounded-md bg-terracotta font-display font-bold">म</div>
        <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{currentSong.title}</p><p className="truncate text-xs text-cream/60">{currentSong.artist}</p><div className="mt-1 h-1 overflow-hidden rounded-full bg-cream/15"><motion.div className="h-full bg-marigold" animate={{width:playing?["12%","74%"]:"28%"}} transition={{duration:18,repeat:Infinity,ease:"linear"}} /></div></div>
        <Button variant="glass" size="icon" onClick={()=>setPlaying((value)=>!value)} aria-label={playing?"Pause":"Play"}>{playing?<Pause/>:<Play/>}</Button><Volume2 className="hidden text-cream/60 sm:block" size={18}/>
      </div>
      <nav className="fixed inset-x-0 bottom-0 z-50 flex h-16 items-center justify-around border-t border-border bg-card px-2 md:hidden">{nav.slice(0,5).map(([to,label,Icon])=><Link key={to} to={to} className="flex min-w-12 flex-col items-center gap-1 text-[10px] text-muted-foreground" activeProps={{className:"text-terracotta"}}><Icon size={19}/>{label}</Link>)}</nav>
      <footer className="star-field mt-16 bg-indigo px-5 pb-32 pt-16 text-cream md:pb-28"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row"><div><p className="font-display text-3xl font-bold">Melody Blends</p><p className="mt-2 text-sm text-cream/60">Made with ♪ in India</p></div><div className="flex gap-8 text-sm"><a href="#about">About</a><a href="mailto:hello@melodyblends.local">Contact</a><a href="#socials">Socials</a></div></div></footer>
    </div>
  );
}