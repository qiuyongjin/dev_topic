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
        elementIndex: 0,
        element: [
            {
                hot: [
                    {
                        style: {top: '0px', left: '0px'}
                    }
                ],
                bgImg: '../../../static/topic_pic/img1.jpg'
            }
        ]
    },
    mutations: {
        increment (state) {
            state.count++;
        },
        /**
         * 当前选中的元素索引
         * @param state
         * @param index
         */
        funElementIndex (state, index) {
            state.elementIndex = index;
        },
        /**
         * 添加元素对象
         * @param state
         * @param img_url - 图片地址
         */
        funAddElement (state, img_url) {
            let obj = {
                hot: [
                    {
                        style: {top: '20%', left: '50%'}
                    }
                ],
                bgImg: img_url
            };
            state.element.push(obj);
        },
        /**
         * 删除热区
         * @param state
         * @param index - element 索引
         * @param style_index - 热区style 索引
         */
        funDelHot (state, obj) {
            // state.element[obj.index].hot[obj.style_index].style = {top: '20%', left: '90%'};
            // console.log(state.element[obj.index].hot[obj.style_index]);

            state.element[obj.index].hot.splice(obj.style_index, 1);
        }
    }
});