import Image from "next/image";
import Button from "../button/button";
import "./cards.css";

const backgroundColorStyle = {
  white: "white-bg",
  black: "black-bg",
  grey: "grey-bg",
  pearl: "pearl-bg"
}

const contentAlignmentStyle = {
  right: "right-alignment",
  center: "center-alignment",
  left: "left-alignment"
}


export default function Cards(
  {title, subTitle, description, button, media, backgroundColorCard, moreContentHover, moreContentTitle,
    moreContentDescription, moreContentButton, moreContentBackground, contentAlignment, moreContentAlignment
  }: Readonly<Cards>){
    const mediaApi = media


    return (
      <div className={`${"card-component"}`}>
        <div className={`${"padding-container-card"}`}>
          <div className={`${"card-content-container"} ${contentAlignment ? contentAlignmentStyle[contentAlignment] : 'left-alignment'} 
          ${backgroundColorCard ? backgroundColorStyle[backgroundColorCard] : 'white-bg'}`}>
            <div className="card-heading-container">
              <div className="card-media-container">
                <Image alt={media.caption ? media.caption : 'images'} width={mediaApi.width} height={mediaApi.height} src={'http://localhost:1337' + mediaApi.url} className=""/>
              </div>
              <p className="card-title-container">
                {title}
              </p>
              <p className="card-subTitle-container">
                {subTitle}
              </p>
            </div>
            <div className="card-elements-container">
              <p className="card-description-container">
                {description}
              </p>
              <div className="card-button-container">
                <Button key={Math.random()} color={button?.color} size={button?.size} 
                url={button?.url} outsideWeb={button?.outsideWeb} label={button?.label} outline={button?.outline}/>
              </div>
            </div>
          </div>
        { moreContentHover && (
          <div className={`${"card-content-container"} ${moreContentAlignment ? contentAlignmentStyle[moreContentAlignment] : 'left-alignment'} 
          ${moreContentBackground ? backgroundColorStyle[moreContentBackground] : 'white-bg'}`}>
            <div className="card-heading-container">
              <p className="card-title-container">
                {moreContentTitle}
              </p>
            </div>
            <div className="card-elements-container">
              <p className="card-description-container">
                {moreContentDescription}
              </p>
              <div className="card-button-container">
                <Button key={Math.random()} color={moreContentButton?.color} size={moreContentButton?.size} 
                url={moreContentButton?.url} outsideWeb={moreContentButton?.outsideWeb} label={moreContentButton?.label} outline={moreContentButton?.outline}/>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    )
    
  }