import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ContaService from 'App/Services/ContaService';

export default class ContasController {
  public async store({ request, response }: HttpContextContract) {
    const data = request.only([
      'tipoContaId',
      'instituicao'
    ])
    const conta = await ContaService.criar(data.tipoContaId, data.instituicao)
    return response.send(conta)
  }

  public async index({ response }: HttpContextContract) {
    const contas = await ContaService.listar()
    return response.send(contas)
  }

  public async oneIndex({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const conta = await ContaService.listarUm(id)
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

  public async transfer( { request, response }: HttpContextContract ) {
    const { id } = request.params()
    const data = request.only([
      'contaId',
      'saldo'
    ])

    try {
      const conta = await ContaService.transferir(id, data.contaId, data.saldo)
      return response.send(conta)
    } catch (error) {
      return response.status(400).send( { message: error.message } )
    }
  }
}
