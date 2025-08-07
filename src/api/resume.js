import request from "@/utils/request";

export function addUserInfo(userResume) {
    return request({
        url: '/resume/addUserInfo',
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: userResume
    })
}
export function getUserInfo(resumeId) {
    return request({
        url: '/resume/getResumeById',
        method: "GET",
        params: {
            resumeId:resumeId
        }
    })
}
// 查询用户教育经历
export function getEducationById(resumeId) {
    return request({
        url: '/resume/getEducationById',
        method: "GET",
        params: {
            resumeId:resumeId
        }
    })
}

// 添加，修改用户教育经历
export function addEducation(educationList) {
    return request({
        url: '/resume/addEducation',
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: educationList
    })
}
// 查询用户求职意向/自我评价
export function getObjectiveById(resumeId) {
    return request({
        url: '/resume/getObjectiveById',
        method: "GET",
        params: {
            resumeId:resumeId
        }
    })
}
// 添加，修改用户求职意向/自我评价
export function addObjective(UserObjective) {
    return request({
        url: '/resume/addObjective',
        method: "POST",
        data: UserObjective
    })
}

// 查询用户工作实习经验
export function getWorkExpById(resumeId) {
    return request({
        url: '/resume/getWorkExpById',
        method: "GET",
        params: {
            resumeId:resumeId
        }
    })
}
// 添加，修改用户工作实习经验
export function addWorkExp(userWorkList) {
    return request({
        url: '/resume/addWorkExp',
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        data: userWorkList
    })
}

// 查询用户项目经验
export function getItemExpById(resumeId) {
    return request({
        url: '/resume/getItemExpById',
        method: "GET",
        params: {
            resumeId:resumeId
        }
    })
}
// 添加，修改用户项目经验
export function addItemExp(userItemList) {
    return request({
        url: '/resume/addItemExp',
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        data: userItemList
    })
}
// 查询用户语言能力
export function getLanguageById(resumeId) {
    return request({
        url: '/resume/getLanguageById',
        method: "GET",
        params: {
            resumeId:resumeId
        }
    })
}
// 添加，修改用户语言能力
export function addLanguage(UserLanAblityDetailList) {
    return request({
        url: '/resume/addLanguage',
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        data: UserLanAblityDetailList
    })
}
// 查询用户技能证书
export function getSkillById(resumeId) {
    return request({
        url: '/resume/getSkillById',
        method: "GET",
        params: {
            resumeId:resumeId
        }
    })
}
// 添加，修改用户技能证书
export function addSkill(userSkillList) {
    return request({
        url: '/resume/addSkill',
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        data: userSkillList
    })
}
// 添加，修改用户简历附件
export function addResumeFile(fileUrl,resumeId) {
    return request({
        url: '/resume/addResumeFile',
        method: "POST",
        data: {
            fileUrl:fileUrl,
            resumeId:resumeId
        }
    })
}
// 预览简历
export function viewResumeById(resumeId) {
    return request({
        url: '/resume/viewResume',
        method: "GET",
        params: {
            resumeId:resumeId
        }
    })
}
// 添加，修改用户简历头像
export function addResumeAvatarFile(fileUrl,resumeId) {
    return request({
        url: '/resume/addResumeAvatarFile',
        method: "POST",
        data: {
            fileUrl:fileUrl,
            resumeId:resumeId
        }
    })
}
