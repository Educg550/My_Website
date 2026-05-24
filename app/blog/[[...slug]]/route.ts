export const dynamic = "force-static";

export async function GET() {
  return new Response("Gone. The blog has been retired.", {
    status: 410,
    headers: { "Content-Type": "text/plain" },
  });
}
