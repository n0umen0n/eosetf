// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

import SliderExampleStepBack from './CalculatorBack';


import { connect } from 'react-redux';
import { UserAction } from '../../actions';
import { ApiService } from '../../services';
import React, { Component } from 'react';

//import { connect } from 'react-redux';

import ScatterJS from '@scatterjs/core';
import ScatterEOS from '@scatterjs/eosjs2';

import {JsonRpc} from 'eosjs/dist/eosjs-jsonrpc';
import { Api} from 'eosjs/dist/eosjs-api';








const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

//export default function Modal() {
  //this.transfer = this.transfer.bind(this);

  //const [classicModal, setClassicModal] = React.useState(false);


  function transferpeos() {


    // {
   //{
   //{
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
                  to: 'dabbtoken111',
                  from: account.name,
                  quantity: 1.0000 + " ETNA",
                  memo:  "GOVERN",
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


  function transferiq() {


    // {
   //{
   //{
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
                  to: 'dabbtoken111',
                  from: account.name,
                  quantity: 1.0000 + " ETNA",
                  memo:  "GOVERN",
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


  function transfervigor() {


    // {
   //{
   //{
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
                  to: 'dabbtoken111',
                  from: account.name,
                  quantity: 1.0000 + " ETNA",
                  memo:  "GOVERN",
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

function transferedna() {


  // {
 //{
 //{
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
                to: 'dabbtoken111',
                from: account.name,
                quantity: 1.0000 + " ETNA",
                memo:  "GOVERN",
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














  function transfer() {


  // {
 //{
 //{
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
                to: 'ednatoken111',
                from: account.name,
                quantity: (1).toFixed(4) + " DABB",
                memo:  "DABB",
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




  export default function ModalBack() {

    //this.transfer = this.transfer.bind(this);

    connect(mapStateToProps, mapDispatchToProps)

      //this.transfer = this.transfer.bind(this);





  const classes = useStyles();
  const [anchorElLeft, setAnchorElLeft] = React.useState(null);
  const [anchorElTop, setAnchorElTop] = React.useState(null);
  const [anchorElBottom, setAnchorElBottom] = React.useState(null);
  const [anchorElRight, setAnchorElRight] = React.useState(null);
  const [classicModal, setClassicModal] = React.useState(false);
  return (
              <div>
                <Button
                  color="primary"
                  onClick={() => setClassicModal(true)}
                >
                  <LibraryBooks className={classes.icon} />
                  Refund EosETF
                </Button>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Calculator</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p>
                      You can get your tokens refunded for a fee of 0.5%. blahblahblah
                      blahblahblah blahblahblah.
                    </p>
                    <div style={{"height":"40px"}}></div>

                    <SliderExampleStepBack />

                  </DialogContent>
                </Dialog>
              </div>

  );


                }
                const mapStateToProps = state => state;

                const mapDispatchToProps = {
                  setUser: UserAction.setUser,
                }

                connect(mapStateToProps, mapDispatchToProps)
