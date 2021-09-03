import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useState } from 'react';


const Digitador: React.FC = () => {

  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.id));
  }

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
                 <IonButton className="ion-col-md-2" id="Borrar" onClick={BorrarTodo}>Borrar</IonButton>
                 <IonButton className="Flecha" id="Delete-last" onClick={BorrarUltimo}>D</IonButton>
                 <IonButton className="operador" id="%" onClick={Dividir}>%</IonButton>
                </div>
                <div>                  
                 <IonButton className="numero" id="7" onClick={handleClick}>7</IonButton>
                 <IonButton className="numero" id ="8" onClick={handleClick}>8</IonButton>
                 <IonButton className="numero" id ="9" onClick={handleClick}>9</IonButton>
                 <IonButton className="operador" id ="X" onClick={Multiplicar}>X</IonButton>
                </div>
                <div>
                 <IonButton className="numero" id ="4" onClick={handleClick}>4</IonButton>
                 <IonButton className="numero" id ="5" onClick={handleClick}>5</IonButton>
                 <IonButton className="numero" id ="6" onClick={handleClick}>6</IonButton>
                 <IonButton className="operador" id ="-" onClick={Restar}>-</IonButton>
                </div>
                <div>
                 <IonButton className="numero" id ="1" onClick={handleClick}>1</IonButton>
                 <IonButton className="numero" id ="2" onClick={handleClick}>2</IonButton>
                 <IonButton className="numero" id ="3" onClick={handleClick}>3</IonButton>
                 <IonButton className="operador" onClick={Sumar}>+</IonButton>
                </div>
                 <IonButton className="col-2 numero" id ="0"onClick={handleClick}>0</IonButton>
                 <IonButton className="numero" id ="." onClick={handleClick}>.</IonButton>
                 <IonButton className="operador" onClick={Imprimir}>Imprimir</IonButton>
              </div>
            </div>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Digitador;