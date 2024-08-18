import {useState} from "react";

interface Props {
    maxChars: number;
    children: string;
}

function ExpandableText({children, maxChars}: Props) {
    const [expanded, setExpanded] = useState(false);
    const text = expanded ? children : children.substring(0, maxChars);

    if (maxChars >= children.length) return <>{children}</>;
    return ( // children.length = 149
        <>
            {/*<p style={{*/}
            {/*    maxWidth: maxChars.toString() + 'ch',*/}
            {/*    overflow: "hidden",*/}
            {/*    textOverflow: 'ellipsis'*/}
            {/*}}>*/}
            {/*    {children}*/}
            {/*</p>*/}
            <p>{text}{expanded ? '' : '…'}</p>
            <button onClick={() => setExpanded(!expanded)}>{expanded ? 'Less' : 'More'}</button>
            <br/><br/>
        </>
    );
}

export default ExpandableText;