import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, index: true })
  firstName: string;

  @Prop({ required: true, index: true })
  lastName: string;

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true, index: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  avatar: string;

  @Prop({ required: true })
  isVender: boolean;

  @Prop({ required: true })
  isActive: boolean;

  @Prop(
    raw({
      address_1: { type: String, required: true },
      address_2: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      postal_code: { type: String, required: true },
    }),
  )
  billing: Record<string, unknown>;

  @Prop(
    raw({
      address_1: { type: String, required: false },
      address_2: { type: String, required: false },
      city: { type: String, required: false },
      state: { type: String, required: false },
      country: { type: String, required: false },
      postal_code: { type: String, required: false },
    }),
  )
  shipping: Record<string, unknown>;

  @Prop({ required: true })
  createdAt?: Date;

  @Prop({ required: false })
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
