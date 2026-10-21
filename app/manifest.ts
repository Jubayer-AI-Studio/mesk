import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "মেশক প্রকাশন — মুহাম্মদ যাইনুল আবিদীন",
    short_name: "মেশক প্রকাশন",
    description: "মেশক প্রকাশন ও মাওলানা মুহাম্মদ যাইনুল আবিদীনের অফিশিয়াল গ্রন্থশালা।",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F1E7",
    theme_color: "#3d200f",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
