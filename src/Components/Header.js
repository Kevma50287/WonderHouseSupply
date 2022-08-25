import React, { useState } from 'react'
import GroupLogo from '../ProjectImajes/5 links center/GroupLogo.png';
import searchIcon from '../ProjectImajes/5 links center/searchIcon.png';
import Cart from '../ProjectImajes/5 links center/Cart.png';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#00141F',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color:'#ffffff',
};

export default function Header() {
  const [searchText, setSearchText] = useState("")
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()

  const handleGoToSearch = () => {
    handleClose()
    navigate('/products', {
      state: {
        search:searchText
      }
    })
  }

  const handleInput = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <>
    <div className='header'>
      <Link to="/" className="header-route">
        <img className="header-route wonderLogo" src={GroupLogo} alt="group logo" />
      </Link>

      <div className='header-routes'>

        <Link to="/about" className="header-route">ABOUT</Link>

        <Link to="/products" className="header-route">PRODUCTS</Link>

        <Link to="/services" className="header-route">SERVICES</Link>

      </div>
      <div className='header-buttons'>
        <button className="header-button">
          <img src={searchIcon} alt="search icon" onClick={handleOpen} />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-description" sx={{ mt: 2, mb:1}}>
                Please type in the name of item:
              </Typography>
              <input
                type="text"
                id="modalInput"
                name="search"
                value={searchText}
                onChange={handleInput}
              />
              <Button  onClick={handleGoToSearch}>Search</Button>
            </Box>
          </Modal>
        </button>

        <Link to="/cart">
          <button className="header-button">
            <img src={Cart} alt='cart icon' />
          </button>
        </Link>

        <Link to="/logIn">
          <button className="header-button">
            Login
          </button>
        </Link>

        <Link to="/signUp">
          <button className="header-button">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
    <div id="breakline"></div>
    </>

  )
}