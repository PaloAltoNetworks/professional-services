import React from 'react'
// components
import Slider from '../Slider/Slider'
import Card from '../Cards/Card'
// styles
import './Hero.scss'

function ProductHero({ product, header, subheader, sliderCards }) {
  return (
    <section className={`product-hero-container ${product}`}>
      <div className={`product-hero__inner-content ${product}`}>
        <div className={`product-hero__inner-left ${product}`}>
          <header className="inner-left__header">
            {header}
            {subheader}
          </header>
          <a className="button button--primary" target="_blank" href="https://aws.amazon.com/marketplace/search/results?searchTerms=Quickstart+Service+for+Software+NGFW">Learn More</a>
        </div>
        {sliderCards.length && <div className="product-hero__inner-right">
          <Slider className="product-hero__slider-container">
            {sliderCards.map((card, i) =>
              <Card
                key={i}
                cta={card.cta}
                description={card.description}
                image={card.image}
                title={card.title}
                type="imageCard"
              />
            )}
          </Slider>
        </div>}
      </div>
    </section>
  )
}

export default ProductHero