import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import RingkasanJadwalDanKehadiran from './Components/AllUsers';
import CatatanKehadiran from './Components/CatatanKehadiran';
import TaskNotes from './Components/TaskNotes';
import KelolaKaryawan from './Components/KelolaKaryawan';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/kelola-karyawan" component={ManageEmployee} />
                <Route exact path="/ringkasan-jadwal" component={RingkasanJadwalDanKehadiran} />
                <Route 
                    path="/catatan-kehadiran/:id" 
                    render={props => {
                        // Ensure the component renders even if direct URL is hit
                        return <CatatanKehadiran key={props.match.params.id} {...props} />;
                    }}
                />
                <Route 
                    path="/task-notes/:userId/:date" 
                    render={props => {
                        // Ensure the component renders even if direct URL is hit
                        return <TaskNotes key={`${props.match.params.userId}-${props.match.params.date}`} {...props} />;
                    }}
                />
                <Route path="*">
                    <div style={{ textAlign: 'center', padding: '50px' }}>
                        <h1>404</h1>
                        <p>Page Not Found</p>
                        <a href="/" style={{ textDecoration: 'none', color: 'blue' }}>Go Home</a>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
