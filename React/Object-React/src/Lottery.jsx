import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n, WinningSum}) {
    let [ ticket, setTicket ] = useState(genTicket(n));
    let isWinning = sum(ticket) === WinningSum; ;

    let buyTicket = () => {
        setTicket(genTicket(n));
    };
    
    return (
        <div>
            <h1>Lottery</h1>
            <Ticket ticket={ticket} />
            <Button action={buyTicket} />
            {isWinning && <h3>You won!</h3>}
        </div>
    );
}