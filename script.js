const dataInicio = new Date('2023-07-31T22:14:00');

function atualizarContador() {
    const agora = new Date();
    let diff = agora - dataInicio;

    const segundos = Math.floor(diff / 1000) % 60;
    const minutos = Math.floor(diff / 1000 / 60) % 60;
    const horas = Math.floor(diff / 1000 / 60 / 60) % 24;

    const diasTotais = Math.floor(diff / 1000 / 60 / 60 / 24);

    // Calcular anos, meses e dias de forma mais precisa
    const inicio = new Date(dataInicio);
    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();

    if (dias < 0) {
        meses -= 1;
        dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    }

    if (meses < 0) {
        anos -= 1;
        meses += 12;
    }

    document.getElementById("contador").innerHTML =
        `${anos} ano(s), ${meses} mês(es), ${dias} dia(s),<br>` +
        `${horas} hora(s), ${minutos} minuto(s), ${segundos} segundo(s) 💖`;
}

setInterval(atualizarContador, 1000);
atualizarContador();