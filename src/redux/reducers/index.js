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
import login from './login';
import repeat from './repeat';
import user from './user';
import cabinet from './cabinet';
import restore from './restore';
import main from './main';
import emailForm from './emailForm';
import integration_page from './integration_page';
import feedback from './feedback';
import policy from './policy';
import offerta from './offerta';

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
	login,
	repeat,
	user,
	restore,
	main,
	cabinet,
	emailForm,
	integration_page,
	feedback,
	policy,
	offerta,
	form: formReducer,
});

export default rootReducer;