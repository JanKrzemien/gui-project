import { Stack } from '@mui/material';
import { useNavigate } from 'react-router';
import { useLocalStorage } from '@uidotdev/usehooks';
import { ContainedButton } from './Buttons'; 
import './SidebarMenu.css';

export const SidebarMenu = () => {
  const navigate = useNavigate()

  const [userData, setUserData] = useLocalStorage('userData', undefined)

  const logOut = () => {
    setUserData(undefined)
    navigate('/')
  }

  return (
    <Stack direction="row" spacing={2} className='sidebar-menu'>
      <ContainedButton text="Biblioteka" onClick={() => {}}/>
      <ContainedButton text="Grupy" onClick={() => {}}/>
      <ContainedButton text="Cele" onClick={() => {}}/>
      <ContainedButton text="Ustawienia" onClick={() => {}}/>
      <ContainedButton text="Wyloguj się" onClick={logOut}/>
    </Stack>
  );
};
