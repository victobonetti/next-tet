'use client';

import Script from 'next/script';

export default function DarkModeScript() {
  return (
    <Script id="dark-mode-script" strategy="beforeInteractive">
      {`
        (function() {
          if (localStorage.getItem('darkMode') === 'true' ||
              (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          }
        })();
      `}
    </Script>
  );
} 