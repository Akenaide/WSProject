import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Property from '../partials/Builder/Card/Property';

class Card extends Component {
	render(){
		const { data } = this.props;
		return(
			<div className="container-card">
				{
				data ?
				<div className="card">		
					<div>{data.name || 'NaN'}</div>
					<div className='cardimage'>
					<img src={`/images/${data.set}/${data.side}${data.release}/${data.sid}.gif`}></img>
					</div>
					<div className="cardtext">
						{ data.ability.map( (ability) => <div key={ability}>{ability}</div> ) }
					</div>
					<div className="extra"> 
						<Row type='flex'>
							<Property name='Type' value={data.type} />
							<Property name='Level' value={data.level} />
							<Property name='Cost' value={data.cost} />						
							<Property name='Color' value={data.color} />
							<Property name='Power' value={data.power} />
							<Property name='Soul' value={data.soul} />
							<Property name='Card No' value={`${data.set}/${data.release}-${data.sid}`} />
							{
								data.attributes.map( attribute =>  <Property key={attribute} name='Trait' value={attribute} />)
							}
						</Row>
					</div>
					<div>
						<a target="_blank" href={`https://heartofthecards.com/code/cardlist.html?card=WS_${data.set}/${data.side}${data.release}-${data.sid}`}>Link</a>
					</div>
				</div>
				: <span>No card found</span>
				}
			</div>
		)
	}
}

export default Card;