<template>
    <div id="mobile-model">
        <div class="img-box bottom-line" v-for="(item,index) in $store.state.element" :key="index" @click="funSelect(index)">
            <a href="javascript:;" class="hot-element" :style="style.style" v-for="(style,style_index) in item.hot">
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
            return {}
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
            funDelHot (index, style_index) {
                this.$store.commit('funDelHot', {index: index, style_index: style_index});
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
        @include wh(30%, 30%);
        display: inline-block;
        position: absolute;
        border: red 1px solid;
        background: rgba(255, 0, 0, 0.5);
        i {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

</style>