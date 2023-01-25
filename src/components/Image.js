import React from 'react'
import { useStore } from '../store/zustand'
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'

function Image() {
  const toogleFavoriteFn = useStore(state => state.toogleFavoriteFn)
  const allPhotos = useStore(state => state.allPhotos)
  const allCartItems = useStore(state => state.cartItems)
  const addCartItemsFn = useStore(state => state.addCartItems)
  const removeCartItemFn = useStore(state => state.removeCartItems)

  const toogleFavorite = (id) => {
    console.log('clicked')
    toogleFavoriteFn(allPhotos, id)
  }

  const addItem = (photo) => {
    addCartItemsFn(photo)
  }

  const removeItem = (photo) => {
    removeCartItemFn(allCartItems, photo.id)
  }

  const addToCart = (photo) => {
    const alreadyInCart = allCartItems.some((item) => item.id === photo.id)
    if(!alreadyInCart) return <AiOutlineShoppingCart className='add-icon' onClick={() => addItem(photo)} />
    else return <BsFillCartCheckFill className='add-icon' onClick={() => removeItem(photo)} />
  }

  const heartIcon = (photo) => {
    // always use arrow function we you have to pass parameter to the called function
    if(!photo.isFavorite) return <AiOutlineHeart className='icon' onClick={() => toogleFavorite(photo.id)} />
    else return <AiFillHeart className='icon' onClick={() => toogleFavorite(photo.id)} />
  }

  return (
    <div>
      <div className='img-cont'>
        {allPhotos.map((photo, index) => {
          return (
            <div className='img-wrap' key={index}>
              <img className='img' src={photo.url} alt='random' />
              {heartIcon(photo)}
              {addToCart(photo)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Image