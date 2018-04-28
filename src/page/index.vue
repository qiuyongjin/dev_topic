<template>
    <el-container class="container-box bg-color">
        <el-header class="header-box bottom-line">
            <span>
                DevTopic
            </span>
            <label>_Bate</label>
            <el-row class="btns-box">
                <el-button type="primary" size="mini" @click="funModel">{{(model)?'手机':'电脑'}}</el-button>
            </el-row>
        </el-header>
        <el-container>
            <el-aside class="aside-box right-line">
                <ul>
                    <li class="bottom-line" @click="funAddImg">图片</li>
                    <li class="bottom-line">热区</li>
                </ul>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-aside class="aside-right-box left-line">
                <div class="console-box">{{$store.state}}</div>
            </el-aside>
        </el-container>
    </el-container>
</template>

<script>
    // import {getProject, getUserInfo, addProject} from "../../../assets/js/getData";
    // import {ding} from '../../../assets/js/common'

    export default {
        name: 'dev-topic',
        data () {
            return {
                num: 1,
                model: 0, // 0:mobile 1:PC
            }
        },
        created () {

        },
        methods: {
            funModel () {
                this.model = (this.model) ? 0 : 1;
            },
            funAddImg () {
                this.$store.commit('funAddImg', `../../../static/topic_pic/img${++this.num}.jpg`);
            }
        },
        components: {}
    }
</script>

<style scoped lang="scss">
    @import "../assets/style/mixin";

    .bg-color {
        background: #303030;
    }

    .container-box {
        height: 100%;
        color: #fff;
        .header-box {
            span {
                @include lineHeight(60px);
                display: inline-block;
                font-size: 25px;
                text-indent: 15px;
            }
            .btns-box {
                display: inline-block;
                float: right;
                height: 60px;
                line-height: 60px;
            }
            &:after {
                background: #000;
            }
        }
        .aside-box {
            width: 35px !important;
            text-align: center;
            li {
                @include wh(35px, 35px);
                display: inline-block;
                line-height: 35px;
                cursor: pointer;
                &:after {
                    background: #434a54;
                }
            }
            &:after {
                background: #000;
            }
        }
        .aside-right-box {
            &:after {
                background: #000;
            }
        }
    }

    .el-main {
        @include fj();
        /*justify-content: center;*/
        align-items: center;
        position: relative;
        padding: 0 !important;
        background: #434a54;
    }
</style>
