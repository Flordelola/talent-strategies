import "./heading.css";

interface Heading {
   title: string
   subTitle: string
   backgroundColor: [key: string]
   button: {
    label: string
    url: string
    color: string
    outsideWeb: boolean
   }[]
}

const backgroundColorStyle = {
  white: "white-bg",
  black: "black-bg",
  grey: "grey-bg",
  pearl: "pearl-bg"
}

export default function Heading({ data }: { data: Heading}) {
  const {title, subTitle, backgroundColor, button} = data
    return (
      <div className={`${"heading-component"} ${backgroundColor ? backgroundColorStyle[backgroundColor] : 'white-bg'}`}>
        <div className="max-container padding-container">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <div className="buttons-container">
            {button.map((item)=>(
              <a className={`${item.color === "white" ? "light-button" : "dark-button"} ${"button-format"}`} key={Math.random()} href={item.url} target={item.outsideWeb ? '_blank' : '_self'}>{item.label}</a>
            ))}
          </div>
        </div>
      </div>
    );
  }