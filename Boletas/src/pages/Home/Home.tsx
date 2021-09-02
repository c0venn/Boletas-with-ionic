import { IonPage, IonContent, IonCard, IonCardContent, IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <div className="ion-text-center">
              <IonButton href="/Digitador">Boletas</IonButton>
            </div>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <div className="ion-text-center">
              <IonButton href="/Registros">Registros</IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
