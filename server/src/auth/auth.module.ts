import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY || "SECRET",
      signOptions: {
        expiresIn: "24h"
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})

export class AuthModule {};