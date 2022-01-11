/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/contas', 'ContasController.index')
Route.get('/contas/total', 'ContasController.getTotal' )
Route.get('/contas/:id', 'ContasController.oneIndex')
Route.post('/contas', 'ContasController.store')
Route.post('/contas/transferir/:id', 'ContasController.transfer')
Route.delete('/contas/:id', 'ContasController.destroy')
Route.put('/contas/:id', 'ContasController.update' )

Route.get('/receitas', 'ReceitasController.index')
Route.get('/receitas/total', 'ReceitasController.getTotal' )
Route.post('/receitas', 'ReceitasController.store')
Route.delete('/receitas/:id', 'ReceitasController.destroy')
Route.put('/receitas/:id', 'ReceitasController.update')

Route.get('/despesas', 'DespesasController.index')
Route.get('/despesas/total', 'DespesasController.getTotal' )
Route.post('/despesas', 'DespesasController.store')
Route.delete('/despesas/:id', 'DespesasController.destroy')
Route.put('/despesas/:id', 'DespesasController.update')

