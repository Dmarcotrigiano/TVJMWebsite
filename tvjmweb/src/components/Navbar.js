import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height:120px;
width: 100%;
position: fixed-top;
`

export const NavBar = () => {
    return(
    <Container>
        <button>Home</button>
        <button>About</button>
        <button>Guestbook</button>
        <button>Memories</button>
    </Container>
    );
}