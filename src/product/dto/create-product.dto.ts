// src/product/dto/create-product.dto.ts
export class CreateProductDto {
    readonly name: string;
    readonly description?: string;
    readonly price: number;
    readonly categoryId: number;
  }
  