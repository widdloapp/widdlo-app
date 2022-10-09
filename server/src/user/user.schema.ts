import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class User {
    @Prop()
    name: string;

    @Prop()
    username: string;

    @Prop( {unique: true} )
    email: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);