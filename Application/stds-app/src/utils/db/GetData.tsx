import {InfluxDB} from '@influxdata/influxdb-client'
import React from "react";

const getData = (_measurement: any, _choiceDay: string, _url:any) => {

    const url = _url;
    //const url = 'http://localhost:8086';

    const token = 'EBE859CD-7EC2-438A-8185-C5856E591C56';

    const client = new InfluxDB({url, token})

    const queryClient = client.getQueryApi('TireuseIUT')

    const returnTimeStamp = (props: {_choice: string}) => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let timeStamp = "";

        if (props._choice === "today") {
            timeStamp = year + "-" + month + "-" + day;

            if (day < 10 && month < 10) {
                timeStamp = year + "-0" + month + "-0" + day;
            }

            if (month < 10) {
                timeStamp = year + "-0" + month + "-" + day;
            }

            if (day < 10) {
                timeStamp = year + "-" + month + "-0" + day;
            }
        }

        if (props._choice === "yesterday") {
            date.setDate(date.getDate() - 1);
            day = date.getDate();
            month = date.getMonth() + 1;
            year = date.getFullYear();

            timeStamp = year + "-" + month + "-" + day;
            if (day < 10 && month < 10) {
                timeStamp = year + "-0" + month + "-0" + day;
            }

            if (month < 10) {
                timeStamp = year + "-0" + month + "-" + day;
            }

            if (day < 10) {
                timeStamp = year + "-" + month + "-0" + day;
            }

        }
        return timeStamp;
    }

    let query = "" ;

    const makeQuery = () => {
        if (_choiceDay === "today") {
            query = 'from(bucket: "mesures") ' +
                '|> range(start: ' + returnTimeStamp({_choice: "today"}) + ')' +
                '|> filter(fn: (r) => r._measurement == "' + _measurement + '")' ;
        }
        if (_choiceDay === "yesterday") {
            query = 'from(bucket: "mesures") ' +
                '|> range(start: ' + returnTimeStamp({_choice: "yesterday"}) + ', stop: ' + returnTimeStamp({_choice: "today"}) + ')' +
                '|> filter(fn: (r) => r._measurement == "' + _measurement + '")' +
                '|> hourSelection(start: 0, stop: 23)';
        }
        return query;
    }

    let tableOfCompleteData = new Map<String, any>();

    async function iterateRows(): Promise<Map<String, any>> {
        for await (const {values, tableMeta} of queryClient.iterateRows(makeQuery())) {
            const o = tableMeta.toObject(values)
            let date = new Date(o._time);
            let hours = String(date.getHours());
            tableOfCompleteData.set(hours, o._value);
        }
        return tableOfCompleteData;
    }
    return iterateRows();
}

export default getData;