import request from "../utils/request";

export function testToken() {
    return request({
        url: 'qh/testToken',
        method: "post",
    })
}
export function testEmail() {
    return request({
        url: 'qh/testEmail',
        method: "GET",
    })
}
export function sendData(data) {
    return request({
        url: 'qh/testJob',
        method: 'POST',
        data: {
            job: data
        }
    })
}