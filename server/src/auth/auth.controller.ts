import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "../dto/user.dto";
import { AuthService } from "./auth.service";

@Controller("/api")
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post("/sign-up")
  signUp(@Body() User: UserDto) {    
    return this.AuthService.signUp(User);
  }

  @Post("/sign-in")
  signIn(@Body() User: UserDto) {
    return this.AuthService.signIn(User);
  }
}
