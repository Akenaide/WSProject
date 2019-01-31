import React, { Component } from 'react';
import { List, Icon } from 'antd';

import Filters from '../partials/Builder/CardSelector/Filters'
import CardItem from '../partials/Builder/CardItem/CardItem'

class CardSelector extends Component {

	handleItemHover = (card) =>{
		const { ViewCard } = this.props;
		ViewCard(card);
	}

	render(){
		const { handleItemHover } = this;
		const { cards } = this.props;
		return(
			<div className="container-card-selector">
				<Filters />
				<List
					dataSource={cards}
					renderItem={ card => (
						<CardItem card={card} handleItemHover={handleItemHover} />
					)}
				/>
			</div>
		)
	}
}

export default CardSelector;