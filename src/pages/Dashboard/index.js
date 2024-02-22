import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiPlus, FiMessageSquare } from 'react-icons/fi'
import { Link } from 'react-router-dom' 

import './dashboard.css'


export default function Dashboard(){
  const { logout } = useContext(AuthContext);

  async function handleLogout(){
    await logout();
  }

  return(
    <div>
      <Header/>

      <div className='content'> 
        <Title name="Tickets">
          <FiMessageSquare size={25} />
        </Title>

        <>
          <Link to="/new" className='new'>
            <FiPlus color='#fff' size={25} />
          </Link>

          <div className='container'>

          </div>
        </>

      </div>

      
    </div>
  )
}