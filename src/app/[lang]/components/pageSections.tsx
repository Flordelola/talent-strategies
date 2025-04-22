interface PageSections {

  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sections: {
    title: string
    subTitle: string
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
  return (

    <section>
      <div>
        <div>
          <h1>
            <b>{title}</b>
          </h1>
          <h3>
            {sections[0].title}
          </h3>
          <h4>
            {sections[0].subTitle}
          </h4>
        </div>
      </div>
    </section>

  );

}