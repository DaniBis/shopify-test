const Student = require('../models/Student'); 
const Class = require('../models/Class'); 
  
class data {
    static getStudents = (req, res) => {
        let query = res.locals.query || {};
       
         Student.find(query, (e,result) => {
           if(e) {
             res.status(500).send(e);
             console.log(e.message);
           } else {
             res.send(result);
             return result;
           }
         });
        };
    
} 

export default data;