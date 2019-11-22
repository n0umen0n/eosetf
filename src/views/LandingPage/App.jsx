/*
import React, { Component } from 'react';
//Components
import { connect } from 'react-redux';
//import { Login, Lapp } from '../index';
import { UserAction } from '../actions';
import { ApiService } from '../services';
//import { LOADIPHLPAPI } from 'dns';
import ScatterJS from '@scatterjs/core';
import ScatterEOS from '@scatterjs/eosjs2';

import {JsonRpc} from 'eosjs/dist/eosjs-jsonrpc';
import { Api} from 'eosjs/dist/eosjs-api';

import { LandingPage } from '../LandingPage/LandingPage';


class App extends Component {

  constructor(props) {
    super(props);
    //this.getCurrentUser = this.getCurrentUser.bind(this);
    

    //this.getCurrentUser();
    


    ScatterJS.plugins( new ScatterEOS() );

    const network = ScatterJS.Network.fromJson({
      blockchain:'eos',
      chainId:'5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
      host:'api.kylin.alohaeos.com',
      port:443,
      protocol:'https'
    });
    
    
    ScatterJS.connect('EOSETF', {network}).then(connected => {
      if(!connected) return console.error('no scatter');
      
    
      ScatterJS.login().then(id=> {
    
        if(!id) return console.error('no identity');
  
        
        const rpc = new JsonRpc(network.fullhost());
        const junglivittt = ScatterJS.eos(network, Api, {rpc});
    
        const account = ScatterJS.account('eos');
  
  
        const { setUser } = this.props;
  
        //const account = ScatterJS.account('eos');
    
        setUser({ 
        name: id.accounts[0].name,});
  
        junglivittt.transact({
          actions:[{
              account: 'eosetfeosetf',
              name: 'login',
              authorization: // user paying for resources must go first
              [{
                  actor: account.name,
                  permission: account.authority,
              }],
              data: {
                  //TODO: pass in data object
                  username: account.name
              }
          }]
      }, {
          blocksBehind: 3,
          expireSeconds: 30,
        }).then(res => {
            console.log('sent: ', res);
        }).catch(err => {
            console.error('error: ', err);
        });
    });
  
    //ScatterJS.logout();
    console.log ("loggedout");
  
  });




              
         
  }
/*
  getCurrentUser(){
    // extracts setUser of UserAction from Redux
    const { setUser } = this.props;
    //send requests to blockchain to get the currently logged in user
    return ApiService.getCurrentUser()
      //if server returns a username
      .then(username => {
        // saves name to Redux store
          setUser({name: username});
        //ignoring 401 console error
      }).catch(()=>{})
  }

  render() {
    const { user: {name} } = this.props;

    return (
      <div className="Lapp">
        { name && <LandingPage/> }
        { !name && <LandingPage/> }
      </div>
    );
  }

}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  setUser: UserAction.setUser,
}

// export a redux-connected react component
export default connect(mapStateToProps, mapDispatchToProps)(App);
*/