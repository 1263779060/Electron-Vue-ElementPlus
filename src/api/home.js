import request from "../utils/request";

// 热门推荐
export function getPopularPositions() {
    return request({
        url: 'getPopularPositions',
        method: "GET",
    })
}

// 最新职位
export function getLatestPositions() {
    return request({
        url: 'getLatestPositions',
        method: "GET",
    })
}

// 行业名企
export function getFamousEnterprises() {
    return request({
        url: 'getFamousEnterprises',
        method: "GET",
    })
}

// 热门职位
export function getHotJobs() {
    return request({
        url: 'getHotJobs',
        method: "GET",
    })
}

// 热门-实习职位
export function getInternship() {
    return request({
        url: 'getInternship',
        method: "GET",
    })
}

// 小启说
export function getEntrepreneurships(page,pageSize) {
    return request({
        url: 'getEntrepreneurships',
        method: "GET",
        params: {
            page: page,
            pageSize:pageSize
        }
    })
}
// 根据id获得小启说
export function getEntrepreneurshipsById(mesCode) {
    return request({
        url: 'getEntrepreneurshipsById',
        method: "GET",
        params: {
            mesCode: mesCode
        }
    })
}

// 全部职位
export function getAllJobInfo(data) {
    return request({
        url: 'getAllJobInfo',
        method: "GET",
        params: data
    })
}

// 根据Id查询职位
export function getSysInfoById(data) {
    return request({
        url: 'getSysInfoById',
        method: "GET",
        params: {
            sId: data
        }
    })
}

// 公司类型和当前职位类型查询数据
export function getSysInfoByIndustryTypesAndModule(page, pageSize, industryTypes, module) {
    return request({
        url: 'findAllByIndustryTypesAndModule',
        method: "GET",
        params: {
            page: page,
            pageSize: pageSize,
            industryTypes: industryTypes,
            module: module,
        }
    })
}