const { Router } = require("express")
const router = Router()


router.get('/', (req, res) => {
   res.send('Las recetas!')
})

module.exports = router;