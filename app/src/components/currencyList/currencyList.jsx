import React from 'react';
import './currencyList.scss';

import { connect } from 'react-redux';

class CurrencyList extends React.Component {

    state = {}

    render() {
        return (
            <select defaultValue={this.props.selected} onChange={
                e => this.props.setCurrency(
                    e.target.value, this.props.id
                )}>
                {this.props.currencies?.map(currency => (
                    <option key={currency.code}
                        value={currency.code}
                    >
                        {currency.name}
                    </option>
                ))}
            </select>
        )
    }
}

const mapStateToProps = ({ initialData }) => ({ currencies: initialData.currenciesList })
export default connect(mapStateToProps)(CurrencyList);
