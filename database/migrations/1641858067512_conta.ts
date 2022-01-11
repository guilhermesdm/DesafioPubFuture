import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Conta extends BaseSchema {
  protected tableName = 'conta'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.float('saldo').notNullable()
      table.string('instiuicao').notNullable()
      table.integer('tipo_conta_id').references('id').inTable('tipo_conta').notNullable().unsigned()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
