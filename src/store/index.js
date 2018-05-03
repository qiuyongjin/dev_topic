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
                    // {
                    //     style: {width: '200px', height: '100px', top: '10%', left: '20%'}
                    // }
                ],
                bgImg: '../../../static/topic_pic/graduate_1.jpg'
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
                hot: [],
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
            state.element[obj[0]].hot.splice(obj[1], 1);
        },
        /**
         * 修改热区样式
         * @param state
         * @param obj
         */
        setHotStyle (state, obj) {
            let el = state.element[obj.index].hot[obj.style_index].style;
            if (obj.type == 0) {
                // state.element[obj.index].hot[obj.style_index].style = {left: obj.left, top: obj.top};
                el.left = obj.left;
                el.top = obj.top;
            }
            else {
                // state.element[obj.index].hot[obj.style_index].style = {width: obj.width, height: obj.height};
                el.width = obj.width;
                el.height = obj.height;
            }
        }
    }
});