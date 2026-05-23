import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Contributions } from "@/components/sections/contributions";
import { Extensions } from "@/components/sections/extensions";
import { Hero } from "@/components/sections/hero";
import { Osi } from "@/components/sections/osi";
import { Stack } from "@/components/sections/stack";
import { StatsSection } from "@/components/sections/stats";
import { Footer } from "@/components/ui/footer";
import { Mesh } from "@/components/ui/mesh";
import { Nav } from "@/components/ui/nav";
import featured from "@/data/featured.json";
import { getContributedUpstreams, getOsiRepos, getStats } from "@/lib/github";

export default async function Home() {
  const [upstreams, osi] = await Promise.all([
    getContributedUpstreams(),
    getOsiRepos(featured.slugs),
  ]);
  const stats = await getStats(upstreams, osi.featured, osi.pinned);

  return (
    <>
      <Mesh />
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Stack />
        <Contributions />
        <Osi />
        <Extensions />
        <StatsSection stats={stats} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
