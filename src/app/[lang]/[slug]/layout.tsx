import React from "react";
import { fetchAPI } from "@/app/[lang]/utils/fetch-api";


export default async function LayoutRoute({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <div>{children}</div>
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

  return pageResponse.data.map(
    (page: {
      slug: string;
    }) => ({ slug: page.slug })
  );
}