function mostrarWeb() {
    let num = parseInt(Math.random()*3);
    if (num==0) {
        window.open('https://www.microsoft.com/es-es/microsoft-365/outlook/web-email-login-for-outlook');
    }
    if (num==1) {
        window.open('https://mail.google.com/');
    }
    if (num==2) {
        window.open('https://es.search.yahoo.com/');
    }
}