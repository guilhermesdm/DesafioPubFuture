import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TipoDespesa extends BaseSchema {
  protected tableName = 'tipo_despesa'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.string('descricao_despesa').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
