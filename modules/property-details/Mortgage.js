import RowContainer from "../../components/row-container";
import {
    AccountLabel, AccountList, AccountListItem, AccountSection, InfoText
} from "./style";

const Mortgage = ({ account }) => {

    let mortgage;
    if (account.associatedMortgages.length) {
      mortgage = account.associatedMortgages[0];
    }

    return (
        <>
          {mortgage && (
            <AccountSection>
              <AccountLabel>Mortgage</AccountLabel>
              <RowContainer
                // This is a dummy action
                onClick={() => alert("You have navigated to the mortgage page")}
              >
                <AccountList>
                  <AccountListItem><InfoText>
                    {new Intl.NumberFormat("en-GB", {
                      style: "currency",
                      currency: "GBP",
                    }).format(
                      Math.abs(account.associatedMortgages[0].currentBalance)
                    )}
                  </InfoText></AccountListItem>
                  <AccountListItem><InfoText>{account.associatedMortgages[0].name}</InfoText></AccountListItem>
                </AccountList>
              </RowContainer>
            </AccountSection>
          )}
        </>
    )
}

export default Mortgage