console.log('login')
document.getElementById('login-btn').addEventListener('click',function(){
    const loginSection=document.getElementById('login')
    const mainSection=document.getElementById('main')
    const adminInput=document.getElementById('admin')
    const admin =adminInput.value

    const passwordInput=document.getElementById('password')
    const password=passwordInput.value

    //console.log(password,admin)

    if(admin=='admin' && password=='admin123'){
        alert('login Successful');
        loginSection.classList.add('hidden')
        mainSection.classList.remove('hidden')
    }

})