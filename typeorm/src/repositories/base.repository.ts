import { DataSource, EntityTarget, FindManyOptions, FindOneOptions, ObjectLiteral, Repository } from "typeorm";
import { PaginationResponse } from "../types/response.type";

export class BaseRepository<T extends ObjectLiteral> {
  protected repository: Repository<T>;

  constructor(entity: EntityTarget<T>, private dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(entity);
  }

  findOne = async (filter: FindOneOptions<T> = {}): Promise<T | null> => {
    return await this.repository.findOne(filter);
  };

  findAll = async (filter: FindManyOptions<T> = {}): Promise<T[]> => {
    return await this.repository.find(filter);
  };

  create = async (data: T): Promise<T> => {
    return await this.repository.create(data);
  };

  bulkCreate = async (data: T[]): Promise<T[]> => {
    const entities = this.repository.create(data);
    return await this.repository.save(entities);
  };

  update = async (id: number, data: Partial<T>): Promise<void> => {
    await this.repository.update(id, data);
  };

  delete = async (ids: number[]): Promise<void> => {
    await this.repository.delete(ids);
  };

  paginate = async (
    page: number = 1,
    limit: number = 10,
    filter: FindManyOptions<T> = {}
  ): Promise<PaginationResponse<T>> => {
    const [data, total] = await this.repository.findAndCount({
      ...filter,
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data,
      total,
      page,
      limit,
    };
  };
}
