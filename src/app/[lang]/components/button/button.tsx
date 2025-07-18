import "./button.css";

const buttonSizeStyle = {
  small: "small-button",
  medium: "medium-button",
  large: "large-button"
}

export default function Button({ label, url, color, outsideWeb, size, outline}: Readonly<Button>) {
  
    return (
      <a className={`${color === "white" ? "light-button" : "dark-button"} ${outline ? "outlined-button" : ""}
      ${"button-format"} ${size ? buttonSizeStyle[size] : 'medium-button'}`} 
      href={url} target={outsideWeb ? '_blank' : '_self'}>{label}</a>
    )
    
  }