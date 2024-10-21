import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'hero section';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'compoenets2.link', false>;
  };
}

export interface Compoenets2Link extends Struct.ComponentSchema {
  collectionName: 'components_compoenets2_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Schema.Attribute.String;
    text: Schema.Attribute.String;
    isExtrinal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface CompoenetsTwoBtnCta extends Struct.ComponentSchema {
  collectionName: 'components_compoenets_two_btn_ctas';
  info: {
    displayName: 'two btn cta';
    description: '';
  };
  attributes: {
    firstBtn: Schema.Attribute.Component<'compoenets.btn', false>;
    secondebtn: Schema.Attribute.Component<'compoenets.btn', false>;
  };
}

export interface CompoenetsTitle extends Struct.ComponentSchema {
  collectionName: 'components_compoenets_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface CompoenetsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_compoenets_info_cards';
  info: {
    displayName: 'infoCard';
  };
  attributes: {
    title: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.String;
    bacground: Schema.Attribute.Enumeration<
      ['blue', 'purple', 'green', 'gray']
    >;
    ctaBtn: Schema.Attribute.Component<'compoenets.btn', false>;
  };
}

export interface CompoenetsHeader extends Struct.ComponentSchema {
  collectionName: 'components_compoenets_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    title: Schema.Attribute.String;
    descripction: Schema.Attribute.String;
  };
}

export interface CompoenetsBtn extends Struct.ComponentSchema {
  collectionName: 'components_compoenets_btns';
  info: {
    displayName: 'btn';
  };
  attributes: {
    title: Schema.Attribute.String;
    link: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['prm', 'sec', 'outline', 'outline-icon']
    >;
  };
}

export interface CompoenetsArtcil extends Struct.ComponentSchema {
  collectionName: 'components_compoenets_artcils';
  info: {
    displayName: 'artcil';
  };
  attributes: {
    title: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CompoenetsArtcilList extends Struct.ComponentSchema {
  collectionName: 'components_compoenets_artcil_lists';
  info: {
    displayName: 'artcilList';
  };
  attributes: {
    artcil: Schema.Attribute.Component<'compoenets.artcil', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.hero-section': LayoutHeroSection;
      'compoenets2.link': Compoenets2Link;
      'compoenets.two-btn-cta': CompoenetsTwoBtnCta;
      'compoenets.title': CompoenetsTitle;
      'compoenets.info-card': CompoenetsInfoCard;
      'compoenets.header': CompoenetsHeader;
      'compoenets.btn': CompoenetsBtn;
      'compoenets.artcil': CompoenetsArtcil;
      'compoenets.artcil-list': CompoenetsArtcilList;
    }
  }
}
