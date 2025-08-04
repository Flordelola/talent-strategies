import { fetchAPI } from "./utils/fetch-api";
import type { Metadata } from 'next';
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import PageSections from "./components/pageSections";

const FALLBACK_SEO = {
    title: "Talent strategies",
    description: "HR - Alejandra Espinosa",
}

async function getInfoByFooter() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/footer`;
    const urlParamsObject = {
        populate: '*'
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;

}

async function getInfoByHome() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/home`;
    const urlParamsObject = {
        populate: {
            sections: { // asking to populate the dynamic zone 'sections'
                on: { // using a detailed population strategy to explicitly define blocks info
                    'blocks.heading': {
                        populate: '*',
                    },
                    'blocks.media-content': {
                        populate: '*',
                    },
                    'blocks.multi-cards': {
                        populate: {
                            'heading': {
                                populate: '*'
                            },
                            'cards': {
                                populate: '*'
                            }
                        }
                    },
                },
                
            },
        },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;
}

async function getInfoByNavbar() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/navbar`;
    const urlParamsObject = {
        populate: '*'
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;

}

async function getMetaData() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/home`;
    const urlParamsObject = {
        populate: { seo_data: { populate: '*' } },
        
    };
    
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    if (!!response.data) {
        return response.data;
    }
}

export async function generateMetadata(): Promise<Metadata> {
    const meta = await getMetaData();
    const metadata = meta && meta.seo_data

    if (!metadata ) {
        return FALLBACK_SEO
    } else {;
        return {
            title: metadata.metaTitle,
            description: metadata.metaDescription,
        };
    }
}
export default async function Home() {
    const dataFooter = await getInfoByFooter();
    const dataHome = await getInfoByHome();
    const dataNavbar = await getInfoByNavbar();

  return (
    <>
        <Navbar data={dataNavbar.data}/>
        <main>
            <PageSections data={dataHome.data} />
        </main>
        <Footer data={dataFooter.data} />
    </>
  );
}