import RowContainer from "../../components/row-container";
import {
    AccountLabel, AccountList, AccountListItem, AccountSection, InfoText, Pill
} from "./style";

const ValuationChange = ({ account }) => {
    const originalPurchaseDate = new Date(account.originalPurchasePriceDate).toLocaleDateString()
    const sincePurchase = account.recentValuation.amount - account.originalPurchasePrice
    const sincePurchasePercentage = sincePurchase / account.originalPurchasePrice * 100
    const yearsSincePurchase = new Date().getFullYear() - new Date(account.originalPurchasePriceDate).getFullYear()
    const annualAppreciation = sincePurchasePercentage / yearsSincePurchase

    return (
        <AccountSection>
          <AccountLabel>Valuation change</AccountLabel>
          <RowContainer>
            <AccountList>
              <AccountListItem><InfoText>Purchased for <strong>£{ account.originalPurchasePrice }</strong> on <strong>{ originalPurchaseDate }</strong></InfoText></AccountListItem>
              <AccountListItem>
                <InfoText>Since Purchase</InfoText>
                <Pill>{ sincePurchase > 0 ? '+' : '-' }£{ sincePurchase } ({ sincePurchasePercentage }%)</Pill>
              </AccountListItem>
              <AccountListItem>
                <InfoText>Annual Appreciation</InfoText>
                <Pill>{ annualAppreciation > 0 ? '+' : '-' }{ annualAppreciation }%</Pill>
              </AccountListItem>
            </AccountList>
          </RowContainer>
        </AccountSection>
    )
}

export default ValuationChange