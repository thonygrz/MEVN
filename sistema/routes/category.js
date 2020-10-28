import routerx from 'express-promise-router'
import CategoryController from '../controllers/categoryController'
import auth from '../middlewares/auth'

const router = routerx()

router.post('/add',auth.verifyStorekeeper,CategoryController.add)
router.get('/query',auth.verifyStorekeeper,CategoryController.query)
router.get('/list',auth.verifyStorekeeper,CategoryController.list)
router.put('/update',auth.verifyStorekeeper,CategoryController.update)
router.delete('/remove',auth.verifyStorekeeper,CategoryController.remove)
router.put('/activate',auth.verifyStorekeeper,CategoryController.activate)
router.put('/deactivate',auth.verifyStorekeeper,CategoryController.deactivate)

export default router

