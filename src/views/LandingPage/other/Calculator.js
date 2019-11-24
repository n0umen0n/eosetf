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

 class SliderExampleStep extends React.Component {

  //connect(mapStateToProps, mapDispatchToProps)
  constructor(props) {
    super(props);



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






    this.transferedna = this.transferedna.bind(this);
        this.transferpeos = this.transferpeos.bind(this);
        this.transferdapp = this.transferdapp.bind(this);
        this.transferiq = this.transferiq.bind(this);
        this.transfervig = this.transfervig.bind(this);



         this.loadetna();
         this.loadvik();
         this.loadpeoz();
         this.loaddabb();
         this.loadikq();

    }
/*

this.lita();
        this.lita1();
        this.lita2();
        this.lita3();
        this.lita4();

    lita() {
      var intervalid = setInterval(() => {
        this.loadetna();
      }, 12000);

      setTimeout (() => { clearInterval (intervalid);
      }, 24000);
     }


     lita1() {
      var intervalid = setInterval(() => {
        this.loadvik();
      }, 12000);

      setTimeout (() => { clearInterval (intervalid);
      }, 24000);
     }

     lita2() {
      var intervalid = setInterval(() => {
        this.loadpeoz();
      }, 12000);

      setTimeout (() => { clearInterval (intervalid);
      }, 24000);
     }

     lita3() {
      var intervalid = setInterval(() => {
        this.loaddabb();
      }, 12000);

      setTimeout (() => { clearInterval (intervalid);
      }, 12000);
     }

     lita4() {
      var intervalid = setInterval(() => {
        this.loadikq();
      }, 12000);

      setTimeout (() => { clearInterval (intervalid);
      }, 24000);
     }

*/

    loadetna() {

      const { setUser ,user: { name } } = this.props;

      return ApiService.getEtnabalance(name).then(user => {
        setUser({
          etnabalance: user.balance,
        });
      }).catch(()=>{})
    }

      loaddabb() {

        const { setUser ,user: { name } } = this.props;

        return ApiService.getDabbbalance(name).then(user => {
          setUser({
            dabbbalance: user.balance,
          });
        }).catch(()=>{})
      }

        loadikq() {

          const { setUser ,user: { name } } = this.props;

          return ApiService.getIkqbalance(name).then(user => {
            setUser({
              ikqbalance: user.balance,          });
            }).catch(()=>{})
          }

          loadvik() {

            const { setUser ,user: { name } } = this.props;

            return ApiService.getVikbalance(name).then(user => {
              setUser({
                vikbalance: user.balance,
              });
            }).catch(()=>{})
          }

            loadpeoz() {

              const { setUser ,user: { name } } = this.props;

              return ApiService.getPeozbalance(name).then(user => {
                setUser({
                  peozbalance: user.balance,             });
                }).catch(()=>{})
              }


    transferedna() {


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
                account: 'ednatoken111',
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
                    quantity: ((parseInt(sliderValues)*1000).toFixed(4) + " ETNA"),
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

         transferdapp() {


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
                    account: 'dabbtoken111',
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
                        quantity: ((parseInt(sliderValues)*200).toFixed(4) + " DABB"),
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



             transferiq() {


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
                        account: 'evertoken111',
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
                            quantity: ((parseInt(sliderValues)*100).toFixed(4) + " IKQ"),
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




                 transferpeos() {


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
                            account: 'peostoken111',
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
                                quantity: ((parseInt(sliderValues)*400).toFixed(4) + " PEOZ"),
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



                     transfervig() {


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
                                account: 'vigotoken111',
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
                                    quantity: ((parseInt(sliderValues)*1000).toFixed(4) + " VIK"),
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

   // const { setUser } = this.props;

    //const account = ScatterJS.account('eos');

    //setUser({
     //slaidivalue: sliderValues});
  };



  render() {

    const { user: {name,etfbalance,peozbalance,ikqbalance,etnabalance,vikbalance,dabbbalance,


      } } = this.props;

    const { sliderValues } = this.state;

    const formatTheColor = () => {
      if ({ sliderValues } *40000 >= {peozbalance}){
        document.getElementById("peos").style.color = "red";
      }
      else {
        document.getElementById("peos").style.color = "green";
      }
    };

    return (
      <div>

        <Range
          min={1}
          max={50}
          onChange={this.handleChange}
          defaultValue={sliderValues}
        />
        <div style={{"padding-top":"15px"}}>
        You are making <b>{sliderValues[0]} EosETF</b> tokens.
        <br></br>
        You need to transfer:
        <br></br>
        {sliderValues[0]*40000} PEOS tokens. <small id="peos" style={{"color":"black"}}>(You have: {(peozbalance)}.)</small>
        <br></br>
        {sliderValues[0]*200} LIQUIDAPP tokens. (You have: {(dabbbalance)}.)
        <br></br>
        {sliderValues[0]*1000} VIGOR tokens. (You have:  {(vikbalance)}.)
        <br></br>
        {sliderValues[0]*1000} EDNA tokens. (You have: {(etnabalance)}.)
        <br></br>
        {sliderValues[0]*100} IQ tokens. (You have: {(ikqbalance)}.)
        </div>
        {(name)}{(etfbalance)}, {(peozbalance)}, {(ikqbalance)}, {(etnabalance)}, {(vikbalance)}, {(dabbbalance)}
        <br></br>
        <Button
                      onClick={() => this.transferedna() }
                      color="primary"
                    >
                      edna
                    </Button>
                    <Button
                      onClick={() => this.transferdapp() }

                      color="primary"
                    >
                      dapp
                    </Button>
                    <Button
                      onClick={() => this.transferiq() }
                      color="primary"
                    >
                      iq
                    </Button>
                    <Button
                      onClick={() => this.transferpeos() }
                      color="primary"
                    >
                      peos
                    </Button>
                    <Button
                      onClick={() => this.transfervig() }
                      color="primary"
                    >
                      vig
                    </Button>
      </div>

    );
  }
 }

const mapStateToProps = state => state;

const mapDispatchToProps = {
  setUser: UserAction.setUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(SliderExampleStep);
