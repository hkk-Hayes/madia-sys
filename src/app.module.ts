import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './ustils/dbConfig';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot((dbConfig()as any)), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
