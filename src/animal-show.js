import './animal-show.css';
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
  bird: bird,
  cat: cat,
  cow: cow,
  dog: dog,
  gator: gator,
  heart: heart,
  horse: horse
};

function AnimalShow(props) {
  const {type} = props;

  const [clicks, setClicks] = useState(0);

  const handleClick = () =>{
    setClicks(clicks+1);
  };

  return (
  <div 
    className='animal-show'
    onClick={handleClick}>
      <img 
        alt={type}
        className='animal'
        src={svgMap[type]} />
      <img 
        className='heart'
        style={{width: 10 + 10 * clicks + 'px'}}
        alt='heart'
        src={heart} />
  </div>);
}

export default AnimalShow;