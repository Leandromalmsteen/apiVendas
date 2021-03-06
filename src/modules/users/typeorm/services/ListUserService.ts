import User from '../entities/Users';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/usersRepository';

class ListUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = usersRepository.find();

    return users;
  }
}

export default ListUserService;
