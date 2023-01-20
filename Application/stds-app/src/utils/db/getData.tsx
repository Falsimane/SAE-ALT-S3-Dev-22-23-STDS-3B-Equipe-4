import {InfluxDB} from '@influxdata/influxdb-client'

const getData = async (_measurement: any, _range: string) => {
    const url = 'http://localhost:8086';
    const token = 'EBE859CD-7EC2-438A-8185-C5856E591C56';

    const client = new InfluxDB({url, token})

    const queryClient = client.getQueryApi('TireuseIUT')
    const query = 'from(bucket: "TireuseIUT") ' +
        '|> range(start: -' + _range + ')' +
        '|> filter(fn: (r) => r._measurement == "' + _measurement + '")';

    let tableOfCompleteData: { [key: string]: any; }[] = [];
    queryClient.queryRows(query, {
        next: (row, tableMeta) => {
            const tableObject = tableMeta.toObject(row)
            tableOfCompleteData.push(tableObject);
        },
        complete(): void {
            console.log('Query completed')
        }, error(error: Error): void {
        }
    });
    return tableOfCompleteData;
}

export default getData;
