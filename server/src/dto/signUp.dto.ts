export class SignUpDto {
  readonly id: number;
  readonly name?: string;
  readonly surname?: string;
  readonly email: string;
  readonly password: string;
}