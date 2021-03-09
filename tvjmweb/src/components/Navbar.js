import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import myRef from './Feed'
import { BottomNavigation } from '@material-ui/core';
import Feed from './Feed';
const Container = styled.div`
height: 80px;
width: 100%;
position: center;
background-color: #676864;
`

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
export const NavBar = () => {
    const classes = useStyles();
    const handleClickTop = (e) => {
        window.scrollTo({
            top: +100,
            behavior: 'smooth'     
        })
    }
        const handleClickBot = (e) => {
            window.scrollTo({
                top: +10000,
                behavior: 'smooth'     
            })
    }
    return(
    <Container>

      <Button onClick={handleClickTop} variant="contained" >
        Home
      </Button>
      <Button onClick={handleClickBot} variant="contained" >
        Memories
      </Button>
      <Button variant="contained" disabled>
        Guestbook
      </Button>
      <Button variant="contained">
        About
      </Button>
    </Container>
    );
}