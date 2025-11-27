import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './TeamDetail.css'; 

export default function TeamDetail() {
  const { id } = useParams(); 
  const leagueName = id;

  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const formattedLeagueName = encodeURIComponent(leagueName);
    const API_URL = `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${formattedLeagueName}`;

    const fetchTeams = async () => {
      try {
        const response = await axios.get(API_URL);
        
        if (response.data && response.data.teams) {
          setTeams(response.data.teams);
        } else {
          setTeams([]);
        }
        
        setLoading(false);
      } catch (err) {
        console.error(`Error al obtener equipos de la liga ${leagueName}:`, err);
        setError(`No se pudieron cargar los equipos de ${leagueName}.`);
        setLoading(false);
      }
    };

    if (leagueName) {
      fetchTeams();
    } else {
      setLoading(false);
      setError("No se especificó un nombre de liga para buscar.");
    }

  }, [leagueName]);

  if (loading) {
    return <div className="loading-message">Cargando equipos de {leagueName}... ⏳</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }
  
  if (teams.length === 0) {
    return (
      <div className="team-detail-container">
        <h1 className="team-detail-header">⚽ Equipos de: {leagueName}</h1>
        <p className="no-teams-message">
          No se encontraron equipos para esta liga.
        </p>
      </div>
    );
  }

  return (
    <div className="team-detail-container">
      <h1 className="team-detail-header">⚽ Equipos de: {leagueName}</h1>
      <p className="team-detail-sub-header">Mostrando {teams.length} equipos encontrados.</p>
      
      <div className="team-detail-grid">
        {teams.map((team) => (
          <div key={team.idTeam} className="team-detail-card">
            {team.strTeamBadge && (
                <img 
                    src={team.strTeamBadge} 
                    alt={`Escudo de ${team.strTeam}`} 
                    className="team-badge"
                />
            )}
            <h3 className="team-card-title">{team.strTeam}</h3>
            <p className="team-card-subtitle">Estadio: {team.strStadium || 'N/A'}</p>
            <p className="team-card-description">{team.strDescriptionEN?.substring(0, 100) + '...' || 'Sin descripción disponible.'}</p>
            <a 
              href={team.strWebsite ? `http://${team.strWebsite}` : '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="website-link"
            >
              Visitar Web
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}