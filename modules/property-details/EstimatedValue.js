import { add, format } from "date-fns"
import {
    AccountHeadline, AccountLabel, AccountList, AccountListItem, AccountSection, InfoText
  } from "./style";

const EstimatedValue = ({ account }) => {
    const lastUpdate = new Date(account.lastUpdate);

    return (
        <AccountSection>
          <AccountLabel>Estimated Value</AccountLabel>
          <AccountHeadline>
            {new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "GBP",
            }).format(account.recentValuation.amount)}
          </AccountHeadline>
          <AccountList>
            <AccountListItem><InfoText>
              {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
            </InfoText></AccountListItem>
            <AccountListItem><InfoText>
              {`Next update ${format(
                add(lastUpdate, { days: account.updateAfterDays }),
                "do MMM yyyy"
              )}`}
            </InfoText></AccountListItem>
          </AccountList>
        </AccountSection>
    )
}

export default EstimatedValue