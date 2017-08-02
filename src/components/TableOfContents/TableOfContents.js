import React from 'react';

export default class TableOfContents extends React.Component {
	constructor(props) {
		super(props);

		this.generateItemHTML = this.generateItemHTML.bind(this);
	}

	generateItemHTML(item) {

		const {key , label , items} = item;
		const isActive = (this.props.currentPage === key);

		return (
			<li
				key={key}
				label={label}
				className={(isActive ? 'active ' : '') + key}
				onClick={(e) => {
					e.stopPropagation();
					this.props.onItemClick(key)
				}}

			>
				<a href="#">{label}</a>
				{items ? <ul>{items.map(item => this.generateItemHTML(item))}</ul> : null}
			</li>
		);
	}

	render() {
		return (
			<div className="table-of-contents-root">
				{
					this.props.items.map(item => {

						const {groupLabel , key , label , items} = item;

						return groupLabel ?

							<div key={groupLabel}>
								<p className="group-label">
									{groupLabel}
								</p>
								<ul>
									{items ? items.map(item => this.generateItemHTML(item)) : null}
								</ul>
							</div>

							:

							this.generateItemHTML(item);
					})
				}
			</div>
		);
	}
}