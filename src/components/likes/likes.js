import { useState } from "react";
import like from "../../assets/img/like.png"
import shares from "../../assets/img/share.png"
import "./likes.scss"
const Count = () => {
  const [ count, setCount ] = useState(0);
  const [ share, setShare ] = useState(1);



  const handleIncrementClick = () => {
    if (count < 50) {
      setCount(count + 1);
    }
  }
  const handleIncrementClickShare = () => {
    if (share < 30) {
      setShare(share + 1);
    }
  }
  
  return (
    <div className="likes">
      <div>
      <p onClick={handleIncrementClick}><img src={like} alt="" /></p>
      <p>{count}</p>
      </div>
      <div>
      <p onClick={handleIncrementClickShare}><img src={shares} alt="" /></p>
      <p>{share}</p>

      </div>
    </div>
  );
}

export default Count;