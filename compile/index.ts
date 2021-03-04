/*
 tsc index.ts 编译ts为js文件
tsc index.ts -w 监视模式,保存会自动进行编译
新建tsconfig.json 文件内创建一个对象 在输出打tsc则会自动编译 此时在终端输入tsc -w则监视所有的ts文件

tsconfig.json是一个JSON文件，添加配置文件后，只需只需 tsc 命令即可完成对整个项目的编译

配置选项： 
 #### **include**
  - 定义希望被编译文件所在的目录
  - 路径: **表示任意目录
  -        *表示任意文件
  #### **exclude**
  - 定义需要排除在外的目录

***/

console.log('ts')