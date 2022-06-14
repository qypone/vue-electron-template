const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const os = require('os');

class Db {
  constructor() {
    // 存储在本地目录
    const adapter = new FileSync(path.join(os.homedir(), 'datastore.json')); 
    this.db = low(adapter)
    this.createTable()
  }
  static getIntance() {
    if (!Db.instance) {
      Db.instance = new Db();
    }
    return Db.instance;
  }
  createTable() {
    // 初始化建表
    let tables = {
      auth_role: [
        {
          id: 'g4kSPxHV31',
          pid: 0,
          role_name: '超级管理员',
          status: 1,
          remark: '',
          rules: []
        },
        {
          id: '3123123',
          pid: 0,
          role_name: '超级管理员2',
          status: 1,
          remark: '',
          rules: []
        }
      ]
    }

    try {
      for (let index of Object.keys(tables)) {
        // this.db.set(index, tables[index]).write()
        let table = this.db.get(index).value();
        // console.log(index, table)
        if (!table) {
          this.db.set(index, tables[index]).write()
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}

let _db = Db.getIntance();

export default _db;
