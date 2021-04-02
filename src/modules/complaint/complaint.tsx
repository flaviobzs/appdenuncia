import React from 'react'
import * as S from './styles'

import Sidebar from '../../components/Sidebar'

export default function ComplaintMap() {
  return (
    <S.Wrapper>
      <S.Content>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            {/* <Map style={{ width: '100%', height: 280 }}>
              <Marker interactive={false} icon={happyMapIcon} position={[-27.2092052,-49.6401092]} />
            </Map> */}

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image"></div>

              <button className="new-image">
                {/* <FiPlus size={24} color="#15b6d6" /> */}
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          {/* <button type="submit">Confirmar</button> */}
        </form>
      </S.Content>
      {/* criar template   */}
      {/* <Sidebar /> */}
    </S.Wrapper>
  )
}
