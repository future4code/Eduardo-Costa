export const calcHour = (UTCTime) => {
    let text = ""
    let fulltime = (new Date() - new Date(UTCTime)) / 1000 / 60 / 60
    let inteiro = Math.trunc(fulltime)
    let minutos = Math.floor((fulltime - inteiro) * 60)
    let horas = 0
    let dias = 0
    let diasinteiro = inteiro / 24
    if (diasinteiro > 1) {
        dias = Math.trunc(diasinteiro)
        horas = Math.floor((diasinteiro - dias) * 24)
    }
    if (diasinteiro < 1) {
        horas = (diasinteiro) * 24
    }

    let datautc = new Date(UTCTime)
    let diafull = datautc.getDate()
    let monthfull = datautc.getMonth() + 1
    let yearfull = datautc.getFullYear()

    if (dias > 0) {
        text = `${dias} dias, ${horas} horas e ${minutos} minutos (${diafull}/${monthfull}/${yearfull}).`
    } else if (dias <= 0 && horas > 0) {
        text = `${horas} horas e ${minutos} minutos (${diafull}/${monthfull}/${yearfull}).`
    } else if (dias <= 0 && horas <= 0) {
        text = `${minutos} minutos (${diafull}/${monthfull}/${yearfull}).`
    }
    return text
}

export const gna = () => {
    return(Math.floor(Math.random() * 9))
}
