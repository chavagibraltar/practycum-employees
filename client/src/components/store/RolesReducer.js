import * as actionType from './action'

const initialState = {
    roles: [],
    role: { name: "" }
}

export default function RolesReducer(state = initialState, action) {
    switch (action.type) {
        //role's actions          
        case actionType.SET_ROLES://לקבלת כל התפקידים
            {
                return {
                    ...state,
                    roles: action.payload
                }
            }

        case actionType.ADD_ROLE://להוספת תפקיד חדש
            {
                const roles = [...state.roles];
                roles.push(action.paylaod);
                console.log("addRole reducer - date: ", action.paylaod)
                return {
                    ...state,
                    roles: roles
                }
            }
        case actionType.EDIT_ROLE://לעריכת תפקיד קיים
            {
                const roles = [...state.roles];
                const index = roles.findIndex(r => r.Id = action.paylaod.Id);
                roles[index] = action.paylaod;
                return {
                    ...state,
                    roles
                }
            }
        case actionType.DELETE_ROLE://למחיקת תפקיד
            {
                return {
                    ...state,
                    roles: action.payload
                }
            }
        case actionType.SET_CURRENT_ROLE://לקבלת תפקיד
            {
                return {
                    ...state,
                    role: action.payload
                }
            }
        case actionType.DELETE_CURRENT_ROLE://למחיקת עובד
            {
                return {
                    ...state,
                    role: null
                }
            }
        default: return {
            ...state
        }

    }
}




