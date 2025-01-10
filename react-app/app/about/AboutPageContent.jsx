import { SidebarMenu } from '../shared-components/SidebarMenu';
import { BookList } from '../shared-components/BookList';
import { ProfileGroupSection } from '../shared-components/ProfileGroupSection';
import { GoalsSection } from '../shared-components/GoalsSection';
import { UserProfile } from '../shared-components/UserProfile';
import { AboutMeSection } from '../shared-components/AboutMeSection';
import './AboutPageContent.css';

let groups = [
  {
    id: 1,
    name: 'Siądź pod mym liściem',
    image: 'https://dashboard.codeparrot.ai/api/assets/Z4FIU8s5D--WlqJK'
  }
]
let title = 'Moje Grupy'

let books = [
  { imageUrl: 'https://dashboard.codeparrot.ai/api/assets/Z4FIU8s5D--WlqJI', title: 'Placeholder Book 1' },
  { imageUrl: 'https://dashboard.codeparrot.ai/api/assets/Z4FIU8s5D--WlqJJ', title: 'Placeholder Book 2' }
]

let goals = [{
  id: 1,
  title: 'Przeczytać do końca roku 5 książek',
  icon: 'https://dashboard.codeparrot.ai/api/assets/Z4FIU8s5D--WlqJL'
}]



export const AboutPageContent = () => {
  return (
    <div className="about-page">
      <SidebarMenu onNavigate={() => {}}/>
      <div className="content-area">
        <BookList books={books} />
        <ProfileGroupSection groups={groups} title={title} />
        <GoalsSection goals={goals}/>
      </div>
      <div className="profile-area">
        <UserProfile />
        <AboutMeSection />
      </div>
    </div>
  );
};

