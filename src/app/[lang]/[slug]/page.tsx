import { fetchAPI } from '@/app/[lang]/utils/fetch-api';
import type { Metadata } from 'next';
import PageSections from '../components/pageSections';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

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

async function getMetaData(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/pages`;
    const urlParamsObject = {
        filters: { slug },
        populate: { seo_data: { populate: '*' } },
        
    };
    
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    if (response.data.length > 0) {
        return response.data;
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = params;
    const meta = await getMetaData(slug);
    const metadata = meta && meta[0].seo_data

    if (!metadata ) {
        return FALLBACK_SEO
    } else {;
        return {
            title: metadata.metaTitle,
            description: metadata.metaDescription,
        };
    }
}

export default async function PostRoute({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const dataPages = await getInfoBySlug(slug);
    const dataFooter = await getInfoByFooter();
    const dataNavbar = await getInfoByNavbar();
    
    if (dataPages.data.length === 0) return (
        <>  
            <Navbar data={dataNavbar.data}/>
            <div className='no-page-found padding-container'>
                <h1>404 - Not found</h1>
                <p>The requested URL was not found on this server</p>
            </div>
            <Footer data={dataFooter.data} />
        </>
    );
    return (
        <>  
            <Navbar data={dataNavbar.data}/>
            <main>
                <PageSections data={dataPages.data[0]} />
            </main>
            <Footer data={dataFooter.data} />
        </>
    )
}

export async function generateStaticParams() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const page = `/pages`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const pageResponse = await fetchAPI(
        page,
        options,
    );

    return pageResponse.data.map(
        (page: {
            slug: string;
        }) => ({ slug: String(page.slug)})
    );
}