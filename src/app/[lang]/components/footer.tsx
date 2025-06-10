import Button from "./button/button";

export default function Footer() {
    return (
      <footer className="footer">
        <div className="buttons-container">
          <Button key={Math.random()} color={'black'} size={'medium'} 
          url={'https://outlook.office.com/bookwithme/user/b1caf79ed49f42378eee351544324e11@talentstrategiesconsulting.com?anonymous&isanonymous=true'} 
          outsideWeb={true} label={'Book time'} outline={false}/>
          <Button key={Math.random()} color={'black'} size={'medium'} 
          url={'https://www.linkedin.com/in/alejandra-espinosa-56693918/'} 
          outsideWeb={true} label={'LinkedIn'} outline={false}/>
        </div>
        <div>
          <div>&copy; {new Date().getFullYear()} Alejandra Espinosa - Talent Strategies. All rights reserved.</div>
        </div>
      </footer>
    );
  }