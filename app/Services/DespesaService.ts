import Despesa from "App/Models/Despesa"

export default class DespesaService {
  // public static async criar(
  //   dataRecebimento: string,
  //   dataRecebimentoEsperado: string,
  //   descricao: string,
  //   tipoReceitaId: number,
  //   valor: number,
  //   contaId: number
  // ){
  //   const receita = new Receita()
  //   receita.dataRecebimento = dataRecebimento
  //   receita.dataRecebimentoEsperado = dataRecebimentoEsperado
  //   receita.descricao = descricao
  //   receita.tipoReceitaId = tipoReceitaId
  //   receita.valor = valor
  //   receita.contaId = contaId
  //   await receita.save()
  //   return receita
  // }

  public static async listar() {
    const despesas = await Despesa.query().preload('tipoDespesa')
    return despesas
  }

  // public static async remove(id: number) {
  //   await Receita.query().where('id', id).delete()
  // }

  // public static async editar(
  //   id: number,
  //   dataRecebimento: string,
  //   dataRecebimentoEsperado: string,
  //   descricao: string,
  //   tipoReceitaId: number,
  //   valor: number,
  //   contaId: number
  // ){
  //   const receita = await Receita.findOrFail(id)
  //   receita.dataRecebimento = dataRecebimento
  //   receita.dataRecebimentoEsperado = dataRecebimentoEsperado
  //   receita.descricao = descricao
  //   receita.tipoReceitaId = tipoReceitaId
  //   receita.valor = valor
  //   receita.contaId = contaId
  //   await receita.save()
  //   return receita
  // }
}
