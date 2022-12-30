import FeedIcon from '@mui/icons-material/Feed';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const mainNavbarItems = [
  {
    id: 0,
    label: 'Posts',
    route: 'posts',
    icon: <FeedIcon />
  },
  {
    id: 1,
    label: 'Todos',
    route: 'todos',
    icon: <FormatListBulletedIcon />
  },
  {
    id: 2,
    label: 'Users',
    route: 'users',
    icon: <PeopleAltIcon />
  }
];
