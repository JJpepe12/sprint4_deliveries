import React from 'react';
// import { Link } from 'react-router-dom';
// import home from '../img/Svg (1).png';
// import search from '../img/Svg (2).png';
// import historial from '../img/Svg (3).png';
// import profile from '../img/Svg (4).png';
// import './footer.scss'
import { useSelector } from 'react-redux';

const Footer = () => {
    const store = useSelector(state => state.userStore.user)
    const { user } = useSelector(store => store.userStore)
    console.log(user)
    return (
        <div className='pages'>
            Hola
            <ul>
                {
                    user.map(item => (
                        <li key={item.id}> {item.name}</li>
                    ))
                }
            </ul>


            {/* <Link to='/home'><img src={home} alt="home" /></Link>
            <Link to='/search'><img src={search} alt="search" /></Link>
            <Link to='/orders'><img src={historial} alt="historial" /></Link>
            <Link to='/profile'><img src={profile} alt="profile" /></Link> */}
        </div>
    )
}

export default Footer
