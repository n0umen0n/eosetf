import { ActionTypes } from '../const';

class UserAction {

    static setUser({ name,NATIVE_signalled,IQ_signalled,balance,NATIVE_holdings,balancekarma,govrnlocked,govrntolock,govrnstaking,Signalled_YES_PROSPECTORS,totalstakedkarma,stakedforkarma,
        availabletostake,
        totalstaked,
        totalstakedemanate,
        stakedforemanate,
        stakedforeveripedia,totalstakedeveripedia
        ,stakedforeffectai,  totalstakedeffectai,
        stakedforpixeos,totalstakedpixeos,
        stakedforliquidapp,totalstakedliquidapp
        ,stakedforlumeos,totalstakedlumeos,
        stakedfordice,totalstakeddice,
        stakedforprosp,totalstakedprosp,

        totalcirculation,totalsignals,

        totalbalance,

        totalstakedconsortium,

        karmanewstake,

        liqappsreward, 

        totalyesprosp,totalnoprosp,slaidivalue,

        etfbalance,peozbalance,ikqbalance,etnabalance,vikbalance,dabbbalance,
    
    }){
        return {
            type: ActionTypes.SET_USER,
            name,
            NATIVE_signalled,
            IQ_signalled,
            balance,
            NATIVE_holdings,
            balancekarma,
            govrnlocked,
            govrntolock,
            govrnstaking,
            Signalled_YES_PROSPECTORS,
            totalstakedkarma,
            stakedforkarma,
            totalstakedemanate,
            stakedforemanate,
            availabletostake,
            totalstaked,
            stakedforeveripedia,totalstakedeveripedia
,stakedforeffectai,  totalstakedeffectai,
stakedforpixeos,totalstakedpixeos,
stakedforliquidapp,totalstakedliquidapp
,stakedforlumeos,totalstakedlumeos,
stakedfordice,totalstakeddice,
stakedforprosp,totalstakedprosp,
            

totalcirculation,totalsignals,
            
totalbalance,

totalstakedconsortium,

karmanewstake,

liqappsreward,

totalyesprosp,totalnoprosp,slaidivalue,


etfbalance,peozbalance,ikqbalance,etnabalance,vikbalance,dabbbalance,

        }
    }

}

export default UserAction;

//stakedforkarma,
     //       availabletostake,
        //    totalstaked,