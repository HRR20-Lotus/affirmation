// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/createpost',
      name: 'post',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Post/reducer'),
          System.import('containers/Post/sagas'),
          System.import('containers/Post'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('post', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/singlepost',
      name: 'singlePost',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SinglePost/reducer'),
          System.import('containers/SinglePost/sagas'),
          System.import('containers/SinglePost'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('singlePost', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/dashboard',
      name: 'dashboard',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Dashboard/reducer'),
          System.import('containers/Dashboard/sagas'),
          System.import('containers/Dashboard'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('dashboard', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/learningtocode',
      name: 'learningToCode',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/LearningToCode/reducer'),
          System.import('containers/LearningToCode/sagas'),
          System.import('containers/LearningToCode'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('learningToCode', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/wanttolearn',
      name: 'wantToLearn',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/WantToLearn/reducer'),
          System.import('containers/WantToLearn/sagas'),
          System.import('containers/WantToLearn'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('wantToLearn', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/onthejob',
      name: 'onTheJob',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/OnTheJob/reducer'),
          System.import('containers/OnTheJob/sagas'),
          System.import('containers/OnTheJob'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('onTheJob', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/jobhunt',
      name: 'jobHunt',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/JobHunt/reducer'),
          System.import('containers/JobHunt/sagas'),
          System.import('containers/JobHunt'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('jobHunt', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
