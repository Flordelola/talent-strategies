import Heading from "./heading/heading";
import MediaContent from "./mediaContent/mediaContent";

interface PageSections {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sections: {
    id: number
    title: string
    subTitle: string
    backgroundColor: [key: string]
    __component: string
    content: {
      children: {
        text: string
      }[]
    }[]
    media: {
      caption: string
      formats: {
        thumbnail: {
          url: string
          width: number
          height: number
        }
      }
    }
    button: {
      label: string
      url: string
      color: string
      outsideWeb: boolean
     }[]
  }[]
}



export default function PageSections(
  {data}: {data:PageSections}){
    const {sections  } = data;
  return (
    
    sections.map((item, index) => (
      <section key={item.id + index}>
        {item.__component === "blocks.heading" ? (
          <div key={item.id + index} id={item.__component + '__' + index}>
            <Heading data={item}/>
          </div>
        ): null}
        {item.__component === "blocks.media-content" ? (
          <div key={item.id + index} id={item.__component + '__' + index}>
           <MediaContent data={item} />
          </div>
        ): null}
      </section>
    ))
  );
}