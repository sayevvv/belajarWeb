// let saldoAwal = prompt('berapa saldo awal kamu? ')
// let pengeluaran = prompt('berapa pengeluaran kamu? ')

// const saldoAkhir = saldoAwal - pengeluaran

// if(saldoAkhir < 0) {
//     alert('BANG MINUS BANG')
// } else {
//     alert(`saldo akhir anda sebesar ${saldoAkhir}`)
// }

let hari = new Date().getDay()
switch(hari) {
    case 1:
        hari = 'senin'
        break;
    case 2:
        hari = 'selasa'
        break;
    default:
        hari= 'gatau'
        break;
}
alert(`HARI INIIII HARIIII ${hari}`)