import Login from './components/auth/login';
import AuthProvider from './context/authContext';
import Auth from './components/auth/auth';

function App() {
    return (
        <AuthProvider>
            <Login/>
            <Auth action="delete">
                <button>Fake Delete</button>
            </Auth>
            <Auth action="update">
                <button>Fake Update</button>
            </Auth>
            <Auth action="create">
                <button>+ Create a new item</button>
            </Auth>
            <Auth action="read">
                <div>Fake List ..</div>
            </Auth>
        </AuthProvider>
    )
}

export default App;