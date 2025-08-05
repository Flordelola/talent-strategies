import Button from "./button/button";

interface Footer {
  title?: string;
  button?: Button[];
}

export default function Footer(
  {data}: {data:Footer}){
    const {title, button} = data

    return (
      <footer className="footer">
        <div className="buttons-container">
        {button?.map((item)=>(
              <Button key={Math.random()} color={item.color} size={item.size} 
               url={item.url} outsideWeb={item.outsideWeb} label={item.label} outline={item.outline}/>
            ))}
        </div>
        <div className="copyright-container">
          <div>&copy; {new Date().getFullYear()} {title}</div>
        </div>
      </footer>
    );
  }