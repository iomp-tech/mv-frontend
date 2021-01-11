import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import categories from './categories';
import goods from './goods';
import timetable from './timetable';
import services from './services';
import about from './about';
import teacher from './teacher';
import events from './events';
import posts from './posts';
import cart from './cart';
import footer from './footer';
import register from './register';
import login from './login';
import repeat from './repeat';
import user from './user';
import cabinet from './cabinet';
import restore from './restore';
import main from './main';

const rootReducer = combineReducers({
	categories,
	goods,
	timetable,
	services,
	about,
	teacher,
	events,
	posts,
	cart,
	footer,
	register,
	login,
	repeat,
	user,
	restore,
	main,
	cabinet,
	form: formReducer,
});

export default rootReducer;