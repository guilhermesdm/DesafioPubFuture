import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TipoReceita extends BaseModel {
  public static table = 'tipo_receita';

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'descricao_receita' })
  public descricaoReceita: string
}
