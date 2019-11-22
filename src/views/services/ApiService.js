import { Api, JsonRpc } from '../../../node_modules/eosjs'
//import { Core } from '../services/scatterjs-core.min.js' 
//import { Eosjs2 } from '../services/scatterjs-plugin-eosjs2.min.js' 

//DON'T DO THIS IN PRODUCTION EVER
import JsSignatureProvider from '../../../node_modules/eosjs/dist/eosjs-jssig';



//Main action call to the blockchain
/* async function takeAction(action, dataValue) {
    const privateKey = localStorage.getItem("consortium11_key");
    const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
    const signatureProvider = new JsSignatureProvider([privateKey]);
    const api = new Api({ rpc, signatureProvider,
        textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

        //make our blockchain call after setting our action
    try {
        const resultWithConfig = await api.transact({
            actions: [{
                account: process.env.REACT_APP_EOS_CONTRACT_NAME,
                name: action,
                authorization: [{
                    actor: localStorage.getItem("consortium11_account"),
                    permission: 'active',
                }],
                data: dataValue,
            }]
        
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        });
    } catch (err) {
        throw(err)
    }


}
*/
class ApiService{


    
    static async getDabbbalance (username) {
        try{
            const rpc = new JsonRpc('https://api.kylin.alohaeos.com:443');
            //const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": 'dabbtoken111', //process.env.REACT_APP_EOS_CONTRACT_DABB,
                "scope": 'eosetftestac',
                "table": "accounts",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }

    static async getPeozbalance (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_PEOZ,
                "scope": 'eosetftestac',
                "table": 'accounts',
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }

    static async getIkqbalance (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_IKQ,
                "scope": 'eosetftestac',
                "table": "accounts",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }

    static async getVikbalance (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_VIK,
                "scope": 'eosetftestac',
                "table": "accounts",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }

    static async getEtnabalance (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_ETNA,
                "scope": 'eosetftestac',
                "table": "accounts",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }

    static async getEosetfbalance (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME,
                "scope": 'eosetftestac',
                "table": "accounts",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }

































    static async getTotalStakedConsortium (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": "GOVERN",
                "table": "totalconsort",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }


    static async getTotalCirculation () {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": "GOVERN",
                "table": "stat",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }
    





    static async getStakedforEveripedia (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": username,
                "table": "stakeevriped",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }
    

    static async getTotalStakedEveripedia (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": "GOVERN",
                "table": "totalevriped",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }


    static async getStakedforEffectai (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": username,
                "table": "stakeeffect",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }
    

    static async getTotalStakedEffectai (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": "GOVERN",
                "table": "totaleffect",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }




    static async getStakedforPixeos (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": username,
                "table": "stakepixeos",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }
    

    static async getTotalStakedPixeos (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": "GOVERN",
                "table": "totalpixeos",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }


    static async getStakedforLiquidapp (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": username,
                "table": "stakeliqapps",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }
    

    static async getTotalStakedLiquidapp (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": "GOVERN",
                "table": "totalliqapps",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }



    static async getStakedforLumeos (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": username,
                "table": "stakelumeos",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }
    

    static async getTotalStakedLumeos (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": "GOVERN",
                "table": "totallumeos",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }




    static async getStakedforDice(username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": username,
                "table": "stakedice",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }
    

    static async getTotalStakedDice (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": "GOVERN",
                "table": "totaldice",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }


    static async getStakedforProsp (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": username,
                "table": "stakeprosp",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }
    

    static async getTotalStakedProsp (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": "GOVERN",
                "table": "totalprosp",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }





    static async getStakedforEmanate (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": username,
                "table": "stakeemanate",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }
    

    static async getTotalStakedEmanate (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": "GOVERN",
                "table": "totalemanate",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }




    static async getStakedforKarma (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": username,
                "table": "stakekarma",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }
    

    static async getTotalStakedKarma (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": "GOVERN",
                "table": "totalkarma",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }



/*

    static getCurrentUser() {
        return new Promise((resolve, reject) => {
          if (!localStorage.getItem("consortium11_account")) {
            return reject();
          }
          takeAction("login", { username: localStorage.getItem("consortium11_account") })
            .then(() => {
              resolve(localStorage.getItem("consortium11_account"));
            })
            .catch(err => {
              localStorage.removeItem("consortium11_account");
              localStorage.removeItem("consortium11_key");
              reject(err);
            });
        });
    }

    static login({username, key}){
        return new Promise((resolve, reject) => {
            localStorage.setItem("consortium11_account", username);
            localStorage.setItem("consortium11_key", key);
            takeAction("login", { username: username })
            .then(() => {
                resolve();
            })
            .catch(err => {
                localStorage.removeItem("consortium11_account");
                localStorage.removeItem("consortium11_key");
                reject(err);
            });
        });
    }

    static stake(govrnstaking){  //username //KARMA_signalled //IQ_signalled
        return new Promise((resolve, reject) => {
            if (!localStorage.getItem("consortium11_account")) {
                return reject();
            }            
            takeAction("stake", { owner: 'l2hebl2heb11', quantity: '55 GOVRN'}) //localStorage.getItem("consortium11_account") username: username localStorage.getItem("consortium11_account")
            .then(() => {
                resolve();
            })
            .catch(err => {
                localStorage.removeItem("consortium11_account");
                localStorage.removeItem("consortium11_key");
                reject(err);
            });
        });
    }

    static signalprosp(name) {
        return new Promise((resolve, reject) => {
            if (!localStorage.getItem("consortium11_account")) {
                return reject();
            }            
            takeAction("signalprosp", { username: name}) // username: username localStorage.getItem("consortium11_account")
            .then(() => {
                resolve();
            })
            .catch(err => {
                localStorage.removeItem("consortium11_account");
                localStorage.removeItem("consortium11_key");
                reject(err);
            });
        });
        
      }

      static addbalanaceprosp(name, balanceprosp) {
        return new Promise((resolve, reject) => {
            if (!localStorage.getItem("consortium11_account")) {
                return reject();
            }            
            takeAction("addbalanceprosp", { username: name, PGL_signalled: balanceprosp}) // username: username localStorage.getItem("consortium11_account")
            .then(() => {
                resolve();
            })
            .catch(err => {
                localStorage.removeItem("consortium11_account");
                localStorage.removeItem("consortium11_key");
                reject(err);
            });
        });
        
      }


    static signalkarma({IQ_signalled, username}){  //username //KARMA_signalled //IQ_signalled
        return new Promise((resolve, reject) => {
            if (!localStorage.getItem("consortium11_account")) {
                return reject();
            }            
            takeAction("signalkarma", { IQ_signalled: IQ_signalled,username: localStorage.getItem("consortium11_account")}) // username: username
            .then(() => {
                resolve();
            })
            .catch(err => {
                localStorage.removeItem("consortium11_account");
                localStorage.removeItem("consortium11_key");
                reject(err);
            });
        });
    }

    static async getUserByName(username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME,
                "scope": process.env.REACT_APP_EOS_CONTRACT_NAME,
                "table": "signals",
                "limit": 1,
                "lower_bound": username,
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }
*/

    static async getSignalProspectors (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": username,
                "table": "accounts",
                "limit": 2,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }

    static async getTokenBalance (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": username,
                "table": "accounts",
                "limit": 2,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }

    static async getTokenBalanceLocked (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_GOVRNTOKEN,
                "scope": username,
                "table": "stakeconso",
                "limit": 1,
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }

   




    static async getTokenBalanceKarma (username) {
        try{
            const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
            const result = await rpc.get_table_rows({
                "json": true,
                "code": process.env.REACT_APP_EOS_CONTRACT_NAME_EOSTOKEN,
                "scope": username,
                "table": "accounts",
                "limit": 1,
                
                
                
            });
            return result.rows[0];
        } catch (err) {
            console.error(err);
        }
    }






//SIIT SIGNALI APID





static async getTotalVotedProsp () {
    try{
        const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
        const result = await rpc.get_table_rows({
            "json": true,
            "code": process.env.REACT_APP_EOS_CONTRACT_NAME,
            "scope": "PGOLD",
            "table": "totalvotes",
            "limit": 2,
            
            
            
        });
        return result.rows[0];
    } catch (err) {
        console.error(err);
    }
}














}

export default ApiService;