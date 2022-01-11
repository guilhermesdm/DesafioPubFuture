# PubFuture API

Back-end para a gestão de um projeto de finanças.

## Instalação
### Requisitos: 
Node, MySQL

Clone este repositório `$ git clone https://github.com/guilhermesdm/desafiopubfuture`

**Note que é necessário configurar o arquivo `.env` com a sua informação do banco de dados**

Entre com o terminal na pasta do repositório e instale as dependências `$ yarn install`

E para configurar as migrations e seeds do banco de dados MySQL, rode os comandos

`node ace migration:run`

`node ace db:seed`

Você pode usar o ambiente que quiser, no meu caso usei o VSCODE

## Tecnologias utilizadas

**NodeJS**

**AdonisJS**

**Typescript**

**MySQL** para o banco de dados

**Insomnia**

## Modo de uso

### Contas
**GET**

`/contas` para listar **todas** as contas

`/contas/total` para listar o saldo total das contas 

`/contas/:id` para listas as informações de uma conta específica

**POST**

`/contas` para criar uma conta

Exemplo:
```bash 
{
	"tipoContaId": 2, // Conta Corrente
	"instituicao": "X"
}
```

`/contas/transferir/:id` 

Note que o **id** se refere à conta que você está, e a **contaId** a conta que você quer enviar o saldo

Exemplo:
```bash
{
	"contaId": 2,
	"saldo": 500
}
 ```


**DELETE**

`/contas/:id` para deletar uma conta

**PUT**

`/contas/:id` para editar uma conta (atente-se que **não** é possível editar o saldo)

Exemplo:
```bash
{
	"tipoContaId": 3, // Poupança
	"instituicao": "Y"
}
```

### Receitas

**GET**

`/receitas` para listar todas as receitas

***Filtros***

`/receitas?tipoReceita={1-4}`

`/receitas?dataInicial=YYYY-MM-DD&dataFinal=YYYY-MM-DD`

`/receitas/total` para listar o valor total das receitas

**POST**

`/receitas` para criar uma receita, o **contaId** se refere a conta que você esta criando a receita

Exemplo:

```bash
{
	"dataRecebimento": "2022-01-02",
	"dataRecebimentoEsperado": "2022-01-02",
	"descricao": "Salário",
	"valorReceita": 2000,
	"tipoReceitaId": 1, // Salário
	"contaId": 1
}
```

**DELETE**

`/receitas/:id` para deletar uma receita

**PUT**

`/receitas/:id`

```bash
{
	"dataRecebimento": "2022-03-02",
	"dataRecebimentoEsperado": "2022-01-02",
	"descricao": "Teste",
	"valorReceita": 3000,
	"tipoReceitaId": 1, // Salário
	"contaId": 1
}
```

### Despesas

**GET**

`/despesas` para listar todas as despesas

***Filtros***

`/despesas?tipoDespesa={1-8}`

`/despesas?dataInicial=YYYY-MM-DD&dataFinal=YYYY-MM-DD`

`/despesas/total` para listar o valor total das despesas

**POST**

`/despesas` para criar uma despesa, o **contaId** se refere a conta que você esta criando a despesa

Exemplo:

```bash
{
	"valorDespesa": 500,
	"dataPagamento": "2022-01-01",
	"dataPagamentoEsperado": "2022-01-01",
	"contaId": 1,
	"tipoDespesaId": 1 // Alimentação
}
```

**DELETE**

`/despesas/:id` para deletar uma despesa

**PUT**

`/despesas/:id`

```bash
{
	"valorDespesa": 200,
	"dataPagamento": "2022-01-01",
	"dataPagamentoEsperado": "2022-01-01",
	"contaId": 1,
	"tipoDespesaId": 3 // Educação
}
```
