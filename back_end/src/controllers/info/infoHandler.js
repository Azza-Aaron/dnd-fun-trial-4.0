const express = require('express');
const {requestData} = require("./outsideApiRequests");
const infoRouter = express.Router();


infoRouter.get('/', async (req,res) => {
  console.log(req.query)
  const acquiredData = await requestData(req)
  if(acquiredData){
    res.json({msg: 'request successful', data: acquiredData})
    res.status(200)
    return
  }
  res.json({msg: 'something went wrong, check query call ends with ?request=/api/${otherInfo}'})
  res.status(200)
})

module.exports = infoRouter