export const getApiStatus = (active) => {
  if (active) {
  } else {
    return [
      { api: { name: 'Course API', link: '#' }, status: true, notes: '' },
      { api: { name: 'Dining API', link: '#' }, status: false, notes: '' },
      { api: { name: 'Print API', link: '#' }, status: false, notes: '' },
      {
        api: { name: 'Auth & Login API', link: '#' },
        status: true,
        notes: '',
      },
    ];
  }
};
