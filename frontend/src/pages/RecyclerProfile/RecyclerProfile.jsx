import React, { useState, useEffect } from 'react';
import './RecyclerProfile.css';
import { recyclerProfileService } from '../../services/api';

const RecyclerProfile = () => {
  // Estado para armazenar os dados do perfil
  const [profile, setProfile] = useState(null);
  
  // Estado para controlar o carregamento
  const [loading, setLoading] = useState(true);
  
  // Estado para mensagens de erro
  const [error, setError] = useState('');

  // Carregar dados do perfil quando o componente montar
  useEffect(() => {
    loadProfile();
  }, []);

  // Função para carregar o perfil
  const loadProfile = async () => {
    try {
      setLoading(true);
      setError('');
      
      console.log('Carregando perfil...');
      
      // Chama a API para buscar o perfil
      const data = await recyclerProfileService.getMyProfile();
      
      console.log('Dados recebidos:', data);
      
      // Atualiza o estado com os dados recebidos
      setProfile(data);
      
    } catch (err) {
      console.error('Erro detalhado:', err);
      setError('Não foi possível carregar o perfil. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  };

  // Se estiver carregando, mostra um loading
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando seu perfil...</p>
      </div>
    );
  }

  // Se houve erro, mostra a mensagem
  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={loadProfile} className="retry-button">
          Tentar novamente
        </button>
      </div>
    );
  }

  // Se não tem perfil ainda
  if (!profile) {
    return (
      <div className="no-profile">
        <p>Nenhum perfil encontrado.</p>
      </div>
    );
  }

  // Mostra os dados do perfil
  return (
    <div className="recycler-profile">
      <h1>Meu Perfil</h1>
      
      <div className="profile-card">
        <h2>Informações Pessoais</h2>
        
        <div className="profile-info">
          <div className="info-row">
            <span className="label">Nome:</span>
            <span className="value">{profile.name || 'Não informado'}</span>
          </div>
          
          <div className="info-row">
            <span className="label">E-mail:</span>
            <span className="value">{profile.email || 'Não informado'}</span>
          </div>
          
          <div className="info-row">
            <span className="label">Telefone:</span>
            <span className="value">{profile.phone || 'Não informado'}</span>
          </div>
          
          <div className="info-row">
            <span className="label">Endereço:</span>
            <span className="value">{profile.address || 'Não informado'}</span>
          </div>
          
          {profile.cpf && (
            <div className="info-row">
              <span className="label">CPF:</span>
              <span className="value">{profile.cpf}</span>
            </div>
          )}
        </div>
      </div>
      
      <button onClick={loadProfile} className="refresh-button">
        Atualizar dados
      </button>
    </div>
  );
};

export default RecyclerProfile;