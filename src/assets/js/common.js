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
    },
    isArrayExis (arr, str) {
        return arr.includes(str);
    }
}
