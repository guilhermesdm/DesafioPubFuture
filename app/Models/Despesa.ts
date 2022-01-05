import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Conta from './Conta';
import TipoDespesa from './TipoDespesa';

export default class Despesa extends BaseModel {
  public static table = 'despesa';

  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'valor' })
  public valor: number

  @column({ columnName: 'data_pagamento' })
  public dataPagamento: string

  @column({ columnName: 'data_pagamento_esperado' })
  public dataPagamentoEsperado: string

  @column({ columnName: 'conta_id' })
  public contaId: number

  @belongsTo(() => Conta, { foreignKey: 'contaId' })
  public conta: BelongsTo<typeof Conta>

  @column({ columnName: 'tipo_despesa_id' })
  public tipoDespesaId: number

  @belongsTo(() => TipoDespesa, { foreignKey: 'tipoDespesaId' })
  public tipoDespesa: BelongsTo<typeof TipoDespesa>
}
