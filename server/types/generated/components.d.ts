import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    button: Schema.Attribute.Component<'generic.button', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksMediaContent extends Struct.ComponentSchema {
  collectionName: 'components_blocks_media_contents';
  info: {
    displayName: 'mediaContent';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GenericButton extends Struct.ComponentSchema {
  collectionName: 'components_generic_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['black', 'white']>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
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
      'generic.button': GenericButton;
      'seo.seo': SeoSeo;
    }
  }
}
