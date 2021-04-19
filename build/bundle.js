/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reducer = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    var _useReducer = (0, _react.useReducer)(_reducer.formReducer, _reducer.initialState),
        _useReducer2 = _slicedToArray(_useReducer, 2),
        state = _useReducer2[0],
        dispatch = _useReducer2[1];

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Welcome Home1'
        ),
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    return console.log("Hiy");
                } },
            'Click'
        ),
        _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(
                'label',
                null,
                'First Name:',
                _react2.default.createElement('input', {
                    type: 'text',
                    value: state.firstName,
                    onChange: function onChange(e) {
                        return dispatch({ type: 'firstName', payload: e.target.value });
                    }
                })
            ),
            _react2.default.createElement(
                'label',
                null,
                'Last Name:',
                _react2.default.createElement('input', {
                    type: 'text',
                    value: state.lastName,
                    onChange: function onChange(event) {
                        return dispatch({ type: 'lastName', payload: event.target.value });
                    }
                })
            ),
            _react2.default.createElement(
                'label',
                null,
                'Address:',
                _react2.default.createElement('textarea', {
                    value: state.Address,
                    onChange: function onChange(event) {
                        return dispatch({ type: 'Address', payload: event.target.value });
                    }
                })
            ),
            _react2.default.createElement(
                'label',
                null,
                'Qualification:',
                _react2.default.createElement(
                    'select',
                    {
                        value: state.Qualification,
                        onChange: function onChange(event) {
                            return dispatch({ type: 'faveFruit', payload: event.target.value });
                        }
                    },
                    _react2.default.createElement(
                        'option',
                        { value: 'B.Tech' },
                        'B.tech'
                    ),
                    _react2.default.createElement(
                        'option',
                        { value: 'M.Tech' },
                        'M.Tech'
                    )
                )
            ),
            _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
        )
    );
};
exports.default = Home;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var appReducer = exports.appReducer = function appReducer(state, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return _extends({}, state, {
        employees: [].concat(_toConsumableArray(state.employees), [action.payload])
      });
    /*
        case "EDIT_EMPLOYEE":
          const updatedEmployee = action.payload;
    
          const updatedEmployees = state.employees.map((employee) => {
            if (employee.id === updatedEmployee.id) {
              return updatedEmployee;
            }
            return employee;
          });
    
          return {
            ...state,
            employees: updatedEmployees,
          };
    
        case "REMOVE_EMPLOYEE":
          return {
            ...state,
            employees: state.employees.filter(
              (employee) => employee.id !== action.payload
            ),
          };
    */
    default:
      return state;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalProvider = exports.GlobalContext = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reducer = __webpack_require__(3);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  employees: [{
    id: 1,
    name: "Sammy",
    location: "DigitalOcean",
    designation: "Shark"
  }]
};

var GlobalContext = exports.GlobalContext = (0, _react.createContext)(initialState);
//export const ContextState = createContext();
var GlobalProvider = exports.GlobalProvider = function GlobalProvider(_ref) {
  var children = _ref.children;

  var _useReducer = (0, _react.useReducer)(_reducer2.default, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  function createEmployee(employee) {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee
    });
  }

  function editEmployee(employee) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employee
    });
  }

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id
    });
  }

  return _react2.default.createElement(
    GlobalContext.Provider,
    {
      value: { state: state, dispatch: dispatch }
      // editEmployee,
      // removeEmployee

    },
    children
  );
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalProvider = exports.GlobalContext = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reducer = __webpack_require__(18);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  employees: [{
    id: 1,
    name: "Sammy",
    location: "DigitalOcean",
    designation: "Shark"
  }]
};

var GlobalContext = exports.GlobalContext = (0, _react.createContext)(initialState);
//export const ContextState = createContext();
var GlobalProvider = exports.GlobalProvider = function GlobalProvider(_ref) {
  var children = _ref.children;

  var _useReducer = (0, _react.useReducer)(_reducer2.default, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  function createEmployee(employee) {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee
    });
  }

  function editEmployee(employee) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employee
    });
  }

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id
    });
  }

  return _react2.default.createElement(
    GlobalContext.Provider,
    {
      value: [state, dispatch]
      // editEmployee,
      // removeEmployee

    },
    children
  );
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextProvider = exports.ContextState = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ContextState = exports.ContextState = (0, _react.createContext)();

var reducer = function reducer(state, action) {
  switch (action.type) {
    case "ADD_PERSON":
      return [].concat(_toConsumableArray(state), [action.data]);
    case "DELETE_PERSON":
      return state.filter(function (person) {
        return person.id !== action.data.id;
      });
    case "EDIT_PERSON":
      return [].concat(_toConsumableArray(state.filter(function (person) {
        return person.id !== action.data.id;
      })), [action.data]);
    default:
      break;
  }
};

var ContextProvider = exports.ContextProvider = function ContextProvider(_ref) {
  var children = _ref.children;

  var _useReducer = (0, _react.useReducer)(reducer, []),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      person = _useReducer2[0],
      dispatch = _useReducer2[1];

  return _react2.default.createElement(
    ContextState.Provider,
    { value: [person, dispatch] },
    children
  );
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _Home = __webpack_require__(2);

var _Home2 = _interopRequireDefault(_Home);

var _renderer = __webpack_require__(12);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(24);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*const express=require('express')

const React=require('react')
const renderToString=require('react-dom/server').renderToString;
const Home=require('./client/components/Home').default;
*/

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
    // const content=renderToString(<Home/>)
    //const content=renderToString(<Home/>);
    /*
    const html=
    `<html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>`
    res.send(html)
    */
    // const store = createStore(req);
    res.send((0, _renderer2.default)(req));
});

app.listen(3000, function () {
    console.log('listening to the  port');
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _Home = __webpack_require__(2);

var _Home2 = _interopRequireDefault(_Home);

var _reactRouterDom = __webpack_require__(1);

var _Routes = __webpack_require__(13);

var _Routes2 = _interopRequireDefault(_Routes);

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(9);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRedux = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
    var content = (0, _server.renderToString)(
    // <Provider store={store}>
    _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.path, context: {} },
        _react2.default.createElement(_Routes2.default, null)
    )
    // </Provider>
    );
    return '<html>\n        <head></head>\n        <body>\n            <div id="root">' + content + '</div>\n            <script src="bundle.js"></script>\n        </body>\n    </html>';
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Home = __webpack_require__(2);

var _Home2 = _interopRequireDefault(_Home);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

var _AddEmployee = __webpack_require__(16);

var _AddEmployee2 = __webpack_require__(17);

var _App3 = __webpack_require__(19);

var _App4 = _interopRequireDefault(_App3);

var _App5 = __webpack_require__(21);

var _App6 = _interopRequireDefault(_App5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/app', component: _App2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/app1', component: _App4.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/app2', component: _App6.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/add', component: _AddEmployee.AddEmployee }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/add1', component: _AddEmployee2.AddEmployee1 })
        )
    );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmployeeList = __webpack_require__(15);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GlobalState = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react2.default.createElement(
    _GlobalState.GlobalProvider,
    null,
    _react2.default.createElement(
      'div',
      { className: 'App' },
      _react2.default.createElement(_EmployeeList.EmployeeList, null)
    )
  );
}

exports.default = App;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmployeeList = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GlobalState = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmployeeList = exports.EmployeeList = function EmployeeList() {
  var _useContext = (0, _react.useContext)(_GlobalState.GlobalContext),
      employees = _useContext.employees;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    employees.length > 0 ? _react2.default.createElement(
      _react2.default.Fragment,
      null,
      employees.map(function (employee) {
        return _react2.default.createElement(
          'div',
          {
            className: 'flex items-center bg-gray-100 mb-10 shadow',
            key: employee.id
          },
          _react2.default.createElement(
            'div',
            { className: 'flex-auto text-left px-4 py-2 m-2' },
            _react2.default.createElement(
              'p',
              { className: 'text-gray-900 leading-none' },
              employee.name
            ),
            _react2.default.createElement(
              'p',
              { className: 'text-gray-600' },
              employee.designation
            ),
            _react2.default.createElement(
              'span',
              { className: 'inline-block text-sm font-semibold mt-1' },
              employee.location
            )
          )
        );
      })
    ) : _react2.default.createElement(
      'p',
      { className: 'text-center bg-gray-100 text-gray-500 py-5' },
      'No data.'
    )
  );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddEmployee = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _GlobalState = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddEmployee = exports.AddEmployee = function AddEmployee() {
  var history = (0, _reactRouterDom.useHistory)();

  var _useContext = (0, _react.useContext)(_GlobalState.GlobalContext),
      dispatch = _useContext.dispatch,
      employees = _useContext.employees;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      location = _useState4[0],
      setLocation = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      designation = _useState6[0],
      setDesignation = _useState6[1];

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    var newEmployee = {
      id: employees.length + 1,
      name: name,
      location: location,
      designation: designation
    };
    console.log(newEmployee);
    console.log(dispatch);
    console.log(employees);

    //createEmployee(newEmployee);
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: newEmployee
    });
  };

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'div',
      { className: 'w-full max-w-sm container mt-20 mx-auto' },
      _react2.default.createElement(
        'form',
        { onSubmit: onSubmit },
        _react2.default.createElement(
          'div',
          { className: 'w-full mb-5' },
          _react2.default.createElement(
            'label',
            {
              className: 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
              htmlFor: 'name'
            },
            'Name of employee'
          ),
          _react2.default.createElement('input', {
            className: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600',
            value: name,
            onChange: function onChange(e) {
              return setName(e.target.value);
            },
            type: 'text',
            placeholder: 'Enter name'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'w-full mb-5' },
          _react2.default.createElement(
            'label',
            {
              className: 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
              htmlFor: 'location'
            },
            'Location'
          ),
          _react2.default.createElement('input', {
            className: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline',
            value: location,
            onChange: function onChange(e) {
              return setLocation(e.target.value);
            },
            type: 'text',
            placeholder: 'Enter location'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'w-full mb-5' },
          _react2.default.createElement(
            'label',
            {
              className: 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
              htmlFor: 'designation'
            },
            'Designation'
          ),
          _react2.default.createElement('input', {
            className: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600',
            value: designation,
            onChange: function onChange(e) {
              return setDesignation(e.target.value);
            },
            type: 'text',
            placeholder: 'Enter designation'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex items-center justify-between' },
          _react2.default.createElement(
            'button',
            { className: 'mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' },
            'Add Employee'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-center mt-4 text-gray-500' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'Cancel'
          )
        )
      )
    )
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddEmployee1 = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _GlobalState = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddEmployee1 = exports.AddEmployee1 = function AddEmployee1() {
  var history = (0, _reactRouterDom.useHistory)();

  var _useContext = (0, _react.useContext)(_GlobalState.GlobalContext),
      dispatch = _useContext.dispatch,
      employees = _useContext.employees;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      location = _useState4[0],
      setLocation = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      designation = _useState6[0],
      setDesignation = _useState6[1];

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    var newEmployee = {
      id: employees.length + 1,
      name: name,
      location: location,
      designation: designation
    };
    console.log(newEmployee);
    console.log(dispatch);
    console.log(employees);

    //createEmployee(newEmployee);
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: newEmployee
    });
  };

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'div',
      { className: 'w-full max-w-sm container mt-20 mx-auto' },
      _react2.default.createElement(
        'form',
        { onSubmit: onSubmit },
        _react2.default.createElement(
          'div',
          { className: 'w-full mb-5' },
          _react2.default.createElement(
            'label',
            {
              className: 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
              htmlFor: 'name'
            },
            'Name of employee'
          ),
          _react2.default.createElement('input', {
            className: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600',
            value: name,
            onChange: function onChange(e) {
              return setName(e.target.value);
            },
            type: 'text',
            placeholder: 'Enter name'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'w-full mb-5' },
          _react2.default.createElement(
            'label',
            {
              className: 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
              htmlFor: 'location'
            },
            'Location'
          ),
          _react2.default.createElement('input', {
            className: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline',
            value: location,
            onChange: function onChange(e) {
              return setLocation(e.target.value);
            },
            type: 'text',
            placeholder: 'Enter location'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'w-full mb-5' },
          _react2.default.createElement(
            'label',
            {
              className: 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
              htmlFor: 'designation'
            },
            'Designation'
          ),
          _react2.default.createElement('input', {
            className: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600',
            value: designation,
            onChange: function onChange(e) {
              return setDesignation(e.target.value);
            },
            type: 'text',
            placeholder: 'Enter designation'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex items-center justify-between' },
          _react2.default.createElement(
            'button',
            { className: 'mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' },
            'Add Employee'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-center mt-4 text-gray-500' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'Cancel'
          )
        )
      )
    )
  );
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var appReducer = exports.appReducer = function appReducer(state, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return _extends({}, state, {
        employees: [].concat(_toConsumableArray(state.employees), [action.payload])
      });
    /*
        case "EDIT_EMPLOYEE":
          const updatedEmployee = action.payload;
    
          const updatedEmployees = state.employees.map((employee) => {
            if (employee.id === updatedEmployee.id) {
              return updatedEmployee;
            }
            return employee;
          });
    
          return {
            ...state,
            employees: updatedEmployees,
          };
    
        case "REMOVE_EMPLOYEE":
          return {
            ...state,
            employees: state.employees.filter(
              (employee) => employee.id !== action.payload
            ),
          };
    */
    default:
      return state;
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App1;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FormPerson = __webpack_require__(20);

var _FormPerson2 = _interopRequireDefault(_FormPerson);

var _context = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import "./styles.css";
function App1() {
  return _react2.default.createElement(
    _context.ContextProvider,
    null,
    _react2.default.createElement(
      "div",
      { className: "App" },
      _react2.default.createElement(_FormPerson2.default, null)
    )
  );
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//import styled from "styled-components";


exports.default = FormPerson;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _context = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function FormPerson() {
  var _useContext = (0, _react.useContext)(_context.ContextState),
      _useContext2 = _slicedToArray(_useContext, 2),
      person = _useContext2[0],
      dispatch = _useContext2[1];

  var _useState = (0, _react.useState)({
    id: null,
    name: String,
    age: Number
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var addPerson = function addPerson() {
    var name = state.name,
        age = state.age;

    if (name === "") {
      alert("as");
      return;
    }
    dispatch({
      type: "ADD_PERSON",
      data: { id: person.length + 1, name: name, age: age }
    });
    setState({
      name: String,
      age: Number
    });
  };

  var deletePerson = function deletePerson(id) {
    dispatch({
      type: "DELETE_PERSON",
      data: { id: id }
    });
  };
  var editPerson = function editPerson() {
    var name = state.name,
        age = state.age;

    dispatch({
      type: "EDIT_PERSON",
      data: { id: state.id, name: name, age: age }
    });
    setState({
      name: String,
      age: Number
    });
  };
  var startEdit = function startEdit(id) {
    setState(_extends({}, person.filter(function (person) {
      return person.id === id;
    })[0], { id: id }));
  };

  function handleChange(_ref) {
    var _ref$target = _ref.target,
        name = _ref$target.name,
        value = _ref$target.value;

    setState(function (prevState) {
      return _extends({}, prevState, _defineProperty({}, name, value));
    });
  }

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement("input", {
        placeholder: "name",
        name: "name",
        value: state.name,
        onChange: handleChange
      })
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement("input", {
        placeholder: "age",
        name: "age",
        value: state.age,
        onChange: handleChange
      })
    ),
    _react2.default.createElement(
      "button",
      { onClick: state.id ? editPerson : addPerson },
      " ",
      state.id ? "Save" : "Add",
      " "
    ),
    _react2.default.createElement(
      "table",
      null,
      _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "th",
          null,
          "ID"
        ),
        _react2.default.createElement(
          "th",
          null,
          " name "
        ),
        _react2.default.createElement(
          "th",
          null,
          " age "
        ),
        _react2.default.createElement(
          "th",
          null,
          " "
        ),
        _react2.default.createElement(
          "th",
          null,
          " "
        )
      ),
      person.length > 0 ? person.map(function (onePerson) {
        return _react2.default.createElement(
          "tr",
          null,
          _react2.default.createElement(
            "td",
            null,
            " ",
            onePerson.id,
            " "
          ),
          _react2.default.createElement(
            "td",
            null,
            " ",
            onePerson.name,
            " "
          ),
          _react2.default.createElement(
            "td",
            null,
            " ",
            onePerson.age,
            " "
          ),
          _react2.default.createElement(
            "td",
            null,
            " ",
            _react2.default.createElement(
              "button",
              { onClick: function onClick() {
                  return startEdit(onePerson.id);
                } },
              " ",
              "Edit",
              " "
            ),
            " "
          ),
          _react2.default.createElement(
            "td",
            null,
            _react2.default.createElement(
              "button",
              { onClick: function onClick() {
                  return deletePerson(onePerson.id);
                } },
              " ",
              "Delete",
              " "
            ),
            " "
          )
        );
      }) : _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "td",
          null,
          " "
        ),
        _react2.default.createElement(
          "td",
          null,
          " "
        ),
        _react2.default.createElement(
          "td",
          null,
          " "
        )
      )
    )
  );
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmployeeList = __webpack_require__(22);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GlobalState = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App2() {
  return _react2.default.createElement(
    _GlobalState.GlobalProvider,
    null,
    _react2.default.createElement(
      'div',
      { className: 'App' },
      _react2.default.createElement(_EmployeeList.EmployeeList, null)
    )
  );
}

exports.default = App2;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmployeeList = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GlobalState = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmployeeList = exports.EmployeeList = function EmployeeList() {
  var _useContext = (0, _react.useContext)(_GlobalState.GlobalContext),
      state = _useContext.state;

  console.log(state);
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    employees.length > 0 ? _react2.default.createElement(
      _react2.default.Fragment,
      null,
      employees.map(function (employee) {
        return _react2.default.createElement(
          'div',
          {
            className: 'flex items-center bg-gray-100 mb-10 shadow',
            key: employee.id
          },
          _react2.default.createElement(
            'div',
            { className: 'flex-auto text-left px-4 py-2 m-2' },
            _react2.default.createElement(
              'p',
              { className: 'text-gray-900 leading-none' },
              employee.name
            ),
            _react2.default.createElement(
              'p',
              { className: 'text-gray-600' },
              employee.designation
            ),
            _react2.default.createElement(
              'span',
              { className: 'inline-block text-sm font-semibold mt-1' },
              employee.location
            )
          )
        );
      })
    ) : _react2.default.createElement(
      'p',
      { className: 'text-center bg-gray-100 text-gray-500 py-5' },
      'No data.'
    )
  );
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(9);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(25);

var _axios2 = _interopRequireDefault(_axios);

var _reducer = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);