import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store/modules/user/types';

// import { Container } from './styles';

const AboutUs: React.FC = () => {

    // const user = useSelector<IState>(state => state.users)
    const [users, setUSers] = useState<IState[]>([])
    const state = useSelector( (state: IState) => state.users )

    // useEffect( () =>{
    //     setUSers(user)
    // },[])

 
    return (
        <div>
            <h1>Alunos matriculados</h1>
            {state.map((user, index)=>(
                <div key={index}>
                    <p>{user.name}</p>

                </div>
            ))}
        </div>
    );
}

export default AboutUs;