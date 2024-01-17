import {TextField} from '@mui/material';
import { Row,Col,Button,Container} from 'react-bootstrap';
import axios from 'axios';
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from 'react-bootstrap/Alert';
import './App.css';



function Addcourse() {
    const[addcourse,setAddcourse]=useState("");
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    
    
    const handleClose = () => {
        setOpen(false);
      };

    const data2 = () => {
        var token = localStorage.getItem('token');
        console.log(token);
        var obj = {
            coursename:addcourse
        }
    
   
   
      axios.post('http://localhost:5000/course/AddCourse',obj, {
         headers:{
            'Authorization':token,
         }, 
         
     }
    )
    .then(function(response) {  
        const courses = response.data.status;
         console.log(response.data); 
         if(courses){
             setOpen(true);
         }
         else{
            setShow(true);
        }
      
    }).catch(function(err) {
        console.log(err);
        
    })
}
    
    return(
        <>
          <div>
          <Container>
            <Row  className='justify-content-center'>
                <Col lg={6} className='add_box m-5 text-center'>
                    <Row className='mt-5 mb-5 text-center'>
                            <Col>
                                <h3>Add Course</h3>
                                <TextField id="outlined-basic" label="coursename" variant="outlined" value={addcourse} onChange={(e)=>{setAddcourse(e.target.value)}}/>
                            </Col>
                        </Row>
                        <Row className='mt-5 mb-5'>
                            <Col>
                                <Button variant="" style={{backgroundColor:"#17a3b8",color:"#ffff"}} onClick={data2}>ADD</Button>
                            </Col>
                        </Row>
                </Col>
            </Row>
        </Container>

            </div>

            {/* Dailog box */}
            <Dialog
        open={open}
        onClose={handleClose}
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="success-checkmark mt-5" >
  <div className="check-icon">
    <span className="icon-line line-tip"></span>
    <span className="icon-line line-long"></span>
    <div className="icon-circle"></div>
    <div className="icon-fix"></div>
  </div>
</div>
        <DialogTitle id="alert-dialog-title" style={{ color:'#17a3b8', fontFamily:'fantasy', fontSize:'35px' ,width:'400px' ,marginLeft:'159px'}}>
            Successfull
       
        </DialogTitle>
       
        <DialogActions>
         
        </DialogActions>
      </Dialog>

      {/* alert box */}

       
      <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible style={{ marginTop:'20px'}}>
        <Alert.Heading  style={{ fontFamily:'fantasy', fontSize:'35px', marginLeft:'420px'}}>error!</Alert.Heading>
        <p style={{ fontFamily:'monospace',fontSize:'18px'}}> 
        There Is An Error To Add The Data.
        please Enter The Valid Data.
        Here Not Allow To Submit The Blank data. 
        </p>
      </Alert>

 
        </>
    )
    
}
export default Addcourse;