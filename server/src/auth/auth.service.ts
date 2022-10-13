import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserDto } from "src/dto/user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  private fakeDb: UserDto[] = [];

  constructor(private readonly jwtService: JwtService) {}

  async signUp(User: UserDto) {
    const candidate = this.fakeDb.find((user: UserDto) => user.email === User.email);

    if (candidate) return;

    const hashPassword = await bcrypt.hash(User.password, 5);

    this.fakeDb.push({ ...User, password: hashPassword });    

    const payload = { name: User.name, email: User.email };    

    return {
      token: this.jwtService.sign(payload)
    }
  }

  async signIn(User: UserDto) {              
    const user = this.fakeDb.find((user: UserDto) => user.email === User.email); 
        
    const passwordEquals = await bcrypt.compare(User.password, user.password);

    if (!user && !passwordEquals) return;

    return user;
  }
}