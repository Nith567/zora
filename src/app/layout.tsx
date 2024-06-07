import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Head from "next/head";
import { Providers } from "./providers";
const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "BASED",
  applicationName: "BASED",
  generator: "Next.js",
  keywords: [
    "memetic, memes, based, onchain, nft, nfts, mint, mints, open edition, digital, art, blockchain, crypto, web3",
  ],

  description:
    "The digital world is memetic. Join us for 48 hours of Open Edition mints with the most based onchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
              <Providers>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={ibm.className}>

        {children}
        <Footer />
    
      </body>
      </Providers>
    </html>
  );
}
