import { FuseNavigationItem } from '@fuse/components/navigation';

export const adminTabs: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'dashboard',
        link: '/example',
    },
    {
        id: 'students',
        title: 'Students',
        type: 'basic',
        icon: 'account_circle',
    },
    {
        id: 'survey',
        title: 'Survey Forms',
        type: 'basic',
        icon: 'mat_outline:drive_file_rename_outline',
    },
];
