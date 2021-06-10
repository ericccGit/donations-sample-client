import React from "react";
import { Card, Label, Data} from "./styled";
import { formatAsMoney } from "../../util/displayUtil";

interface Props {
    email: string,
    amount: number,
    tip: number,
}

const DonationCard: React.FC<Props> = ({email, amount, tip}) => {
    return (
        <Card>
            <Label>Email</Label>
            <Label>Amount</Label>
            <Label>Tip</Label>
            <Data>{email}</Data>
            <Data>{formatAsMoney(amount)}</Data>
            <Data>{formatAsMoney(tip)}</Data>
        </Card>
    )
}

export default DonationCard
