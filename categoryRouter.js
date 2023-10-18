const auth=require('./middleware/auth')
const {aboutController,contactController,servicesController} =require('./category/categorycontroller')

const categoryRouter=require("express").Router();

categoryRouter.get("/aboutus",auth,aboutController)
categoryRouter.get("/contactus",auth,contactController)
categoryRouter.get("/services",servicesController)

module.exports=categoryRouter;