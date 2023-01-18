/* Exemple de requête pour la base de données */
const {InfluxDB, Point} = require('@influxdata/influxdb-client')

const token = "EBE859CD-7EC2-438A-8185-C5856E591C56"
const url = 'http://localhost:8086'

const client = new InfluxDB({url, token})

let queryClient = client.getQueryApi("TireuseIUT")
let fluxQuery = `from(bucket: "mesures")
    |> range(start: -10s)
    |> filter(fn: (r) => r._measurement == "T1")`

queryClient.queryRows(fluxQuery, {
next: (row, tableMeta) => {
    const tableObject = tableMeta.toObject(row)
    console.log(`${tableObject._time} ${tableObject._measurement}: ${tableObject._field}=${tableObject._value}`)
},
    error: (error) => {
        console.error('\nError', error)
    },
    complete: () => {
        console.log('\nSuccess')
    },
})


