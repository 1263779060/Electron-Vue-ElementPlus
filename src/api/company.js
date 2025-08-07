import request from "../utils/request";
import CryptoJS from "crypto-js";

/**
 * 企业用户登录
 */
export function CompanyLogin(username, password) {
    return request({
        url: '/company/companylogin',
        method: "POST",
        data: {
            username: username.userName,
            password: password
        }
    })
}
/**
 * 企业信息
 */
export function getCompanyInfoById() {
    return request({
        url: '/enterprise/getCompanyInfo',
        method: "GET"
    })
}
export function getCompanyWorkInfo() {
    return request({
        url: '/enterprise/getCompanyWorkInfo',
        method: "GET"
    })
}
/**
 * 使用手机验证码登录
 * @param loginData.Phone 手机号
 * @param loginData.Code 验证码
 * @returns {*}
 */
export function CompanyPhoneCode(loginData) {
    return request({
        url: '/companycheckPhoneCode',
        method: "POST",
        data: {
            phone: loginData.Phone,
            phoneCode: loginData.Code
        }
    })
}
export function getCompanyHomeJob(companyName) {
    return request({
        url: 'getCompany',
        method: "GET",
        params: {
            company: companyName
        }
    })
}

export function addJob(data) {
    return request({
        url: '/enterprise/addJob',
        method: "POST",
        data: data
    })
}
export function getJobList(page,pagesize,key) {
    return request({
        url: '/enterprise/getJobList',
        method: "GET",
        params: {
            page: page,
            size: pagesize,
            keyname : key.keyName,
            keytype : key.keyType,
            keyprovince : key.keyProvince
        }
    })
}

/**
 * 获得全部职位名称信息
 */
export function getJobNameList() {
    return request({
        url: '/enterprise/getJobNameList',
        method: "GET",
    })
}

/**
 * 修改职位状态
 */
export function changeJobStatus(statusType,job_id) {
    return request({
        url: '/enterprise/changeJobStatus',
        method: "POST",
        data: {
            status: statusType,
            jobId: job_id
        }
    })
}

/**
 * 修改职位置顶
 */
export function topJobSet(jobId,topStatus) {
    return request({
        url: '/enterprise/topJob',
        method: "POST",
        data: {
            jobId: jobId,
            topStatus: topStatus
        }
    })
}

/**
 * 查询全部简历信息
 */
export function getAllResume(page,pagesize,searchKey) {
    return request({
        url: '/enterpriseFind/getAllResume',
        method: "GET",
        params: {
            page: page,
            size: pagesize,
            keyCode: searchKey.keyCode,
            keySchool: searchKey.keySchool,
            keySex: searchKey.keySex,
            keyEdu: searchKey.keyEdu,
            keyGraduate: searchKey.keyGraduate,
            keyProvince: searchKey.keyProvince,
            keyCity: searchKey.keyCity,
            keyLanguage: searchKey.keyLanguage,
            keyHKProvince: searchKey.keyHKProvince,
            keyHKCity: searchKey.keyHKCity,
            keySalary: searchKey.keySalary,
            keyAge: searchKey.keyAge
        }
    })
}

/**
 * 查询投递的简历信息
 */
export function getResumeJob(page,pagesize,searchKey) {
    return request({
        url: '/enterprise/getResumeJob',
        method: "GET",
        params: {
            page: page,
            size: pagesize,
            keyname: searchKey.keyName,
            keyschool: searchKey.keySchool,
            keymajor: searchKey.keyMajor,
            keyedu: searchKey.keyEdu,
            keygraduate: searchKey.keyGraduate,
            keysex: searchKey.keySex,
            keyprovince: searchKey.keyProvince,
            keycity: searchKey.keyCity,
            keystatus: searchKey.keyStatus,
            keynoname: searchKey.keyNoName,
            status1: searchKey.status1,
            status2: searchKey.status2,
            status3: searchKey.status3
        }
    })
}
/**
 * 查询投递的简历信息
 */
export function getResumeRecycle(page,pagesize,searchKey) {
    return request({
        url: '/enterprise/getResumeRecycle',
        method: "GET",
        params: {
            page: page,
            size: pagesize,
            keyname: searchKey.keyName,
            keyschool: searchKey.keySchool,
            keymajor: searchKey.keyMajor,
            keyedu: searchKey.keyEdu,
            keygraduate: searchKey.keyGraduate,
            keysex: searchKey.keySex,
            keyprovince: searchKey.keyProvince,
            keycity: searchKey.keyCity,
            keystatus: searchKey.keyStatus,
            keynoname: searchKey.keyNoName,
            status1: searchKey.status1,
            status2: searchKey.status2,
            status3: searchKey.status3
        }
    })
}
/**
 * 根据id获取某一个简历的具体信息
 */
export function getResumeInfoById(rid) {
    return request({
        url: '/enterprise/getJobResumeInfoById',
        method: "GET",
        params: {
            rid: rid
        }
    })
}
/**
 * 购买简历模块
 * 根据id获取某一个简历的具体信息
 */
export function getBuyResumeInfoById(rid) {
    return request({
        url: '/enterprise/getBuyResumeInfoById',
        method: "GET",
        params: {
            rid: rid
        }
    })
}
/**
 * 根据id修改简历状态
 */
export function changeResumeStatus(status,rid) {
    return request({
        url: '/enterprise/changeResumeStatus',
        method: "POST",
        data: {
            status: status,
            rid: rid
        }
    })
}

/**
 * 下载简历-单独下载
 */
export function downloadResume(rid) {
    return request({
        url: '/enterprise/downloadResume',
        method: "GET",
        params: {
            resumeId: rid
        }
    })
}
/**
 * 下载简历-批量下载
 */
export function downloadResumeZip(rid) {
    return request({
        url: '/enterprise/downloadResumeList',
        method: "POST",
        responseType: 'blob',
        data: {
            resumeIdList: rid
        },
    })
}
/**
 * 收藏简历
 */
export function collectResume(data) {
    return request({
        url: '/enterprise/addCollectResume',
        method: "POST",
        data: {
            talentpackList: data
        },
    })
}
/**
 * 获得收藏简历列表
 */
export function getCollectResume(page,pagesize,searchKey) {
    return request({
        url: '/enterprise/getCollectResume',
        method: "GET",
        params: {
            page: page,
            size: pagesize,
            keystatus: searchKey.keyStatus,
            keyschool: searchKey.keySchool,
            keymajor: searchKey.keyMajor,
            keyedu: searchKey.keyEdu,
            keygraduate: searchKey.keyGraduate,
            keysex: searchKey.keySex,
            keyprovince: searchKey.keyProvince,
            keycity: searchKey.keyCity,
            keynoname: searchKey.keyNoName,
            status1: searchKey.status1,
        },
    })
}
/**
 * 统计职位收到的简历
 */
export function getStatisticsJobResume() {
    return request({
        url: '/enterprise/getStatisticsJobResume',
        method: "GET",
    })
}
/**
 * 统计简历信息
 */
export function getStatisticsResume(statistice) {
    return request({
        url: '/enterprise/getStatisticsResume',
        method: "GET",
        params: {
            statistice: statistice
        }
    })
}

/**
 * 修改公司信息
 */
export function updateCompanyInf(company) {
    return request({
        url: '/enterprise/updateCompanyInf',
        method: "POST",
        data: company
    })
}
/**
 * 公司认证信息
 */
export function optionCompanyApply() {
    return request({
        url: '/enterprise/optionCompanyApply',
        method: "GET",
    })
}
/**
 * 公司认证信息
 */
export function updateCompanyApply(data) {
    return request({
        url: '/enterprise/updateCompanyApply',
        method: "POST",
        data: data
    })
}
/**
 * 公司账号信息
 */
export function getCompanyContact() {
    return request({
        url: '/enterprise/getCompanyContact',
        method: "GET",
    })
}

/**
 * 修改公司账号信息
 */
export function saveCompanyContactInfo(data) {
    return request({
        url: '/enterprise/saveCompanyContactInfo',
        method: "POST",
        data: data
    })
}
/**
 * 公司子账号信息
 */
export function getUserCompany(cId) {
    return request({
        url: '/enterprise/getUserCompany',
        method: "GET",
        params: {
            companyId: cId
        }
    })
}
/**
 * 删除子账号信息
 */
export function delUserCompany(uid,cid) {
    return request({
        url: '/enterprise/delUserCompany',
        method: "POST",
        data: {
            userId: uid,
            companyId: cid
        }
    })
}
/**
 * 获得当前用户权限
 */
export function getByUserIdAndCompanyId(cid) {
    return request({
        url: '/enterprise/getByUserIdAndCompanyId',
        method: "GET",
        params: {
            companyId: cid
        }
    })
}
/**
 * 添加公司子账户
 */
export function addUserCompany(companyAuth,user,password,companyId) {
    return request({
        url: '/enterprise/addUserCompany',
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            companyAuth,
            username:user.USER_NAME,
            password:password,
            companyId: companyId
        }
    })
}

/**
 * 注册公司账号
 */
export function companyRegister(receivedData) {
    return request({
        url: '/company/companyRegister',
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: receivedData
    })
}
/**
 * 检查公司名称是否存在
 */
export function companyNameCheck(companyName) {
    return request({
        url: '/company/companyNameCheck',
        method: "POST",
        data: {
            companyName:companyName
        }
    })
}
/**
 * 检查公司名称是否存在
 */
export function companyPhoneCheck(phone) {
    return request({
        url: '/company/companyPhoneCheck',
        method: "POST",
        data: {
            phone:phone
        }
    })
}

/**
 * 注册公司账号-提交审核数据
 */
export function companyRegisterVerify(receivedData) {
    return request({
        url: '/company/companyRegisterVerify',
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: receivedData
    })
}
/**
 * 购买简历-批量购买
 */
export function buyResumeTalent(CompanyId,ResumeId) {
    return request({
        url: '/enterprise/buyResumeTalent',
        method: "POST",
        data: {
            CompanyId: CompanyId,
            ResumeId: ResumeId
        },
    })
}
/**
 * 购买简历-单独购买
 */
export function buyResumeTalentByOne(CompanyId,ResumeId) {
    return request({
        url: '/enterprise/buyResumeTalentByOne',
        method: "POST",
        data: {
            CompanyId: CompanyId,
            ResumeId: ResumeId
        },
    })
}

/**
 * 导出excel时使用的获取职位信息
 */
export function jobInfoExcel() {
    return request({
        url: '/enterpriseFind/jobInfoExcel',
        method: "GET",
    })
}

/**
 * 导出excel
 */
export function downloadExcel(jobIdList) {
    return request({
        url: '/enterpriseDown/downloadExcel',
        responseType: 'blob',
        method: "POST",
        data: {
            jobIdList:jobIdList
        }
    })
}

//企业
//找回密码-使用手机验证码
export function companyfindPasswordByPhone(UserName,PhoneNum,Code,newPassword) {
    return request({
        url: '/company/companyfindPasswordByPhone',
        method: "POST",
        data: {
            userName:UserName,
            phoneNum:PhoneNum,
            Code:Code,
            newPassword:CryptoJS.MD5(newPassword).toString(),
        }
    })
}