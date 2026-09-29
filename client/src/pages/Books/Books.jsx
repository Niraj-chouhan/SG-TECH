import NavbarHome from '../../components/homecomponents/navbarsection/navbarsection'
import HomeFooter from '../../components/homecomponents/footer/Footer'
import './Books.css'

function BooksIllustration() {
  return (
    <svg className="books-illustration" viewBox="0 0 420 330" role="img" aria-labelledby="books-art-title">
      <title id="books-art-title">Illustration of books waiting to be opened</title>
      <ellipse cx="210" cy="286" rx="154" ry="18" fill="#2d2830" opacity=".12" />
      <g className="book-float-back">
        <path d="M100 92 210 116v139L100 230z" fill="#e5a000" />
        <path d="m210 116 109-24v138l-109 25z" fill="#ffbd22" />
        <path d="M100 92q56-29 110 24v139q-54-53-110-25z" fill="#fff8e7" />
        <path d="M210 116q55-53 109-24v138q-55-28-109 25z" fill="#fffdf7" />
        <path d="M210 116v139" stroke="#d6c9aa" strokeWidth="3" />
        <path d="M122 119q37-11 67 14M122 139q37-10 67 15M122 159q37-9 67 15" fill="none" stroke="#e9dcbf" strokeWidth="4" strokeLinecap="round" />
        <path d="M232 133q35-28 66-25M232 153q35-27 66-24M232 173q35-26 66-23" fill="none" stroke="#e9dcbf" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g className="book-float-front">
        <path d="M133 180q39-21 77 10v90q-38-30-77-10z" fill="#f5a900" />
        <path d="M210 190q39-31 77-10v90q-39-11-77 10z" fill="#ffc744" />
        <path d="M133 180q39-21 77 10v90q-38-30-77-10z" fill="#fff" />
        <path d="M210 190q39-31 77-10v90q-39-11-77 10z" fill="#fffaf0" />
        <path d="M210 190v90" stroke="#e6d7b8" strokeWidth="3" />
      </g>
      <circle className="book-sparkle sparkle-one" cx="91" cy="116" r="6" fill="#ffb000" />
      <circle className="book-sparkle sparkle-two" cx="338" cy="155" r="5" fill="#ffb000" />
      <path className="book-sparkle sparkle-three" d="M326 66v18m-9-9h18" stroke="#e5a000" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export default function Books() {
  return (
    <div className="books-page">
      <NavbarHome />
      <main className="books-coming-soon">
        <div className="books-background-orb orb-one" aria-hidden="true" />
        <div className="books-background-orb orb-two" aria-hidden="true" />
        <div className="books-content">
          <BooksIllustration />
          <p className="books-eyebrow">A NEW CHAPTER IS ON THE WAY</p>
          <h1>Coming Soon....</h1>
        </div>
      </main>
      <HomeFooter />
    </div>
  )
}
