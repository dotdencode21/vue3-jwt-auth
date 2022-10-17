import { Body, Controller, Post } from "@nestjs/common";
import { signInDto } from "src/dto/signIn.dto";
import { SignUpDto } from "src/dto/signUp.dto";
import { AuthService } from "./auth.service";

@Controller("/api")
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post("/sign-up")
  async signUp(@Body() user: SignUpDto): Promise<{ token: string }> {    
    const token: any = await this.AuthService.signUp(user);

    return token;
  }

  @Post("/sign-in")
  async signIn(@Body() user: signInDto): Promise<SignUpDto> {
    const currentUser: any = await this.AuthService.signIn(user);

    return currentUser;
  }
}
