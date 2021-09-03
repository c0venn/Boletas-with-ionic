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
  function Imprimir () {

  }

    return (
      <IonPage>
          <IonContent>
            <div className="container ">
              <div className="Calculadora ion-text-center">
                <div className="display ion-padding ion-margin">
                  <div id="valor-boleta" color="ion-color-new">
                    
                  </div>
                </div>
                <div>
                 <IonButton className="ion-col-md-2" onClick={BorrarTodo}>Borrar</IonButton>
                 <IonButton className="Flecha" onClick={BorrarUltimo}>D</IonButton>
                 <IonButton className="operador" onClick={Dividir}>%</IonButton>
                </div>
                <div>                  
                 <IonButton className="numero">7</IonButton>
                 <IonButton className="numero">8</IonButton>
                 <IonButton className="numero">9</IonButton>
                 <IonButton className="operador" onClick={Multiplicar}>X</IonButton>
                </div>
                <div>
                 <IonButton className="numero">4</IonButton>
                 <IonButton className="numero">5</IonButton>
                 <IonButton className="numero">6</IonButton>
                 <IonButton className="operador" onClick={Restar}>-</IonButton>
                </div>
                <div>
                 <IonButton className="numero">1</IonButton>
                 <IonButton className="numero">2</IonButton>
                 <IonButton className="numero">3</IonButton>
                 <IonButton className="operador" onClick={Sumar}>+</IonButton>
                </div>
                 <IonButton className="col-2 numero">0</IonButton>
                 <IonButton className="numero">.</IonButton>
                 <IonButton className="operador" onClick={Imprimir}>Imprimir</IonButton>
              </div>
            </div>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Digitador;