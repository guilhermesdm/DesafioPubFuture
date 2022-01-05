import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DespesaService from 'App/Services/DespesaService';

export default class DespesasController {
  // public async store({ request, response }: HttpContextContract) {
  //   const data = request.only([
  //     'tipoContaId',
  //     'instituicao'
  //   ])
  //   const conta = await ContaService.criar(data.tipoContaId, data.instituicao)
  //   return response.send(conta)
  // }

  public async index({ response }: HttpContextContract) {
    const despesas = await DespesaService.listar()
    return response.send(despesas)
  }

  // public async destroy({ request, response }: HttpContextContract) {
  //   const { id } = request.params()
  //   await ContaService.remove(id)
  //   return response.status(200)
  // }

  // public async update({ request, response }: HttpContextContract) {
  //   const { id } = request.params()
  //   const data = request.only([
  //     'tipoContaId',
  //     'instituicao'
  //   ])

  //   const conta = await ContaService.editar(id, data.tipoContaId, data.instituicao)
  //   return response.send(conta)
  // }
}
