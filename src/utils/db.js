const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const os = require('os');

class Db {
  constructor() {
    // 存储在本地目录
    const adapter = new FileSync(path.join(os.homedir(), 'xingK_db.json')); 
    this.db = low(adapter)
    this.createTable()
  }

  static getIntance() {
    if (!Db.instance) {
      Db.instance = new Db();
    }
    return Db.instance;
  }

  // 初始化建表和数据
  createTable() {
    let tables = {
      t_issues: [
        {
          id: 'XingK-001',
          name: '测试任务1',
          assign: 'XingK',
          desc: '我是测试任务',
          point: 5,
          sprint: '冲刺--穿越星空'
        }
      ],
      t_config: {

      },
      t_issueTemplate: [
       
      ]
    }

    try {
      for (let index of Object.keys(tables)) {
        // 查看表是否存在，不存在则创建
        let table = this.db.get(index).value();
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
