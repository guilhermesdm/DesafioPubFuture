import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ReceitaService from 'App/Services/ReceitaService'

export default class ReceitasController {
  public async store({ request, response }: HttpContextContract) {
    const data = request.only([
      'dataRecebimento',
      'dataRecebimentoEsperado',
      'tipoReceitaId',
      'descricao',
      'valorReceita',
      'contaId'
    ])
    const receita = await ReceitaService.criar(
      data.dataRecebimento,
      data.dataRecebimentoEsperado,
      data.tipoReceitaId,
      data.descricao,
      data.valorReceita,
      data.contaId
      )
    return response.send(receita)
  }

  public async index({ request, response }: HttpContextContract) {
    const { dataInicial, dataFinal, tipoReceita } = request.qs()
    const receitas = await ReceitaService.listar(dataInicial, dataFinal, tipoReceita)
    return response.send(receitas)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()
    await ReceitaService.remove(id)
    return response.status(200)
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const data = request.only([
      'dataRecebimento',
      'dataRecebimentoEsperado',
      'descricao',
      'tipoReceitaId',
      'valorReceita',
      'contaId'
    ])
    const conta = await ReceitaService.editar(
      id,
      data.dataRecebimento,
      data.dataRecebimentoEsperado,
      data.descricao,
      data.tipoReceitaId,
      data.valorReceita,
      data.contaId
    )
    return response.send(conta)
  }
}
