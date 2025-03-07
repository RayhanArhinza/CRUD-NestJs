// src/product/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from '../category/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column('decimal', { default: 0 })
  price: number;

  // Relasi many-to-one: setiap product wajib memiliki category
  @ManyToOne(() => Category, category => category.products, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column()
  categoryId: number;
}
