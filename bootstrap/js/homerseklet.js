let homersekletek = [12, 15, 2, 16, 24, 30, 17];

let ajanlat = ["forró csoki",
               "meleg tea",
               "finom süti",
               "fagyi",
               "jéghideg limonádé",
               "whisky" ,          
               "jagermeister" ];

function idoApp() {
    let sel = document.querySelector('.form-control').value;
    let nap = document.querySelector('.kiVal');
    let fa = document.querySelector('.f');
    let napAjanl = document.querySelector('.ajanlat');
    napAjanl.innerHTML = ajanlat[sel];
    nap.innerHTML = homersekletek[sel]+ '&deg;C'; 
    fa.innerHTML = homersekletek[sel]* 9 / 5 + 32 + '&deg;F'; 
 
}


    
 