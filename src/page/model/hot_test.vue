<template>
    <div class="hot-element"
         :onmousemove="funMove"
         onmousedown="funDown">

    </div>
</template>

<script>
    export default {
        props: ['hot', 'element'],
        name: "hot",
        data () {
            return {
                el: null
            }
        },
        created () {

        },
        mounted () {
        },
        methods: {
            funMove () {

            },
            funDown () {

            },
            funStart () {

            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/style/mixin";

    .hot-element {
        @include wh(200px, 100px);
        -webkit-box-direction: normal;
        cursor: all-scroll;
        display: inline-block;
        position: absolute;
        border: rgba(255, 0, 0, 0.5) 1px solid;
        background: rgba(255, 0, 0, 0.2);
        i {
            position: absolute;
        }
        .del-hot {
            top: 0;
            right: 0;
            cursor: pointer;
        }
        &:hover {
            z-index: 10;
            /*border-color: red;*/
            /*background: rgba(255, 0, 0, 0.5);*/
        }
    }
</style>