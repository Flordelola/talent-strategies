interface Button {
  label?: string
  url?: string
  color?: string
  outsideWeb?: boolean
  outline?: boolean
  size?: [key: string]
}

interface Heading {
  title: string
  subTitle: string
  backgroundColor: string[]   
  titleColor:  [key: string]
  subTitleColor: [key: string]
  textAlign: [key: string]
  button: Button[]
}

interface SimpleHeading {
  title?: string
  subTitle?: string
  description?: string
  textAlign?: [key: string]
}

interface Media {
  caption: string
  formats: {
    thumbnail: {
      url?: string
      width: number
      height: number
    }
  }
}
interface Cards {
  title: string
  subTitle: string
  description: string
  button: Button
  media: Media
  backgroundColorCard: [key: string]
  moreContentHover: boolean
  moreContentTitle: string
  moreContentDescription: string
  moreContentButton: Button
  moreContentBackground: [key: string]
  contentAlignment: [key: string]
  moreContentAlignment: [key: string]
}

interface MediaContent {
  heading: SimpleHeading
  backgroundColor: [key: string]
  content: {
    children: {
      text: string
    }[]
  }[]
  media: Media
  backgroundMediaContent: Media
  backgroundMediaSection: Media
  contentAlignment: [key: string]
}

interface MultiCards {
  heading: SimpleHeading
  backgroundColor: [key: string]
  numberCards: [key: string]
  cards: Cards[]
}