import React, { Component } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from './Button.js';
// @material-ui/icons
import Dashboard from "@material-ui/icons/WorkOutline";
import Schedule from "@material-ui/icons/AccountBalance";
import List from "@material-ui/icons/List";
import Modal from './Modal';
import ModalBack from './ModalBack';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

import { connect } from 'react-redux';
import { UserAction } from '../../actions';
import { ApiService } from '../../services';



import ScatterJS from '@scatterjs/core';
import ScatterEOS from '@scatterjs/eosjs2';

import {JsonRpc} from 'eosjs/dist/eosjs-jsonrpc';
import { Api} from 'eosjs/dist/eosjs-api';







const useStyles = makeStyles(styles);

export default function SectionPills() {

  connect(mapStateToProps, mapDispatchToProps);

  const classes = useStyles();
  return (
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Buy EosETF",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <small>
                          <b>Buy a fund</b>
                        </small>
                        <br />
                        <small>
                          Do you want to take part of EOS growth? Want to own
                          the biggest dApps? blahblah.
                        </small>
                        <br />
                        <small>
                          Click and blah blah.
                        </small>
                        <br />
                        <Button type="button" color="info">Get EosETF</Button>
                      </span>
                    )
                  },
                  {
                    tabButton: "Make EosETF",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <small>
                          <b>Create a fund</b>
                        </small>
                        <br />
                        <small>
                          You can create a fund and sell it.
                        </small>
                        <br />
                        <Modal />
                        <ModalBack />
                      </span>
                    )
                  }
                ]}
              />

  );
}



const mapStateToProps = state => state;

const mapDispatchToProps = {
  setUser: UserAction.setUser,
}

// export a Redux-connected React component
//export default connect(mapStateToProps, mapDispatchToProps)
//;
