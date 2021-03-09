import React, {useState} from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
background: #8fc1e3;
align-content: center;

`
const LineInput = styled.input`
width: 100%;
height: 20px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
resize: none;
font-family: roboto;
`
const ParaInput = styled.textarea`
width: 100%;
height: 150px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
resize: none;
font-family: roboto;
align: center;
`
export let cardInfo = [];

export default function NewCard(props){
    const [card, setCard] = useState({});
    const handleChange = ({target}) => {
    const {name, value} = target;
        setCard((prevInfo) => ({
            ...prevInfo,
            [name]: value,           
        }));
    };
    
    const handleSubmit = (e) => {
            
        
            e.preventDefault();
          //  cardInfo.push(card.props);
           props.onSubmit({
             id: Math.floor(Math.random() * 10000),
             title: card.title,
             body: card.body,
             author: card.author,
             date: card.date,
            
           });
           setCard('');
          //  console.log(cardInfo);
           
    }
    // const componentWillDismount = ({target}) => {
    //         const {name, value} = target;
    //             setCard((prevInfo) => ({
    //                 ...prevInfo,
    //                 [name]: value,           
    //             }));
        return (
          
            <StyledForm onSubmit={handleSubmit}>
              <LineInput
                onChange={handleChange}
                value={card.title || ''}
                name="title"
                type="text"
                placeholder="Name of Your Memory"
              />

              <LineInput
                onChange={handleChange}
                value={card.date || ''}
                type="date"
                name="date"
              />
              <LineInput
                onChange={handleChange}
                value={card.author || ''}
                type="text"
                name="author"
                placeholder="Your Name"
              /><div>
              <ParaInput
              onChange={handleChange}
                value={card.body || ''}
                type="text"
                name="body"
                placeholder="Your Memory"
              /></div>
              <button  type="submit">Submit</button>
            </StyledForm>
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