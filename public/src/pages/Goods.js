import React,{Component} from 'react';

import Cell from "../components/cell";
import {NavLink,Route,Switch,Redirect} from 'react-router-dom';
import Header from '../layouts/header.js'
import styles from '../assets/css/goods.module.css'
import Column from "./Trip";
import Follow from "./Follow";
import Detail from "./Detail";
import UcList from "../components/uc-list";

// 引入react-redux
import {connect} from 'react-redux';
import {clear, updateList} from '../store/actionCreators'
 class Goods extends Component{
  // state={
  //   column : []
  // };

  // async componentDidMount(){
  //   let res =  await React.axios({url:'/api/goods/foll',params:{_page:1,_limit:12}})
  //   this.setState({column:res.data.data})
  // }


  componentDidMount(){
    this.props.dispatch(clear('CLEAR_GOODS'));
    this.props.dispatch(
        updateList({collectionName:'foll',params:{_page:1,_limit:6},type:'UPDATE_GOODS'})
    )
  }
  render(){
    let {goods}=this.props;
    let {location,match}=this.props;
    // console.log(this.props.match.url, this.props.match.path)
    return (
		
      <div className="pt">
        {/*<Route exact path={'/goods/index'} component={Goods}/>*/}
        {/*<Route exact path={'/goods/trip'} component={Column}/>*/}
        {/*<Route exact path={'/goods/follow'} component={Follow}/>*/}


        {/*<Route path="/goods/:id" component={Detail} />*/}
        {/*{*/}
        {/*  match.path&&'/goods/index'&&<Route component={Column} />*/}
        {/*}*/}
        {/*{*/}
        {/*  match.path&&'/goods/collumn'&&<Route  component={Follow} />*/}
        {/*}*/}
        {/*{*/}
        {/*  match.path&&'/goods/follow'&&<Route component={Follow} />*/}
        {/*}*/}

        {
          goods.map((item,index)=>(
              <UcList
                  key={item._id}
                  index={index}
                  data={item}
                  style={{height:'3rem'}}
                  to={{pathname:'/detail',apiname:'home'}}

              />
          ))
        }
      </div>
    )
  }
}
export default connect(
    state=>({goods:state.goods})
)(Goods)