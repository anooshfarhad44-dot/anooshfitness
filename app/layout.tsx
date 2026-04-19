import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anoosh Farhad | Certified Fitness Coach & Champion",
  description:
    "Certified fitness coach, weightlifting champion & fitness model. Transforming lives since 2020. 50+ clients worldwide. Get your personalized fitness plan today.",
  icons: [
    { rel: "icon", url: "/logo1.png", type: "image/png" },
    { rel: "shortcut icon", url: "/logo1.png", type: "image/png" },
    { rel: "apple-touch-icon", url: "/logo1.png", type: "image/png" },
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
