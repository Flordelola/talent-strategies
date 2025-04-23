import Image from "next/image";

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
    __component: string
    content: {
      children: {
        text: string
      }[]
    }[]
    media: {
      formats: {
        thumbnail: {
          url: string
        }
      }
    }
    button: {
      data: {
          attributes: {
          label: string
          url: string
          color: string[]
        }
      }
    }[]
  }[]
}



export default function PageSections(
  {data}: {data:PageSections}){
    const {title, sections  } = data;
    console.log('sections?.length', sections[0].__component)
    // const imageUrl = `${

    //   process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337"
  
    // }${sections[0].media.formats.thumbnail.url}`;
  return (
    
    sections.map((item, index) => (
      
      <>
    {item.__component === "blocks.heading" ? (
      <section key={item.id + index}>
        <div>
          <h3>
            {item.title}
          </h3>
          <h4>
            {item.subTitle}
          </h4>
        </div>
      </section>
    ): null}
    {item.__component === "blocks.media-content" ? (
      <section key={item.id + index}>
        <div>
            {/* <Image

            alt="avatar"

            width="80"

            height="80"

            src={imageUrl}

            className=""

            /> */}
            <h3>
              {item.title}
            </h3>
            <h4>
              {item.subTitle}
            </h4>
            <div>
              {item.content.map((paragraph) => (
                <p key={Math.random()}>{paragraph.children[0].text}</p>
              ))}
            </div>
        </div>
      </section>
    ): null}
    </>
    ))
    

  );

}