<template>
    <el-container class="container-box bg-color">
        <el-dialog title="HTML" :visible.sync="dialogTableVisible">
            <div class="code-box">
                <textarea v-model="codeHTML"></textarea>
            </div>
        </el-dialog>


        <el-header class="header-box bottom-line">
            <span>
                DevTopic
            </span>
            <label>Bate</label>
            <el-row class="btns-box">
                <el-button type="primary" size="mini" @click="funCoding">生成代码</el-button>
            </el-row>
        </el-header>
        <el-container>
            <el-aside class="aside-box right-line">
                <ul>
                    <li class="bottom-line" @click="funAddImg">图片</li>
                    <li class="bottom-line" @click="funAddHot">热区</li>
                </ul>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-aside class="aside-right-box left-line">
                <el-collapse class="collapse-box" v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="属性" name="1">
                        <div>
                            bg: <span>{{$store.state.element[$store.state.elementIndex].bgImg}}</span>
                            <input type="text" v-model="$store.state.element[$store.state.elementIndex].bgImg">
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="反馈 Feedback" name="2">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </el-collapse-item>
                    <el-collapse-item title="element" name="4">
                        <div>{{$store.state.element}}</div>
                    </el-collapse-item>
                </el-collapse>
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
                codeHTML: null,
                activeNames: ['1'],
                dialogTableVisible: false
            }
        },
        created () {

        },
        methods: {
            /**
             * 生成代码
             */
            funCoding () {
                this.codeHTML = JSON.stringify(this.$store.state.element);
                // this.codeHTML = document.getElementById('mobile-model').outerHTML;

                let html = '';
                this.$store.state.element.map((el) => {
                    console.log(el);
                    let hot = '';
                    el.hot.map((hotEl, i) => {
                        let nn = (i) ? '            ' : '';
                        let style = JSON.stringify(hotEl.style).replace(/"/g,"");
                        style = style.substring(1, style.length - 1).replace(/,/g,";");
                        hot += `${nn}<a href="javascript:;" class="hot" style="${style}">${hotEl}</a>\n`
                    });

                    html += `    <div class="img-box">
                ${hot}
                <img src="${el.bgImg}">
        </div>\n`;
                });


                this.codeHTML = `<div id="topic-box">\n${html}</div>`;

                this.dialogTableVisible = true;
            },
            /**
             * 添加背景
             */
            funAddImg () {
                this.$store.commit('funAddElement', `../../../static/topic_pic/graduate_${++this.num}.jpg`);
            },
            /**
             * 添加热区
             */
            funAddHot () {
                let hot = {
                    style: {top: '10%', left: '10%'}
                };
                this.$store.state.element[this.$store.state.elementIndex].hot.push(hot);
            },
            handleChange (val) {
                console.log(val);
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

    .code-box {
        height: 500px;
        textarea {
            width: 100%;
            height: 100%;
        }
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
