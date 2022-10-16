import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { signInDto } from "src/dto/signIn.dto";
import { SignUpDto } from "src/dto/signUp.dto";

@Injectable()
export class AuthService {
  private fakeDb: any = [];

  constructor(private readonly jwtService: JwtService) {}

  async signUp(User: SignUpDto): Promise<object> {
    const candidate = this.fakeDb.find((user: SignUpDto) => user.email === User.email);

    if (candidate) return;

    const hashPassword = await bcrypt.hash(User.password, 5);

    this.fakeDb.push({ ...User, password: hashPassword });  
    
    const token = this.generateJwtToken({ name: User.name, email: User.email });    

    return { token };
  }

  async signIn(User: signInDto): Promise<SignUpDto> {              
    const user = this.fakeDb.find((user: signInDto) => user.email === User.email); 
        
    const passwordEquals = await bcrypt.compare(User.password, user.password);

    if (!user && !passwordEquals) return;

    return user;
  }

  generateJwtToken(payload: any): string {
    return this.jwtService.sign(payload);
  }
}