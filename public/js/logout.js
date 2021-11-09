const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json()
  if (data.message === 'ok') {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

document.getElementById('logout').addEventListener('click', logout);

