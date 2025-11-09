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
  title: 'Abdullah Habib - Full-Stack Developer | React, Next.js & MERN Specialist',
  description:
    'Abdullah Habib is a Full-Stack Developer specializing in React, Next.js, and MERN stack development. Explore a modern portfolio showcasing responsive web applications, clean UI design, and high-performance coding projects.',
  keywords: [
    'Abdullah Habib',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'MERN Stack',
    'Frontend Developer',
    'Web Developer Portfolio',
    'JavaScript Developer',
    'UI UX Design',
    'Modern Web Development'
  ],
  openGraph: {
    title: 'Abdullah Habib - Full-Stack Developer',
    description:
      'Explore Abdullah Habib’s portfolio featuring React, Next.js, and MERN stack projects with a focus on performance, clean design, and innovation.',
    images: ['/abdullahhabib.jpeg'],
    url: 'https://ahabib.site',
  },
  icons: {
    icon: '/abdullahhabib.jpeg',
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