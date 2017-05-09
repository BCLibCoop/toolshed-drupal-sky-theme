(function($){

$(document).ready(function() {
console.log("READY");

  /* when province gets selected (or is selected), show the appropriate sub-list */
  $bc = $('#edit-tid-bc-libraries-wrapper');
  $ab = $('#edit-tid-ab-libraries-wrapper');
  $sk = $('#edit-tid-sk-libraries-wrapper');
  $mb = $('#edit-tid-mb-libraries-wrapper');
  $yt = $('#edit-tid-yt-libraries-wrapper');

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
    } else if ($sel.html() == "Saskatchewan") {
      showSKSelect('none');
    } else if ($sel.html() == "Manitoba") {
      showMBSelect('none');
    } else if ($sel.html() == "Yukon") {
      showYTSelect('none');
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
      } else if ($sel.html() == "Saskatchewan") {
      showSKSelect('none');
      } else if ($sel.html() == "Manitoba") {
      showMBSelect('none');
      } else if ($sel.html() == "Yukon") {
      showYTSelect('none');
      } else {
        hideProvinceSelects('none');
      }
    }
  });

  function showBCSelect(anim) {
    $ab.addClass('hidden-label');
    $sk.addClass('hidden-label');
    $mb.addClass('hidden-label');
    $yt.addClass('hidden-label');
    $bc.removeClass('hidden-label');
    shrinkFields();
  }

  function showABSelect() {
    $bc.addClass('hidden-label');
    $sk.addClass('hidden-label');
    $mb.addClass('hidden-label');
    $yt.addClass('hidden-label');
    $ab.removeClass('hidden-label');
    shrinkFields();
  }

  function showSKSelect() {
    $sk.removeClass('hidden-label');
    $ab.addClass('hidden-label');
    $bc.addClass('hidden-label');
    $mb.addClass('hidden-label');
    $yt.addClass('hidden-label');
    shrinkFields();
  }

  function showMBSelect() {
    $mb.removeClass('hidden-label');
    $ab.addClass('hidden-label');
    $bc.addClass('hidden-label');
    $sk.addClass('hidden-label');
    $yt.addClass('hidden-label');
    shrinkFields();
  }
  
  function showYTSelect() {
    $yt.removeClass('hidden-label');
    $ab.addClass('hidden-label');
    $bc.addClass('hidden-label');
    $sk.addClass('hidden-label');
    $mb.addClass('hidden-label');
    shrinkFields();
  }
  function hideProvinceSelects() {
    $bc.addClass('hidden-label');
    $ab.addClass('hidden-label');
    $mb.addClass('hidden-label');
    $sk.addClass('hidden-label');
    $yt.addClass('hidden-label');
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

  //When this field doesn't exist, don't hide re-used file metadata fields because nothing can reveal them
  if ($('#edit-field-resource-type-und').length) {
  	addResourceTypeSelected($('#edit-field-resource-type-und').val());
  }
  $('#edit-field-resource-type-und').change(function(e) {
    console.log(e);
    console.log($(this).val());
    var val = $(this).val();
    addResourceTypeSelected(val);
  });

  //Add download class to web links and other fields we can't easily add to via admin GUI
  $('.field-name-field-web-link a.ext').addClass('download');
  $('.embedded-video .player').addClass('download');
  $('.field-name-field-training-doc-file a').addClass('download');

  //$('#edit-field-source-library-region-tid option:first').html("Select a source library...");
  $('select#edit-field-source-library-region').select2({ placeholder: "Source Library Region", allowClear: true });
  $('#edit-field-source-library-region-tid').select2({ placeholder: "Source Library Region", allowClear: true });
  $('#edit-field-training-topic-value').select2({ placeholder: "Topic" });
  $('#edit-field-resource-type-value').select2({ placeholder: "Resource Type" });
  $('#edit-tid-ab-libraries').select2({placeholder: "AB Libraries"});
  $('#edit-tid-bc-libraries').select2({placeholder: "BC Libraries"});
  $('#edit-tid-sk-libraries').select2({placeholder: "SK Libraries"});
  $('#edit-tid-mb-libraries').select2({placeholder: "MB Libraries"});
  $('#edit-tid-yt-libraries').select2({placeholder: "YT Libraries"});
  $('#edit-field-content-type-selector').select2({placeholder: "Content Type"});

  //Conference presentation browse
  $('#edit-field-conference-name-tid').select2({placeholder: "Conference Name"});
  $('#edit-field-conference-year-value').select2({placeholder: "Year"});

  //All Programs browse
  $('#edit-field-primary-audience-value').select2({ placeholder: "Primary Audience" });
  $('#edit-field-length-of-program-session2-value').select2({ placeholder: "Length of Session" });

  //Add/Create node pages
  $('#edit-field-training-topic-und').select2({ placeholder: "Topic" });
  $('select#edit-field-training-topic').select2({ placeholder: "Topic" });
  $('#edit-field-resource-type-und').select2({ placeholder: "Type" });
  $('#edit-field-source-library-region-und').select2({ placeholder: "Library" });
  $('#edit-field-assoc-regional-project-und').select2({ placeholder: "Project" });
  $('#edit-field-length-of-program-session2-und').select2();
  $('#edit-field-session-frequency-und').select2();
  $('#edit-field-conference-name-und').select2();
  $('#edit-field-conference-year-und').select2();

  //Solr-Search
  $('select#edit-field-conference-name-value').select2({placeholder: "Conference"});
  $('#edit-search-api-views-fulltext').select2({placeholder: "Keywords"});

  $(".node.article").each(function(){
    var extClass = /^\w+/.exec($('.file-download').text());
    $(this).addClass('' + extClass);
  });
});

})(jQuery);
