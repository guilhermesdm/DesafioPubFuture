import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TipoConta extends BaseSchema {
  protected tableName = 'tipo_conta'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('nome').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
