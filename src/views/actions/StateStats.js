import { ActionTypes } from '../const';

class StakeStats {

    static setStakeBalance({availabletostake,totalstaked,balance,stakedforkarma  }){
        return {
            type: ActionTypes.SET_STAKEBALANCES,
            availabletostake,
            totalstaked,
            balance,
            stakedforkarma,

        }
    }

}

export default StakeStats;