import React, {useCallback, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/api';
import { addNewUser } from '../store/modules/user/actions';
import { IState, IUser } from '../store/modules/user/types';

// import { Container } from './styles';

const Home: React.FC = () => {

    const [ users, setUsers] = useState<IUser[]>([])
    // const user = useSelector<IState>(state => state.users)
    // console.log(user);
    

    const dispatch = useDispatch()

    useEffect( () => {
        api.get('students').then( res =>{
            setUsers(res.data)
        }

        )
    }, [])
    
    const hadleAddUsers = useCallback( ( user: IUser) => {
        dispatch(addNewUser(user))
    }, [dispatch])

  return(   

    <div>
        <h1>ads</h1>
        {users.map( user  => (
                <article key={user.id} >
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                    <button onClick={() => hadleAddUsers(user)} >add</button>
                </article>
        ))}
    </div>

  );
}

export default Home;