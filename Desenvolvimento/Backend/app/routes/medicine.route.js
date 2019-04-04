const medicineService = require('../services/medicine.service')
module.exports = app => {
  app.get('/medicine', async (req, res) => {
    console.log('\n[medicine.routes.js] - get')
    res.send(await medicineService.getAll(res.locals))
  })
  app.get('/medicine/:id', async (req, res) => {
    console.log('\n[medicine.routes.js] - get')
    res.send(await medicineService.get(req.params))
  })
  app.post('/medicine', async (req, res) => {
    console.log('\n[medicine.routes.js] - post')
    console.log(req.body)

    res.send(await medicineService.set(req.body))
  })
  app.put('/medicine/', async (req, res) => {
    console.log('\n[medicine.routes.js] - put')
    res.send(await medicineService.update(req.body))
  })
}
