import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headings';
  info: {
    description: '';
    displayName: 'heading';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['white', 'black', 'grey', 'pearl']
    > &
      Schema.Attribute.DefaultTo<'white'>;
    button: Schema.Attribute.Component<'generic.button', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksMediaContent extends Struct.ComponentSchema {
  collectionName: 'components_blocks_media_contents';
  info: {
    description: '';
    displayName: 'mediaContent';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['white', 'black', 'grey', 'pearl']
    > &
      Schema.Attribute.DefaultTo<'white'>;
    backgroundMediaContent: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    backgroundMediaSection: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    content: Schema.Attribute.Blocks;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksMultiCards extends Struct.ComponentSchema {
  collectionName: 'components_blocks_multi_cards';
  info: {
    description: '';
    displayName: 'multiCards';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['white', 'black', 'grey', 'pearl']
    > &
      Schema.Attribute.DefaultTo<'white'>;
    cards: Schema.Attribute.Component<'generic.cards', true>;
    description: Schema.Attribute.Text;
    numberCol: Schema.Attribute.Enumeration<['one', 'two', 'three', 'four']> &
      Schema.Attribute.DefaultTo<'four'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleSize: Schema.Attribute.Enumeration<['medium', 'large', 'extraLarge']> &
      Schema.Attribute.DefaultTo<'medium'>;
  };
}

export interface GenericButton extends Struct.ComponentSchema {
  collectionName: 'components_generic_buttons';
  info: {
    description: '';
    displayName: 'button';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['black', 'white']>;
    label: Schema.Attribute.String;
    outsideWeb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    url: Schema.Attribute.String;
  };
}

export interface GenericCards extends Struct.ComponentSchema {
  collectionName: 'components_generic_cards';
  info: {
    description: '';
    displayName: 'cards';
  };
  attributes: {
    backgroundColorCard: Schema.Attribute.Enumeration<
      ['transparent', 'white', 'black', 'grey', 'pearl']
    > &
      Schema.Attribute.DefaultTo<'transparent'>;
    border: Schema.Attribute.Boolean;
    button: Schema.Attribute.Component<'generic.button', false>;
    description: Schema.Attribute.Text;
    lightFont: Schema.Attribute.Boolean;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaTitle: Schema.Attribute.String;
    preventIndexing: Schema.Attribute.Boolean;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.heading': BlocksHeading;
      'blocks.media-content': BlocksMediaContent;
      'blocks.multi-cards': BlocksMultiCards;
      'generic.button': GenericButton;
      'generic.cards': GenericCards;
      'seo.seo': SeoSeo;
    }
  }
}
