export function dbConfig()  {
    return {
        type: 'mysql', // 数据库类型
        host: '45.32.77.139', // 数据库地址
        port: 3306, // 端口
        username: 'files', // 用户名
        password: '123456', // 密码
        database: 'files', // 数据库名
        entities: [__dirname + '/../**/*.entity{.ts,.js}'], // 实体类
        synchronize: true, // 自动创建表
        autoLoadEntities: true, // 自动加载实体类
    } as any
}
