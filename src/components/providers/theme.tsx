'use client';

import { ThemeProvider as NextThemeProviders } from 'next-themes';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProviders attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemeProviders>
  );
}
