import { BaseModel, belongsTo, BelongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Despesa from './Despesa';
import Receita from './Receita';
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

  @hasMany(() => Despesa, { foreignKey: 'contaId' })
  public despesas: HasMany<typeof Despesa>

  @hasMany(() => Receita, { foreignKey: 'contaId' })
  public receitas: HasMany<typeof Receita>

}
