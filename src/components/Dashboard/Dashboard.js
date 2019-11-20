import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import SidebarNav from './SidebarNav.js';

import Account from '../Global/Account.js';
import CreateTicket from './CreateTicket.js';

import OpenTicketList from './Unassigned/OpenTicketList.js';
import UserTicketList from './Mine/UserTicketList.js';
import ClosedTicketList from './Closed/ClosedTicketList.js';
import TicketView from './TicketView';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';



export default function Dashboard() {
    const { searchTerm, setSearchTerm, filterByHelper, setFilterByHelper, 
        filterByStudent, setFilterByStudent, filterByOpenClosed, setFilterByOpenClosed, currentUser } = useContext(CurrentUserContext);

    return (
        <div className='dashboard'>
            <CurrentUserContext.Provider value={{ currentUser, searchTerm, setSearchTerm, filterByHelper, setFilterByHelper, 
            filterByStudent, setFilterByStudent, filterByOpenClosed, setFilterByOpenClosed }}>
                <SidebarNav />

                <Route exact path='/Dashboard/Account' component={Account} />
                <Route exact path='/Dashboard/CreateTicket' component={CreateTicket} />

                <Route exact path='/Dashboard/Unassigned' component={OpenTicketList} />
                <Route exact path='/Dashboard/Mine' component={UserTicketList} />
                <Route exact path='/Dashboard/Resolved' component={ClosedTicketList} />
                <Route exact path='/Dashboard/Tickets/:id' component={TicketView} />
            </CurrentUserContext.Provider>
        </div>
    )
}
