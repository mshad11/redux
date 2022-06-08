import {CHANGE_MONTH} from '../actions/calenderAction';
import { selectedYear, selectedMonth,daysInMonth,monthDays } from "../utils/dateUtil";
import { getDays } from "../utils/calenderUtils";

//ist may 2022
const startDay = monthDays(`${selectedMonth +1} -01-${selectedYear}`)
const endDay = daysInMonth(selectedMonth,selectedYear);

const initialState = {
    selectedMonth,
    selectedYear,
    startDay,
    endDay,
    days: getDays(startDay,endDay)
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MONTH:
            const {selectedMonth, selectedYear} = action.payload;
            const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`);
            const endDay = daysInMonth(selectedMonth, selectedYear);
            const days = getDays(startDay, endDay);
            return { ...state, selectedMonth, selectedYear, days}
        default:
            return state;
    }

}