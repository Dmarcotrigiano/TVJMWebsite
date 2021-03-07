import React, {useState} from 'react';
import styled from 'styled-components';

export let cardInfo = [];

export function NewCard(){
    const [card, setCard] = useState({});
    const handleChange = ({target}) => {
    const {name, value} = target;
        setCard((prevInfo) => ({
            ...prevInfo,
            [name]: value,           
        }));
    };
        const handleSubmit = (e) => {
            
        alert('Thank you for submitting a memory, '+ card.author)
            e.preventDefault();
           cardInfo.push(card);
           
        }
    // const componentWillDismount = ({target}) => {
    //         const {name, value} = target;
    //             setCard((prevInfo) => ({
    //                 ...prevInfo,
    //                 [name]: value,           
    //             }));
        return (
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                value={card.title || ''}
                name="title"
                type="text"
                placeholder="Name of Your Memory"
              />

              <input
                onChange={handleChange}
                value={card.date || ''}
                type="date"
                name="date"
              />
              <input
                onChange={handleChange}
                value={card.author || ''}
                type="text"
                name="author"
                placeholder="Your Name"
              /><div>
              <input
              onChange={handleChange}
                value={card.body || ''}
                type="text"
                name="body"
                placeholder="Your Memory"
              /></div>
              <button  type="submit">Submit</button>
            </form>
        )

}


// export default Card = (props) => {
// return(
//         <container>
//             <h1>{props.title}</h1>
//             <p>{props.body}</p>
//         </container>
//     );
    
// }