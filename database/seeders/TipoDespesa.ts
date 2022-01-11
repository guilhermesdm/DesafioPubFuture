import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TipoDespesa from 'App/Models/TipoDespesa'

export default class TipoDespesaSeeder extends BaseSeeder {
  public async run () {

    await TipoDespesa.createMany([
      {
        id: 1,
        descricaoDespesa: 'Alimentação'
      },
      {
        id: 2,
        descricaoDespesa: 'Educação'
      },
      {
        id: 3,
        descricaoDespesa: 'Lazer'
      },
      {
        id: 4,
        descricaoDespesa: 'Moradia'
      },
      {
        id: 5,
        descricaoDespesa: 'Roupa'
      },
      {
        id: 6,
        descricaoDespesa: 'Saúde'
      },
      {
        id: 7,
        descricaoDespesa: 'Transporte'
      },
      {
        id: 8,
        descricaoDespesa: 'Outros'
      }
    ])

  }
}
