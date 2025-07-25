import Heading from "./heading/heading";
import MediaContent from "./mediaContent/mediaContent";
import MultiCards from "./multiCards/multiCards";

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
    titleColor: [key: string]
    subTitleColor: [key: string]
    textAlign: [key: string]
    backgroundColor: [key: string]
    numberCards: [key: string]
    __component: string
    content: {
      children: {
        text: string
      }[]
    }[]
    cards: Cards[]
    media: Media
    backgroundMediaContent: Media
    backgroundMediaSection: Media
    button: Button[]
    heading: SimpleHeading
    contentAlignment: [key: string]
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
        {item.__component === "blocks.multi-cards" ? (
          <div key={item.id + index} id={item.__component + '__' + index}>
           <MultiCards data={item} />
          </div>
        ): null}
      </section>
    ))
  );
}