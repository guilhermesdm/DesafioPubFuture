import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TipoConta from 'App/Models/TipoConta'

export default class TipoContaSeeder extends BaseSeeder {
  public async run () {

    await TipoConta.createMany([
      {
        id: 1,
        nome: 'Carteira'
      },
      {
        id: 2,
        nome: 'Conta Corrente'
      },
      {
        id: 3,
        nome: 'Poupança'
      }
    ])

  }
}
