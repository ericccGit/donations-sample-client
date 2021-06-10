import React from "react";
import { Form, Field } from "react-final-form";
import { FormItemCtr, FormCtr } from "./styled";
import DecimalInput from "./DecimalInput";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { required } from "../../util/validationUtil";
import { ButtonPrimary } from "../ui/styled";

interface Values {
  amount: string;
  tip: string;
}

const ADD_DONATION = gql`
  mutation CreateDonation($amount: Float!, $tip: Float!, $userId: String!) {
    createDonation(data: { amount: $amount, tip: $tip, userId: $userId }) {
      id
    }
  }
`;

const DEFAULT_USER_ID = "4699519a-733e-466c-9473-3da5808a3293";

const DonationForm = () => {
  const router = useRouter();

  const [addDonation] = useMutation(ADD_DONATION, { errorPolicy: "all" });

  const onSubmit = async (values: Values) => {
    //Add the donation

    //Don't think this is the nicest way for error handling
    //with appollo client, but seems to work
    try {
      await addDonation({
        variables: {
          amount: parseFloat(values.amount),
          tip: parseFloat(values.tip),
          userId: DEFAULT_USER_ID,
        },
      });
    } catch (e) {
      //toast an error and exit
      toast.error(`Uh oh... there was an error: ${e.message}`);
      return;
    }
    //Success - toast and return home
    toast.success("Thank you!!!");
    router.push("/");
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ tip: "0.00" }}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <FormCtr>
            <Field<string>
              name={"amount"}
              label={"Amount"}
              required
              validate={required}
              component={DecimalInput}
              placeholder="Amount"
            />
            <Field<string>
              label={"Add a tip?"}
              name={"tip"}
              required
              component={DecimalInput}
              placeholder="Plz"
            />
            <FormItemCtr>
              <ButtonPrimary type="submit" disabled={submitting || pristine}>
                Submit
              </ButtonPrimary>
            </FormItemCtr>
          </FormCtr>
        </form>
      )}
    />
  );
};

export default DonationForm;
