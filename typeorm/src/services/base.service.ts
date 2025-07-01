import { FindManyOptions, FindOneOptions, ObjectLiteral } from 'typeorm';
import { NotFoundException } from '../dtos/error/base.error';
import { getResponseMessage } from '../helpers/language.helper';
import { BaseRepository } from '../repositories/base.repository';
import { PaginationResponse } from '../types/response.type';

export class BaseService<T extends ObjectLiteral> {
  constructor(
    private readonly baseRepo: BaseRepository<T>,
    private readonly modelName: string
  ) { }

  findOne = async (filter: FindOneOptions<T> = {}): Promise<T> => {
    const entity = await this.baseRepo.findOne(filter);
    if (!entity) {
      throw new NotFoundException(getResponseMessage('NOT_FOUND', this.modelName));
    }
    return entity;
  };

  findAll = async (filter: FindManyOptions<T> = {}): Promise<T[]> => {
    return await this.baseRepo.findAll(filter);
  };

  create = async (data: T): Promise<T> => {
    return await this.baseRepo.create(data);
  };

  bulkCreate = async (data: T[]): Promise<T[]> => {
    return await this.baseRepo.bulkCreate(data);
  };

  update = async (id: number, data: Partial<T>): Promise<void> => {
    return await this.baseRepo.update(id, data);
  };

  delete = async (ids: number[]): Promise<void> => {
    return await this.baseRepo.delete(ids);
  };

  paginate = async (
    page: number = 1,
    limit: number = 10,
    filter: FindManyOptions<T> = {}
  ): Promise<PaginationResponse<T>> => {
    return await this.baseRepo.paginate(page, limit, filter);
  };
}
