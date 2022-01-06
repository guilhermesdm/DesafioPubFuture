import Conta from "App/Models/Conta"
import Receita from "App/Models/Receita"

export default class ReceitaService {
  public static async criar(
    dataRecebimento: Date,
    dataRecebimentoEsperado: Date,
    tipoReceitaId: number,
    descricao: string,
    valorReceita: number,
    contaId: number
  ){
    const receita = new Receita()
    receita.dataRecebimento = dataRecebimento
    receita.dataRecebimentoEsperado = dataRecebimentoEsperado
    receita.tipoReceitaId = tipoReceitaId
    receita.descricao = descricao
    receita.valorReceita = valorReceita
    receita.contaId = contaId
    await receita.save()

    const conta = await Conta.findOrFail(receita.contaId)
    conta.saldo += receita.valorReceita
    await conta.save()

    return receita
  }

  public static async listar(
    dataInicial: Date,
    dataFinal: Date,
    tipoReceita: number
  ){
    const receitas = await Receita
      .query()
      .preload('tipoReceita')
      .where((query) => {
        if ( dataInicial && dataFinal ) {
          query
            .where('dataRecebimento', '>=', dataInicial)
            .andWhere('dataRecebimento', '<=', dataFinal)
        }
        if ( tipoReceita ) {
          query
            .where('tipoReceitaId', tipoReceita)
        }
      })
    return receitas
  }

  public static async remove(id: number) {
    await Receita.query().where('id', id).delete()
  }

  public static async editar(
    id: number,
    dataRecebimento: Date,
    dataRecebimentoEsperado: Date,
    descricao: string,
    tipoReceitaId: number,
    valorReceita: number,
    contaId: number
  ){
    const receita = await Receita.findOrFail(id)
    receita.dataRecebimento = dataRecebimento
    receita.dataRecebimentoEsperado = dataRecebimentoEsperado
    receita.descricao = descricao
    receita.tipoReceitaId = tipoReceitaId
    receita.valorReceita = valorReceita
    receita.contaId = contaId
    await receita.save()
    return receita
  }
}
