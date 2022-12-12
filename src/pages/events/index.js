import React from 'react';
import Hero from '../../components/ProductLandingPage/Hero/Hero'
import Layout from '@theme/Layout';
import Providers from '../../components/ProductLandingPage/Providers/Providers'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import {
  PS_HERO_CONTENT,
  PS_METADATA,
  TERRAFORM_MODULE_CONTENT
} from '../../content/index.js';

export default function TerraformLandingPage() {
  return (
    <Layout
      description={PS_METADATA.description}
      title={PS_METADATA.title}
    >
      <Hero
        header={PS_HERO_CONTENT.header}
        product={PS_HERO_CONTENT.product}
        sliderCards={PS_HERO_CONTENT.sliderCards}
        subheader={PS_HERO_CONTENT.subheader}
      />
      <Providers
        header={TERRAFORM_MODULE_CONTENT.header}
        providerCards={TERRAFORM_MODULE_CONTENT.providerCards}
        subheader={TERRAFORM_MODULE_CONTENT.subheader}
      />
    </Layout>
  );
}
