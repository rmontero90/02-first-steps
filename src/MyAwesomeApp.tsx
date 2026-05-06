import type { CSSProperties } from 'react'

const firstName = 'Rafael';
const lastName = 'Montero';

const favoriteGames = ['The Legend of Zelda', 'Assassin Creed', 'Metroid', 'Doom Eternal'];

const myStyles: CSSProperties = {
  color: 'blue',
  fontSize: '20px',
  fontWeight: 'bold'
}

export const MyAwesomeApp = () => {
  return (
    <>
      <h1 style={myStyles}>Hola, soy {firstName} {lastName}</h1>
      <h2>Mis juegos favoritos son:</h2>
      <ul>
        {favoriteGames.map(game => (
          <li key={game}>{game}</li>
        ))}
      </ul>
    </>
  )
}