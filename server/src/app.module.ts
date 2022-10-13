import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthModule } from "./auth/auth.module";
import { AuthMiddleware } from "./middleware/auth.middleware";

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [JwtService]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes("/api/sign-in")
  }
}
