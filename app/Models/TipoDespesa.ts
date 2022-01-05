import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TipoDespesa extends BaseModel {
  public static table = 'tipo_despesa';

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'descricao_despesa' })
  public descricaoDespesa: string
}
