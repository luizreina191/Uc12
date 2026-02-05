// Renderer para manipular a interface do Electron
function handleClick() {
    window.api.sendMessage('Olá, main!');
}

function handleGetInfo() {
    window.api.getInfo().then(function (response) {
        console.log('Resposta:', response);
        const resultEl = document.getElementById('result');
        if (resultEl) {
            resultEl.textContent = response;
        }
    });
}

document.getElementById('btn')?.addEventListener('click', handleClick);
document.getElementById('btn-info')?.addEventListener('click', handleGetInfo);
