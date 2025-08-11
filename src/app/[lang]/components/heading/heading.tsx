import Button from "../button/button";

const backgroundColorStyle = {
  white: "white-bg",
  black: "black-bg",
  grey: "grey-bg",
  pearl: "pearl-bg"
}

const titleColorStyle = {
  white: "white-font",
  black: "black-font",
  grey: "grey-font",
  pearl: "pearl-font"
}

const subTitleColorStyle = {
  white: "white-font",
  black: "black-font",
  grey: "grey-font",
  pearl: "pearl-font"
}

const textAlignStyle = {
  right: "right-alignment",
  center: "center-alignment",
  left: "left-alignment"
}

export default function Heading({ data }: { data: Heading}) {
  const {title, subTitle, backgroundColor, titleColor, subTitleColor, button, textAlign} = data
  
    return (
      <div className={`${"heading-component"} ${backgroundColor ? backgroundColorStyle[backgroundColor] : 'white-bg'}`}>
        <div className={`${"max-container padding-container"} ${textAlign? textAlignStyle[textAlign] : 'left-alignment'}`}>
          {title && (<h1 className={`${"margin-bottom-32"} ${titleColor ? titleColorStyle[titleColor] : 'black-font'}`}>{title}</h1>)}
          {subTitle && (<h2 className={`${"margin-bottom-32"} ${subTitleColor ? subTitleColorStyle[subTitleColor] : 'black-font'}`}>{subTitle}</h2>)}
          {button?.length > 0 && (
            <div className="buttons-container">
              {button.map((item)=>(
                <Button key={Math.random()} color={item.color} size={item.size} 
                url={item.url} outsideWeb={item.outsideWeb} label={item.label} outline={item.outline}/>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }