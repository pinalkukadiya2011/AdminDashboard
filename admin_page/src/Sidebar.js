import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
// matireal ui 
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// css file
import"./Sidebar.css";
// component linked
import Dashboard from './Dashboard';
import Addcourse from './AddCourse';
import Login from './Login';
// router
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// all icons
import { GrChapterAdd } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
// usestate
import { useState } from 'react';
import Viewcourse from './ViewCourse';
import { MdToken } from 'react-icons/md';




const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Sidebar() {
    const navigate = useNavigate()
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [dashboard,setdashboard] = useState();
    console.log(localStorage.getItem("token"));
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
   
      // if(localStorage.getItem("token")){
      //  alert("yes");

      // }
   
    const logout = () => {
      // localStorage.remove("TOKEN");
      localStorage.removeItem("token");
      navigate("/")
    }
    return(
        <>
         <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}  style={{backgroundColor:"#17a3b8"}}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant=""  noWrap component="div" className='d-flex  justify-content-between'>
           <a href='#' style={{listStyle:"none", textDecoration:"none" ,color:"white" ,padding:"10px"}}>Home</a>
           <a href='#'  style={{listStyle:"none", textDecoration:"none",color:"white",padding:"10px"}}>Contact</a>


           {/* logout button */}
           <button type='submit' variant="danger" className='logout_btn' onClick={()=> logout()}>logout</button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} className='main_side_bar'>
        <DrawerHeader>
        <div className='Logo_header d-flex '>
              <a href='#'><img src={require("../src/Images/AdminLTELogo.png")} className='img_logo  ' style={{width:"50px"}}/></a>
              <p className='mt-2'><span className='fs-5  fw-bolder' >AdminLTE 3 </span> </p>
            </div>
          <IconButton onClick={handleDrawerClose}>

            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
           
          </IconButton>
        </DrawerHeader>
        <Divider />


       
        

        <div className='name d-flex p-2'>
    {/* ================================ADMIN NAME PART================================== */}
            <img src={require('../src/Images/user2.jpg')} className='mt-2' style={{ width:'40px',height:"40px", borderRadius:'50%', shadows:'black 2px'}}></img>
            <p className='pt-3 ps-3 fw-bold' style={{ fontSize:'16px'}}>Alexander Pierce</p>
            </div>
    {/* ==============================SEARCH BAR ============================================ */}
            <div className='searchbar d-flex' >
          <div className='search_icon fs-2 ms-2'>  <FaSearch/> </div>
          <input type='text' className='ms-4 mt-2' style={{height:"30px" ,width:"70%"}} placeholder='Search' ></input>
          </div>
    {/*============================= DASHBOARD LINK====================================== */}
    <div  className=' btn_dashboard'>
    <AiFillDashboard className=' fs-2 text-black me-4 ms-3' />
                 <button value="dashboard1" className='btn text-white fs-5'  onClick={(e) => setdashboard(e.target.value)}> Dashboard </button>
                 </div>
  {/*===================================== DROPDOWN LINK====================================== */}
           
          <Dropdown>
               <GrChapterAdd className=' fs-3 ms-3'/>
            <Dropdown.Toggle className='text-white fs-5' variant='' id="dropdown-basic">
           
              <span className='ms-4'>  Courses </span>
            </Dropdown.Toggle>
            
            <Dropdown.Menu className='dropdown ' >
            
               <button value="AddCourse" className='addcourse_btn btn '  onClick={(e) => setdashboard(e.target.value)}>AddCourse</button><br/>
               <button value="viewcourse" className='addcourse_btn btn '  onClick={(e) => setdashboard(e.target.value)}>ViewCourse</button>

               
            </Dropdown.Menu>
          
          </Dropdown>


     
   
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography >
           
   {/* ======================CONDITION============================================ */}
      
          {
            (dashboard == "dashboard1") ? <Dashboard/> : (dashboard == "AddCourse") ? <Addcourse/> :(dashboard == "viewcourse") ? <Viewcourse/>: <Dashboard/>
          }

        </Typography>
        
      </Box>
    </Box>
            
        </>
    )
}
export default Sidebar