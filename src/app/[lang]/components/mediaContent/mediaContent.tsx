import Image from "next/image";
import "./mediaContent.css";

interface MediaContent {
   title: string
   subTitle: string
   backgroundColor: [key: string]
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
  backgroundMediaContent: {
    caption: string
    formats: {
      thumbnail: {
        url: string
        width: number
        height: number
      }
    }
  }
  backgroundMediaSection: {
    caption: string
    formats: {
      thumbnail: {
        url: string
        width: number
        height: number
      }
    }
  }
}

const backgroundColorStyle = {
  white: "white-bg",
  black: "black-bg",
  grey: "grey-bg",
  pearl: "pearl-bg"
}


export default function MediaContent({ data }: { data: MediaContent}) {
  const {title, subTitle, backgroundColor, content, media, backgroundMediaContent, backgroundMediaSection} = data
  const mediaApi = media.formats.thumbnail
  const bgMediaContentApi = backgroundMediaContent.formats.thumbnail
  const bgMediaSectionApi = backgroundMediaSection.formats.thumbnail
    return (
      <div className={`${"heading-component"} ${backgroundColor ? backgroundColorStyle[backgroundColor] : 'white-bg'}`} style={{backgroundImage: `url(${ 'http://localhost:1337' + bgMediaContentApi.url})`}}>
        <div className="max-container padding-container">
          <div className="media-content-container">
            <div className="heading-container">
              <h2>
                {title}
              </h2>
              <h3>
                {subTitle}
              </h3>
            </div>
            <div className="media-content-elements-container">
              <div className="media-container">
                <Image alt={media.caption ? media.caption : 'images'} width={mediaApi.width} height={mediaApi.height} src={'http://localhost:1337' + mediaApi.url} className=""/>
              </div>
              <div className="content-container" style={{backgroundImage: `url(${ 'http://localhost:1337' + bgMediaSectionApi.url})`}}>
                {content.map((paragraph) => (
                  <p key={Math.random()}>{paragraph.children[0].text}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }