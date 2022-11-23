import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CategoryEntity } from 'src/categories/entities/category.entity';

export class ProductEntity {
  name: string;
  description: string;
  shortDescription: string;
  stock: number;
  price: string;
}
