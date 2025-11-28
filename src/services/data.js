import request from '../utils/request';
export function getSomeData(params) {
    return request({
        method: "GET",
        url: '/appservice/common/v1/getSomeData',
        data: JSON.stringify(params),
    })
}