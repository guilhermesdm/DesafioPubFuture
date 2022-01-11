import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Despesa extends BaseSchema {
  protected tableName = 'despesa'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.float('valor').notNullable()
      table.dateTime('data_pagamento').notNullable()
      table.dateTime('data_pagamento_esperado').notNullable()

      table.integer('conta_id').references('id').inTable('conta').notNullable().unsigned()
      table.integer('tipo_despesa_id').references('id').inTable('tipo_despesa').notNullable().unsigned()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
