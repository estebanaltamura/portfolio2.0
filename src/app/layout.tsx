import type { Metadata } from 'next';
import { Inter, Open_Sans, Russo_One } from 'next/font/google';
import Header from './_noPages/views/header/Header';
import Footer from './_noPages/views/footer/Footer';
import './global.css';

const openSansFont = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-openSans',
});

const russoFont = Russo_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-russoFont',
});

const interFont = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-interFont',
});

export const metadata: Metadata = {
  title: 'Portfolio Andrés Altamura',
  description:
    'Portafolio de Esteban Andrés Altamura. Desarrollador frontend Next, React, Typescript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/png' href='/favicon.png' />
      </head>
      <body
        className={`${openSansFont.variable} ${russoFont.variable} ${interFont.variable}`}
      >
        {/* <header>
          <Header />
        </header> */}

        <main>{children}</main>
        {/* <footer>
          <Footer />
        </footer> */}
      </body>
    </html>
  );
}

//Usar variables css en global.css en vez de un config y styles. Body tambien
