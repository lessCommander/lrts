import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const
state = {
    mpVisible: true       //控制首页底部mini播放器栏显示|隐藏
},
getters = {

},
mutations = {
    toggleMp(state, flag){  //隐藏|显示首页底部mini播放器栏
        state.mpVisible = flag;
    }
};

export default new Vuex.Store({
    state,
    getters,
    mutations
});