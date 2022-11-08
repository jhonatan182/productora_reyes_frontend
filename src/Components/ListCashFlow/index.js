import { toCurrency } from '../../Utilities/Currency';
import './ListCashFlow.css';
const ListCashFlow = ({ documents = [] }) => {
  const listItems = documents.map((o) => {
    return <ListItem key={o._id} {...o} />
  })
  return (
    <section>
      {listItems}
    </section>
  );
}
const ListItem = ({ date, description, type, category, amount }) => {
  return (
    <section className={['listItem', type.toLowerCase()].join(' ')}>
      <div>
        <span><b>{description}</b></span>
        <span><b>{toCurrency(amount)}</b></span>
      </div>
      <div>
        <span>{category}</span>
        <span>{new Date(date).toLocaleDateString()}</span>
      </div>
    </section>
  )
}
export default ListCashFlow;
