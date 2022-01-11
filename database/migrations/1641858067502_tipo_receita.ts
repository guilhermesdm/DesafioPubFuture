import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TipoReceita extends BaseSchema {
  protected tableName = 'tipo_receita'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.string('descricao_receita').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
