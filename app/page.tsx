import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Contributions } from "@/components/sections/contributions";
import { Hero } from "@/components/sections/hero";
import { Osi } from "@/components/sections/osi";
import { Stack } from "@/components/sections/stack";
import { StatsSection } from "@/components/sections/stats";
import { Footer } from "@/components/ui/footer";
import { Mesh } from "@/components/ui/mesh";
import { Nav } from "@/components/ui/nav";
import featured from "@/data/featured.json";
import { getContributedUpstreams, getFeaturedRepos, getPinnedRepos, getStats } from "@/lib/github";

export default async function Home() {
  const [upstreams, featuredRepos, allPinned] = await Promise.all([
    getContributedUpstreams(),
    getFeaturedRepos(featured.slugs),
    getPinnedRepos(),
  ]);
  const dedupe = new Set(
    [...featured.slugs, ...featured.extensions.map((e) => e.repoSlug)].map((s) => s.toLowerCase()),
  );
  const pinned = allPinned.filter((p) => !dedupe.has(p.slug.toLowerCase()));
  const stats = await getStats(upstreams, featuredRepos, pinned);

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
        <StatsSection stats={stats} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
