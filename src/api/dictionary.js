import request from "../utils/request";

/**
 * 学历字典
 */
export function getEdu() {
    return request({
        url: '/dictionary/getEdu',
        method: "GET",
    })
}
/**
 * 工资字典
 */
export function getMoneHight() {
    return request({
        url: '/dictionary/getMone',
        method: "GET",
    })
}
/**
 * 工作性质字典
 */
export function getJobType() {
    return request({
        url: '/dictionary/getJobType',
        method: "GET",
    })
}
/**
 * 工作经验要求字典
 */
export function getJobExp() {
    return request({
        url: '/dictionary/getJobExp',
        method: "GET",
    })
}
/**
 * 省份字典
 */
export function getProvince() {
    return request({
        url: '/dictionary/getProvince',
        method: "GET",
    })
}

/**
 * 城市字典
 */
export function getCity(prcode) {
    return request({
        url: '/dictionary/getCity',
        method: "GET",
        params: {
            prcode: prcode
        }
    })
}

/**
 * 工作类字典
 */
export function getJobCategory() {
    return request({
        url: '/dictionary/getJobCategory',
        method: "GET",
    })
}
