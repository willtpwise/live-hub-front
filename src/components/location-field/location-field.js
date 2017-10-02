// import './google-address.js'
/* global google */
export default {
  name: 'location-field',
  props: {
    place: {
      required: true
    }
  },
  data () {
    return {
      expandForm: false,
      autocomplete: null,
      componentForm: {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
      }
    }
  },
  computed: {
    geo () {
      return this.place
    }
  },
  methods: {
    initAutocomplete () {
      // Create the autocomplete object, restricting the search to geographical
      // location types.
      let field = this.$el.querySelector('[name="autocomplete"]')
      this.autocomplete = new google.maps.places.Autocomplete(field, {types: ['geocode']})

      // When the user selects an address from the dropdown, populate the address
      // fields in the form.
      this.autocomplete.addListener('place_changed', () => {
        this.setGeo(this.autocomplete.getPlace())
      })
    },
    setGeo (place) {
      // Get each component of the address from the place details
      let address = {}
      for (let i = 0; i < place.address_components.length; i++) {
        let addressType = place.address_components[i].types[0]
        if (this.componentForm[addressType]) {
          let val = place.address_components[i][this.componentForm[addressType]]
          address[addressType] = val
        }
      }

      // Get the latitute and longtitude
      address.lat = place.geometry.location.lat()
      address.lng = place.geometry.location.lng()

      // Set the location
      this.geo = address
    }
  },
  mounted () {
    // Globalise the API integration
    window.initAutocomplete = () => {
      this.initAutocomplete()
    }

    // Load the Google Maps API
    // Calls window.initAutocomplete when ready
    if (typeof google === 'undefined') {
      let script = document.createElement('script')
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCV4VGdGSk4A3V9SyDLCvjhfvcnVsiyktM&libraries=places&callback=initAutocomplete'
      document.body.appendChild(script)
    } else {
      this.initAutocomplete()
    }
  }
}
