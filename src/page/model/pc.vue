<template>
    <div id="pc-model">
        <hot-test></hot-test>
    </div>
</template>

<script>
    import hotTest from './hot_test'

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
        components: {hotTest}
    }
</script>

<style scoped lang="scss">
    @import "../../assets/style/mixin";

    #pc-model {
        @include wh(100%, 100%);
        color: #000;
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


