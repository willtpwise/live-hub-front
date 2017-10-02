/**
 * Copied from https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
 */
/* global google */
var autocomplete = null
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
}

window.initAutocomplete = () => {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(this.$el.querySelector('#autocomplete')),
      {types: ['geocode']})

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', window.fillInAddress)
}

window.fillInAddress = () => {
  // Get the place details from the autocomplete object.
  let place = autocomplete.getPlace()

  // Get each component of the address from the place details
  let address = {}
  for (let i = 0; i < place.address_components.length; i++) {
    let addressType = place.address_components[i].types[0]
    if (componentForm[addressType]) {
      let val = place.address_components[i][componentForm[addressType]]
      address[addressType] = val
    }
  }

  // Get the latitute and longtitude
  address.lat = place.geometry.location.lat()
  address.lng = place.geometry.location.lng()

  let event = new CustomEvent('addressFound', {
    detail: address
  })
  document.dispatchEvent(event)
}

(function () {
  console.log(document.querySelector('#google-maps-api'))
  if (!document.querySelector('#google-maps-api')) {
    let script = document.createElement('script')
    script.id = 'google-maps-api'
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCV4VGdGSk4A3V9SyDLCvjhfvcnVsiyktM&libraries=places&callback=initAutocomplete'
    document.body.appendChild(script)
  }
})()
