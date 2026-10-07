import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Discover Realtourz drone photography, aerial property imagery, and immersive home tours across the greater Sacramento area."
        />
        <meta
          name="keywords"
          content="drone photography, aerial photography, property photography, home tours, Sacramento photography, real estate imagery"
        />
        <meta name="author" content="Gavin Earley" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta name="theme-color" content="#101010" />
        <link rel="canonical" href="https://realtourz.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Realtourz" />
        <meta property="og:title" content="Realtourz | Drone Photography & Home Tours" />
        <meta
          property="og:description"
          content="Immersive drone photography, aerial property imagery, and home tours across Sacramento."
        />
        <meta property="og:url" content="https://realtourz.com/" />
        <meta
          property="og:image"
          content="https://realtourz.com/dark/assets/imgs/favicon.ico"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Realtourz | Drone Photography & Home Tours" />
        <meta
          name="twitter:description"
          content="Immersive drone photography, aerial property imagery, and home tours across Sacramento."
        />
        <meta name="twitter:image" content="https://realtourz.com/dark/assets/imgs/favicon.ico" />
        <meta
          name="google-site-verification"
          content="KICzyyUF1qS5nMkYNh4AofLJLlqQ7ZlCEvJ_Sdnr9_8"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Realtourz",
              url: "https://realtourz.com/",
              description:
                "Drone photography, aerial property imagery, and immersive home tours across the greater Sacramento area.",
            }),
          }}
        />
        {/* ------ Favicon ------ */}
        <link rel="shortcut icon" href="/dark/assets/imgs/favicon.ico" />
        {/* ------ Google Fonts ------ */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
        {/* ------ bootstrap icons cdn ------ */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
        />
        {/* ------ Plugins ------ */}
        <link rel="stylesheet" href="/dark/assets/css/plugins.css" />
        {/* ------ Core Style Css ------ */}
        <link rel="stylesheet" href="/dark/assets/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
