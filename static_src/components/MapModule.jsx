import React, {Component} from 'react'
import { YMaps, Map, Placemark, ZoomControl, GeolocationControl, Button} from "react-yandex-maps";
import TouchBar from './modules/TouchBar';
import Personal from './Personal';




require("@babel/polyfill");
import "@babel/polyfill";
export default class MapModule extends Component{

    static defaultProps = {
        homeAddress: "Москва, ул. Барышиха, 51",
        //координаты маркеров (камер)
        coordinates:  [
           // [55.86, 37.64],
            [55.853411, 37.351747]
        ]
    };

    state = {
        homeRoute: {},
        geolocation: null,
        showRoute: false,
        //координаты местоположения
        mapData: {
            center: [55.853411, 37.351747],
            zoom: 12,
        },
        personalShown:false,
    };
    _onButtonClick = (event) => {
        console.log(event);
        console.log(this.ymaps);
    };

    getGeoLocation = () =>{
       return new ymaps.geolocation.get({
            // Выставляем опцию для определения положения
            provider: 'browser', // - средствами браузера или provider: 'yandex'-по ip
            // Карта автоматически отцентрируется по положению пользователя.
            mapStateAutoApply: true
        }).then(function (result) {

            return result.geoObjects.position;
        });
    };

    addRoute = async () => {

        if (this.ymaps && this.map) {
            const {homeAddress} = this.props;
            const position =  await this.getGeoLocation();


            const multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                    // Описание опорных точек мультимаршрута (должно быть местоположение и дом)
                    referencePoints: [position, homeAddress],
                    // Параметры маршрутизации.
                    params: {
                        // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                        results: 1
                    }
                },
                {
                    // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                    boundsAutoApply: true,

                    // Внешний вид линии маршрута.
                    routeActiveStrokeWidth: 6,
                    routeActiveStrokeColor: '#4169E1',

                    // Задаем собственную картинку для последней путевой точки.
                    wayPointFinishIconLayout: "default#image",
                    wayPointFinishIconImageSize: [30, 30],
                    //wayPointFinishIconImageOffset: [-15, -15]
                }
            );
            console.log(position);
             this.map.geoObjects.add(multiRoute);
             this.homeRoute = multiRoute;
            this.setState({
                showRoute: true,
            });
        }
    };

    removeRoute = () => {
        this.map.geoObjects.remove(this.homeRoute);
        this.setState({
            showRoute: false,
            homeRoute: {}
        });
    };


    homeRouteButton = ()=>{
        const {showRoute} = this.state;
        if (showRoute === true) {
            return this.removeRoute();
        }else if(showRoute === false){
            return this.addRoute();
        }
    };

    personalShow = ()=>{
        const {personalShown} = this.state;
        if (personalShown) {
            this.setState({personalShown:false});
        }else{
            this.setState({personalShown:true});
        }
    }

    render() {
        const { coordinates } = this.props;
        const { mapData, showRoute, personalShown } = this.state;
        return (
            <div className='MapWraper'>
                <div>
                <YMaps>
                    <Map className = "map"
                         defaultState={mapData}
                         instanceRef={ref => (this.map = ref)}
                         onLoad={ymaps => this.ymaps = ymaps}>
                        {coordinates.map((coordinate, key) => {
                            return (
                                <Placemark key={key} geometry={coordinate}
                                           onClick={(event) => this._onButtonClick(event)}
                                           options={{preset:'islands#greenIcon'}}

                                />

                            );
                        })}
                        <ZoomControl options={{float: 'right', size: "small", position: {right: 12, bottom: 250}}}/>
                        <GeolocationControl  options={{float: 'left', position: {right: 12, bottom: 196}}}/>
                    </Map>
                </YMaps>
                </div>
                
                <TouchBar homeRouteButton={this.homeRouteButton}
                          personalShow={this.personalShow}
                />
                
                    <Personal visibility={personalShown}
                              personalShow={this.personalShow}
                    />
            
            </div>

        );
    }
}


