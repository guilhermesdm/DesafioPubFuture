import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TipoConta extends BaseModel {
  public static table = 'tipo_conta';

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'nome' })
  public nome: string
}
