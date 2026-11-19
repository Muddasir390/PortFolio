import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({ variable: "--font-sans-src", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono-src", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muddasir Amjad — Senior Software Engineer",
  description:
    "Portfolio of Muddasir Amjad, Senior Software Engineer with 6+ years building web and mobile apps with React, Vue, React Native and Node.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${sans.variable} ${mono.variable} antialiased`}>
      <head>
        {/* Light is the default; a visitor's saved choice wins. Runs before first paint to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=(t==="dark"||t==="light")?t:"light"}catch(e){}})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
