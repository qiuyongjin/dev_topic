<template>
    <div id="mobile-model">
        <div class="img-box bottom-line" v-for="(item,index) in 14" :key="index" @click="funSelect(index)">
            <div class="info">
                {{++index}}
                <p>{{hot.list}}</p>
            </div>
            <img :src="`../../../static/topic_pic/img${item}.jpg`" :alt="item">
        </div>
    </div>
</template>

<script>
    // import {getProject, getUserInfo, addProject} from "../../../assets/js/getData";
    // import {ding} from '../../../assets/js/common'

    export default {
        name: 'dev-topic',
        data () {
            return {
                count: this.$store.state.count,
                hot: {
                    list: [],
                    item: {}
                }
            }
        },
        created () {
            console.log(this.$store.state.count);
        },
        methods: {
            funSelect (index) {
                this.hot.list.push(index);
                this.hot.item[index] = `this is ${index}`;
                this.$store.commit('increment')
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
        .info {
            position: absolute;
            right: 0;
            bottom: 0;
        }
        &:after {
            background: red;
            /*background: #3af833;*/
        }
    }
</style>