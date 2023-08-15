const express=require('express');
const bodyparser = require('body-parser')
const axios=require('axios')
const cors=require('cors')
const path=require('path');



const app=express()
app.use(cors());
app.use(express.static(path.join(__dirname+"/public")))

app.use(bodyparser.urlencoded({extended:true}));
const http=require('http').Server(app);
const port=process.env.PORT||5000;

app.use(express.json())

app.get('/:place',(req,res)=>{

    const {place}=req.params;

    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {
          location: place,
          format: 'json',
          u: 'f'
        },
        headers: {
          'X-RapidAPI-Key': '3b7721c1ebmshfc98c1f8b026b76p168edcjsn7fc35a4b686a',
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
      };
      console.log(place)


       axios.request(options).then(function (response) {
        res.send(response.data);
         console.log(response.data)
     }).catch(function (error) {
         console.error(error);
     });

   
}
)


app.get('/',(req,res)=>{
    res.send('hello');
})

http.listen(port,()=>console.log('success'))














