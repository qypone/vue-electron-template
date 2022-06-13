import _db from '../utils/db';
import { success, error, assembleTree } from '../utils/common';

const db = _db.db;
// 获取列表
export function authRoleList(query) {
  return new Promise((resolve, reject) => {
    let skip = (query.page - 1) * query.limit
    let limit = query.page * query.limit

    let list = db.get('auth_role').slice(skip, limit).value();
    let count = db.get('auth_role').size().value();
    console.log(list);
    resolve(success({
      list: list,
      total: count
    }, '获取成功'))
  })
}

// 获取权限
export function authRoleAuthList(data) {
  // return axios({
  //     url: "/admin/auth/role/authList",
  //     method: "get",
  //     params: query
  // });
  return new Promise((resolve, reject) => {
    // let roleId = Number(data['role_id']);
    let role = db.get('auth_role').find({ id: data['role_id'] }).value();
    let rules = role.hasOwnProperty('rules') ? role['rules'] : [];
    // let checked_keys = typeof rules === 'Array' ? rules : [];
    let ruleList = db.get('auth_rule').value();

    let ruleTree = assembleTree({
      data: ruleList,
      parent: 'pid',
      id: 'id',
      child: 'children'
    })
    let result = {
      auth_list: ruleTree,
      checked_keys: rules
    }
    resolve(success(result, '获取成功'))
  })
}
