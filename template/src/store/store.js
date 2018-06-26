import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let store= new Vuex.Store({
  state:{
    name:'luozheao'
  },
  mutations: {
    changeName(state,newName){
      state.name=newName;
    }
  },
});

export default store;
