import { ActionTypes } from '../const';

const initialState = {
    name: "",
    NATIVE_signalled: "",
    balance: 8,
    NATIVE_holdings: "" ,
    balancekarma: 0,
    govrnlocked: 0,
    govrntolock: 0,
    govrnstaking: "",
    Signalled_YES_PROSPECTORS: 0,
    totalstakedkarma: 0,
    stakeforkarma:5,
    totalstakedemanate: 0,
    stakeforemanate:0,
    availabletostake:2,
    totalstaked:0,
    stakedforeveripedia:0,
    totalstakedeveripedia:0,
stakedforeffectai:0, 
 totalstakedeffectai:0,
stakedforpixeos:0,
totalstakedpixeos:0,
stakedforliquidapp:0,
totalstakedliquidapp:0,
stakedforlumeos:0,
totalstakedlumeos:0,
stakedfordicel:0,
totalstakeddice:0,
stakedforprosp:0,
totalstakedprosp:0,


totalcirculation:0,
totalsignals:0,
    
totalbalance:0,
    
totalstakedconsortium:0,
liqappsreward:0,
totaltotalstaked:0,

karmareward:0,

emanatereward:0,

everipediareward:0,

effectaireward:0,

pixeosreward:0,

lumeosreward:0,

dicereward:0,

prospreward:0,

consortiumreward:0,

totalyesprosp:0,
totalnoprosp:0,

slaidivalue:1,

etfbalance:0,peozbalance:0,ikqbalance:0,etnabalance:0,vikbalance:0,dabbbalance:0,

//karmanewstake:0,
}



export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_USER: {
            return Object.assign({}, state, {
                
                name: typeof action.name === "undefined" ?
                    state.name : action.name,
                


                    etnabalance: typeof action.etnabalance === "undefined" ?
                    state.etnabalance : parseInt(action.etnabalance),


                    ikqbalance: typeof action.ikqbalance === "undefined" ?
                    state.ikqbalance : parseInt(action.ikqbalance),


                    peozbalance: typeof action.peozbalance === "undefined" ?
                    state.peozbalance : parseInt(action.peozbalance),


                    vikbalance: typeof action.vikbalance === "undefined" ?
                    state.vikbalance : parseInt(action.vikbalance),

                    dabbbalance: typeof action.dabbbalance === "undefined" ?
                    state.dabbbalance : parseInt(action.dabbbalance),


                    etfbalance: typeof action.etfbalance === "undefined" ?
                    state.etfbalance : parseInt(action.etfbalance),





                    totalcirculation: typeof action.totalcirculation === "undefined" ?
                    state.totalcirculation : parseInt(action.totalcirculation),
                    
                    totalsignals: parseInt(state.totalcirculation / 50000),
    
                  
                    slaidivalue: typeof action.slaidivalue === "undefined" ?
                    state.slaidivalue : parseInt(action.slaidivalue),

                    
                    //karmanewstake: typeof action.karmanewstake === "undefined" ?
                    //state.karmanewstake : parseInt(action.karmanewstake),



//total voted hakkab siit


totalyesprosp: typeof action.totalyesprosp === "undefined" ?
                state.totalyesprosp : parseInt(action.totalyesprosp),
                
                totalnoprosp: typeof action.totalnoprosp === "undefined" ?
                state.totalnoprosp : parseInt(action.totalnoprosp),






                totalstakedkarma: typeof action.totalstakedkarma === "undefined" ?
                state.totalstakedkarma : parseInt(action.totalstakedkarma),
                stakedforkarma: typeof action.stakedforkarma === "undefined" ?
                state.stakedforkarma : parseInt(action.stakedforkarma),


                totalstakedemanate: typeof action.totalstakedemanate === "undefined" ?
                state.totalstakedemanate : parseInt(action.totalstakedemanate),
                stakedforemanate: typeof action.stakedforemanate === "undefined" ?
                state.stakedforemanate : parseInt(action.stakedforemanate),


                totalstakedprosp: typeof action.totalstakedprosp === "undefined" ?
                state.totalstakedprosp : parseInt(action.totalstakedprosp),
                stakedforprosp: typeof action.stakedforprosp === "undefined" ?
                state.stakedforprosp : parseInt(action.stakedforprosp),


                totalstakeddice: typeof action.totalstakeddice === "undefined" ?
                state.totalstakeddice : parseInt(action.totalstakeddice),
                stakedfordice: typeof action.stakedfordice === "undefined" ?
                state.stakedfordice : parseInt(action.stakedfordice),


                totalstakedlumeos: typeof action.totalstakedlumeos === "undefined" ?
                state.totalstakedlumeos : parseInt(action.totalstakedlumeos),
                stakedforlumeos: typeof action.stakedforlumeos === "undefined" ?
                state.stakedforlumeos : parseInt(action.stakedforlumeos),

                totalstakedliquidapp: typeof action.totalstakedliquidapp === "undefined" ?
                state.totalstakedliquidapp : parseInt(action.totalstakedliquidapp),
                stakedforliquidapp: typeof action.stakedforliquidapp === "undefined" ?
                state.stakedforliquidapp : parseInt(action.stakedforliquidapp),


                totalstakedpixeos: typeof action.totalstakedpixeos === "undefined" ?
                state.totalstakedpixeos : parseInt(action.totalstakedpixeos),
                stakedforpixeos: typeof action.stakedforpixeos === "undefined" ?
                state.stakedforpixeos : parseInt(action.stakedforpixeos),


                totalstakedeffectai: typeof action.totalstakedeffectai === "undefined" ?
                state.totalstakedeffectai : parseInt(action.totalstakedeffectai),
                stakedforeffectai: typeof action.stakedforeffectai === "undefined" ?
                state.stakedforeffectai : parseInt(action.stakedforeffectai),


                totalstakedeveripedia: typeof action.totalstakedeveripedia === "undefined" ?
                state.totalstakedeveripedia : parseInt(action.totalstakedeveripedia),
                stakedforeveripedia: typeof action.stakedforeveripedia === "undefined" ?
                state.stakedforeveripedia : parseInt(action.stakedforeveripedia),

                totalstakedconsortium: typeof action.totalstakedconsortium === "undefined" ?
                state.totalstakedconsortium : parseInt(action.totalstakedconsortium),
                govrnlocked: typeof action.govrnlocked === "undefined" ?
                state.govrnlocked : parseInt(action.govrnlocked),// + ' GOVRN',


//availabletostake = balance

                totalbalance: state.balance + state.stakedforkarma + state.stakedforemanate  + state.stakedforeveripedia +state.stakedforeffectai+
                state.stakedforpixeos+state.stakedforliquidapp+state.stakedforlumeos+state.stakedfordice+state.stakedforprosp,
                

                totalstaked: state.stakedforkarma + state.stakedforemanate + state.stakedforeveripedia + state.stakedforeffectai +
                state.stakedforpixeos+state.stakedforliquidapp+state.stakedforlumeos+state.stakedfordice+state.stakedforprosp,

                totaltotalstaked: state.totalstakedkarma + state.totalstakedemanate + state.totalstakedeveripedia + state.totalstakedeffectai +
                state.totalstakedpixeos+state.totalstakedliquidapp+state.totalstakedlumeos+state.totalstakeddice+state.totalstakedprosp + state.totalstakedconsortium,

/// MISSING TOTAL STAKED CONSORITUM

                liqappsreward: parseInt(20000 + 30000 * (state.totalstakedliquidapp/state.totaltotalstaked)),

                karmareward: parseInt(20000 + 30000 * (state.totalstakedkarma/state.totaltotalstaked)),

                emanatereward: parseInt(20000 + 30000 * (state.totalstakedemanate/state.totaltotalstaked)),

                everipediareward: parseInt(20000 + 30000 * (state.totalstakedeveripedia/state.totaltotalstaked)),

                effectaireward: parseInt(20000 + 30000 * (state.totalstakedeffectai/state.totaltotalstaked)),

                pixeosreward: parseInt(20000 + 30000 * (state.totalstakedpixeos/state.totaltotalstaked)),

                lumeosreward: parseInt(20000 + 30000 * (state.totalstakedlumeos/state.totaltotalstaked)),

                dicereward: parseInt(20000 + 30000 * (state.totalstakeddice/state.totaltotalstaked)),

                prospreward: parseInt(20000 + 30000 * (state.totalstakedprosp/state.totaltotalstaked)),

                consortiumreward: parseInt(20000 + 30000 * (state.totalstakedconsortium/state.totaltotalstaked)),




                    //NATIVE_signalled: typeof action.NATIVE_signalled === "undefined" ?
                //state.NATIVE_signalled: action.NATIVE_signalled,
                balance: typeof action.balance === "undefined" ?
                state.balance : parseInt(action.balance),// + ' GOVRN',
                balancekarma: typeof action.balancekarma === "undefined" ?
                state.balancekarma : action.balancekarma,
                
                
                govrntolock: (parseInt(state.balance)-parseInt(state.govrnlocked)),
               
               
                
                govrnstaking: typeof action.govrnstaking === "undefined" ?
                state.govrnstaking : action.govrnstaking, 
                Signalled_YES_PROSPECTORS: typeof action.Signalled_YES_PROSPECTORS === "undefined" ?
                state.Signalled_YES_PROSPECTORS : action.Signalled_YES_PROSPECTORS, 

                //availabletostake: (parseInt(state.balance)-parseInt(state.stakedforkarma)),

                //availabletostake: typeof action.availabletostake === "undefined" ?
                //parseInt(action.balance)-parseInt(action.stakedforkarma) : (parseInt(action.balance)-parseInt(action.stakedforkarma)),

                //availabletostake: (parseInt(state.balance)-parseInt(state.stakedforkarma),

                //totalstaked: parseInt(state.stakedforkarma),
            });
        }

        case ActionTypes.SET_STAKEBALANCES: {
            return Object.assign({}, state,{

                //balance: typeof action.balance === "undefined" ?
               // state.balance : parseInt(action.balance),

                stakedforkarma: typeof action.stakedforkarma === "undefined" ?
                state.stakedforkarma : (parseInt(action.stakedforkarma)),

                availabletostake: state.balance-state.stakedforkarma,

                totalstaked: parseInt(state.stakedforkarma),

            });
        }

        default:
            return state;
    }
}