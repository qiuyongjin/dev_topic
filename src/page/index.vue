<template>
    <el-container class="container-box bg-color">
        <el-header class="header-box bottom-line">
            <span>DevTopic</span>
            <el-row class="btns-box">
                <el-button type="primary" size="mini" @click="funMP">{{(status)?'Mobile':'PC'}}</el-button>
            </el-row>
        </el-header>
        <el-container>
            <el-aside class="aside-box right-line">
                <ul>
                    <li>图片</li>
                </ul>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-aside class="aside-right-box left-line">
                <ul>
                    <li>图片</li>
                </ul>
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
