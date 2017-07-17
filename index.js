import React, { Component } from 'react';
import { Modal, View, Text, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import { showModalAction } from './action'

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

class Index extends Component {
   constructor(props) {
    console.log('constructor');
     super(props);
   }

   render() {
     console.log('render');
  		return (
					<View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
  					<Text style={{alignItems:'center'}} onPress={()=>{this.onTextClick()}}>弹窗</Text>
  					<Modal visible={this.props.bShowModal}>
							<View style={{left: (screenWidth - 300)/2, top: (screenHeight - 300)/2, width: 300, height: 300,justifyContent:'center',alignItems: 'center',backgroundColor: '#929292'}}>
	  							<Text>Hello Redux</Text>
								</View>
  					</Modal>
  			</View>
  	)
	 }

	 onTextClick() {
		 this.props.dispatch(showModalAction);
	 }
}

function mapStateToProps(store){
  console.log('mapStateToProps');
	return {
		bShowModal: store.bShowModal
	}
}

export default connect(mapStateToProps)(Index);
