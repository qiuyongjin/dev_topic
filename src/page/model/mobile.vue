<template>
    <div id="mobile-model">
        <img :src="`../../../static/topic_pic/img${item}.jpg`" alt="" v-for="item in 14">
    </div>
</template>

<script>
    // import {getProject, getUserInfo, addProject} from "../../../assets/js/getData";
    // import {ding} from '../../../assets/js/common'

    export default {
        name: 'dev-topic',
        data () {
            return {
                status: 0, // 0:mobile 1:PC
            }
        },
        created () {

        },
        methods: {
            funMP () {
                this.status = (this.status) ? 0 : 1;
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
</style>
