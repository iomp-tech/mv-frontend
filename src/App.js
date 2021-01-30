import React, { Suspense } from 'react';
import { Helmet } from "react-helmet";
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header, Footer, PreloaderPage } from './components';

import { setVisually, setSizeVisually } from "./redux/actions/visually";

const Home = React.lazy(() => import('./pages/Home'));
const Post = React.lazy(() => import('./pages/Post'));
const TimetableSubs = React.lazy(() => import('./pages/TimetableSubs'));
const Timetable = React.lazy(() => import('./pages/Timetable'));
const Teacher = React.lazy(() => import('./pages/Teacher'));
const Magazine = React.lazy(() => import('./pages/Magazine'));
const Institute = React.lazy(() => import('./pages/Institute'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Shop = React.lazy(() => import('./pages/Shop'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Confirmed = React.lazy(() => import('./pages/Confirmed'));
const Repeat = React.lazy(() => import('./pages/Repeat'));
const RestoreEmail = React.lazy(() => import('./pages/RestoreEmail'));
const RestorPass = React.lazy(() => import('./pages/RestorePass'));
const RestoreSuccess = React.lazy(() => import('./pages/RestoreSuccess'));
const Er404 = React.lazy(() => import('./pages/Er404'));
const Cabinet = React.lazy(() => import('./pages/Cabinet'));
const Library = React.lazy(() => import('./pages/Library'));
const Logout = React.lazy(() => import('./pages/Logout'));

function App() {
	const disaptch = useDispatch();

	const { color, bgColor } = useSelector(({ visually }) => visually);

	React.useEffect(() => {
		disaptch(setVisually(localStorage.getItem("VISUALLY_TYPE")));
		disaptch(setSizeVisually(localStorage.getItem("VISUALLY_SIZE")));
	}, []);

	return (
		<>
			<Helmet>
				<style>{`body { color: ${color}; background-color: ${bgColor}; } .checkbox+label::before {border: 1px solid ${color};} .checkbox-label {color: ${color}} .input__field_small {color: ${color}} .input__field {color: ${color}} .header-user-menu__link:hover {background-color: ${bgColor};}`}</style>
			</Helmet>
			<div className="wrapper">
				<Header />
				<Suspense fallback={<PreloaderPage />}>
					<Switch>
						<Route path="/" render={() => <Home />} exact />
						<Route path='/shop/:filters?' render={(props) => <Shop {...props} />} />
						<Route path='/timetable' render={(props) => <Timetable {...props} />} exact />
						<Route path='/timetable/:cat?' render={(props) => <Timetable {...props} />} exact />
						<Route path='/timetable/pages/:id' render={(props) => <TimetableSubs {...props} />} exact />
						<Route path='/teachers' render={() => <Teacher />} exact />
						<Route path='/institute' render={() => <Institute />} exact />
						<Route path='/post/:id' render={(props) => <Post {...props} />} exact />
						<Route path='/magazine/:cat?' render={(props) => <Magazine {...props} />} />
						<Route path='/cart' render={() => <Cart />} exact />

						<Route path='/register' render={() => <Register />} exact />
						<Route path='/login' render={() => <Login />} exact />

						<Route path='/confirmed/:hash' render={(props) => <Confirmed {...props} />} />
						<Route path='/repeat' render={() => <Repeat />} />

						<Route path='/restoreemail' render={() => <RestoreEmail />} />
						<Route path='/restoresuccess' render={() => <RestoreSuccess />} />
						<Route path='/restorepass/:hash' render={(props) => <RestorPass {...props} />} />

						<Route path='/cabinet' render={() => <Cabinet />} />
						<Route path='/library' render={() => <Library />} />

						<Route path='/logout' render={() => <Logout />} />

						<Route render={() => <Er404 />} />
					</Switch>
				</Suspense>
				<Footer />
			</div>
		</>
	);
}

export default (App);