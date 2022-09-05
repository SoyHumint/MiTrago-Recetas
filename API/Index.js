const server = require('./src/app')
const { conn } = require('./src/db')
const port = 3001;


conn.sync({ force: true }).then(() => {

   server.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
   })
})

