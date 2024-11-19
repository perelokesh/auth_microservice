import { Prop, Schema } from "@nestjs/mongoose";
import { BaseModel } from "./base.model";
import { Exclude } from "class-transformer";

@Schema()
export class User extends BaseModel{
    @Prop({ required: true, unique: true })
    username: string;

    @Exclude()
    @Prop({ required: true, unique: true })
    password: string;

    @Prop({ default: [] })
    roles: string[];
}