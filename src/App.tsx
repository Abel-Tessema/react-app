// import Button from "./components/Button/Button.tsx";
// import Alert from "./components/Alert/Alert.tsx";
// import {useState} from "react";
// import Like from "./components/Like/Like.tsx";
// import {useState} from "react";

// import {useState} from "react";

// import userService from "./services/user-service.ts";

import ExpandableText from "./components/ExpandableText/ExpandableText.tsx";

function App() {
    // const [alertVisible, setAlertVisible] = useState(false);
    // const [liked, setLiked] = useState<boolean>(false);
    // const [game, setGame] = useState({
    //     id: 1,
    //     player: {
    //         name: "John"
    //     }
    // });
    // const [pizza, setPizza] = useState({
    //     name: 'Spicy Pepperoni',
    //     toppings: ['Mushroom']
    // });

    // const [cart, setCart] = useState({
    //     discount: .1,
    //     items: [
    //         { id: 1, title: 'Product 1', quantity: 1 },
    //         { id: 2, title: 'Product 2', quantity: 1 },
    //     ]
    // });
    // const handleClick = () => {
    //     // setGame({...game, player: {...game.player, name: "Abebe"}});
    //     // setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']})
    //     setCart({...cart, items: cart.items.map(item => item.id === 1 ? { ...item, quantity: 2 } : item) });
    // }
    return (
        <>
            {/*{alertVisible && <Alert onClose={ () => setAlertVisible(false) }/> }*/}
            {/*<Button onClick={() => setAlertVisible(true)}>Abebe Kebede</Button>*/}
            {/*<Like state={ liked ? 'liked' : 'normal' } onClick={() => {*/}
            {/*    console.log('Clicked');*/}
            {/*    setLiked(!liked);*/}
            {/*}}/>*/}
            {/*<Like onClick={() => console.log('Clicked')} />*/}
            <ExpandableText maxChars={70}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit quo sit nam! Totam voluptatum amet, nam nisi voluptates eligendi!
            </ExpandableText>
            <ExpandableText maxChars={70}>
                Scholars, followers, and abstruse moons will always protect them.
                Going to the kingdom doesn’t receive trust anymore than feeling creates prime career.
                The lover follows.
            </ExpandableText>
        </>
    )
}

export default App
