import { Body, Controller, Post } from "@nestjs/common";
import { signInDto } from "src/dto/signIn.dto";
import { SignUpDto } from "src/dto/signUp.dto";
import { AuthService } from "./auth.service";

@Controller("/api")
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post("/sign-up")
  signUp(@Body() User: SignUpDto) {    
    return this.AuthService.signUp(User);
  }

  @Post("/sign-in")
  signIn(@Body() User: signInDto) {
    return this.AuthService.signIn(User);
  }
}
