const{aboutus,contactus,services}=require('./dummydata')

const aboutController=(req,res)=>{
    return res.send(aboutus)
}

const contactController=(req,res)=>{
    return res.send(contactus)
}

const servicesController=(req,res)=>{
    return res.send(services)
}

module.exports={aboutController,contactController,servicesController}