import {AiFillStar} from 'react-icons/ai'
import {BsFillBagPlusFill} from 'react-icons/bs'

function Card({img, title, star, reviews, newPrice, prevPrice}) {
  return (
    <section className="card">
      <img src={img} alt={title} className='card-img' />
      <div className="card-detail">
        <h4 className="card-title">{title}</h4>
        <section className="card-reviews">
          {star}{star}{star}
          <span className='total-reviews'>{reviews}</span>
        </section>
        <section className='card-price'>
          <div className='price'>
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className='bag'>
            <BsFillBagPlusFill className='bag-icon'/>
          </div>
        </section>
      </div>
  </section>
  )
}

export default Card;