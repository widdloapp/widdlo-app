import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {User} from "../user/user.schema";
import mongoose from "mongoose";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class Badge {
    @Prop()
    name: string;

    @Prop()
    description: string;
}

export const BadgeSchema = SchemaFactory.createForClass(Badge);