const childModel = require('../models/child.model')

module.exports = {
  getAll: async () => {
    const children = await childModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (children.length > 0) return children
    else return []
  },
  get: async payload => {
    const children = await childModel
      .findAll({
        where: {
          ...payload
        }
      })
      .then()
      .catch(err => console.log(err))

    if (children.length > 0) return children
    else return []
  },
  set: async data => {
    console.log('\n[child.controller.js] - set')
    console.log(data)
    const resCreateChild = await childModel
      .create(data)
      .then()
      .catch(err => {
        console.log(err)
      })
    if (!resCreateChild.dataValues.id)
      return { err: 'Falha ao cadastrar criança' }
    else
      return {
        message: 'Criança cadastrada com sucesso',
        id: resCreateChild.dataValues.id
      }
  },
  update: async (id, data) => {
    const resUpdateChild = await childModel
      .update({ ...payload }, { where: { id: id } })
      .then()
      .catch(err => {
        console.log(err)
      })

    return { message: `Registro alterado com sucesso` }
  }
}
