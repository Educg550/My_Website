import type { Extension } from "./types";

const URL = "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery";
const API_VERSION = "3.0-preview.1";

type RawExt = {
  publisher: { publisherName: string };
  extensionName: string;
  displayName: string;
  shortDescription: string;
  versions: Array<{ version: string }>;
  statistics: Array<{ statisticName: string; value: number }>;
};

function statValue(stats: RawExt["statistics"], name: string): number {
  return stats.find((s) => s.statisticName === name)?.value ?? 0;
}

export async function getPublisherExtensions(publisher: string): Promise<Extension[]> {
  try {
    const res = await fetch(`${URL}?api-version=${API_VERSION}`, {
      method: "POST",
      headers: {
        Accept: `application/json;api-version=${API_VERSION}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filters: [
          {
            criteria: [
              { filterType: 8, value: "Microsoft.VisualStudio.Code" },
              { filterType: 10, value: publisher },
            ],
            pageNumber: 1,
            pageSize: 50,
            sortBy: 4,
            sortOrder: 0,
          },
        ],
        assetTypes: [],
        flags: 914,
      }),
      next: { revalidate: 21600, tags: [`vsx-${publisher}`] },
    });
    if (!res.ok) return [];
    const json = (await res.json()) as { results?: Array<{ extensions?: RawExt[] }> };
    const rawList = json.results?.[0]?.extensions ?? [];
    const wanted = publisher.toLowerCase();
    return rawList
      .filter((r) => r.publisher.publisherName.toLowerCase() === wanted)
      .map<Extension>((r) => {
        const id = `${r.publisher.publisherName}.${r.extensionName}`;
        return {
          id,
          displayName: r.displayName,
          shortDescription: r.shortDescription ?? "",
          version: r.versions[0]?.version ?? "0.0.0",
          installs: statValue(r.statistics, "install"),
          rating: statValue(r.statistics, "averagerating"),
          ratingCount: statValue(r.statistics, "ratingcount"),
          url: `https://marketplace.visualstudio.com/items?itemName=${id}`,
        };
      })
      .sort((a, b) => b.installs - a.installs);
  } catch {
    return [];
  }
}
