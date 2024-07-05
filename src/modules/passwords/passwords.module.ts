import { Module } from '@nestjs/common';
import { PasswordsService } from './passwords.service';
import { PasswordsController } from './passwords.controller';
import { Password } from './entities/password.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Password])],
  controllers: [PasswordsController],
  providers: [PasswordsService],
  exports: [PasswordsService],
})
export class PasswordsModule {}
