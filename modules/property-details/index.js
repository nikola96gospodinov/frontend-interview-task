/* eslint-disable max-statements */
import React, { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { Inset } from "./style";

import EstimatedValue from "./EstimatedValue";
import PropertyDetails from "./PropertyDetails";
import ValuationChange from "./ValuationChange";
import Mortgage from "./Mortgage";


// const account = {
//   uid: "65156cdc-5cfd-4b34-b626-49c83569f35e",
//   deleted: false,
//   dateCreated: "2020-12-03T08:55:33.421Z",
//   currency: "GBP",
//   name: "15 Temple Way",
//   bankName: "Residential",
//   type: "properties",
//   subType: "residential",
//   originalPurchasePrice: 250000,
//   originalPurchasePriceDate: "2017-09-03",
//   recentValuation: { amount: 310000, status: "good" },
//   associatedMortgages: [
//     {
//       name: "HSBC Repayment Mortgage",
//       uid: "fb463121-b51a-490d-9f19-d2ea76f05e25",
//       currentBalance: -175000,
//     },
//   ],
//   canBeManaged: false,
//   postcode: "BS1 2AA",
//   lastUpdate: "2020-12-01T08:55:33.421Z",
//   updateAfterDays: 30,
// };

const Detail = ({}) => {

  const [accountData, setAccountData ] = useState()

  useEffect(() => {
    window
      .fetch("/api/account")
      .then((res) => res.json())
      .then((data) => setAccountData(data));
  }, []);

  let account

  if (accountData) {
    account = accountData.account

    return (
      <Inset>
        <EstimatedValue account={account} />
        <PropertyDetails account={account} />
        <ValuationChange account={account} />
        <Mortgage account={account} />
        <Button
          // This is a dummy action
          onClick={() => alert("You have navigated to the edit account page")}
        >
          Edit account
        </Button>
      </Inset>
    );
  } else {
    return (
      <>
        <h2>LOADING...</h2>
      </>
    )
  }
};

export default Detail;