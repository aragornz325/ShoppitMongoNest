import {
  IsNotEmpty,
  IsString,
  IsUrl,
  IsEmail,
  IsBoolean,
  IsPhoneNumber,
  IsDefined,
  IsNotEmptyObject,
  ValidateNested,
  IsObject,
  IsOptional,
  IsPositive,
  Min,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsOptional()
  @IsString()
  slug: string;
  @IsOptional()
  @IsUrl()
  image: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
