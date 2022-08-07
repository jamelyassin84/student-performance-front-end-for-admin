import { FuseNavigationItem } from '@fuse/components/navigation';

export const adminTabs: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'dashboard',
        link: '/dashboard',
    },
    {
        id: 'students',
        title: 'Students',
        type: 'basic',
        icon: 'account_circle',
        link: '/students',
    },
    {
        id: 'survey',
        title: 'Survey Forms',
        type: 'basic',
        icon: 'mat_outline:drive_file_rename_outline',
        link: '/survey',
    },
    {
        id: 'guideance-request',
        title: 'Guidance Request',
        type: 'basic',
        icon: 'email',
        link: '/guidance-request',
    },
];
