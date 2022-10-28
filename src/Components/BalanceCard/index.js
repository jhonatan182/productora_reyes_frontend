import { toCurrency } from '../../Utilities/Currency';
import './BalanceCard.css';
const BalanceCard = ({ type, amount, onClicked = () => { } }) => {
  return (
    <section className={['balanceCard', type.toLowerCase()].join(' ')}>
      <h1>{type}</h1>
      <h1>{toCurrency(amount)} <span className="balanceBtn" onClick={onClicked}>+</span></h1>
    </section>
  );
}
export default BalanceCard;
