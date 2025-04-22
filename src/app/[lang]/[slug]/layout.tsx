import React from "react";
import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

async function fetchSideMenuData(filter: string) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const options = { headers: { Authorization: `Bearer ${token}` } };

    const sectionResponse = await fetchAPI(
      "/sections",
      { populate: "*" },
      options
    );

    const pageResponse = await fetchAPI(
      "/pages",
      filter
        ? {
            filters: {
              slug: filter,
            },
          }
        : {},
      options
    );

    return {
      pages: pageResponse.data,
      sections: sectionResponse.data,
    };
  } catch (error) {
    console.error(error);
  }
}

interface Section {
  id: number;
  heading: {
    title: string;
    subTitle: string;
    
  };
}

interface Page {
    id: number;
    title: string;
    slug: string;
  
}

interface Data {
  pages: Page[];
  sections: Section[];
}

export default async function LayoutRoute({
  params,
  children,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}) {
  const { slug} = params;
  const { sections, pages } = (await fetchSideMenuData(slug)) as Data;

  return (
    <section className="container p-8 mx-auto space-y-6 sm:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
        <div className="col-span-2">{children}</div>
        
       
        
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/pages`;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const pageResponse = await fetchAPI(
    path,
   
    options
  );

  console.log('pageResponse', pageResponse)
  return pageResponse.data.map(
    (page: {
        slug: string;
        sections: {
          heading: {
            title: string;
            subTitle: string;
          }
    
        }
      
    }) => ({ slug: page.slug })
  );
}