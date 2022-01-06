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

  public async index({ response }: HttpContextContract) {
    const receitas = await ReceitaService.listar()
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
      'tipoReceitaId',
      'descricao',
      'valorReceita',
      'contaId'
    ])

    const conta = await ReceitaService.editar(
      id,
      data.dataRecebimento,
      data.dataRecebimentoEsperado,
      data.tipoReceitaId,
      data.descricao,
      data.valorReceita,
      data.contaId
      )
    return response.send(conta)
  }
}
