import styled from '@emotion/styled'
const ResultadoC = styled.div `
   color: #FFF;
   display:flex;
   align-items: center;
   gap: 1rem;
   margin-top:24px;

`
const Texto = styled.p`
 font-size: 18px;
 span{
  font-weight: 700;
 }
`
const Precio = styled.p`
 font-size: 30px;
 span{
  font-weight: 700;
 }
`
const Imagen = styled.img`
 display:block;
 width:120px;
`
const Resultado = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <ResultadoC>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen cripto' />
      <div>
        <Precio>El precio es: <span>{PRICE}</span></Precio>
        <Texto>El precio más alto del día es: <span>{HIGHDAY}</span></Texto>
        <Texto>El precio más bajo del día es: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
      </div>

    </ResultadoC>
  )
}

export default Resultado