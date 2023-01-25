import create from 'zustand';

export const useStore = create((set) => ({
    allPhotos: [],
    getAllPhotos: async () => {
        const response = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        set({allPhotos: await (response).json()})
    },
    toogleFavoriteFn: (allPhotosArr, id) => {
        const updatedArr = allPhotosArr.map(photo => {
            if(photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        console.log(updatedArr)
        set({allPhotos: updatedArr})
    },
    cartItems: [],
    addCartItems: (photo) => {
        set(state => ({
            cartItems: [...state.cartItems, photo]
        }))
    },
    removeCartItems: (allCartItems, id) => {
        const updatedArr = allCartItems.filter((item) => item.id !== id);
        set({cartItems: updatedArr})
    }
}))