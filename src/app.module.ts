import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './config/database.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigSchemas } from './config/config.schemas';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: ConfigSchemas.validations,
    }),
    DatabaseModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
