import { useState,useEffect } from 'react';
import './App.css';
import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { Table,Container} from 'react-bootstrap';
import {BiEdit} from "react-icons/bi";
import {MdOutlineDelete} from "react-icons/md";
import { useNavigate} from "react-router-dom"
import { Link, useParams} from 'react-router-dom';



function Viewcourse(){
       const navigate = useNavigate()
       const [detail,setdetail] = useState([]);
       const [open, setOpen] = useState(false);
       let {id} = useParams();

       
       const handleClose = () => {
        setOpen(false);
      };

 
       useEffect(() => {
        var token = localStorage.getItem('token');


        axios.get('http://localhost:5000/course/ViewCourse' ,{
            headers:{
               'Authorization':token,
            }, 
            
        } )
        .then(function (response) {
           setdetail(response.data.data);
         })
        .catch(function (error) {
          console.log(error);
        })
       },[open])

       const deletehandler = (_id) => {
        var token = localStorage.getItem('token');

       axios.delete(`http://localhost:5000/course/Delete_Course/${_id}`,{
          headers:{
            'Authorization':token,
          },
        })
        .then(function(response){
          setOpen(true);
           })
        .catch(function(error){
          console.log(error);

        })

       
        
       
       
    }
      return(                                                                 
        <>

        <h3 className=' d-flex view_course'>VIEW COURSES</h3>
         <div className='p-5'>
 {/* <table  class="table border" >
  <thead >
    <tr className='table_head'>
      <th scope="col">Courses</th>
      <th scope="col">Delete</th>
     
    </tr>
  </thead>
  
            {
                detail.map((item) => {
                    return(
                        <>
                         <tbody>

                       
                        <tr>
                        <td className='' style={{fontSize:"16px"}}>{item.coursename}</td>
                        <td className='' ><button onClick={()=>{deletehandler(item._id)}}   className='btn btn-danger' >Delete</button></td>
                        </tr>

                        </tbody>
                      
                        </>
                    )
                })
            }
              </table> */}



<Container>
                <div>
         <Table striped bordered hover className='add_box'>
                                  <thead>
                                    <tr className='text-center'>
                                      <th className='fs-6'>Course Name</th>
                                      <th className='fs-6'>Delete</th>
                                      <th className='fs-6'>Edit</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                  {

                            detail.map((item) => {
                                return(
                                  <>
                                      <tr className='text-center'>
                                        <td className='fs-6 ms-5 me-5'>  {item.coursename}</td>
                                                  <td ><div className='btn7 fs-4'  onClick={(e)=>deletehandler(item._id)}><MdOutlineDelete/></div></td>
                                                    <td >
                                                      {/* <div className='btn7 fs-4' 
                                                    onClick={(e)=>{console.log(item._id)
                                                       navigate('/Updatecourse')}}
                                                       
                                                        ><BiEdit/></div> */}

                   <Link to={`/updatecourse/${item._id}`}  className='p-2 '><BiEdit/></Link>
                                                        </td>
                                              </tr>
                                              </>
                                                    )
                                                
                                              }
                                            
                                                )
                                              } 
                                            </tbody>
        </Table>
                                                    
               </div>
          </Container>

              {/* <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav> */}
         </div>

           {/* dialog box */}
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
      
        <DialogTitle id="alert-dialog-title" style={{ color:'#17a3b8', fontFamily:'fantasy', fontSize:'35px' ,width:'400px' ,marginLeft:'180px'}}>
            Successfull
        </DialogTitle>
        
      </Dialog>

     
     


        </>
       
    )

}
export default Viewcourse