import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dacolz:bolado321@totalzero.0giy7.mongodb.net/users',
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
