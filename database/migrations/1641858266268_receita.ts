import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Receita extends BaseSchema {
  protected tableName = 'receita'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.float('valor').notNullable()
      table.dateTime('data_recebimento').notNullable()
      table.dateTime('data_recebimento_esperado').notNullable()
      table.string('descricao').notNullable()

      table.integer('conta_id').references('id').inTable('conta').notNullable().unsigned()
      table.integer('tipo_receita_id').references('id').inTable('tipo_receita').notNullable().unsigned()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
