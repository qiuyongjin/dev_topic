<template>
    <div id="mobile-model">
        <div class="img-box bottom-line" v-for="(item,index) in $store.state.bgItem" :key="index" @click="funSelect(index)">
            <div class="info">
                {{++index}}
            </div>
            <img :src="item" :alt="index">
        </div>
    </div>
</template>

<script>
    import comJS from '../../assets/js/common'

    export default {
        name: 'dev-topic',
        data () {
            return {
                count: this.$store.state.count,
                /*bgItem: [
                    `../../../static/topic_pic/img1.jpg`
                ],*/
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
                let t = comJS.isArrayExis(this.hot.list, index);
                console.log(t);
                if (!t) {
                    this.hot.list.push(index);
                    this.hot.item[index] = `this is ${index}`;
                    this.$store.state.hot = this.hot;
                    this.$store.commit('increment');
                }
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