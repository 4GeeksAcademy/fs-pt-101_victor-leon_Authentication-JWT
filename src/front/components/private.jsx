import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

// store
import useGlobalReducer from "../hooks/useGlobalReducer"

// Services
import userServices from "../services/userServices"

export const Private = () => {

    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()

    const getUser = async () => {
        if (!localStorage.getItem('token')) {
            return navigate('/login')
        }

        const data = await userServices.getUser();

        if (data.success) {
            dispatch({ type: 'get_user', payload: data.user })
        } else {
            window.alert(data.error);
            navigate('/login');
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const handleLogout = () => {
        dispatch({ type: 'logout' })
        navigate('/')
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card p-5 text-center">
                        <h1 className="display-4">
                            {store.user
                                ? `Welcome, ${store.user.first_name} ${store.user.last_name}!`
                                : "Welcome!"}
                        </h1>
                        <div className="mt-4">
                            <button className="btn btn-danger" onClick={handleLogout}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
