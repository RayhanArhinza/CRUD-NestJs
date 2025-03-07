// src/product/product.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Category } from '../category/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    // Pastikan kategori dengan categoryId tersedia
    const category = await this.categoryRepository.findOneBy({ id: createProductDto.categoryId });
    if (!category) {
      throw new NotFoundException(`Category dengan id ${createProductDto.categoryId} tidak ditemukan`);
    }
    const product = this.productRepository.create({
      ...createProductDto,
      category,
    });
    return this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['category'] });
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['category'],
    });
    if (!product) {
      throw new NotFoundException(`Product dengan id ${id} tidak ditemukan`);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    if (updateProductDto.categoryId) {
      // Jika ingin mengubah kategori, pastikan kategori baru ada
      const category = await this.categoryRepository.findOneBy({ id: updateProductDto.categoryId });
      if (!category) {
        throw new NotFoundException(`Category dengan id ${updateProductDto.categoryId} tidak ditemukan`);
      }
      product.category = category;
    }
    Object.assign(product, updateProductDto);
    return this.productRepository.save(product);
  }

  async remove(id: number): Promise<void> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product dengan id ${id} tidak ditemukan`);
    }
  }
}
