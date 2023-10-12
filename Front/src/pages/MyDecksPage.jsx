import ContainerDiv from "../components/ContainerDiv"
import GeneralCard from "../components/GeneralCard/GeneralCard"
import getDecks from "../services/decks/getDecks"
import { allDecksData } from "../../constants"
import "../../style.css"
import useAppContext from "../../context/AppContext"

import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"



export default function MyDecksPage() {
  const [deckList, setDeckList] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);
  const { store } = useAppContext();
  const { username } = store;
  
  const params = useParams();
  const navigate = useNavigate();

  const progress = {
   aciertos: 50, 
   errores: 30, 
   noContestadas: 20
  }

  const getDecksData = () => { // Esa funcion se cambiará por la función getDecks del hook comentado.
    const data = allDecksData
    return data
  }

  useEffect(() => { // Este hook se cambiará por el comentado.
    const data = getDecksData()
    setDeckList(data)
  }, [])

  const getDecksAreas = () => {
    const Areas = [...new Set(deckList.map(objeto => objeto.area))];
    return Areas;
  }

  if (params.username !== username) { navigate("/login") 
  return <h1>Cargando...</h1>}

  return (
    <div className="h-75 container">
      <ContainerDiv title="My Decks" overflow="y">
        {deckList.map((deck, index) =>
          (
            <GeneralCard key={index} title={deck.specialize} minWidth="15rem" minHeight="20rem" shadow={"-lg"}
            progress = {progress}
            >
              {deck.theme}
              <div className="d-flex mt-3">
                <Link to={`../../${username}/${deck.theme}`} className="btn btn-primary my-auto w-100">Go Game</Link>
              </div>
            </GeneralCard>
          ))
      }
      </ContainerDiv>
    </div>
  );
}