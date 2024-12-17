import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarFav: (state, action: PayloadAction<Produto>) => {
      const favoritados = action.payload
      const favoritosSemProduto = state.itens.find(
        (p) => p.id === favoritados.id
      )

      if (favoritosSemProduto) {
        state.itens = state.itens.filter((p) => p.id !== favoritados.id)
      } else {
        state.itens.push(favoritados)
      }
    }
  }
})

export const { adicionarFav } = favoritoSlice.actions
export default favoritoSlice.reducer

// function favoritar(produto: Produto) {
//   if (favoritos.find((p) => p.id === produto.id)) {
//     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//     setFavoritos(favoritosSemProduto)
//   } else {
//     setFavoritos([...favoritos, produto])
//   }
// }
