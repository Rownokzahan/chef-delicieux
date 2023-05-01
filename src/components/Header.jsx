import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import { TbChefHat } from "react-icons/tb";
import { GoThreeBars } from "react-icons/go";
import { BsX } from "react-icons/bs";
import { useContext, useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const [openNavLink, setOpenNavLink] = useState(false);
    const { user, logout } = useContext(AuthContext);

    console.log(user);
    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <nav className='px-2 md:px-10 py-8 md:flex justify-between bg-ui-cream relative text-gray-800'>
            <Link className='font-bold text-2xl text-ui-red flex gap-1 items-center' to='/'>
                <TbChefHat />
                Chef&apos;s Délicieux
            </Link>

            {!openNavLink && <GoThreeBars onClick={() => setOpenNavLink(true)} className='w-6 h-6 absolute right-8 top-8 md:hidden' />}

            <div className={`menu ${openNavLink ? 'flex' : 'hidden'}`}>
                <BsX onClick={() => setOpenNavLink(false)} className="w-6 h-6 absolute right-2 top-2 md:hidden" />
                <ActiveLink to={'/'}>Home</ActiveLink>
                <ActiveLink to={'/chef'}>Chef</ActiveLink>
                <ActiveLink to={'/blog'}>Blog</ActiveLink>

                {user
                    ?
                    <>
                        <img
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={user.displayName}
                            data-tooltip-place="bottom"
                            className='rounded-full w-10 h-10'
                            src={user.photoURL}
                            alt=""
                        />
                        <Tooltip id="my-tooltip" />

                        <button onClick={handleLogout} className='btn-red'>Logout</button>                       
                    </>
                    : <Link to='/login' className='btn-red'>Login</Link>
                }
                
            </div>
                        
        </nav>
    );
};

export default Header;