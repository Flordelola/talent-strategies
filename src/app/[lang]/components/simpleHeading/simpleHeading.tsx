
import "./simpleHeading.css";


const textAlignStyle = {
  right: "right-alignment",
  center: "center-alignment",
  left: "left-alignment"
}

export default function SimpleHeading({ title, subTitle, description, textAlign}: Readonly<SimpleHeading>) {
    return (
      <div className={`${"heading-container"} ${textAlign? textAlignStyle[textAlign] : 'center-alignment'}`}>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p>{description}</p>
      </div>
    );
  }