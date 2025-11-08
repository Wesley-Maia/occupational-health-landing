import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dra. Maria Silva - Medicina do Trabalho | Especialista em Saúde Ocupacional",
  description: "Médica especialista em Medicina do Trabalho. Exames ocupacionais, PCMSO, perícias médicas e consultoria empresarial em Montes Claros - MG.",
  keywords: "medicina do trabalho, exames ocupacionais, PCMSO, ASO, perícia médica, saúde ocupacional, Montes Claros",
  authors: [{ name: "Dra. Maria Silva" }],
  openGraph: {
    title: "Dra. Maria Silva - Medicina do Trabalho",
    description: "Especialista em Medicina do Trabalho com 15+ anos de experiência",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
