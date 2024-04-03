import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/V1/user/user.module';
import { PatientModule } from './api/V1/patient/patient.module';

@Module({
  imports: [UserModule, PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
