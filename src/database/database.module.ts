import { Module, Global } from '@nestjs/common';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config';

// const usersCollection = db.collection('users');
// const users = await usersCollection.find({}).toArray();
// console.log(users);

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { conection, user, password, host, port, dbName } =
          configService.mongo;
        return {
          uri: `${host}//${user}:${password}@${conection}/${dbName}`,
          user,
          pass: password,
          dbName,
        };
      },
      inject: [config.KEY],
    }),
  ],
  providers: [
    // {
    //   provide: 'mongo',
    //   useFactory: async (configService: ConfigType<typeof config>) => {
    //     const { conection, user, password, host, port, dbName } =
    //       configService.mongo;
    //     const uri = `${host}//${user}:${password}@${conection}/${dbName}`;
    //     const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });
    //     await client.connect();
    //     const db = client.db('shoppit');
    //     return db;
    //   },
    //   inject: [config.KEY],
    // },
  ],
  exports: [MongooseModule],
  //exports: ['mongo', MongooseModule],
})
export class DatabaseModule {}
