import {InfluxDB} from '@influxdata/influxdb-client'

{/* Function to get the hour and the value that correspond from the database */}

const getData = async (_measurement: any, _range: string) => {
    const url = 'http://localhost:8086';
    const token = 'EBE859CD-7EC2-438A-8185-C5856E591C56';

    const client = new InfluxDB({url, token})

    const queryClient = client.getQueryApi('TireuseIUT')
    const query = 'from(bucket: "mesures") ' +
        '|> range(start: -' + _range + ')' +
        '|> filter(fn: (r) => r._measurement == "' + _measurement + '")';

    let tableOfCompleteData: { [key: string]: any; }[] = [];
    queryClient.queryRows(query, {
        next: (row, tableMeta) => {
            const tableObject = tableMeta.toObject(row);
            const hour = tableObject._time.split('T')[1].split(':')[0];
            const value = tableObject._value;
            tableOfCompleteData.push({hour, value});
        }, error(error: Error): void {
            throw error;
        },
        complete(): void {

        }
    });
    return tableOfCompleteData;
}

export default getData;
