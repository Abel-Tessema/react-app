import {ReactNode} from "react";
import style from './Button.module.css';

interface Props {
    children?: ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'default';
    onClick?: () => void;
}

function Button({ children, color = 'primary', onClick }: Props) {
    return (
        <>
            {/*<button className={'btn btn-' + color} onClick={onClick}>{children}</button>*/}
            <button className={[style.btn, style['btn-' + color]].join(' ')} onClick={onClick}>{children}</button>
        </>
    );
}

export default Button;