import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsDate,
  IsPhoneNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userName: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  middleName?: string;

  @ApiProperty()
  @IsBoolean()
  isSuperUser?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isStaff?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  userCreated?: Date;

  @ApiProperty()
  @IsPhoneNumber('PH', {
    message: 'Contact number must be a valid Philippine phone number',
  })
  @IsOptional()
  contactNumber?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty()
  @IsOptional()
  profilePicture?: string;

  @IsString()
  @IsNotEmpty()
  department: string;

  @IsString()
  @IsNotEmpty()
  campus: string;
}
