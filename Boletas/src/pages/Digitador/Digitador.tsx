import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useState } from 'react';


const Digitador: React.FC = () => {

  function BorrarTodo () {

  }
  function BorrarUltimo () {

  }
  function Dividir () {

  }
  function Multiplicar () {

  }
  function Restar () {

  }
  function Sumar () {

  }
  function Igual () {

  }

    return (
      <IonPage>
          <IonContent>
            <div className="container">
              <div className="Calculadora">
                <div className="display">
                  <div id="valor-boleta"></div>
                </div>
                 <IonButton className="col-2" onClick={BorrarTodo}>C</IonButton>
                 <IonButton className="Flecha" onClick={BorrarUltimo}>D</IonButton>
                 <IonButton className="operador" onClick={Dividir}>%</IonButton>
                 <IonButton className="numero">7</IonButton>
                 <IonButton className="numero">8</IonButton>
                 <IonButton className="numero">9</IonButton>
                 <IonButton className="operador" onClick={Multiplicar}>X</IonButton>
                 <IonButton className="numero">4</IonButton>
                 <IonButton className="numero">5</IonButton>
                 <IonButton className="numero">6</IonButton>
                 <IonButton className="operador" onClick={Restar}>-</IonButton>
                 <IonButton className="numero">1</IonButton>
                 <IonButton className="numero">2</IonButton>
                 <IonButton className="numero">3</IonButton>
                 <IonButton className="operador" onClick={Sumar}>+</IonButton>
                 <IonButton className="col-2 numero">0</IonButton>
                 <IonButton className="numero">.</IonButton>
                 <IonButton className="operador" onClick={Igual}>=</IonButton>
              </div>
            </div>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Digitador;