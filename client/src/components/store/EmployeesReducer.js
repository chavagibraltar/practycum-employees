import * as actionType from './action'
import dayjs from "dayjs";

const initialState = {
    employees: [],
    employee: {
        firstName: "",
        lastName: "",
        tz: "",
        startDate: "",
        birthDate: "",
        sex: "",
        isActive: true,
        roles: []
    },
    employeesArchiv: [],
    user: {
        Id: 0,
        Username: "",
        Password: "",
        Name: "",
        Phone: "",
        Email: "",
        Tz: ""
    }
}

export default function EmployeesReducer(state = initialState, action) {
    switch (action.type) {
        //user's actions
        case actionType.SET_USER://להוסיף משתמש
            console.log("set user")
            return {
                ...state,
                user: action.paylaod
            }
        case actionType.SET_EMPLOYEES://לקבלת כל העובדים
            return {
                ...state,
                employees: action.payload.filter(e => e.isActive !== false)
            }
        case actionType.ADD_EMPLOYEE://להוספת עובד חדש
            {
                const employees = [...state.employees];
                employees.push(action.paylaod);
                return {
                    ...state,
                    employees
                }
            }
        case actionType.EDIT_EMPLOYEE://לעריכת עובד קיים
            {
                const employees = [...state.employees];
                const index = employees.findIndex(e => e.id = action.paylaod?.id);
                employees[index] = action.paylaod;
                return {
                    ...state,
                    employees
                }
            }
        case actionType.DELETE_EMPLOYEE://למחיקת עובד
            {
                const employees = [...state.employees];
                // const index = employees.findIndex(e => e.Id === action.paylaod);
                // employees[index].IsActive = false;
                return {
                    ...state,
                    employees: employees
                }
            }
        case actionType.SET_CURRENT_EMPLOYEE://לקבלת עובד
            {
                let employee = action.payload
                let { startDate, birthDate } = { employee }
                employee.startDate = dayjs(startDate).format("YYYY-MM-DD")
                employee.birthDate = dayjs(birthDate).format("YYYY-MM-DD")
                return {
                    ...state,
                    employee: employee
                }
            }
        case actionType.DELETE_CURRENT_EMPLOYEE://למחיקת עובד
            {
                return {
                    ...state,
                    employee: null
                }
            }
        case actionType.SET_EMPLOYEES_ARCHIV://לקבלת כל העובדים הלא פעילים
            return {
                ...state,
                employeesArchiv: action.payload.filter(e => e.isActive === false)
            }
        case actionType.DELETE_EMPLOYEE_ARCHIV:// לשחזור עובד
            {

                // const employees = [...state.employees];
                // const index = employees.findIndex(e => e.id === action.paylaod);
                // employees[index].isActive = false;


                const employeesArchiv = [...state.employeesArchiv];
                // const indexArchiv = employeesArchiv.findIndex(e => e.id === action.paylaod);
                // indexArchiv[indexArchiv].isActive = true;
                return {
                    ...state,
                    // employees: employees,
                    employeesArchiv: employeesArchiv
                }

                // return {
                //     ...state,
                // }




                // const employees = [...state.employees];
                // const index = employees.findIndex(e => e.Id === action.paylaod);
                // employees[index].IsActive = true;

                // const employeesArchiv = [...state.employeesArchiv];
                // const indexArchiv = employeesArchiv.findIndex(e => e.Id === action.paylaod);
                // // employeesArchiv[index].IsActive = true;
                // employeesArchiv.remove(employeesArchiv[index]);
                // return {
                //     ...state,
                //     employeesArchiv//employeesArchiv,//.filter(e => e.IsActive === true)
                //     //employees: employees//.filter(e => e.IsActive === true)
                // }
            }
        // case actionType.EDIT_EMPLOYEE_ARCHIV://לעריכת עובד קיים
        //     {
        //         const employees = [...state.employees];
        //         const index = employees.findIndex(e => e.id = action.paylaod?.id);
        //         employees[index] = action.paylaod;
        //         return {
        //             ...state,
        //             employees
        //         }
        //     }

        default:
            return {
                ...state
            }
    }
}
