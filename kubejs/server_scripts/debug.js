// remove recipes id vintageimprovements:pressing/compressed_iron_sheet
ServerEvents.recipes(event => {
  event.remove({ id: 'vintageimprovements:pressing/compressed_iron_sheet' })
});
