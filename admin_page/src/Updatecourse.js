import React, { useEffect } from "react"
import {TextField} from '@mui/material';
import { Row,Col,Button,Container} from 'react-bootstrap';
import axios from 'axios';
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from 'react-bootstrap/Alert';
import './App.css';
import { useParams } from "react-router-dom";


function Updatecourse() {
    const{id} = useParams()
    
    const obj={
        coursename:"",   
       
      };
    const [val,setVal] = useState(obj)
   

    var token = localStorage.getItem('token');

    const handleclick = (e) => {
           e.preventDefault();
           
           console.log(val);
        //    useEffect(() => {
            axios.get(`http://localhost:5000/course/update_course/${id}`,{
                headers:{
                  'Authorization':token,
                },
              })
            .then(function(response){
              console.log(response.data.data);
            const getdata=response.data.data;
            setVal({obj:getdata});
            
           
        
            })
            .catch(function(error){
                console.log(error);
            }
           ,[val,id])
        //   }) 

          
           
    }

    const handlechange = (e) => {
        setVal({...val,[e.target.name]:e.target.value});
        
    }
   

   
    
      
    return(
        <>
            <div>
          <Container>
            <Row  className='justify-content-center'>
                <Col lg={6} className='add_box m-5 text-center'>
                    <Row className='mt-5 mb-5 text-center'>
                            <Col>
                                <h3>Update Course</h3>
                                <TextField id="outlined-basic" label="coursename" variant="outlined" name="coursename" value={val.coursename} onChange={handlechange}/>
                            </Col>
                        </Row>
                        <Row className='mt-5 mb-5'>
                            <Col>
                                <Button variant="" style={{backgroundColor:"#17a3b8",color:"#ffff"}} onClick={handleclick} >Update</Button>
                            </Col>
                        </Row>
                </Col>
            </Row>
        </Container>

            </div>
        </>
    )

    
}export default Updatecourse