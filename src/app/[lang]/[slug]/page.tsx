import { fetchAPI } from '@/app/[lang]/utils/fetch-api';
import type { Metadata } from 'next';
import PageSections from '../components/pageSections';

const FALLBACK_SEO = {
    title: "Talent strategies",
    description: "HR - Alejandra Espinosa",
}
async function getInfoBySlug(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/pages`;
    const urlParamsObject = {
        filters: { slug },
        populate: {
            sections: { populate: '*' },
        },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;
}

async function getMetaData(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/pages`;
    const urlParamsObject = {
        filters: { slug },
        populate: { seo_data: { populate: '*' } },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response.data;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = params;
    const meta = await getMetaData(slug);
    const metadata = meta[0].seo_data
     if (!metadata) return FALLBACK_SEO;
    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription,
    };
}

export default async function PostRoute({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const data = await getInfoBySlug(slug);
    
    if (data.data.length === 0) return <h2>no Page data found</h2>;
    return <PageSections data={data.data[0]} />;
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
        }) => ({ slug: String(page.slug)})
    );
}