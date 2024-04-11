import { createStore, combineReducers, applyMiddleware} from 'redux';
import reducer from "./EmployeesReducer";
import { thunk } from 'redux-thunk';
// import EmployeesReducer from './employeesReducer';
// import RolesReducer from './rolesReducer';
import EmployeesReducer from './EmployeesReducer';
import RolesReducer from './RolesReducer';

const reducers = combineReducers({
    employees: EmployeesReducer,
    roles:RolesReducer
});

const store = createStore(reducers,applyMiddleware(thunk));
export default store;