import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOut, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { trueOpenLogin, trueOpenRegister } from '../../redux/actions/studentLoginAction';
import Model from '../studentLogin/model';
import { user } from '../../utils/user';
import cookie from "js-cookie";

export default function NavBar() {

  const [toggle, setToggle] = useState(false);

  const isOpenModel = useSelector((state) => state.studentLoginReducer);
  const dispatch = useDispatch();

  function Logout(){
    cookie.remove('token');
    window.location.reload(false);
  }

  return (
    <>     
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 border-b font-serif">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hireish</span>
          </a>
          <div className="flex items-center md:order-2">
            {isOpenModel===0 ? 
              <>
                {user==='no user' ?
                  <>
                    <button className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-1.5 px-2 border border-orange-500 hover:border-transparent rounded" onClick={()=>dispatch(trueOpenLogin())} ><FontAwesomeIcon icon={faSignInAlt} />&nbsp; Login</button> &nbsp;&nbsp;
                    <button className="bg-orange-500 hover:bg-transparent text-white hover:text-orange-500 font-semibold py-1.5 px-2 border border-transparent hover:border-orange-500 rounded" onClick={()=>dispatch(trueOpenRegister())} ><FontAwesomeIcon icon={faUserPlus} />&nbsp; Register</button>
                  </>
                :
                  <div className="relative group">
                    <button type="button">
                      <img className="w-8 h-8 rounded-full" src="user.png" alt="user img" />
                    </button>
                    <div className="absolute hidden right-0 bg-white rounded divide-y divide-gray-300 border shadow dark:bg-gray-900 dark:border dark:divide-gray-600 group-hover:block" id="dropdown">
                      <div className="py-3 px-4">
                        <span className="block text-sm text-gray-900 dark:text-white">Pankaj Kumar</span>
                        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">pankaj@gmail.com</span>
                      </div>
                      <ul className="py-1" aria-labelledby="user-menu-button">
                        <li>
                          <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                          <button className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={()=>Logout()} ><FontAwesomeIcon icon={faSignOut} />&nbsp; Logout</button>
                        </li>
                      </ul>
                    </div>
                  </div> 
                }
              </>
            :
              <Model/>
            }
            <button className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={()=>setToggle(!toggle)}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          
          <div className={(!toggle ? "hidden " : "")+"justify-between items-center w-full md:flex md:w-auto md:order-1"}>
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
