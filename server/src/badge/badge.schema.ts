import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

@Schema({toJSON: {virtuals: true, versionKey: false, transform: function (doc, ret) { delete ret._id }}})
export class Badge {
    @Prop()
    name: string;

    @Prop()
    type: string;

    @Prop()
    label: string;
}

export const BadgeSchema = SchemaFactory.createForClass(Badge);