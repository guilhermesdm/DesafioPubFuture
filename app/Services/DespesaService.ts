import Despesa from "App/Models/Despesa"

export default class DespesaService {
  public static async criar(
    valor: number,
    dataPagamento: string,
    dataPagamentoEsperado: string,
    contaId: number,
    tipoDespesaId: number
  ){
    const despesa = new Despesa()
    despesa.valor = valor
    despesa.dataPagamento = dataPagamento
    despesa.dataPagamentoEsperado = dataPagamentoEsperado
    despesa.contaId = contaId
    despesa.tipoDespesaId = tipoDespesaId
    await despesa.save()
    return despesa
  }

  public static async listar() {
    const despesas = await Despesa.query().preload('tipoDespesa')
    return despesas
  }

  public static async remove(id: number) {
    await Despesa.query().where('id', id).delete()
  }

  public static async editar(
    id: number,
    valor: number,
    dataPagamento: string,
    dataPagamentoEsperado: string,
    contaId: number,
    tipoDespesaId: number
  ){
    const despesa = await Despesa.findOrFail(id)
    despesa.valor = valor
    despesa.dataPagamento = dataPagamento
    despesa.dataPagamentoEsperado = dataPagamentoEsperado
    despesa.contaId = contaId
    despesa.tipoDespesaId = tipoDespesaId
    await despesa.save()
    return despesa
  }
}
