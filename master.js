import React from 'react'
import NavBar from './modules/NavBar'
import Content from './modules/Content'

export default React.createClass({
	render: function(){
		return(	
				<div>
					<NavBar />
					{this.props.children}
				</div>
			)
		}
});
