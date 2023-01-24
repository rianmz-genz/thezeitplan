import Head from "next/head";
import React, { FC, ReactNode } from "react";
import Navbar from "../organisms/Navbar";
interface PageTemplateProps {
  children: ReactNode;
  title?: string;
}
const PageTemplate = ({
  children,
  title = "The Zeitplan",
}: PageTemplateProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content="https://thezeitplan.vercel.app" />
        <meta name="title" content="The Zeitplan" />
        <meta
          name="description"
          content="The Zeitplan is a Company profile ui design slicing by Adrian Aji Septa"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="The Zeitplan" />
        <meta property="og:title" content="The Zeitplan" />
        <meta
          property="og:description"
          content="The Zeitplan is the website who slicinged by Adrian Aji Septa"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/brand.svg" />
      </Head>
      <main className="w-full h-fit min-h-screen bg-background ">
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default PageTemplate;
