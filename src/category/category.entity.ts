// src/category/category.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description?: string;

  // Relasi one-to-many dengan Product
  @OneToMany(() => Product, product => product.category)
  products: Product[];
}
