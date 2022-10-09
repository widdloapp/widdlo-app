import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class User {
    @Prop({ default: Date.now() })
    date: Date;

    @Prop()
    name: string;

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;
}

const UserSchema = SchemaFactory.createForClass(User).index({email: 1, username: 1}, {unique: true});

UserSchema.virtual('channels', {
    ref: 'Channel',
    localField: '_id',
    foreignField: 'user'
});

export { UserSchema };