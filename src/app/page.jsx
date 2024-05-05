import Hero from "@/components/Hero";
import Player from "@/components/Player";
import Albums from "@/components/albums/Albums";
import Blog from "@/components/blog/Blog";
import Events from "@/components/events/Events";
import Newsletter from "@/components/events/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <Newsletter />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
