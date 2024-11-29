import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig, { CONFIG_DATABASE } from './config/database.config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule,
    ConfigModule.forRoot({
      load:[databaseConfig],
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:async (configService: ConfigService) => {
         return {
          uri: configService.get(CONFIG_DATABASE).users.uri
         }
      },
      inject: [ConfigService],
    })
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
