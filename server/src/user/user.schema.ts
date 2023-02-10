import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {Field, ObjectType} from "@nestjs/graphql";

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
@ObjectType()
export class User {
    @Prop({ default: Date.now() })
    @Field()
    date: Date;

    @Prop()
    @Field()
    name: string;

    @Prop()
    @Field()
    username: string;

    @Prop()
    @Field()
    email: string;

    @Prop()
    @Field()
    password: string;

    @Field()
    avatar: string;

    @Prop({default: false})
    @Field()
    verified: boolean;
}

const UserSchema = SchemaFactory.createForClass(User).index({email: 1, username: 1}, {unique: true});

UserSchema.virtual('channels', {
    ref: 'Channel',
    localField: '_id',
    foreignField: 'user'
});

export { UserSchema };