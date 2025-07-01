import "./multiCards.css";
import Cards from "../cards/cards";


const backgroundColorStyle = {
  white: "white-bg",
  black: "black-bg",
  grey: "grey-bg",
  pearl: "pearl-bg"
}

const numberCardsStyle = {
  one: "one-card",
  two: "two-cards",
  three: "three-cards",
  four: "four-cards"
}


export default function MultiCards({ data }: { data: MultiCards}) {
  const {title, subTitle, description, backgroundColor, numberCards, cards} = data

    
    return (
      <div className={`${"multi-cards-component"} ${backgroundColor ? backgroundColorStyle[backgroundColor] : 'white-bg'}`}>
        <div className="max-container padding-container">
          <div className="multi-cards-container">
            <div className="heading-container">
              <h2>
                {title}
              </h2>
              <h3>
                {subTitle}
              </h3>
              <p>{description}</p>
            </div>
            <div className={`${"multi-cards-elements-container"} ${numberCards ? numberCardsStyle[numberCards]: 'four-cards'}`}>
              {cards?.map((item)=>(
                <Cards key={Math.random()} title={item.title} subTitle={item.subTitle} description={item.description}
                button={item.button} media={item.media} backgroundColorCard={item.backgroundColorCard} moreContentHover={item.moreContentHover}
                moreContentTitle={item.moreContentTitle} moreContentDescription={item.moreContentDescription} moreContentButton={item.moreContentButton} 
                moreContentBackground={item.moreContentBackground} contentAlignment={item.contentAlignment} moreContentAlignment={item.moreContentAlignment}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }