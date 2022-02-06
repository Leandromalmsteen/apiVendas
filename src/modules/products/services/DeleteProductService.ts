import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import Product from '../typeorm/entities/Product';
import AppError from '../../../shared/errors/AppError';

interface iRequest {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: iRequest): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
