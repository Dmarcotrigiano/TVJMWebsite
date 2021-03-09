import React, {useState} from 'react';
import styled from 'styled-components';
import NewCard from './Cards.js';
import Feed from './Feed';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

function Timeline(props) {
    const [cards, setCards] = useState([]);
    // const handleChange = ({target}) => {
    //     const {name, value} = target;
    //         setCards((prevInfo) => ({
    //             ...prevInfo,
    //             [name]: value,           
    //         }));
    //     }
    const classes = useStyles();
    const addCard = card => {
        const newCards = [card, ...cards]
        setCards(newCards);
        }
    // const expandCard = (id) => {
    //     let expandedCards = cards.map(card =>{
    //     if (card.id === id){
    //         card.isExpand = !card.isExpand
    //     }
    //     return card;
    // })
    // setCards(expandedCards);
    // };
    
    return (
        <>
        <NewCard  onSubmit={addCard}/>
        <Feed cards={cards}/>
      </>
    )
}
export default Timeline;
//32.12