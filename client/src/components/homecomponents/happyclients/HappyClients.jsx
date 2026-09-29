import { useEffect, useState } from 'react'
import './HappyClients.css'
import gravityOriginalsLogo from '../../../assets/images/home/clients/balaji-chat-mahal.png'
import lyveWorqLogo from '../../../assets/images/home/clients/client-06.png'
import gravityLogo from '../../../assets/images/home/clients/client-07.png'
import xcoomLogo from '../../../assets/images/home/clients/client-08.png'
import balajiChatMahalLogo from '../../../assets/images/home/clients/client-09.png'
import utsavWaleLogo from '../../../assets/images/home/clients/client-10.png'
import digitalSaversLogo from '../../../assets/images/home/clients/gravity.png'
import edtechSaversLogo from '../../../assets/images/home/clients/lyveworq.png'
import prathamLogo from '../../../assets/images/home/clients/onskate.png'
import terraGlebeLogo from '../../../assets/images/home/clients/xcoom.png'

const companies = [
  { name: 'Gravity Originals', logo: gravityOriginalsLogo },
  { name: 'LyveWorQ', logo: lyveWorqLogo },
  { name: 'Gravity', logo: gravityLogo },
  { name: 'Xoom', logo: xcoomLogo },
  { name: 'Balaji Chat Mahal', logo: balajiChatMahalLogo },
]

const products = [
  { name: 'Utsav Wale', logo: utsavWaleLogo },
  { name: 'Digital Savers', logo: digitalSaversLogo },
  { name: 'EdTech Savers', logo: edtechSaversLogo },
  { name: 'Pratham', logo: prathamLogo },
  { name: 'TerraGlebe', logo: terraGlebeLogo },
]

function getSliderPages(items, visibleCount) {
  const pageCount = Math.ceil(items.length / visibleCount)
  return Array.from({ length: pageCount }, (_, pageIndex) => (
    Array.from({ length: visibleCount }, (_, itemIndex) => items[(pageIndex * visibleCount + itemIndex) % items.length])
  ))
}

function LogoPage({ items, columns, hidden }) {
  return (
    <ul className="happy-clients__logo-page" style={{ '--page-columns': columns }} aria-hidden={hidden || undefined}>
      {items.map(({ name, logo }, index) => (
        <li className="happy-clients__logo" key={`${name}-${index}`}>
          <img src={logo} alt={name} />
        </li>
      ))}
    </ul>
  )
}

function SliderArrow({ direction, onClick }) {
  const isPrevious = direction === 'previous'
  return (
    <button
      className="happy-clients__product-arrow"
      type="button"
      aria-label={isPrevious ? 'Previous products' : 'Next products'}
      onClick={onClick}
    >
      <span aria-hidden="true">{isPrevious ? '‹' : '›'}</span>
    </button>
  )
}

export default function HappyClients() {
  const [visibleProducts, setVisibleProducts] = useState(4)
  const [activeProductPage, setActiveProductPage] = useState(0)
  const productPages = getSliderPages(products, visibleProducts)

  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth
      setVisibleProducts(width <= 560 ? 2 : width <= 900 ? 3 : 4)
    }

    updateVisibleItems()
    window.addEventListener('resize', updateVisibleItems)
    return () => window.removeEventListener('resize', updateVisibleItems)
  }, [])

  useEffect(() => {
    setActiveProductPage((page) => Math.min(page, productPages.length - 1))
  }, [productPages.length])

  const moveProductPage = (direction) => {
    setActiveProductPage((page) => (page + direction + productPages.length) % productPages.length)
  }

  return (
    <section className="happy-clients" aria-labelledby="happy-clients-heading">
      <h2 className="happy-clients__heading" id="happy-clients-heading">
        <span>Happy Clients</span>
      </h2>

      <div className="happy-clients__company-slider" role="region" aria-label="Company logos">
        <div className="happy-clients__viewport">
          <div className="happy-clients__marquee-track">
            {[false, true].map((hidden) => (
              <LogoPage
                key={hidden ? 'duplicate' : 'original'}
                items={companies}
                columns={companies.length}
                hidden={hidden}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="happy-clients__product-slider" role="region" aria-label="Products and projects">
        <SliderArrow direction="previous" onClick={() => moveProductPage(-1)} />
        <div className="happy-clients__viewport">
          <div
            className="happy-clients__track"
            style={{ transform: `translateX(-${activeProductPage * 100}%)` }}
          >
            {productPages.map((items, index) => (
              <LogoPage key={index} items={items} columns={visibleProducts} hidden={index !== activeProductPage} />
            ))}
          </div>
        </div>
        <SliderArrow direction="next" onClick={() => moveProductPage(1)} />
      </div>
    </section>
  )
}
