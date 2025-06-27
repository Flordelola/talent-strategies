interface Button {
  label?: string
  url?: string
  color?: string
  outsideWeb?: boolean
  outline?: boolean
  size?: [key: string]
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
  title: string
  subTitle: string
  backgroundColor: [key: string]
  content: {
    children: {
      text: string
    }[]
  }[]
  media: Media
  backgroundMediaContent: Media
  backgroundMediaSection: Media
}

interface MultiCards {
  title?: string
  subTitle?: string
  description?: string
  backgroundColor: [key: string]
  numberCards: [key: string]
  cards: Cards[]
}