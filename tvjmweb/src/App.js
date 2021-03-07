import {NavBar} from './components/Navbar.js';
import {NewCard} from './components/Cards.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
        <h1>Thomas Vincent Marco</h1>
        <h2>X - December 18, 2020</h2>
        <p>Thomas V Marco beloved husband of Amparo Marco entered eternal rest in the comfort and love of his devoted wife December 18,2020. Born in Westfield to the late Thomas and Sally Marco he was raised in the Hungry Hill section of Springfield and attended local schools. Thomas went on to honorably serve his country in the United States Navy. Stationed in San Diego he was proud to be a member of the Beach Jumper special warfare unit which specialized in deception and psychological warfare during the Vietnam war. Upon his honorable discharge Thomas entered training to become a Springfield police officer and retired after a successful career in the crime prevention unit and finally the homicide detective unit. He then began his second career in real estate working for Landry, Lyons and White and in commercial real estate for King and Newton. In his younger years Thomas enjoyed skiing and remained an avid golfer as a member of the Gotcha Golf League. It brough him great joy to travel with his wife which he did extensively. Thomas was a loving, caring man who possessed a great sense of humor and who was faithful to those he loved. Furthermore as an honest man he made sure to portray the just values and morals of an exceptional officer of the law.
Thomas is survived by his cherished wife Amparo. 
A liturgy of Christian burial will be held for Thomas on Wednesday January 6,2021 at 10 A.M. at St John the Evangelist church in Agawam followed by a committal service at 11 A.M. with full military honors at the Massachusetts Veterans Memorial Cemetery.
For those wishing to donate in Thomas’s memory the family has requested considering the Dana Faber Cancer Institute Molly McKenna Magic Wand Fund PO Box 849168 Boston MA 02284</p>
      </header>
      <div>
      <img className="Image" src="/assets/thomas.jpg" alt="tom"/>
      </div>
      <NewCard></NewCard>
    </div>
  );
}

export default App;
