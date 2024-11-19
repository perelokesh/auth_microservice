import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";

@Schema({
    timestamps: true,
    autoCreate: false,
  })

export abstract class BaseModel extends Document{
    _id: string | ObjectId;

    @Prop()
    createdAt:Date;

    @Prop()
    updatedAt: Date;

    static get schema(){
        return SchemaFactory.createForClass(this as any);
    }   
}