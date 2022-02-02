import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      `${process.env.MONGODB_CONNECTION}/users`,
      // `mongodb+srv://dacolz:bolado321@totalzero.0giy7.mongodb.net/users`,
      // {
      //   connectionName: 'users',
      // },
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
