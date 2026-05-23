import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doge-dev.vercel.app"),
  title: {
    default: "Eduardo Guedes — doge-dev",
    template: "%s · doge-dev",
  },
  description:
    "Eduardo Guedes — software engineer. Open-source contributions, solo OSS initiatives, and VS Code extensions.",
  authors: [{ name: "Eduardo Guedes", url: "https://github.com/Educg550" }],
  openGraph: {
    type: "website",
    title: "Eduardo Guedes — doge-dev",
    description: "Open-source contributions, initiatives, and VS Code extensions.",
    url: "https://doge-dev.vercel.app",
    siteName: "doge-dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Guedes — doge-dev",
    description: "Open-source contributions, initiatives, and VS Code extensions.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#272822",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
