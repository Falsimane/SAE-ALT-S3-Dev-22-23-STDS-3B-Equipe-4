import { Redirect, Route } from 'react-router-dom';
import {IonApp, IonContent, IonPage, IonRouterOutlet, setupIonicReact} from '@ionic/react';
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
import "swiper/css/pagination";
import './theme/App.css';
import Temperature from "./pages/Temperature";
import Parametres from "./pages/Parametres";
import QuantiteFut from "./pages/QuantiteFut";
import STDSDatasProvider from "./utils/mqtt/STDSDatasProvider";
import {Pagination} from "swiper";
import MaintenancePreventive from "./pages/MaintenancePreventive";
import MaintenanceCurative from "./pages/MaintenanceCurative";
import Pdf from "./pages/Pdf";

setupIonicReact();

const App = () => {
    const isMobileOrTablet = useMediaQuery('(max-width: 768px)');

    return (
        <IonApp>
            <STDSDatasProvider>
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route path="/" exact={true}>
                            <Redirect to="/home"/>
                        </Route>
                        <Route path="/puissance" exact={true} component={Puissance}/>
                        <Route path="/quantite" exact={true} component={QuantiteFut}/>
                        <Route path="/temperature" exact={true} component={Temperature}/>
                        <Route path="/maintenance-preventive" exact={true} component={MaintenancePreventive}/>
                        <Route path="/maintenance-curative" exact={true} component={MaintenanceCurative}/>
                        <Route path="/parametres" exact={true} component={Parametres}/>
                        <Route path="/pdf">
                            <Route path="/pdf/:id" exact={true} component={Pdf}/>
                        </Route>
                        {isMobileOrTablet ?
                            <Route path="/home" exact={true}>
                                <IonPage>
                                    <IonContent>
                                        <Swiper
                                            className="mySwiper"
                                            pagination={true} modules={[Pagination]}
                                        >
                                            <SwiperSlide>
                                                <Home/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Maintenance/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </IonContent>
                                </IonPage>
                            </Route>
                            :
                            <>
                                <Route path="/home" exact={true} component={Home}/>
                                <Route path="/maintenance" exact={true} component={Maintenance}/>
                            </>
                        }
                    </IonRouterOutlet>
                </IonReactRouter>
            </STDSDatasProvider>
        </IonApp>
    );
};

export default App;
