//tangkap element html
let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');
let watch = document.getElementById('watch');

// kita buat array menampung data
let absensi_data = [];

absensi_form.addEventListener('submit', (event) => {
  //agar tidak terjadi reload page
  event.preventDefault();

  // console.info(event.target.fullname.value);

  let fullname = event.target.fullname.value;
  let number = event.target.number.value;
  console.info(fullname, number);

  //validasi data
  if (fullname == '') {
    alert('Masukkan Nama');
    return;
  }

  if (number == '') {
    alert('masukkan Nim');
    return;
  }

  //push data ke dalam array absensi data
  absensi_data.push({
    nama: fullname,
    nim: number,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  //reset input field
  event.target.fullname.value = '';
  event.target.number.value = '';

  //panggil function render toHtml
  renderToHtml();
});

function renderToHtml() {
  //reset element root
  root.innerHTML = '';

  //mapping array
  absensi_data.forEach((e, i) => {
    root.innerHTML += `
      <div class="card" draggable="true" ondragend="handleDelete(${i})">
        <span>${i + 1}. &nbsp; ${e.nama} ${e.nim}</span> 
        <span> ${e.waktu}&nbsp; ${e.tanggal}</span>
      </div>`;
  });
}

// delete function
function handleDelete(index) {
  console.info(index);

  //delete 1 data dari array
  absensi_data.splice(index, 1);
  alert('yakin hapu');

  //render kembali data dalam array html
  renderToHtml();
}

watch.innerHTML = new Date().toLocaleDateString();
