import Image from "next/image";
import "./mediaContent.css";
import SimpleHeading from "../simpleHeading/simpleHeading";


const backgroundColorStyle = {
  white: "white-bg",
  black: "black-bg",
  grey: "grey-bg",
  pearl: "pearl-bg"
}

const contentAlignmentStyle = {
  right: "content-right-alignment",
  left: "content-left-alignment"
}


export default function MediaContent({ data }: { data: MediaContent}) {
  const {heading, backgroundColor, content, media, backgroundMediaContent, backgroundMediaSection, contentAlignment} = data
  const mediaApi = media
  const bgMediaContentApi = backgroundMediaContent
  const bgMediaSectionApi = backgroundMediaSection

    return (
      <div className={`${"media-content-component"} ${backgroundColor ? backgroundColorStyle[backgroundColor] : 'white-bg'}`} style={{backgroundImage: `url(${ 'http://localhost:1337' + bgMediaContentApi.url})`}}>
        <div className="max-container padding-container">
          <div className={`${"media-content-container"}`}>
            {(heading?.title || heading?.subTitle || heading?.description) && (
              <SimpleHeading title={heading?.title} subTitle={heading?.subTitle} description={heading?.description} textAlign={heading?.textAlign}/>
            )}
            {(!!mediaApi || content.length > 1) && (
              <div className={`${"media-content-elements-container"} ${contentAlignment ? contentAlignmentStyle[contentAlignment] : ''}`}>
                {mediaApi && (
                  <div className={`${"media-container"} ${content.length < 2 ? "full-width-image" : ""}`}>
                    <Image alt={media.caption ? media.caption : 'images'} objectFit="cover" width={media?.width} height={media?.height} src={'http://localhost:1337' + mediaApi.url} className=''/>
                  </div>
                )}
                {content.length > 1 && (
                  <div className="content-container" style={{backgroundImage: `url(${ 'http://localhost:1337' + bgMediaSectionApi.url})`}}>
                    {content.map((paragraph) => (
                      <p key={Math.random()}>{paragraph.children[0].text}</p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }