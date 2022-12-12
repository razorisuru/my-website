
    const dbtn = document.getElementById('Dbtn');

    dbtn.addEventListener('click', function onClick(event) {
    document.body.style.background = '#1d2a35';
    document.body.style.color = 'white';
    document.getElementById("tbd").style.background = '#38444d';
    });
    const lbtn = document.getElementById('Lbtn');

    lbtn.addEventListener('click', function onClick(event) {
    document.body.style.color = 'black';
    document.body.style.background = 'white';
    document.getElementById("tbd").style.background = 'url(https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg)';
    document.getElementById("tbd").style.backgroundRepeat = 'no-repeat';
    document.getElementById("tbd").style.backgroundSize = 'cover';
    });
