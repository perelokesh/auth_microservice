import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/models/user.model';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports:[
    MongooseModule.forFeature([User])
  ]
})
export class AuthModule {}
