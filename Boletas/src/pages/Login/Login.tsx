import { IonContent, IonPage, IonInput, IonButton } from '@ionic/react';
import { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  return (
    <IonPage>
        <IonContent className="ion-padding" fullscreen={true}>
            <div slot="fixed" className="Login">
            <IonInput placeholder="Ingresa Tu Usuario" onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
            <IonInput placeholder="Ingresa Tu Contraseña" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
            <IonButton href="/Home">Ingresar</IonButton>
            </div>
        </IonContent>
    </IonPage>
  );
};

export default Login;
