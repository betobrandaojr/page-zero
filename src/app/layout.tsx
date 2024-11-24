
import Navbar from '@/components/Navbar';
import './globals.css';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        {/* Navbar*/}
        <Navbar />

        {/* Conteúdo principal */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
