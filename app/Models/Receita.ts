import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Conta from './Conta';
import TipoReceita from './TipoReceita';

export default class Receita extends BaseModel {
  public static table = 'receita';

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'valor' })
  public valor: number

  @column({ columnName: 'data_recebimento' })
  public dataRecebimento: string

  @column({ columnName: 'data_recebimento_esperado' })
  public dataRecebimentoEsperado: string

  @column({ columnName: 'descricao' })
  public descricao: string

  @column({ columnName: 'conta_id' })
  public contaId: number

  @belongsTo(() => Conta, { foreignKey: 'contaId' })
  public conta: BelongsTo<typeof Conta>

  @column({ columnName: 'tipo_receita_id' })
  public tipoReceitaId: number

  @belongsTo(() => TipoReceita, { foreignKey: 'tipoReceitaId' })
  public tipoReceita: BelongsTo<typeof TipoReceita>

}
