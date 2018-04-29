<template>
    <div id="mobile-model">
        <div class="img-box bottom-line" v-for="(item,index) in $store.state.element" :key="index" @click="funSelect(index)">
            <a href="javascript:;" class="hot-element" :style="style.style"
               v-for="(style,style_index) in item.hot"
               @mousemove="onmousemove"
               @mousedown="onmousedown"
               @mouseup="onmouseup">
                <i @click="funDelHot(index,style_index)">del</i>
            </a>
            <img :src="item.bgImg" :alt="index">
        </div>
    </div>
</template>

<script>
    import comJS from '../../assets/js/common'

    export default {
        name: 'dev-topic',
        data () {
            return {
                dragStart: 0,
                hotX: 0,
                hotY: 0
            }
        },
        created () {
            console.log(this.$store.state.count);
        },
        methods: {
            /**
             * 设置选择当前元素
             * @param index
             */
            funSelect (index) {
                this.$store.commit('funElementIndex', index);
            },
            /**
             * 删除热区
             * @param index
             * @param style_index
             */
            funDelHot (index, style_index) {
                this.$store.commit('funDelHot', {index: index, style_index: style_index});
            },
            /**
             * 移动热区
             * @param e
             * @returns {boolean}
             */
            onmousemove: function (e) {
                if (this.dragStart != 1) return false;

                let element = e.target;
                let w = element.clientWidth;


                // element.style.top = element.offsetTop + (e.offsetY - element.offsetTop) + 'px';
                let x = element.offsetLeft + (e.offsetX - this.hotX);
                let y = element.offsetTop + (e.offsetY - this.hotY);


                element.style.left = (x < 0) ? 0 : x + 'px';
                element.style.top = (y < 0) ? 0 : y + 'px';
                // console.log(e);
                // console.log(element.offsetLeft + e.offsetX, e.offsetX);
            },
            onmousedown (e) {
                e.preventDefault();
                this.dragStart = 1;
                this.hotX = e.offsetX;
                this.hotY = e.offsetY;

                let element = e.target;
                let w = element.clientWidth;


                console.log(e);
                // console.log(e.clientX);
                console.log(e.offsetX);


            },
            onmouseup () {
                this.dragStart = 0;
            }
        },
        components: {}
    }
</script>

<style scoped lang="scss">
    @import "../../assets/style/mixin";

    #mobile-model {
        width: 375px;
        height: 667px;
        color: #000;
        margin-left: 10%;
        background: #fff;
        overflow: auto;
        img {
            width: 100%;
            display: block;
        }
    }

    .img-box {
        position: relative;
        &:after {
            background: red;
            /*background: #3af833;*/
        }
    }

    .hot-element {
        @include wh(200px, 100px);
        -webkit-box-direction: normal;
        cursor: all-scroll;
        display: inline-block;
        position: absolute;
        border: red 1px solid;
        background: rgba(255, 0, 0, 0.5);
        i {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
        }
    }

</style>