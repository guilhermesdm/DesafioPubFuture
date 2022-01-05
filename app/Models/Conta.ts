import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import TipoConta from './TipoConta';

export default class Conta extends BaseModel {
  public static table = 'conta';

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'saldo' })
  public saldo: number

  @column({ columnName: 'instituicao' })
  public instituicao: string

  @column({ columnName: 'tipo_conta_id' })
  public tipoContaId: number

  @belongsTo(() => TipoConta, { foreignKey: 'tipoContaId' })
  public tipoConta: BelongsTo<typeof TipoConta>
}
