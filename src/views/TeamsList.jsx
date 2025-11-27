import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './TeamsList.css'; 

// 💡 1. MAPA DE COLORES: Esta constante es la clave
const LEAGUE_COLORS = {
  "English Premier League": '#37003c', 
  "English League Championship": '#0057b8', 
  "Scottish Premier League": '#1b1b1b', 
  "German Bundesliga": '#dc052d', 
  "Italian Serie A": '#0085C7', 
  "French Ligue 1": '#e83963', 
  "Spanish La Liga": '#c00000', 
  "Greek Superleague Greece": '#12395b', 
  "Dutch Eredivisie": '#df1312', 
  "Belgian Pro League": '#0f0f0f', 
};

const DEFAULT_CARD_COLOR = '#f8f9fa'; 
const DEFAULT_TEXT_COLOR = '#333';

const API_URL = "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";

export default function TeamsList() {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await axios.get(API_URL);
        
        if (response.data && response.data.leagues) {
          const validLeagues = response.data.leagues
            .filter(item => item.strLeague && item.strSport === 'Soccer') 
            .slice(0, 20); 
          setLeagues(validLeagues);
        } else {
          setLeagues([]);
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Error al obtener las ligas:", err);
        setError("No se pudieron cargar los datos de las ligas. Inténtalo más tarde.");
        setLoading(false);
      }
    };

    fetchLeagues();
  }, []);

  if (loading) {
    return <div className="loading-message">Cargando ligas... 🔄</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="teams-list-container">
      <h1 className="teams-list-header">🏆 Ligas Populares (Listado)</h1>
      <p className="teams-list-sub-header">Selecciona una liga para ver sus equipos.</p>
      
      <div className="teams-list-grid">
        {leagues.map((league) => {
          
          // 💡 2. CÁLCULO DEL ESTILO: Obtenemos el color y decidimos si el texto debe ser blanco
          const leagueColor = LEAGUE_COLORS[league.strLeague];
          const isDarkBackground = leagueColor && leagueColor !== DEFAULT_CARD_COLOR;
          
          const cardStyle = {
            backgroundColor: leagueColor || DEFAULT_CARD_COLOR,
            color: isDarkBackground ? 'white' : DEFAULT_TEXT_COLOR, 
          };
          
          const titleColor = isDarkBackground ? 'white' : '#333';
          const subtitleColor = isDarkBackground ? '#ccc' : '#555';

          return (
            <Link 
              key={league.idLeague} 
              to={`/team/${league.strLeague}`}
              className="team-card-link"
            >
              {/* 💡 3. APLICACIÓN DE ESTILOS INLINE */}
              <div className="team-card" style={cardStyle}>
                <h3 className="team-card-title" style={{ color: titleColor }}>{league.strLeague}</h3>
                <p className="team-card-subtitle" style={{ color: subtitleColor }}>Deporte: {league.strSport}</p>
                <p className="team-card-subtitle" style={{ color: subtitleColor }}>País: {league.strCountry}</p>
              </div>
            </Link>
          );
        })}
      </div>
      
      {leagues.length === 0 && (
        <p className="no-leagues-message">No se encontraron ligas. El endpoint podría estar temporalmente inactivo o hubo un error en la búsqueda.</p>
      )}
    </div>
  );
}