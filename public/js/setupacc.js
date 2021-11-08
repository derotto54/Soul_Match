const signUpBtn = document.getElementById('signUpBtn')
  console.log(signUpBtn)

  signUpBtn.addEventListener('click', async (e)=>{
    e.preventDefault()
  
    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email-login')
    const passwordInput = document.getElementById('password-login')

     const newUserAcc={
       name: nameInput.value,
       email: emailInput.value,
    password: passwordInput.value
     }
    const responseUser = await fetch('/api/users/setupacc',{
      method: 'POST',
      headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserAcc)
    })
    window.location.replace('/people')


  })