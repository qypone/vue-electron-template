import _db from '../utils/db';
import { success, error, assembleTree } from '../utils/common';

const db = _db.db;
// 获取列表
export function queryAll(query) {
  return new Promise((resolve, reject) => {
    let skip = (query.page - 1) * query.limit
    let limit = query.page * query.limit

    let list = db.get('t_issues').slice(skip, limit).value();
    let count = db.get('t_issues').size().value();

    resolve(success({
      list: list,
      total: count
    }, '获取成功'))
  })
}

// 保存配置
export function saveBaseConfig(data, method = 'post') {
  return new Promise((resolve, reject) => {
    db.set('t_config', 
      { 
        domainName: data['domainName'],
        username: data['username'],
        password: data['password']
      })
     .write();
    let result = success(data, '添加成功');
    resolve(result)
  })
}

export function getBaseConfig() {
  return new Promise((resolve, reject) => {
    let config = db.get('t_config').value();
    let result = success(config, '查询基础配置成功');
    resolve(result)
  })
}

