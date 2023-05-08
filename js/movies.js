
fetch('https://lopsided-thrilling-leopon.glitch.me/movies').then(res => res.json()).then(data => data.forEach(title => console.log(title)));

