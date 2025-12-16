/**
 * 移除字符串中的HTML标签和HTML实体
 * @param str 需要处理的字符串
 * @returns 返回移除HTML标签和实体后的字符串
 */
function removeHtmlTag(str: string) {
    if (!str) { return '' }
    return str.replace(/<[^>]+>|&[^>]+;/g, '').trim()
}

export default removeHtmlTag
