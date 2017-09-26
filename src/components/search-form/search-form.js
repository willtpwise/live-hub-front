export default {
  name: 'search-form',
  data () {
    return {
      searchFieldDescription: 'Search by name, band or instrument',
      geoOptions: {
        NSW: 'nsw',
        VIC: 'vic',
        QLD: 'qld',
        TAS: 'tas',
        NT: 'nt',
        SA: 'sa',
        Anywhere: '*'
      }
    }
  }
}
