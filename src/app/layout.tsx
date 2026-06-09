import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LiveChat } from "@/components/LiveChat";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Supreme Systems Solution | Switching Transformers & Power Inductors",
  description: "Supreme Systems Solution specializes in high-quality switching transformers, power inductors, current transformers, common mode chokes, and custom coils based in Gurugram, India.",
  keywords: "Switching Transformers, Power Inductors, Current Transformers, Common Mode Chokes, Custom Coils, Magnetic Components, Gurugram Manufacturer",
  openGraph: {
    title: "Supreme Systems Solution | Custom Magnetic Components",
    description: "Leading manufacturer of custom power transformers, inductors, and noise filters for global power electronic markets.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-light-bg text-slate-800 dark:bg-dark-bg dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <WhatsAppButton />
          <LiveChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
