// import {CiHeart} from "react-icons/ci";
// import { FaHeart } from "react-icons/fa";
// import style from './Like.module.css'
import {useState} from "react";
import {TiHeartFullOutline, TiHeartOutline} from "react-icons/ti";

interface Props {
    onClick: () => void;
    // state: 'normal' | 'liked';
}

// function Like({ onClick, state }: Props) {
function Like({ onClick }: Props) {
    const [liked, setLiked] = useState<boolean>(false);
    const toggle = () => {
        setLiked(!liked);
        onClick();
    }

    if (liked) return <TiHeartFullOutline color="red" size={20} onClick={toggle} />
    return <TiHeartOutline size={20} onClick={toggle} />
    // return (
    //     <div onClick={onClick} className={style[state]}>
    //         <CiHeart/>
    //     </div>
    // );
}

export default Like;