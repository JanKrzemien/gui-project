import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import './SidebarMenu.css';

export const SidebarMenu = ( {onNavigate = () => {} } ) => {
  const menuItems = [
    { label: 'Biblioteka'},
    { label: 'Grupy'},
    { label: 'Cele' },
    { label: 'Ustawienia' }
  ];

  return (
    <Stack direction="row" spacing={2} className='sidebar-menu'>
      {
        menuItems.map((item, index) => (
          <Button key={index} variant="outlined">{item.label}</Button>
        ))
      }
    </Stack>
  );
};
