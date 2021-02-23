const data = {
  vermelhoEscuro1: {
    id: "vermelho-escuro-1",
    substation: "Lagoinha 336,4MCM",
    longitude: "48° 15' 44'' Oeste",
    latitude: "18° 54' 41'' Sul",
    active: "Alimentador 336,4MCM",
    hostCapacity: "20%",
    defaultColor: '#540b0eff',
    hoverColor: '#7f1021',
    maxPtoInstall: "<1,25 MW",
    impactFactor: "U<sub>R</sub> – Tensão de regime permanente"
  },
  vermelhoEscuro2: {
    id: "vermelho-escuro-2",
    substation: "Lagoinha 336,4MCM",
    longitude: "48° 15' 44'' Oeste",
    latitude: "18° 54' 41'' Sul",
    active: "Alimentador 336,4MCM",
    hostCapacity: "20%",
    defaultColor: '#540b0eff',
    hoverColor: '#7f1021',
    maxPtoInstall: "<1,25 MW",
    impactFactor: "U<sub>R</sub> – Tensão de regime permanente"
  },
  verde: {
    id: "verde",
    substation: "Lagoinha",
    longitude: "48° 15' 44'' Oeste",
    latitude: "18° 54' 41'' Sul",
    active: "Alimentador 4/0 AWG",
    hostCapacity: "60%",
    defaultColor: '#03cea4ff',
    hoverColor: '#00ffcc',
    maxPtoInstall: "5 – 6,25 MW",
    impactFactor: "U<sub>R</sub> – Tensão de regime permanente"
  },
  laranja: {
    id: "laranja",
    substation: "Lagoinha",
    longitude: "40° 10' 43'' Oeste",
    latitude: "17° 50' 41'' Sul",
    active: "Alimentador 2 AWG",
    hostCapacity: "30%",
    defaultColor: '#f19953ff',
    hoverColor: '#ffbf8a',
    maxPtoInstall: "2,5 – 3,75MW",
    impactFactor: "U<sub>R</sub> – Tensão de regime permanente"
  },
  azul: {
    id: "azul",
    substation: "Lagoinha 336,4MCM",
    longitude: "53° 9' 33'' Oeste",
    latitude: "23 47' 21'' Sul",
    active: "Alimentador 3/0 AWG",
    hostCapacity: "90%",
    defaultColor: '#2660a4ff',
    hoverColor: '#3782d6',
    maxPtoInstall: ">8 MW",
    impactFactor: "U<sub>R</sub> – Tensão de regime permanente"
  },
  vermelhoClaro: {
    id: "vermelho-claro",
    substation: "Lagoinha 336,4MCM",
    longitude: "51° 19' 17'' Oeste",
    latitude: "13 37' 21'' Sul",
    active: "Alimentador 336,4MCM",
    hostCapacity: "20%",
    defaultColor: '#9e2a2bff',
    hoverColor: '#df383a',
    maxPtoInstall: "<1,25 MW",
    impactFactor: "U<sub>R</sub> – Tensão de regime permanente"
  },

}

function changeInfo(key) {
  document.getElementById('substation').innerHTML = data[key].substation;
  document.getElementById('latitude').innerHTML = data[key].latitude;
  document.getElementById('longitude').innerHTML = data[key].longitude;
  document.getElementById('active').innerHTML = data[key].active;
  document.getElementById('host-capacity').innerHTML = data[key].hostCapacity;
  document.getElementById('maxp-to-install').innerHTML = data[key].maxPtoInstall;
  document.getElementById('impact-factor').innerHTML = data[key].impactFactor;
}

const svg = document.getElementById("tensao-map");

svg.addEventListener("load", function () {

  const svgDoc = svg.contentDocument

  Object.keys(data).forEach(key => {
    const substation = svgDoc.getElementById(data[key].id);

    console.log(substation.id);

    substation.style.fill = data[key].defaultColor;
    substation.style.cursor = 'pointer';

    substation.addEventListener('mouseenter', function () {
      substation.style.fill = data[key].hoverColor;
    }, false);

    substation.addEventListener('mouseleave', function () {
      substation.style.fill = data[key].defaultColor;
    }, false)

    substation.addEventListener("click", function () {
      changeInfo(key);
    }, false);
  })

}, false);
