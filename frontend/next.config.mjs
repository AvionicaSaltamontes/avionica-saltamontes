import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
