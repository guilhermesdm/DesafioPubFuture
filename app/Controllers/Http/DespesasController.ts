import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DespesaService from 'App/Services/DespesaService';

export default class DespesasController {
  public async store({ request, response }: HttpContextContract) {
    const data = request.only([
      'valorDespesa',
      'dataPagamento',
      'dataPagamentoEsperado',
      'contaId',
      'tipoDespesaId'
    ])
    const despesa = await DespesaService.criar(
      data.valorDespesa,
      data.dataPagamento,
      data.dataPagamentoEsperado,
      data.contaId,
      data.tipoDespesaId
      )
    return response.send(despesa)
  }

  public async index({ request, response }: HttpContextContract) {
    const { dataInicial, dataFinal, tipoDespesa } = request.qs()
    const despesas = await DespesaService.listar(dataInicial, dataFinal, tipoDespesa)
    return response.send(despesas)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()
    await DespesaService.remove(id)
    return response.status(200)
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const data = request.only([
      'valorDespesa',
      'dataPagamento',
      'dataPagamentoEsperado',
      'contaId',
      'tipoDespesaId'
    ])

    const despesa = await DespesaService.editar(
      id,
      data.valorDespesa,
      data.dataPagamento,
      data.dataPagamentoEsperado,
      data.contaId,
      data.tipoDespesaId
      )
    return response.send(despesa)
  }
}
