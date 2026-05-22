import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
 title: "LuxGo VN | Luxury Car Rental & Wedding Cars",

  description:
    "Dịch vụ thuê xe sang, xe cưới và xe tự lái cao cấp tại Việt Nam.",

  openGraph: {
    title: "LuxGo VN",
    description:
      "Dịch vụ thuê xe sang và xe cưới cao cấp tại Việt Nam.",
    url: "https://lux-go-vn.vercel.app/",
    siteName: "LuxGo VN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LuxGo VN",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.variable} ${playfair.variable} bg-white text-zinc-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
