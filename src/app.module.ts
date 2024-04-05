import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './api/v1/auth/auth.module';
import { UserModule } from './api/v1/user/user.module';
import { PatientModule } from './api/v1/patient/patient.module';

@Module({
  imports: [UserModule, PatientModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
