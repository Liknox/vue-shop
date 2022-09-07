import {createStore} from "vuex"

import shop from "./shop"


const store = createStore({
   modules: {
      shop
   }
})

export default store
