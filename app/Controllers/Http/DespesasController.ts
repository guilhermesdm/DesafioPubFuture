import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DespesaService from 'App/Services/DespesaService';

export default class DespesasController {
  public async store({ request, response }: HttpContextContract) {
    const data = request.only([
      'valor',
      'dataPagamento',
      'dataPagamentoEsperado',
      'contaId',
      'tipoDespesaId'
    ])
    const despesa = await DespesaService.criar(
      data.valor,
      data.dataPagamento,
      data.dataPagamentoEsperado,
      data.tipoDespesaId,
      data.contaId
      )
    return response.send(despesa)
  }

  public async index({ response }: HttpContextContract) {
    const despesas = await DespesaService.listar()
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
      'valor',
      'dataPagamento',
      'dataPagamentoEsperado',
      'contaId',
      'tipoDespesaId'
    ])

    const despesa = await DespesaService.editar(
      id,
      data.valor,
      data.dataPagamento,
      data.dataPagamentoEsperado,
      data.contaId,
      data.tipoDespesaId
      )
    return response.send(despesa)
  }
}
