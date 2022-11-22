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

export class Billing {
  @IsString()
  @IsNotEmpty()
  address_1: string;

  @IsString()
  @IsNotEmpty()
  address_2: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  postal_code: string;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;
  @IsNotEmpty()
  @IsString()
  readonly userName: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
  @IsNotEmpty()
  @IsString()
  readonly role: string;
  @IsNotEmpty()
  @IsUrl()
  readonly avatar: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly isVender: boolean;
  @IsNotEmpty()
  @IsBoolean()
  readonly isActive: boolean;
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => Billing)
  public billing?: Billing[];

  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => Billing)
  readonly shipping?: Billing[];
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class FilterUserDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;
}
