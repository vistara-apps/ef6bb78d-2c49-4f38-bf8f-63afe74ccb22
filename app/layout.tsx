import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "MemoryLink - Turn Moments into Collectibles",
  description: "A frictionless platform for event organizers and creators to mint instant digital collectibles for attendees using HTTP-native payments.",
  openGraph: {
    title: "MemoryLink",
    description: "Turn life moments into collectible memories—no crypto knowledge required",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
