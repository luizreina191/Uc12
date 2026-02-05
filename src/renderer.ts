// Declaração de tipos para a API exposta pelo preload
declare global {
  interface Window {
    api: {
      sendMessage: (message: string) => void;
      getInfo: () => Promise<string>;
    };
  }
}

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

export { };

