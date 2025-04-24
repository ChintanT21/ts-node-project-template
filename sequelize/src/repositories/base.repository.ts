import { Model, ModelStatic, FindOptions, WhereOptions, IncludeOptions, Transaction } from "sequelize";
import { PaginationResponse } from "../types/response.type";

export class BaseRepository<T extends Model> {
  constructor(private readonly model: ModelStatic<T>) {}

  findOne = async (filter: FindOptions = {}): Promise<T | null> => {
    return await this.model.findOne({
      where: filter.where,
      include: filter.include || undefined,
    });
  };

  findAll = async (filter: FindOptions = {}): Promise<T[]> => {
    const entities = await this.model.findAll({
      where: filter.where || undefined,
      include: filter.include || undefined,
    });
    return entities;
  };

  create = async (data: Partial<T>, includeModels: IncludeOptions[] = [], transaction?: Transaction): Promise<T> => {
    return await this.model.create(data as any, {
      include: includeModels,
      transaction,
    });
  };

  bulkCreate = async (data: Partial<T>[], includeModels: IncludeOptions[] = []): Promise<T[]> => {
    return await this.model.bulkCreate(data as any, {
      include: includeModels,
    });
  };

  update = async (id: number, data: Partial<T>): Promise<void> => {
    Object.keys(data).forEach((key) => {
      const typedKey = key as keyof T;
      if (data[typedKey] === undefined) {
        data[typedKey] = null as T[keyof T];
      }
    });
    await this.model.update(data, {
      where: { id } as WhereOptions,
    });
  };

  delete = async (ids: number[]): Promise<void> => {
    await this.model.destroy({
      where: { id: ids } as WhereOptions,
    });
  };

  paginate = async (
    page: number = 1,
    limit: number = 10,
    filter: FindOptions<T> = {}
  ): Promise<PaginationResponse<T>> => {
    const { count: total, rows: data } = await this.model.findAndCountAll({
      where: filter.where || undefined,
      include: filter.include || undefined,
      offset: (page - 1) * limit,
      limit,
      order: filter.order,
      distinct: true,
    });
    return {
      data,
      total,
      page,
      limit,
    };
  };
}
