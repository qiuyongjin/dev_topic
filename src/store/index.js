/**
 * Created by PhpStorm.
 * User: QiuYongJin
 * Date: 18/4/28
 * Time: 15:06
 */
import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        // 热区
        hot: {
            list: [],
            item: {}
        }
    },
    mutations: {
        increment (state) {
            state.count++;
        }
    }
});