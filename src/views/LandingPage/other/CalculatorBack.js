import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';



import { connect } from 'react-redux';
import { UserAction } from '../../actions';

import ScatterJS from '@scatterjs/core';
import ScatterEOS from '@scatterjs/eosjs2';

import {JsonRpc} from 'eosjs/dist/eosjs-jsonrpc';
import { Api} from 'eosjs/dist/eosjs-api';
import Button from "components/CustomButtons/Button.js";
import { ApiService } from '../../services';


 class SliderExampleStepBack extends React.Component {

  constructor(props) {
    super(props);

    this.loadetf();
  }

  loadetf() {

    const { setUser ,user: { name } } = this.props;

    return ApiService.getEosetfbalance(name).then(user => {
      setUser({
        etfbalance: user.balance,
      });
    }).catch(()=>{})
  }

  transferetf(){

    const { sliderValues } = this.state;


    console.log ("vitt");
     //const { form } = this.state;
    // const { setUser } = this.props;

     ScatterJS.plugins( new ScatterEOS() );

     const network = ScatterJS.Network.fromJson({
       blockchain:'eos',
       chainId:'5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
       host:'api.kylin.alohaeos.com',
       port:443,
       protocol:'https'
     });

    const rpc = new JsonRpc(network.fullhost());


    //ScatterJS.login().then(id=> {

     //if(!id) return console.error('no identity');



     //const rpc = new JsonRpc(network.fullhost());
     const junglivittt = ScatterJS.eos(network, Api, {rpc});

     const account = ScatterJS.account('eos');



        junglivittt.transact({
          actions:[{
              account: 'eosetfeosetf',
              name: 'transfer',
              authorization: // user paying for resources must go first
              [{
                  actor: account.name,
                  permission: account.authority,
              }],
              data: {
                  //TODO: pas in data object
                  to: 'eosetfeosetf',
                  from: account.name,
                  quantity: ((parseInt(sliderValues)).toFixed(3) + " EOSETF"),
                  memo:  "",
              }
          }]
      }, {
          blocksBehind: 3,
          expireSeconds: 300,
        }).then(res => {
            console.log('sent: ', res);
        }).catch(err => {
          //this.setState ({ error: err.toString() });
        });
      // });
     //});

     console.log ("pede");

  }

  state = { sliderValues: [1] };

  handleChange = sliderValues => {
    this.setState({ sliderValues });
  };

  render() {

    const { user: {name,etfbalance,peozbalance,ikqbalance,etnabalance,vikbalance,dabbbalance,


    } } = this.props;

    const { sliderValues } = this.state;
    return (
      <div>

        <Range
          min={1}
          max={50}
          onChange={this.handleChange}
          defaultValue={sliderValues}
        />
        <div style={{"padding-top":"15px"}}>
        You are refunding <b>{sliderValues[0]} EosETF</b> tokens.
        <br></br>
        You will be refunded:
        <br></br>
        {sliderValues[0]*400*0.995} PEOS tokens.
        <br></br>
        {sliderValues[0]*200*0.995} LIQUIDAPP tokens.
        <br></br>
        {sliderValues[0]*1000*0.995} VIGOR tokens.
        <br></br>
        {sliderValues[0]*1000*0.995} EDNA tokens.
        <br></br>
        {sliderValues[0]*100*0.995} IQ tokens.
        </div>
        {(name)}{(etfbalance)}, {(peozbalance)}, {(ikqbalance)}, {(etnabalance)}, {(vikbalance)}, {(dabbbalance)}
        <br></br>
        <Button
                      onClick={() => this.transferetf() }
                      color="danger"
                    >
                      Redemption
                    </Button>
      </div>
    );
  }
}
const mapStateToProps = state => state;

const mapDispatchToProps = {
  setUser: UserAction.setUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(SliderExampleStepBack);
