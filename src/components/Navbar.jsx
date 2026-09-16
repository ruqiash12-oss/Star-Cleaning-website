import logo from "../assets/images/Vector.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import {Box, Modal,List,ListItem,ListItemButton,ListItemText} from '@mui/material';
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
export default function Navbar() {
  const Items = [
    { text: 'Home', path: '/', end: true },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
    { text: 'Service' ,path:'/service'},
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="px-5 md:px-20 py-6 flex items-center justify-between md:inline-block">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold flex items-center">
          <img src={logo} alt="Logo" className="mr-2 h-11 w-7" />
          <div className="flex flex-col ">
            
            <h1 className="text-[#111D15]"><span className="text-emerald-600 ">Star</span>Cleaning</h1>
            <p className="text-xs font-medium text-[#4D4D4D]">Cleaning Services company</p>
          </div>
        </div>
        <div className="flex items-center space-x-30">
           <ul className="hidden md:flex space-x-7 text-white">
          <li><NavLink 
            end 
            to="/" 
            className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>
            Home
          </NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>About</NavLink></li>
          <li><NavLink to="/service" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>Service</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>Contact</NavLink></li>
          
          
        </ul>
          <motion.button  whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')} className="hidden md:inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded  mt-4 md:mt-0 cursor-pointer">Book now</motion.button>
        </div>
      </div>
      <div className="navbar-menu-container">
        <button className="inline-flex justify-center align-center w-7 h-4 p-0 md:hidden  text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <IoMdClose /> : <RxHamburgerMenu />} 
        </button>
        
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          sx={{ display: 'flex', justifyContent: 'start', backgroundColor: 'rgba(0, 0, 0, 0.1)'}}
        >
          <Box
            sx={{
              width: 'calc(100% - 40px)',
              maxWidth: '250px',
              backgroundColor: 'white',
              boxShadow: 24,
              p: 2,
            }}
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
          >
            <List sx={{width:'100%', padding:0}}>
              {Items.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={item.path}
                    end={item.end}
                    sx={{
                      textAlign: 'center',
                      margin: '4px 0',
                      borderRadius: '4px',
                      color: 'text.secondary', 
                      '&.active': {
                        color: 'hsl(136, 64%, 51%)', 
                        fontWeight: 'bold',
                      },
                      '&:hover': {
                        color: 'hsl(136, 64%, 51%)',
                      },
                    }}
                  >
                    <ListItemText primary={item.text} sx={{ textAlign: 'center' }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Modal>
      </div>
    </nav>
  )
}