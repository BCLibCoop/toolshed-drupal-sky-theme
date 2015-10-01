(function($){

$(document).ready(function() {

console.log("READY");

  /* if AB or BC gets selected (or is selected), show the appropriate sub-list */
  $bc = $('#edit-tid-bc-libraries-wrapper');
  $ab = $('#edit-tid-ab-libraries-wrapper');

  $province_select = $('#edit-field-source-library-region-tid');

  //hide default selection
  $sel = $province_select.find(":selected");
  if ($sel) {
    console.log("SELECTED ALREADY: ");
    console.log($sel.html());
    if ($sel.html() == "British Columbia") {
      showBCSelect('none');
    } else if ($sel.html() == "Alberta") {
      showABSelect('none');
    } else {
      hideProvinceSelects('none');
    }
  }

  $('#edit-field-source-library-region-tid').change(function(e){
    $sel = $(e.currentTarget).find(":selected");
    if ($sel) {
      console.log("SELECTED ALREADY: ");
      console.log($sel.html());
      if ($sel.html() == "British Columbia") {
        showBCSelect('none');
      } else if ($sel.html() == "Alberta") {
        showABSelect('none');
      } else {
        hideProvinceSelects('none');
      }
    }
  });

  function showBCSelect(anim) {
    $ab.addClass('hidden-label');
    $bc.removeClass('hidden-label');
    shrinkFields();
  }

  function showABSelect() {
    $bc.addClass('hidden-label');
    $ab.removeClass('hidden-label');
    shrinkFields();
  }

  function hideProvinceSelects() {
    $bc.addClass('hidden-label');
    $ab.addClass('hidden-label');
    restoreOriginalWidths();
  }

  function restoreOriginalWidths() {
    $('.views-exposed-widget:not(:first,:last)').removeClass('shrunken-exposed-form');
  }

  function shrinkFields() {
    $('.views-exposed-widget:not(:first,:last)').addClass('shrunken-exposed-form');
  }

  /* add class to items that start with a "-" so that they're marked as children in the select2 list 
   * and get rid of the hyphen when you're done */
  $el = $('.select2-container');
  $el.click(function(e) {

    //get rid of hyphen for each sub-item (TODO: deal with hyphens re-appearing when searching? */
    $('.select2-result-label').filter(function(idx) {
      var hadhyphen = this.innerHTML.indexOf("</span>-") > 0;
      $(this).html($(this).html().replace(/-/g,''));
      return hadhyphen;
    });
  });

  //only show the relevant content fields when adding content
  function addResourceTypeSelected(val) {
    var fields = [$('#edit-field-training-doc-file'),$('#edit-field-web-link'),$('#edit-field-video-link'),$('#edit-field-content'),$('#edit-field-tests3file')];
    for(var k=0;k<fields.length;k++) {
      fields[k].hide();
    }
    if (val === 'Power Point' || val === 'PDF' || val === "Word" || val === "ZIP") {
      $('#edit-field-training-doc-file').show();	
    } else if (val === 'Web Resource') {
      $('#edit-field-web-link').show();
    } else if (val === 'Video' || val === 'Webinar') {
      $('#edit-field-video-link').show();
    }
  }
  addResourceTypeSelected($('#edit-field-resource-type-und').val());

  $('#edit-field-resource-type-und').change(function(e) {
    console.log(e);
    console.log($(this).val());  
    var val = $(this).val();
    addResourceTypeSelected(val);
  });

  //$('#edit-field-source-library-region-tid option:first').html("Select a source library...");
  $('#edit-field-source-library-region-tid').select2({ placeholder: "Source Library Region", allowClear: true });
  $('#edit-field-training-topic-value').select2({ placeholder: "Training Topic" });
  $('#edit-field-resource-type-value').select2({ placeholder: "Resource Type" });
  $('#edit-tid-ab-libraries').select2({placeholder: "Alberta Libraries"});
  $('#edit-tid-bc-libraries').select2({placeholder: "B.C. Libraries"});

});

})(jQuery);
