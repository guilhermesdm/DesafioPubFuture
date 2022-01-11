import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TipoReceita from 'App/Models/TipoReceita'

export default class TipoReceitaSeeder extends BaseSeeder {
  public async run () {

    await TipoReceita.createMany([
      {
        id: 1,
        descricaoReceita: 'Salário'
      },
      {
        id: 2,
        descricaoReceita: 'Presente'
      },
      {
        id: 3,
        descricaoReceita: 'Prêmio'
      },
      {
        id: 4,
        descricaoReceita: 'Outros'
      }
    ])

  }
}
