<template>
    <el-container class="container-box bg-color">
        <el-header class="header-box">
            <span>DevTopic</span>
        </el-header>
        <el-container>
            <el-aside class="aside-box">
                <ul>
                    <li>图片</li>
                </ul>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    // import {getProject, getUserInfo, addProject} from "../../../assets/js/getData";
    // import {ding} from '../../../assets/js/common'

    export default {
        name: 'dev-topic',
        data () {
            return {}
        },
        created () {

        },
        methods: {},
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
            }
        }
        .aside-box {
            width: 35px !important;
            text-align: center;
        }

    }

    .el-main {
        padding: 0 !important;
        background: #434a54;
    }
</style>
