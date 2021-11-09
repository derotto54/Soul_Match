const logInBtn = document.getElementById('logInBtn')
const emailInput = document.getElementById('email-login')
const passwordInput = document.getElementById('password-login')


logInBtn.addEventListener('click', async (e) => {
  e.preventDefault()

  const userLogin = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  }
  if (userLogin.email && userLogin.password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLogin)
    })

    const data = await response.json()
    console.log(data)
    if (data.user) {

      window.location.replace('/people')
    } else {
      alert('Incorrect email or password. Please try again!')
    }
  }
})

  //setup account
