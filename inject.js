
javascript: 

var i, s, ss = ['https://dl.dropbox.com/u/3179945/script.js', 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js'];
for (i = 0; i != ss.length; i++) {
    s = document.createElement('script');
    s.src = ss[i];
    document.body.appendChild(s);
}
void(0);

