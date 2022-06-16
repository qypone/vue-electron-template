import request from '../utils/request'

export function getIssue(url) {
  return request({
    url: url,
    method: 'get'
  })
}
 