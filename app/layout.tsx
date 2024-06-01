import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Generators Demo",
  description: "A better way to compose RSC's",
};
export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen overflow-hidden *:mx-auto h-screen flex flex-col justify-between text-5xl">
        <div></div>
      {children}
        <div className="text-xl mb-1 text-gray-700"><Link href="https://github.com/smrdotgg/generators">Github</Link>&nbsp;&nbsp;⬤&nbsp;&nbsp;(Heavily) Inspired by <Link href="https://youtu.be/fMl3QY2gcHo?t=392">Theo Browne</Link>&nbsp;&nbsp;⬤&nbsp;&nbsp;<Link href="https://x.com/smrdotgg">By Semere</Link> </div>
      </body>
    </html>
  );
}
