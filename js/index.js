console.log("hello world");

var sum = 0;

function bestil(kr) {

  alert('det koster: ' + kr)

  kurv.innerHTML += pp.innerHTML
  sum = sum + kr
  ialt.innerHTML = sum

  }

function bestil2(kr) {

  alert('det koster: ' + kr)

  kurv.innerHTML += risotto.innerHTML
  sum = sum + kr
  ialt.innerHTML = sum

    }

function bestil3(kr) {

  alert('det koster: ' + kr)
  kurv.innerHTML += okse.innerHTML
  sum = sum + kr
  ialt.innerHTML = sum

    }

function bestil4(kr) {

  alert('det koster: ' + kr)

  kurv.innerHTML += brisket.innerHTML
  sum = sum + kr
  ialt.innerHTML = sum

    }

function bestil5(kr) {

  alert('det koster: ' + kr)

  kurv.innerHTML += brownie.innerHTML
  sum = sum + kr
  ialt.innerHTML = sum

    }

function bestil6(kr) {

  alert('det koster: ' + kr)

  kurv.innerHTML += sorbet.innerHTML
  sum = sum + kr
  ialt.innerHTML = sum

    }

  let d = new Date(); // kan genbruges andre steder
  let uge = ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'];
  let maaneder = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];

  const info = {
    author: 'Hansen Danielsen',
    dag: uge[ d.getDay() ],
    maaned: maaneder[ d.getMonth() ],
    dagImaaned: d.getDate(),
    aar: d.getFullYear(),
    time: d.getHours(),
    minut: d.getMinutes(),
    restaurant: 'Alice\'s Restaurant',
    adresse: 'Ingersvej 15, 2. tv 8200 Brabrand',
    telefon: '2988 8885',
    // Metoder
    skrivTilFooter: function() {
      console.log('footeren.skrivTilFooter() = aktiv');
      footerInfo.innerHTML += `
        <div>
          &copy; Tutorial - imaginary restaurant<br>
          Design by ${this.author} <br>
          ${this.dag}
          ${this.dagImaaned}.
          ${this.maaned}
          ${this.aar}.
        </div>
      `;
    },
    skrivAdresse: function() {
      footerInfo.innerHTML += `
        <div class="adresse">
          <h3>${this.restaurant}</h3>
          <p>
            ${this.adresse}<br>
            ${this.telefon}
          </p>
        </div>
      `
    }
  }
