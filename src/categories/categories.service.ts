import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from './DTOs/category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(CategoryEntity.name)
    private categoryModel: Model<CategoryEntity>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const createdCategory = new this.categoryModel(createCategoryDto);
    return createdCategory.save();
  }

  async findAll() {
    const allCategories = await this.categoryModel.find().exec();
    if (allCategories.length <= 0) {
      return { msg: 'No categories found' };
    } else {
      return allCategories;
    }
  }

  async findOne(id: string) {
    const category = this.categoryModel.findById(id).exec();
    if (!category) {
      return { msg: 'Category not found' };
    }
    return category;
  }

  async update(id: string, payload: UpdateCategoryDto) {
    const updatedCategory = await this.categoryModel
      .findByIdAndUpdate(id, payload, { new: true })
      .exec();
    if (!updatedCategory) {
      return { msg: 'Category not found' };
    }
    return updatedCategory;
  }

  async remove(id: string) {
    const deletedCategory = await this.categoryModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedCategory) {
      return { msg: 'Category not found in DB' };
    }
    return deletedCategory;
  }
}
