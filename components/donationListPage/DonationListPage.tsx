import { ButtonPrimary } from "../ui/styled";
import DonationList from "./donationList/DonationList";
import { Fixed, Layout } from "./styled";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

const DONATIONS = gql`
  query {
    returnAllDonations {
      user {
        email
      }
      amount
      tip
    }
  }
`;

const DonationListPage: React.FC<{}> = () => {
  const router = useRouter();
  const queryReturn = useQuery(DONATIONS, { fetchPolicy: "no-cache" });

  return (
    <>
      <Fixed>
        <ButtonPrimary
          onClick={() => {
            router.push("/donate");
          }}
          disabled={false}
        >
          Donate
        </ButtonPrimary>
      </Fixed>
      <Layout>
        <DonationList {...queryReturn} />
      </Layout>
    </>
  );
};

export default DonationListPage;
