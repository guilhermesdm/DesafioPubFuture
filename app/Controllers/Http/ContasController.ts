import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ContaService from 'App/Services/ContaService';

export default class ContasController {
  public async index({ response }: HttpContextContract) {
    const contas = await ContaService.listar()
    return response.send(contas)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only([
      'tipoContaId',
      'instituicao'
    ])
    const conta = await ContaService.criar(data.tipoContaId, data.instituicao)
    return response.send(conta)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()
    await ContaService.remove(id)
    return response.status(200)
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const data = request.only([
      'tipoContaId',
      'instituicao'
    ])

    const conta = await ContaService.editar(id, data.tipoContaId, data.instituicao)
    return response.send(conta)
  }
}
