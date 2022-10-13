import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly JwtService: JwtService
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const formattedToken: string = req.headers["authorization"].split(" ")[1]; 
      const isValidToken = await this.JwtService.verifyAsync(formattedToken);

      if (isValidToken) next();
    } catch (e) {
      throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
    }
  }
}