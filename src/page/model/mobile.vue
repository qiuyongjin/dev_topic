<template>
    <div id="mobile-model">
        <div class="img-box container bottom-line" v-for="(item,index) in $store.state.element" :key="index">
            <hot :hot="hot" :element="[index,hot_index]" v-for="(hot,hot_index) in item.hot" :key="hot_index"></hot>
            <img :src="item.bgImg" :alt="index" @click.stop="funSelect(index)">
        </div>
    </div>
</template>

<script>
    import comJS from '../../assets/js/common'
    import hot from './hot'

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
            // console.log(this.$store.state.count);
        },
        mounted () {

        },
        methods: {
            /**
             * 设置选择当前元素
             * @param index
             */
            funSelect (index) {
                this.$store.commit('funElementIndex', index);
            },
            test () {

            }
        },
        components: {hot}
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
        overflow-y: auto;
        overflow-x: hidden;
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
</style>


