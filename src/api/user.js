import request from "../utils/request";

export function userLogin(data,psd) {
    return request({
        url: 'userlogin',
        method: "POST",
        data: {
            username: data.userName,
            password: psd
        }
    })
}

/**
 * 检查用户名是否存在
 */
export function userNameCheck(userName) {
    return request({
        url: 'userNameCheck',
        method: "POST",
        data: {
            userName:userName
        }
    })
}

/**
 * 获取手机验证码
 * @param phone
 * @returns {*}
 */
export function getPhoneCode(phone,modelCode) {
    return request({
        url: 'getPhoneCode',
        method: "POST",
        data: {
            phone: phone,
            modelCode: modelCode
        }
    })
}

/**
 * 使用手机验证码登录
 * @param loginData.Phone 手机号
 * @param loginData.Code 验证码
 * @returns {*}
 */
export function checkPhoneCode(loginData) {
    return request({
        url: 'checkPhoneCode',
        method: "POST",
        data: {
            phone: loginData.Phone,
            phoneCode: loginData.Code
        }
    })
}

/**
 * 用户简历列表
 * @param page
 * @param pagesize
 * @returns {*}
 */
export function getUserAllResumeList(page,pagesize,modelId) {
    return request({
        url: '/usercenter/getUserAllResumeList',
        method: "GET",
        params: {
            page: page,
            size: pagesize,
            jobId: modelId
        }
    })
}
/**
 * 用户专属简历列表
 * @param page
 * @param pagesize
 * @returns {*}
 */
export function getUserAllModelResumeList(page,pagesize) {
    return request({
        url: '/usercenter/getUserAllModelResumeList',
        method: "GET",
        params: {
            page: page,
            size: pagesize,
        }
    })
}

/**
 * 用户默认的简历简略信息
 */
export function getUserOneResume() {
    return request({
        url: '/usercenter/getUserOneResume',
        method: "GET",
    })
}
/**
 * 修改用户默认的简历
 */
export function updUserDefaultResume(resumeId) {
    return request({
        url: '/usercenter/updUserDefaultResume',
        method: "POST",
        data: {
            resumeId:resumeId
        }
    })
}
//投递历史记录
export function getUserResumeJob(page,pagesize) {
    return request({
        url: '/usercenter/getUserResumeJob',
        method: "GET",
        params: {
            page: page,
            size: pagesize,
        }
    })
}
//获取职位收藏
export function getJobCollection(page,pagesize) {
    return request({
        url: '/usercenter/getJobCollection',
        method: "GET",
        params: {
            page: page,
            size: pagesize,
        }
    })
}
//添加职位收藏
export function addJobCollection(jobId,Id) {
    return request({
        url: '/usercenter/addJobCollection',
        method: "POST",
        data: {
            jobId: jobId,
            Id: Id,
        }
    })
}
//删除职位收藏
export function deleteJobCollection(jId) {
    return request({
        url: '/usercenter/deleteJobCollection',
        method: "POST",
        data: {
            jId:jId
        }
    })
}
//修改密码
export function changePassword(newPassword,oldPassword) {
    return request({
        url: '/usercenter/changePassword',
        method: "POST",
        data: {
            newPassword: CryptoJS.MD5(newPassword).toString(),
            oldPassword: CryptoJS.MD5(oldPassword).toString(),
        }
    })
}

//修改密码-获得手机验证码
export function sendPasswordPhoneCode(PhoneNum) {
    return request({
        url: '/usercenter/sendPasswordPhoneCode',
        method: "POST",
        data: {
            phoneNum:PhoneNum
        }
    })
}
//修改密码-使用验证码
export function changePasswordByPhone(PhoneNum,Code,newPassword) {
    return request({
        url: '/usercenter/changePasswordByPhone',
        method: "POST",
        data: {
            phoneNum:PhoneNum,
            Code:Code,
            newPassword:CryptoJS.MD5(newPassword).toString(),
        }
    })
}
//找回密码-使用手机验证码
export function findPasswordByPhone(PhoneNum,Code,newPassword) {
    return request({
        url: '/findPasswordByPhone',
        method: "POST",
        data: {
            phoneNum:PhoneNum,
            Code:Code,
            newPassword:CryptoJS.MD5(newPassword).toString(),
        }
    })
}
//注册账号-使用手机
export function userRegister(registerData) {
    return request({
        url: '/userRegister',
        method: "POST",
        data: {
            phoneNum:registerData.Phone,
            Code:registerData.Code,
            newPassword:CryptoJS.MD5(registerData.passWord).toString(),
        }
    })
}
//登陆后查询用户基本信息
export function getUserInfo() {
    return request({
        url: '/usercenter/getUserInfo',
        method: "GET",
    })
}

// 投递简历
export function userResumeToJob(JobId,resumeId) {
    return request({
        url: '/usercenter/userResumeToJob',
        method: "POST",
        data: {
            JobId:JobId,
            resumeId:resumeId,
        }
    })
}