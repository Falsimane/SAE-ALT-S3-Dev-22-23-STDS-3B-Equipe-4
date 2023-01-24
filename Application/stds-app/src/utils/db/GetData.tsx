import {InfluxDB} from '@influxdata/influxdb-client'
import React from "react";

const getData = (_measurement: any, _range: string) => {
    const url = 'http://localhost:8086';
    const token = 'EBE859CD-7EC2-438A-8185-C5856E591C56';

    const client = new InfluxDB({url, token})

    const queryClient = client.getQueryApi('TireuseIUT')
    const query = 'from(bucket: "mesures") ' +
        '|> range(start: -' + _range + ')' +
        '|> filter(fn: (r) => r._measurement == "' + _measurement + '")';

    let tableOfCompleteData = new Map<String, any>();

    async function iterateRows(): Promise<Map<String, any>> {
        for await (const {values, tableMeta} of queryClient.iterateRows(query)) {
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