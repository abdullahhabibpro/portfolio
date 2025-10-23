import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/app/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '500', '700'], // Added 700 for bolder headings
});

export const metadata = {
  title: 'Abdullah Habib - Full-Stack Developer',
  description: 'Portfolio showcasing innovative web development projects and design expertise.',
  openGraph: {
    title: 'Abdullah Habib',
    description: 'Showcasing innovative web development projects and design expertise.',
    images: ['/abdullah.jpeg'],
    url: 'https://ahabib.site',
  },
  icons: {
    icon: '/abdullah.jpeg',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}