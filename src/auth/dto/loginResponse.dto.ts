import { IsObject, IsString } from "class-validator";
import { User } from "src/models/user.model";

export class LoginResponseDto{
    @IsString()
    refreshToken: string

    @IsString()
    accessToken: string

    @IsObject()
    user: User
}