export default {
    /**
     * 判断字符是否存在
     * @param {string} str1 - 原始字符串
     * @param {string} str2 - 需要查找的字符串
     * @returns {boolean}
     */
    isStrExis (str1, str2) {
        if (str1 && str2 && str1.indexOf(str2) >= 0) {
            return true;
        } else {
            return false;
        }
    }
}

export const ding = {
    alert (msg) {
        DingTalkPC.device.notification.alert({
            message: msg,
            title: "提示",//可传空
            buttonName: "收到",
            onSuccess: function () {
                /*回调*/
            },
            onFail: function (err) {
            }
        });
    },
    /**
     * 打开侧边栏
     * @param {string} url - 打开侧边栏的url
     * @param {string} title - 侧边栏顶部标题
     */
    openSlidePanel (url, title) {
        DingTalkPC.biz.util.openSlidePanel({
            url: url,
            title: title,
            onSuccess: function (result) {
                /*
                     调用biz.navigation.quit接口进入onSuccess, result为调用biz.navigation.quit传入的数值
                 */
            },
            onFail: function () {
                /*
                    tips:点击右上角上角关闭按钮会进入onFail
                 */
            }
        })
    }
};
