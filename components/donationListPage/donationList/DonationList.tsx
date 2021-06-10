import DonationCard from "../../donationCard/DonationCard";
import { QueryResult } from "@apollo/client";

interface queryReturn {
  user: {email : string};
  amount: number;
  tip: number;
}

type Props = QueryResult;

const DonationList: React.FC<Props> = ({loading, data, error} : Props) => {
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.returnAllDonations.map(({ user, amount, tip } : queryReturn, idx: number) => (
      <DonationCard key={idx} email={user.email} amount={amount} tip={tip} />
    ));
  }
  
  export default DonationList;