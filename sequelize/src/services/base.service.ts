import { FindOptions, IncludeOptions, Model, Transaction } from 'sequelize';
import { NotFoundException } from '../dtos/error/base.error';
import { getResponseMessage } from '../helpers/language.helper';
import { BaseRepository } from '../repositories/base.repository';
import { PaginationResponse } from '../types/response.type';

export class BaseLogic<T extends Model> {
  constructor(
    private readonly baseRepo: BaseRepository<T>,
    private readonly modelName: string
  ) { }

  findOne = async (filter: FindOptions = {}): Promise<T> => {
    const entity = await this.baseRepo.findOne(filter);
    if (!entity) throw new NotFoundException(getResponseMessage('NOT_FOUND', this.modelName));
    return entity;
  };

  findAll = async (filter: FindOptions = {}): Promise<T[]> => {
    const entities = await this.baseRepo.findAll(filter);
    return entities;
  };

  create = async (
    data: Partial<T>,
    includeModels: IncludeOptions[] = [],
    transaction?: Transaction
  ): Promise<T> => {
    return await this.baseRepo.create(data, includeModels, transaction);
  };

  bulkCreate = async (data: Partial<T>[], includeModels: IncludeOptions[] = []): Promise<T[]> =>
    await this.baseRepo.bulkCreate(data, includeModels);

  update = async (id: number, data: Partial<T>): Promise<void> =>
    await this.baseRepo.update(id, data);

  delete = async (ids: number[]): Promise<void> => await this.baseRepo.delete(ids);

  paginate = async (
    page: number = 1,
    limit: number = 10,
    filter: FindOptions<T> = {}
  ): Promise<PaginationResponse<T>> => await this.baseRepo.paginate(page, limit, filter);
}
