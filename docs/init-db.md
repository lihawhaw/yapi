```
use admin;
db.auth("admin", "admin...");
# 创建 yapi 数据库
use yapi;
# 创建给 yapi 使用的账号和密码，限制权限
db.createUser({user: 'yapi',pwd: 'yapi...',roles: [{ role: "dbAdmin", db: "yapi" },{ role: "readWrite", db: "yapi" }]});
# 退出 Mongo Cli
exit
# 退出容器
exit

```