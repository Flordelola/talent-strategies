import Footer from "./components/footer";
import PageSections from "./components/pageSections";
import { fetchAPI } from "./utils/fetch-api";

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

export default async function Home() {
    const dataFooter = await getInfoByFooter();
    const dataHome = await getInfoByHome();

  return (
    <>
        <main>
        <PageSections data={dataHome.data} />
        </main>
        <Footer data={dataFooter.data} />
    </>
  );
}