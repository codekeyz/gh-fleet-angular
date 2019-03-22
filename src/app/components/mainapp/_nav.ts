export const navItems = [
  {
    name: 'Dashboard',
    url: '/me/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Vehicles',
    url: '/me/vehicles',
    icon: 'fa fa-car',
    children: [
      {
        name: 'View',
        url: '/me/vehicles/view',
        icon: 'icon-eye'
      },
      {
        name: 'Add New',
        url: '/me/vehicles/add-new',
        icon: 'fa fa-plus'
      }
    ]
  },
  {
    name: 'Drivers',
    url: '/me/drivers',
    icon: 'icon-people'
  },
  {
    divider: true
  }
];
