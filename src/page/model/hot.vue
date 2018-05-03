<template>
    <div class="hot-element draggable" :data-index="element">
        <i class="del-hot" @click="funDelHot(element)">del</i>
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
            let _this = this;
            $('.draggable').draggable({
                // containment: ``,
                scroll: false,
                stop () {
                    let dataIndex = this.dataset.index.split(',');
                    let x = this.offsetLeft;
                    let y = this.offsetTop;
                    // let h = this.parentElement.clientHeight;

                    _this.$store.commit('setHotStyle', {
                        type: 0,
                        index: dataIndex[0],
                        style_index: dataIndex[1],
                        left: x, // _this.percent(x, 375),
                        top: y, // _this.percent(y, h)
                    })
                }
            }).resizable({
                // containment: ``,
                minHeight: 25,
                minWidth: 80,
                stop () {
                    let dataIndex = this.dataset.index.split(',');
                    let w = this.clientWidth;
                    let h = this.clientHeight;
                    // let H = this.parentElement.clientHeight;

                    _this.$store.commit('setHotStyle', {
                        type: 1,
                        index: dataIndex[0],
                        style_index: dataIndex[1],
                        width: w, // _this.percent(w, 375),
                        height: h, // _this.percent(h, H)
                    })
                }
            });
        },
        methods: {
            /**
             * 删除热区
             * @param index
             * @param style_index
             */
            funDelHot (objIndex) {
                console.log(objIndex);
                this.$store.commit('funDelHot', objIndex);
            },
            /**
             * px转换百分比
             * @param obj1 x\y
             * @param obj2 宽\高
             * @returns {string}
             */
            percent: function bfb (obj1, obj2) {
                return ((obj1 / obj2) * 100).toFixed(3) + "%";
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