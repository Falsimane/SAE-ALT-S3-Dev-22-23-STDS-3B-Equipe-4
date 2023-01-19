import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Puissance from './pages/Puissance';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Maintenance from "./pages/Maintenance";
import React from "react";
import {useMediaQuery} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import './theme/App.css';
import Temperature from "./pages/Temperature";
import QuantiteFut from "./pages/QuantiteFut";
import STDSDatasProvider from "./utils/mqtt/STDSDatasProvider";

setupIonicReact();

const AppMediaQuery = () => {
    const isMobileOrTablet = useMediaQuery('(max-width: 768px)');

    if (isMobileOrTablet) {
        return (
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <Home/>
                </SwiperSlide>
                <SwiperSlide>
                    <Maintenance/>
                </SwiperSlide>
            </Swiper>
        )
    } else {
        return (
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/home" exact={true}>
                        <Home />
                    </Route>
                    <Route path="/puissance" exact={true} component={Puissance} />
                    <Route path="/maintenance" exact={true} component={Maintenance} />
                    <Route path="/quantite" exact={true} component={QuantiteFut} />
                    <Route path="/temperature" exact={true} component={Temperature} />
                </IonRouterOutlet>
            </IonReactRouter>
        );
    }
}

const App: React.FC = () => (
    <IonApp>
        <STDSDatasProvider>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/" exact={true}>
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/puissance" exact={true} component={Puissance} />
                    <Route path="/quantite" exact={true} component={QuantiteFut} />
                    <Route path="/temperature" exact={true} component={Temperature} />
                    <Route path="/home" component={AppMediaQuery} />
                </IonRouterOutlet>
            </IonReactRouter>
        </STDSDatasProvider>
    </IonApp>
);

export default App;
