import DonationCard from "../../donationCard/DonationCard";
import { QueryResult } from "@apollo/client";

interface DonationQueryReturn {
  user: { email: string };
  amount: number;
  tip: number;
}

type Props = QueryResult;

const DonationList: React.FC<Props> = ({ loading, data, error }: Props) => {
  /*
    In practice I would split the loading/error handling into seperate components and 
    only pass data to the list component, but for the sake of keeping things quick and simple...
    */
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.returnAllDonations.map(
    ({ user, amount, tip }: DonationQueryReturn, idx: number) => (
      <DonationCard key={idx} email={user.email} amount={amount} tip={tip} />
    )
  );
};

export default DonationList;
