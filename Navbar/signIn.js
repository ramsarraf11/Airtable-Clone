let data = JSON.parse(localStorage.getItem('loginData'));
    
    let submit = document.getElementById('submit');
    
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
        
        if(data.email==email && data.pass == password){
            alert('Loig in Succes');
            window.location.href = '../TaskPage/task.html'
        }else{
            alert('Fill Correct data');
            // Please herf here using (window.location.herf="your location")
        }
    })