import { create } from 'zustand'

const useStore = create((set) => ({
  productId: null,
  setproductId: (productId) => set({ productId:productId}),
}))

const useLoaderStore = create((set)=>({
  loading:false,
  setLoading : (bool)=>set({loading:bool})
}))

export {useStore,useLoaderStore}
